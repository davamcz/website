import { stringArg, extendType, idArg } from 'nexus'
import { prismaObjectType } from 'nexus-prisma'
import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { getUserId } from '../utils'

export const UserType = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields({ pick: ['email'] })
    t.string('fullName', {
      resolve: ({ firstName, lastName }) => {
        return `${firstName} ${lastName}`
      },
    })
  },
})

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('user', {
      type: 'User',
      resolve: async (_, {}, ctx) => {
        const id = getUserId(ctx)

        return ctx.prisma.user({ id }) as any

        // if (id) {
        //   return ctx.prisma.user({ id })
        // }
        // return { id: '', fullName: '', email: '', __typename: 'User' }
        // throw new Error('User not found')
      },
    })
  },
})

export const UserMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        firstName: stringArg(),
        lastName: stringArg(),
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (_, { firstName, lastName, email, password }, ctx) => {
        const hashedPassword = await hash(password, 10)
        const user = await ctx.prisma.createUser({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        })
        return {
          token: sign(
            { userId: user.id, userRole: user.role },
            process.env.SECRET_KEY
          ),
          user,
        }
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (_, { email, password }, context) => {
        const user = await context.prisma.user({ email })
        if (!user) {
          throw new Error(`No user found for email: ${email}`)
        }
        const passwordValid = await compare(password, user.password!)
        if (!passwordValid) {
          throw new Error('Invalid password')
        }
        return {
          token: sign(
            { userId: user.id, userRole: user.role },
            process.env.SECRET_KEY
          ),
          user,
        }
      },
    })

    t.field('updateUser', {
      type: 'User',
      args: {
        id: idArg({ required: true }),
        firstName: stringArg({ required: true }),
        lastName: stringArg({ required: true }),
        city: stringArg({ required: true }),
        street: stringArg({ required: true }),
        postalCode: stringArg({ required: true }),
      },
      resolve: async (
        _,
        { id, firstName, lastName, city, street, postalCode },
        { prisma }
      ) => {
        const adress = {
          city,
          street,
          postalCode,
        }

        return prisma.updateUser({
          where: { id },
          data: {
            firstName,
            lastName,
            adress: {
              upsert: {
                create: adress,
                update: adress,
              },
            },
          },
        })
      },
    })
  },
})
