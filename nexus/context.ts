import { PrismaClient } from '@prisma/client'
import { IncomingMessage } from 'http'

let prisma: PrismaClient

/**
 * Hack for not leaking connections in dev
 * https://github.com/zeit/next.js/issues/7811
 */
if (process.env.NODE_ENV !== 'production') {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      debug: true,
    })
  }
  prisma = global.prisma
} else {
  prisma = new PrismaClient()
}

export interface Context {
  prisma: PrismaClient
  req: IncomingMessage
}

export function createContext({ req }): Context {
  return {
    req,
    prisma,
  }
}
