import { IncomingMessage } from 'http'
import { UserRole, TransactionStatus, Transaction } from '@prisma/client'
import { verify } from 'jsonwebtoken'
import md5 from 'md5'
import { config } from '../configuration'


type Constants = {
  paymentStatus: {
    [key: string]: TransactionStatus
  }
  successfulStates: string[]
}

export const constants: Constants = {
  paymentStatus: {
    PENDING: 'PENDING',
    PAID: 'PAID',
    FAILED: 'FAILED',
    INSUFFICIENT: 'INSUFFICIENT',
  },
  successfulStates: [
    'success',
    'success_money_on_account',
    'sent_to_organization',
  ],
}

interface Token {
  userId: string
  userRole: UserRole
}

export const getToken = (req: IncomingMessage) => {
  const authorization = req.headers.authorization
  if (authorization) {
    const token = authorization.replace('Bearer ', '')
    return verify(token, process.env.SECRET_KEY) as Token
  }
  return undefined
}

export const getUserInfo = (req: IncomingMessage): Token => {
  const token = getToken(req)
  if (token) {
    return token
  }
  return { userId: undefined, userRole: 'USER' }
}

export function capitalize(s: string): string {
  return s && s[0].toUpperCase() + s.slice(1)
}

export const getConfirmationHash = (id: string, createdAt: Date): String =>
  md5(`${id}-${createdAt}-${process.env.CONFIRMATION_SECRET_KEY}`)

const {
  successfulStates,
  paymentStatus: { PENDING, PAID, INSUFFICIENT, FAILED },
} = constants

export const isTransactionReserved = transaction => {
  const currentTime = new Date().getTime()
  const transactionTime = new Date(transaction.createdAt).getTime()
  const timeDifference = Math.floor((currentTime - transactionTime) / 1000 / 60)

  return (
    transaction.status === PENDING && timeDifference <= config.RESERVATION_TIME
  )
}

export const getSimplyfiedState = (state, isDonatedEnough) => {
  let simplyfiedState = PENDING
  const successful = successfulStates.indexOf(state) > -1
  if (successful) {
    simplyfiedState = PAID
  } else if (successful && !isDonatedEnough) {
    simplyfiedState = INSUFFICIENT
  } else {
    simplyfiedState = FAILED
  }

  return simplyfiedState
}

export const offerRemainingAmount = (transactions: Transaction[]) => {
  return transactions
    .filter(
      transaction =>
        transaction.status === PAID || isTransactionReserved(transaction)
    )
    .reduce((total, transaction) => {
      return total + transaction.amount
    }, 0)
}
