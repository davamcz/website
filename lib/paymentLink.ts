export const paymentLink = ({
  projectId,
  amount,
  email,
  firstName,
  lastName,
  transactionId,
}: {
  projectId: number
  amount: number
  email: string
  firstName: string
  lastName: string
  transactionId: string
}) => {
  const params = new URLSearchParams({
    project: String(projectId),
    amount: String(amount),
    currency: 'CZK',
    paymentMethod: 'proxypay_charge',
    frequency: 'once',
    email,
    firstName,
    lastName,
    do: 'submit',
    'custom[transaction_id]': transactionId,
  }).toString()

  return `https://www.darujme.cz/darovat/?${params}`
}
