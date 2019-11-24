import { extendType, scalarType, arg } from 'nexus'
import { GraphQLUpload } from 'apollo-server-micro'
import { S3 } from 'aws-sdk'
import { prismaObjectType } from 'nexus-prisma'

const client = new S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
})

export const Upload = scalarType({
  name: GraphQLUpload.name,
  asNexusMethod: 'upload', // We set this to be used as a method later as `t.upload()` if needed
  description: GraphQLUpload.description,
  serialize: GraphQLUpload.serialize,
  parseValue: GraphQLUpload.parseValue,
  parseLiteral: GraphQLUpload.parseLiteral,
})

export const File = prismaObjectType({
  name: 'File',
  definition(t) {
    t.prismaFields(['*'])
  },
})

export const FileMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('uploadFile', {
      type: 'File',
      args: {
        file: arg({ type: 'Upload' }),
      },
      resolve: async (_, { file }, { prisma }) => {
        const { stream, filename: fileName, mimetype, encoding } = await file

        const key = `objednavky/${fileName}`

        const upload = await client
          .upload({
            Bucket: 'davamcz-images',
            ACL: 'public-read',
            Key: key,
            ContentEncoding: encoding,
            ContentType: mimetype,
            Body: stream,
          })
          .promise()

        return prisma.createFile({
          fileName,
          encoding,
          mimeType: mimetype,
          key,
          url: upload.Location,
        })
      },
    })
  },
})
