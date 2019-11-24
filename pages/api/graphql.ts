import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../backend/schema'
import { Prisma } from '../../backend/generated/prisma-client'

const server = new ApolloServer({
  schema,
  introspection: true,
  context: req => ({
    req,
    prisma: new Prisma(),
  }),
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default server.createHandler({ path: '/api/graphql' })
