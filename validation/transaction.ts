import { object, number } from 'yup'
import { UserSchemaValidation } from './user'

export const TransactionValidationSchema = object()
  .shape({
    amount: number().min(1, 'Příliš nízký počet požadovaných položek'),
  })
  .concat(UserSchemaValidation)
