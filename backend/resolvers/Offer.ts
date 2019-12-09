import { extendType, stringArg, idArg, intArg, booleanArg } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'
import { vokativ } from 'vokativ'
import {
  getUserId,
  capitalize,
  constants,
  isTransactionReserved,
  offerRemainingAmount,
  getConfirmationHash
} from '../utils'
import { sendEmail } from '../emails'
import { OfferValidationSchema } from '../../validation/offer'
const { PAID } = constants.paymentStatus

export const Offer = prismaObjectType({
  name: 'Offer',
  definition(t) {
    t.prismaFields(['*'])
    t.field('remainingAmount', {
      type: 'Int',
      resolve: async ({ id, amount }, _, { prisma }) => {
        const transactions = await prisma.transactions({
          where: { offer: { id } },
        })

        const remainingAmount = amount - offerRemainingAmount(transactions)

        return remainingAmount > 0 ? remainingAmount : 0
      },
    })
  },
})

export const OfferQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('offers', {
      type: 'Offer',
      args: {
        active: booleanArg({ required: false }),
      },
      list: true,
      resolve: async (_, { active }, { prisma }) => {
        if (!active) {
          return prisma.offers({})
        } else {
          const allOffers = (await prisma.offers({}).$fragment(`
            fragment activeOffers on Offer {
              id
              firstName
              lastName
              name
              price
              amount
              active
              beneficator {
                id
                name
              }
              gallery {
                images {
                  key
                }
              }          
              transactions {
                amount
                createdAt
                status
              }
            }
          `)) as any

          const filteredOffers = allOffers
            .filter(offer => offer.active)
            .filter(offer => {
              return (
                offer.transactions.length === 0 ||
                offer.transactions
                  .filter(
                    transaction =>
                      transaction.status === PAID ||
                      isTransactionReserved(transaction)
                  )
                  .reduce((total, transaction) => {
                    return total + transaction.amount
                  }, 0) < offer.amount
              )
            })
          return filteredOffers
        }
      },
    })

    t.field('offer', {
      type: 'Offer',
      args: {
        id: idArg({ required: true }),
      },
      nullable: true,
      resolve: async (_, { id }, { prisma }) => {
        return prisma.offer({ id })
      },
    })
  },
})

export const OfferMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('changeActiveStateOffer', {
      description: 'Deactivate or activate offer',
      type: 'Offer',
      args: {
        offerId: idArg({ required: true }),
        confirmationHash: stringArg({ required: true }),
        active: booleanArg({ required: true })
      },
      resolve: async (
        _, { offerId, confirmationHash, active }, { prisma }
      ) => {
        const offer = await prisma.offer({ id: offerId})
        if (offer && confirmationHash === getConfirmationHash(offerId, offer.createdAt)) {
          const updatedOffer = await prisma.updateOffer({
            data: {
              active
            },
            where: { id: offerId }
          })

          return updatedOffer;
        } else {
          throw new Error('Offer not found or hash does not match.')
        }
      }
    })

    t.field('createOffer', {
      description: 'Create new offer',
      type: 'Offer',
      args: {
        offerName: stringArg({ required: true }),
        description: stringArg({ required: true }),
        organizationId: idArg({ required: true }),
        price: intArg({ required: true }),
        amount: intArg({ required: true }),
        transport: stringArg({ required: true }),
        publicOffer: booleanArg({ required: true }),
        firstName: stringArg({ required: true }),
        lastName: stringArg({ required: true }),
        email: stringArg({ required: true }),
        images: idArg({ list: true, required: true }),
      },
      resolve: async (
        _,
        {
          offerName,
          description,
          organizationId,
          price,
          amount,
          transport,
          publicOffer,
          firstName,
          lastName,
          email,
          images,
        },
        ctx
      ) => {
        try {
          await OfferValidationSchema.validate({
            offerName,
            description,
            organizationId,
            price,
            amount,
            firstName,
            lastName,
            email,
            images,
          })
        } catch (e) {
          throw e
        }

        let userId = getUserId(ctx)
        if (!userId) {
          const { id } = await ctx.prisma.upsertUser({
            where: {
              email,
            },
            create: {
              firstName,
              lastName,
              email,
            },
            update: {
              firstName,
              lastName,
            },
          })
          userId = id
        } else {
          const user = await ctx.prisma.user({ id: userId })
          if (user) {
            firstName = user.firstName || ''
            lastName = user.lastName || ''
            email = user.email
          }
        }

        try {
          const createdOffer = (await ctx.prisma.createOffer({
            name: offerName,
            description,
            beneficator: {
              connect: { id: organizationId },
            },
            price,
            amount,
            transport,
            publicOffer,
            firstName,
            lastName,
            email,
            user: { connect: { id: userId } },
            gallery: {
              create: {
                images: {
                  connect: images.map(image => ({ id: image })),
                },
              },
            },
          }).$fragment(`
            fragment createdOffer on Offer {
              id
              name
              email
              firstName
              createdAt
              beneficator {
                name
              }
              price
              amount
            }
          `)) as any

          if (createdOffer) {
            const {
              id,
              email,
              name,
              firstName,
              createdAt,
              beneficator,
              price,
              amount,
              offerImage,
            } = createdOffer
            const salutation = capitalize(vokativ(firstName.trim()))
            const offerLink = `https://davam.cz/nabidka/${id}`
            const imgUrl =
              offerImage ||
              'https://davamcz-images.s3.eu-central-1.amazonaws.com/mailing/darek.png'
            const confirmationHash = getConfirmationHash(id, createdAt)
            const deactivationLink = 
              `https://davam.cz/nabidka/${id}/deaktivovat?ch=${confirmationHash}`
            sendEmail(email, {
              template: 'linkCreated',
              subject: `Vytvoření platebního odkazu na ${name}`,
              data: {
                firstName,
                salutation,
                product: name,
                ngo: beneficator.name,
                price,
                amount,
                offerLink,
                imgUrl,
                deactivationLink
              },
            })
          }

          return createdOffer
        } catch (err) {
          return err
        }
      },
    })
  },
})
