import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../nexus/schema'
import { createContext } from '../../nexus/context'

const server = new ApolloServer({
  schema: schema,
  context: createContext
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default server.createHandler({ path: '/api/graphql' })
