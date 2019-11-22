import { ApolloServer } from 'apollo-server-micro'
import { schema } from './schema'

const server = new ApolloServer({ schema: schema })

const handler =  server.createHandler({ path: '/api/graphql' })

export default handler

