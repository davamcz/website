import { makeSchema, fieldAuthorizePlugin } from 'nexus'
import { join, resolve } from 'path'
import { nexusPrismaPlugin } from 'nexus-prisma'
import * as types from './types'

const dirname = process.env.PROJECT_DIRNAME || resolve(__dirname, '..')

export const schema = makeSchema({
  types,
  plugins: [fieldAuthorizePlugin(), nexusPrismaPlugin()],
  outputs: {
    schema: join(dirname, 'nexus/generated/schema.graphql'),
    typegen: join(dirname, 'nexus/generated/typings.ts'),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: join(dirname, 'nexus/context.ts'),
        alias: 'Context',
      },
    ],
    contextType: 'Context.Context',
  },
})
