import {
  stringArg,
  intArg,
  booleanArg,
  idArg,
  objectType,
  extendType,
} from 'nexus'

export const Organization = objectType({
  name: 'Organization',
  definition: t => {
    t.model.id()
    t.model.name()
    t.model.logo()
    // t.model.offers()
    t.model.description()
    t.model.url()
    t.model.apiId()
    t.model.projectId()
  },
})

export const OrganizationQuery = extendType({
  type: 'Query',
  definition: t => {
    t.field('organizations', {
      type: 'Organization',
      list: true,
      resolve: async (_, {}, { prisma }) => {
        return prisma.organizations({ where: { active: true } })
      },
    })
  },
})

export const OrganizationMutation = extendType({
  type: 'Mutation',
  definition: t => {
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
      authorize: () => false,
      resolve: async (
        _,
        {
          apiId,
          apiSecret,
          organizationId,
          // active,
          name,
          logoId,
          description,
          url,
        },
        { prisma }
      ) => {
        return prisma.organizations.create({
          data: {
            apiId,
            apiSecret,
            organizationId,
            active: true,
            name,
            logo: {
              connect: {
                id: logoId,
              },
            },
            description,
            url,
          },
        })
      },
    })
  },
})
