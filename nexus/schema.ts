import { makeSchema, fieldAuthorizePlugin } from 'nexus'
import { join } from 'path'
import { nexusPrismaPlugin } from 'nexus-prisma'
import * as types from './types'

export const schema = makeSchema({
  types,
  plugins: [
    fieldAuthorizePlugin(),
    nexusPrismaPlugin(),
  ],
  outputs: {
    schema: join(process.env.PROJECT_DIRNAME, 'nexus/generated/schema.graphql'),
    typegen: join(process.env.PROJECT_DIRNAME, 'nexus/generated/typings.ts'),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@prisma/photon',
        alias: 'photon',
      },
      {
        source: join(process.env.PROJECT_DIRNAME, 'nexus/context.ts'),
        alias: 'Context',
      },
    ],
    contextType: 'Context.Context',
  },
})
