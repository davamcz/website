import { stringArg, intArg, booleanArg, idArg } from 'nexus'
import { prismaObjectType, prismaExtendType } from 'nexus-prisma'

export const Organization = prismaObjectType({
  name: 'Organization',
  definition(t) {
    t.prismaFields({
      pick: ['id', 'name', 'logo', 'offers', 'description', 'url', 'apiId', 'projectId'],
    })
  },
})

export const OrganizationQuery = prismaExtendType({
  type: 'Query',
  definition(t) {
    t.prismaFields(['organization'])

    t.field('organizations', {
      type: 'Organization',
      list: true,
      resolve: async (_, {}, { prisma }) => {
        return prisma.organizations({ where: { active: true } }) as any;
      }
    })
  },
})

export const OrganizationMutation = prismaExtendType({
  type: 'Mutation',
  definition(t) {
    t.field('createOrganization', {
      type: 'Organization',
      args: {
        apiId: intArg({ required: true }),
        apiSecret: stringArg({ required: true }),
        organizationId: intArg({ required: true }),
        active: booleanArg({ required: false }),
        name: stringArg({ required: true }),
        logoId: idArg({ required: true }),
        description: stringArg({ required: true }),
        url: stringArg({ required: true }),
      },
      resolve: async (
        _,
        {
          // apiId,
          // apiSecret,
          // organizationId,
          // // active,
          // name,
          // logoId,
          // description,
          // url,
        },
        _ctx
      ) => {
        return null as any
      //   return ctx.prisma.createOrganization({
      //     apiId,
      //     apiSecret,
      //     organizationId,
      //     active: true,
      //     name,
      //     logo: {
      //       connect: {
      //         id: logoId,
      //       },
      //     },
      //     description,
      //     url,
      //   })
      // },
      }
    })
  },
})
