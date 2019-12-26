import { TransactionStatus } from '../generated/prisma-client'

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
