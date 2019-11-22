import { prismaObjectType, prismaExtendType } from 'nexus-prisma'
import { stringArg, idArg, intArg } from 'nexus'
// import fetch from 'node-fetch'
// import * as querystring from 'querystring'

import {
  constants,
  isTransactionReserved,
  // getSimplyfiedState,
} from '../utils'
// import { TransactionStatus } from '../generated/prisma-client'

const { PENDING, PAID } = constants.paymentStatus

export const Transaction = prismaObjectType({
  name: 'Transaction',
  definition(t) {
    t.prismaFields({
      pick: ['id', 'firstName', 'lastName', 'donatedAmount', 'status', 'offer'],
    })
  },
})

export const TransactionQuery = prismaExtendType({
  type: 'Query',
  definition(t) {
    t.field('recentTransactions', {
      type: 'Transaction',
      list: true,
      resolve: async (_,_args , { prisma }) => {
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
            offer {
              createdAt
              amount
              price
              beneficator {
                organizationId
                projectIds
                apiId
                apiSecret
              }
            }
          }
        `)) as any

        return currentTransaction
        //     const {
        //       createdAt,
        //       amount,
        //       price,
        //       beneficator: { organizationId, projectIds, apiId, apiSecret },
        //     } = currentTransaction.offer

        //     const qs = querystring.encode({
        //       fromPledgedDate: createdAt,
        //       projectId: projectIds[0],
        //       apiId,
        //       apiSecret,
        //     })
        //     const response = await fetch(
        //       `https://www.darujme.cz/api/v1/organization/${organizationId}/pledges-by-filter?${qs}`,
        //     )
        //     const data = await response.json()

        //     console.log(currentTransaction.id)

        //     const pledgeResult = data.pledges.filter(pledge => {
        //       pledge.customFields &&
        //         pledge.customFields.tr_fundlamb_id === currentTransaction.id
        //     })[0]

        //     console.log(pledgeResult)
        //     if (pledgeResult === undefined) {
        //       return prisma.transaction({ id })
        //     }

        //     const transactionResult = pledgeResult.transactions[0]
        //     if (transactionResult === undefined) {
        //       return prisma.transaction({ id })
        //     }

        //     const isDonatedEnough =
        //       price * amount * 100 > parseInt(transactionResult.sentAmount.cents)

        //     return await prisma.updateTransaction({
        //       data: {
        //         status: getSimplyfiedState(
        //           transactionResult.state,
        //           isDonatedEnough,
        //         ) as TransactionStatus,
        //         donatedAmount: transactionResult.sentAmount.cents,
        //       },
        //       where: { id },
        //     })
        //   },
        // })
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
        amount: intArg(),
        offerId: idArg(),
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

        // Email for seller
        // await sendEmail('huvikjee@gmail.com', {
        //   template: 'transactionCreatedSeller',
        //   subject: `Za ${offer.name} bylo právě darováno ${donatedAmount} Kč`,
        //   data: {
        //     beneficatorName: offer.beneficator.name,
        //     firstName: offer.firstName,
        //     lastName: offer.lastName,
        //     email: offer.e,
        //     comment,
        //     product: offer.name,
        //     amount,
        //     donatedAmount
        //   },
        // })

        // Email for buyer
        // await sendEmail(email, {
        //   template: 'transactionCreatedBuyer',
        //   subject: `Právě jste daroval ${donatedAmount} Kč za ${offer.name}`,
        //   data: {}
        // })

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
