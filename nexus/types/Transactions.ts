import { objectType, extendType, stringArg, intArg, idArg } from 'nexus'
import fetch from 'node-fetch'
import { encode } from 'querystring'
import { vokativ } from 'vokativ'

import {
  constants,
  isTransactionReserved,
  getSimplyfiedState,
  capitalize,
} from '../utils/helpers'
import { TransactionStatus } from '@prisma/client'
import { sendEmail } from '../../emails'

const { PENDING, PAID } = constants.paymentStatus

export const TransactionsStatistics = objectType({
  name: 'TransactionsStatistics',
  definition(t) {
    t.int('donatedAmount')
    t.int('donationsCount')
    t.int('numberOfOrganizations')
  },
})

export const Transaction = objectType({
  name: 'Transaction',
  definition: t => {
    t.model.id()
    // t.model.createdAt()
    t.model.firstName()
    t.model.lastName()
    t.model.donatedAmount()
    t.model.amount()
    t.model.status()
    t.model.offer()
  },
})

export const TransactionQuery = extendType({
  type: 'Query',
  definition: t => {
    t.field('recentTransactions', {
      type: 'Transaction',
      list: true,
      resolve: async (_, {}, { prisma }) => {
        return prisma.transactions.findMany({
          where: { status: 'PAID' },
          last: 10,
        })
      },
    })

    t.field('getTransactionsStatistics', {
      type: 'TransactionsStatistics',
      resolve: async (_, {}, { prisma }) => {
        const allPaidTransactions = await prisma.transactions.findMany({
          where: { status: PAID },
        })
        const organizations = await prisma.organizations({
          where: { active: true },
        })
        const donatedAmount = allPaidTransactions.reduce(
          (total, transaction) => {
            return total + (transaction.donatedAmount || 0)
          },
          0
        )
        const donationsCount = allPaidTransactions.length
        return {
          donatedAmount,
          donationsCount,
          numberOfOrganizations: organizations.length,
        }
      },
    })

    t.field('getTransactionStatus', {
      type: 'Transaction',
      args: {
        id: idArg({ required: true }),
      },
      resolve: async (_, { id }, { prisma }) => {
        const currentTransaction = await prisma.transactions.findOne({
          where: { id },
          include: { offer: { include: { beneficator: true } } },
        })

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

        const qs = encode({
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
        const updatedTransactionStatus = await prisma.transactions.update({
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
            subject: `Dávám.cz - Právě jste daroval peníze na dobrou věc!`,
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
            subject: `Dávám.cz Někdo právě projevil zájem o vaši nabídku`,
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

export const TransactionMutation = extendType({
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
        const offer = await prisma.offers.findOne({
          where: { id: offerId },
          select: { active: true, amount: true, transactions: true },
        })

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

        return await prisma.transactions.create({
          data: {
            firstName,
            lastName,
            email,
            comment,
            amount,
            offer: { connect: { id: offerId } },
          },
        })
      },
    })
  },
})
