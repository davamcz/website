import { stringArg, intArg, booleanArg, idArg } from 'nexus'
import { prismaObjectType, prismaExtendType } from 'nexus-prisma'

export const Organization = prismaObjectType({
  name: 'Organization',
  definition(t) {
    t.prismaFields({
      pick: ['id', 'name', 'logo', 'offers', 'description', 'url'],
    })
  },
})

export const OrganizationQuery = prismaExtendType({
  type: 'Query',
  definition(t) {
    t.prismaFields(['organization', 'organizations'])
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
        active: booleanArg({ required: true }),
        name: idArg({ required: true }),
        logoId: stringArg({ required: true }),
        description: stringArg({ required: true }),
        url: stringArg({ required: true }),
      },
      resolve: async (
        _,
        {
          apiId,
          apiSecret,
          organizationId,
          active,
          name,
          logoId,
          description,
          url,
        },
        ctx
      ) => {
        return ctx.prisma.createOrganization({
          apiId,
          apiSecret,
          organizationId,
          active,
          name,
          logo: {
            connect: {
              id: logoId,
            },
          },
          description,
          url,
        })
      },
    })
  },
})
