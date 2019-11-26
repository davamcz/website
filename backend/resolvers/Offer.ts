import { extendType, stringArg, idArg, intArg } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'
import { getUserId } from '../utils'
import { sendEmail } from '../emails'

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
  },
})

export const OfferMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createOffer', {
      description: 'Create new Fundlamb offer',
      type: 'Offer',
      args: {
        name: stringArg(),
        organizationId: idArg(),
        firstName: stringArg({ required: true }),
        lastName: stringArg({ required: true }),
        email: stringArg({ required: true }),
        price: intArg({ required: true }),
        amount: intArg({ required: true }),
      },
      resolve: async (
        _,
        { name, organizationId, firstName, lastName, email, price, amount },
        ctx
      ) => {
        let userId = getUserId(ctx)
        if (!userId) {
          const { id } = await ctx.prisma.upsertUser({
            where: {
              email
            },
            create: {
              firstName,
              lastName,
              email,
            },
            update: {
              firstName,
              lastName
            }
          })
          userId = id
        } else {
          const user = await ctx.prisma.user({ id: userId })
          if (user) {
            firstName = user.firstName
            lastName = user.lastName
            email = user.email
          }
        }

        try {
          const createdOffer = (await ctx.prisma.createOffer({
            name,
            firstName,
            lastName,
            email,
            price,
            amount,
            beneficator: {
              connect: { id: organizationId },
            },
            user: { connect: { id: userId } },
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
            const { email, name, firstName, beneficator } = createdOffer
            sendEmail(email, {
              template: 'linkCreated',
              subject: `Vytvoření platebního odkazu na ${name}`,
              data: {
                creatorFirstName: firstName,
                product: name,
                ngos: beneficator.name,
                price,
                amount,
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
