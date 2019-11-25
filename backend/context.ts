import { Prisma } from './generated/prisma-client'
import { IncomingMessage } from 'http'

export interface Context {
  prisma: Prisma
  request: IncomingMessage
}
