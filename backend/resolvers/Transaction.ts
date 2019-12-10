import { prismaObjectType, prismaExtendType } from 'nexus-prisma'
import { stringArg, idArg, intArg } from 'nexus'
import fetch from 'node-fetch'
import * as querystring from 'querystring'
import { vokativ } from 'vokativ'
import { capitalize } from '../utils'

import { constants, isTransactionReserved, getSimplyfiedState } from '../utils'
import { TransactionStatus } from '../generated/prisma-client'
import { sendEmail } from '../emails'

const { PENDING, PAID } = constants.paymentStatus

export const Transaction = prismaObjectType({
  name: 'Transaction',
  definition(t) {
    t.prismaFields({
      pick: [
        'id',
        'createdAt',
        'firstName',
        'lastName',
        'donatedAmount',
        'amount',
        'status',
        'offer',
      ],
    })
  },
})

export const TransactionQuery = prismaExtendType({
  type: 'Query',
  definition(t) {
    t.field('recentTransactions', {
      type: 'Transaction',
      list: true,
      resolve: async (_, _args, { prisma }) => {
        return prisma.transactions({ where: { status: 'PAID' }, last: 10 })
      },
    })

    t.field('getTransactionStatus', {
      type: 'Transaction',
      args: {
        id: idArg({ required: true }),
      },
      resolve: async (_, { id }, { prisma }) => {
        const currentTransaction = (await prisma.transaction({ id }).$fragment(`
          fragment transactionApiValues on Transaction {
            id
            status
            email
            firstName
            lastName
            comment
            amount
            offer {
              createdAt
              firstName
              lastName
              email
              name
              price
              beneficator {
                name
                organizationId
                projectId
                apiId
                apiSecret
              }
            }
          }
        `)) as any

        const {
          createdAt,
          price,
          name,
          firstName,
          lastName,
          email,
          beneficator: {
            name: NGOName,
            organizationId,
            projectId,
            apiId,
            apiSecret,
          },
        } = currentTransaction.offer

        const qs = querystring.encode({
          fromPledgedDate: JSON.stringify(createdAt).slice(1, 11),
          projectId: projectId,
          apiId,
          apiSecret,
        })
        // ToDo: Adresa v configuraci.
        const response = await fetch(
          `https://www.darujme.cz/api/v1/organization/${organizationId}/pledges-by-filter?${qs}`
        )
        const data = await response.json()

        const pledgeResult = data.pledges.filter(
          pledge =>
            pledge.customFields &&
            pledge.customFields.transaction_id === currentTransaction.id
        )[0]

        if (pledgeResult === undefined) {
          throw new Error("Can't find requested pledge")
        }

        const transactionResult = pledgeResult.transactions[0]
        if (transactionResult === undefined) {
          throw new Error("Can't find requested transaction")
        }

        const realDonatedAmount =
          parseInt(pledgeResult.pledgedAmount.cents) / 100
        const isDonatedEnough =
          price * currentTransaction.amount <= realDonatedAmount
        const newSimplyfiedSate = getSimplyfiedState(
          transactionResult.state,
          isDonatedEnough
        ) as TransactionStatus
        const isStatusChanged = currentTransaction.status !== newSimplyfiedSate

        // update transaction status before emails will fail somehow
        const updatedTransactionStatus = await prisma.updateTransaction({
          data: {
            status: newSimplyfiedSate,
            donatedAmount: realDonatedAmount,
          },
          where: { id },
        })

        if (isStatusChanged && newSimplyfiedSate === PAID) {
          const buyerSalutation = capitalize(
            vokativ(currentTransaction.firstName.trim())
          )
          const sellerSalutation = capitalize(vokativ(firstName.trim()))
          // TODO: get real image
          const imgUrl =
            'https://davamcz-images.s3.eu-central-1.amazonaws.com/mailing/darek.png'
          // Send email to buyer
          const mailStatus1 = await sendEmail(currentTransaction.email, {
            template: 'transactionCreatedBuyer',
            subject: `Právě jste daroval ${realDonatedAmount} Kč za ${name}`,
            data: {
              salutation: buyerSalutation,
              ngo: NGOName,
              imgUrl,
              product: name,
              sellerFirstName: firstName,
              sellerLastName: lastName,
              sellerEmail: email,
              comment: currentTransaction.comment,
              price: realDonatedAmount,
              amount: currentTransaction.amount,
            },
          })
          console.log('mailStatus1', mailStatus1)
          // Send email to seller
          const mailStatus2 = await sendEmail(email, {
            template: 'transactionCreatedSeller',
            subject: `Za ${name} bylo právě darováno ${realDonatedAmount} Kč`,
            data: {
              salutation: sellerSalutation,
              ngo: NGOName,
              imgUrl,
              buyerFirstName: currentTransaction.firstName,
              buyerLastName: currentTransaction.lastName,
              buyerEmail: currentTransaction.email,
              comment: currentTransaction.comment,
              product: name,
              price: realDonatedAmount,
              amount: currentTransaction.amount,
            },
          })
          console.log('mailStatus2', mailStatus2)
        }

        if (isStatusChanged && newSimplyfiedSate === 'FAILED') {
          // TODO: Add failed email
        }

        return updatedTransactionStatus
      },
    })
  },
})

export const TransactionMutation = prismaExtendType({
  type: 'Mutation',
  definition(t) {
    t.field('createTransaction', {
      type: 'Transaction',
      args: {
        firstName: stringArg({ required: true }),
        lastName: stringArg({ required: true }),
        email: stringArg({ required: true }),
        comment: stringArg({ required: false }),
        amount: intArg({ required: true }),
        offerId: idArg({ required: true }),
      },
      resolve: async (
        _,
        { firstName, lastName, email, comment, offerId, amount },
        { prisma }
      ) => {
        const offer = (await prisma.offer({ id: offerId }).$fragment(`
          fragment OfferTransaction on Offer {
            amount
            transactions {
              amount
              status
              createdAt
            }
          }
        `)) as any

        const usedAmount = offer.transactions
          .filter(
            transaction => [PAID, PENDING].indexOf(transaction.status) >= -1
          )
          .filter(transaction => isTransactionReserved(transaction))
          .map(transaction => transaction.amount)
          .reduce((totalAmount, amount) => totalAmount + amount, 0)
        const canAddRequestedAmount = usedAmount + amount <= offer.amount

        if (!offer || offer.active === false || !canAddRequestedAmount) {
          throw new Error("Can't create transaction")
        }

        return await prisma.createTransaction({
          firstName,
          lastName,
          email,
          comment,
          amount,
          offer: { connect: { id: offerId } },
        })
      },
    })
  },
})
