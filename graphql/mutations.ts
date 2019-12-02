import gql from 'graphql-tag'

export const createTransaction = gql`
  mutation createTransaction(
    $firstName: String!
    $lastName: String!
    $email: String!
    $comment: String
    $amount: Int!
    $offerId: ID!
  ) {
    createTransaction(
      firstName: $firstName
      lastName: $lastName
      email: $email
      comment: $comment
      amount: $amount
      offerId: $offerId
    ) {
      id
      offer {
        beneficator {
          projectId
        }
      }
    }
  }
`
