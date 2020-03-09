import { objectType, extendType, stringArg, idArg } from 'nexus'
import { hash, compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { getUserInfo } from '../utils/helpers'

export const User = objectType({
  name: 'User',
  definition: t => {
    t.model.email()
    t.model.firstName()
    t.model.lastName()
    t.model.adress()
    t.string('fullName', {
      resolve: ({ firstName, lastName }) => {
        return `${firstName} ${lastName}`
      },
    })
    t.string('shortName', {
      resolve: ({ firstName, lastName }) => {
        return `${firstName} ${lastName?.slice(0, 1)}.`
      },
    })
  },
})

export const UserQueries = extendType({
  type: 'Query',
  definition: t => {
    t.field('user', {
      type: 'User',
      nullable: true,
      resolve: (_, {}, { req, prisma }) => {
        const { userId } = getUserInfo(req)
        if (!userId) {
          return null
        }
        return prisma.users.findOne({ where: { id: userId } })
      },
    })
  },
})

export const UserMutations = extendType({
  type: 'Mutation',
  definition: t => {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        firstName: stringArg(),
        lastName: stringArg(),
        email: stringArg({ required: true }),
        password: stringArg({ required: true }),
      },
      nullable: true,
      resolve: async (
        _,
        { firstName, lastName, email, password },
        { prisma }
      ) => {
        const hashedPassword = await hash(password, 10)
        const user = await prisma.users.create({
          data: {
            firstName,
            lastName,
            email,
            password: hashedPassword,
          },
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
        email: stringArg({ required: true }),
        password: stringArg({ required: true }),
      },
      resolve: async (_, { email, password }, context) => {
        const user = await context.prisma.users.findOne({
          where: {
            email,
          },
        })
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
        firstName: stringArg({ required: true }),
        lastName: stringArg({ required: true }),
        city: stringArg({ required: true }),
        street: stringArg({ required: true }),
        postalCode: stringArg({ required: true }),
        id: idArg(),
      },
      authorize: (_, { id }, { req }) => {
        const { userId, userRole } = getUserInfo(req)
        return id === userId || userRole === 'ADMIN'
      },
      resolve: async (
        _,
        { firstName, lastName, city, street, postalCode },
        { prisma, req }
      ) => {
        const adress = {
          city,
          street,
          postalCode,
        }

        const { userId } = getUserInfo(req)

        return prisma.users.update({
          where: { id: userId },
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
