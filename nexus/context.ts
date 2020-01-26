import { PrismaClient } from '@prisma/client'
import { IncomingMessage } from 'http'


const photon = new PrismaClient(
  // { debug: true, log: true }
)

export interface Context {
  photon: PrismaClient
  req: IncomingMessage
}

export function createContext({ req }) {
  return {
    req,
    photon,
  }
}
