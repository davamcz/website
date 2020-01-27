import { PrismaClient } from '@prisma/client'
import { IncomingMessage } from 'http'


const prisma = new PrismaClient(
  { debug: true }
)

export interface Context {
  prisma: PrismaClient
  req: IncomingMessage
}

export function createContext({ req }) {
  return {
    req,
    prisma,
  }
}
