import { constants } from './index';
import { config } from '../configuration';

const { successfulStates, paymentStatus: { PENDING, PAID, INSUFFICIENT, FAILURE } } = constants;

export const isTransactionReserved = transaction => {
  const currentTime = new Date().getTime();
  const transactionTime = new Date(transaction.createdAt).getTime();
  const timeDifference = Math.floor((currentTime - transactionTime) / 1000 / 60);

  return transaction.status === PENDING
    && timeDifference <= config.RESERVATION_TIME
}

export const getSimplyfiedState = (state, isDonatedEnough) => {
  let simplyfiedState = PENDING;
  const successful = successfulStates.indexOf(state) > -1;
  if (successful) {
    simplyfiedState = PAID;
  } else if (successful && !isDonatedEnough) {
    simplyfiedState = INSUFFICIENT;
  } else { 
    simplyfiedState = FAILURE;
  }

  return simplyfiedState;
}