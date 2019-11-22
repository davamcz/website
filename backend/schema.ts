import { makePrismaSchema } from 'nexus-prisma'
import { join } from 'path'
import datamodelInfo from './generated/nexus-prisma'
import { prisma } from './generated/prisma-client'
import * as allTypes from './resolvers'
import { applyMiddleware } from 'graphql-middleware'
import { permissions } from './permissions'

const prismaSchema = makePrismaSchema({
  types: allTypes,

  prisma: {
    datamodelInfo,
    client: prisma,
  },

  outputs: {
    schema: join(process.env.PROJECT_DIRNAME, './backend/generated/schema.graphql'),
    typegen: join(process.env.PROJECT_DIRNAME, './backend/generated/nexus.ts'),
  },

  nonNullDefaults: {
    input: true,
    output: true,
  },

  typegenAutoConfig: {
    sources: [
      {
        source: join(process.env.PROJECT_DIRNAME, './backend/context.ts'),
        alias: 'ctx',
      },
      {
        source: join(process.env.PROJECT_DIRNAME, './backend/generated/prisma-client/index.ts'),
        alias: 'prisma',
      },
    ],
    contextType: 'ctx.Context',
  },
})

export const schema = applyMiddleware(prismaSchema, permissions)