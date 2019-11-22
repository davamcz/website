import { stringArg, intArg, booleanArg } from 'nexus'
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
        name: stringArg({ required: true }),
        logo: stringArg({ required: false }),
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
          logo,
          description,
          url,
        },
        ctx,
      ) => {
        return ctx.prisma.createOrganization({
          apiId,
          apiSecret,
          organizationId,
          active,
          name,
          logo,
          description,
          url,
        })
      },
    })
  },
})
