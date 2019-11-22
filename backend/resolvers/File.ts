import { extendType, scalarType } from 'nexus'
import { GraphQLUpload } from 'apollo-server-micro'

export const Upload = scalarType({
  name: GraphQLUpload.name,
  asNexusMethod: 'upload', // We set this to be used as a method later as `t.upload()` if needed
  description: GraphQLUpload.description,
  serialize: GraphQLUpload.serialize,
  parseValue: GraphQLUpload.parseValue,
  parseLiteral: GraphQLUpload.parseLiteral,
})

export const FileMutation = extendType({
  type: 'Mutation',
  definition(_) {},
})
