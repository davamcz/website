import { extendType, stringArg, idArg, intArg, booleanArg } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'
import { vokativ } from 'vokativ'
import { getUserId, capitalize } from '../utils'
import { sendEmail } from '../emails'
import { OfferValidationSchema } from '../../validation/offer'
 
export const Offer = prismaObjectType({
  name: 'Offer',
  definition(t) {
    t.prismaFields(['*'])
  },
})

export const OfferQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('offers', {
      type: 'Offer',
      list: true,
      resolve: async (_, {}, { prisma }) => {
        return prisma.offers({})
      },
    })
    t.field('offer', {
      type: 'Offer',
      args: {
        id: idArg({ required: true }),
      },
      resolve: async (_, { id }, { prisma }) => {
        return prisma.offer({ id }) as any
      },
    })
  },
})

export const OfferMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createOffer', {
      description: 'Create new Fundlamb offer',
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
              lastName
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
              beneficator,
              price,
              amount,
              offerImage,
            } = createdOffer
            const salutation = capitalize(vokativ(firstName.trim()))
            const formatedPrice = parseInt(price) / 100
            const offerLink = `https://davam.cz/nabidka/${id}`
            const imgUrl = offerImage || 'http://placekitten.com/200/200'
            sendEmail(email, {
              template: 'linkCreated',
              subject: `Vytvoření platebního odkazu na ${name}`,
              data: {
                firstName,
                salutation,
                product: name,
                ngo: beneficator.name,
                price: formatedPrice,
                amount,
                offerLink,
                imgUrl,
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
