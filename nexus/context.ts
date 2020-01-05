import { Photon } from '@prisma/photon'
import { IncomingMessage } from 'http'


const photon = new Photon(
  // { debug: true, log: true }
)

export interface Context {
  photon: Photon
  req: IncomingMessage
}

export function createContext({ req }) {
  return {
    req,
    photon,
  }
}
