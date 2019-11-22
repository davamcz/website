import gql from 'graphql-tag'
import { useRecentTransactionsQuery } from '../generated/graphql'

export const recentTransactions = gql`
  query recentTransactions {
    recentTransactions {
      firstName
      donatedAmount
    }
  }
`

export const RecentTransactions = () => {
  const { loading, data } = useRecentTransactionsQuery()

  if (loading) return <div>Loading</div>

  return (
    <div>
      {data &&
        data.recentTransactions.map((transaction, i) => (
          <div key={i}>
            <h4>{transaction.firstName}</h4>
            <p>{transaction.donatedAmount}</p>
          </div>
        ))}
    </div>
  )
}
