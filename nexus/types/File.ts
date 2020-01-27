import { extendType, scalarType, arg, stringArg, objectType } from 'nexus'
import { GraphQLUpload } from 'apollo-server-micro'
import { S3 } from 'aws-sdk'

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

const readFS = (stream: {
  on: (
    arg0: string,
    arg1: (data: any) => number
  ) => { on: (arg0: string, arg1: () => void) => void }
}) => {
  let chunkList: any[] | Uint8Array[] = []
  return new Promise(resolve =>
    stream
      .on('data', data => chunkList.push(data))
      .on('end', () => resolve(Buffer.concat(chunkList)))
  )
}

export const File = objectType({
  name: 'File',
  definition: t => {
    t.model.id()
    t.model.fileName()
    t.model.key()
  },
})

export const FileMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('uploadFile', {
      type: 'File',
      args: {
        directory: stringArg({ required: false }),
        file: arg({ type: 'Upload' }),
      },
      resolve: async (_, { file, directory }, { prisma }) => {
        const {
          createReadStream,
          filename: fileName,
          mimetype,
          encoding,
        } = await file

        const key = `${directory ? directory : 'objednavky'}/${fileName}`

        const stream = createReadStream()

        const buffer = await readFS(stream)

        const upload = await client
          .upload({
            Bucket: 'davamcz-images',
            Key: key,
            ContentEncoding: encoding,
            ContentType: mimetype,
            Body: buffer as Buffer,
          })
          .promise()

        return prisma.files.create({
          data: {
            fileName,
            encoding,
            mimeType: mimetype,
            key,
            url: upload.Location,
          },
        })
      },
    })
  },
})
