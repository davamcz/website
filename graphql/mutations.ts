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

export const changeActiveStateOffer = gql`
  mutation changeActiveStateOffer(
    $offerId: ID!
    $confirmationHash: String!
    $active: Boolean!
  ) {
    changeActiveStateOffer(
      offerId: $offerId
      confirmationHash: $confirmationHash
      active: $active
    ) {
      id
      name
      active
    }
  }
`
