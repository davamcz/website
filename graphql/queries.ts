import gql from 'graphql-tag'

export const offer = gql`
  query offer($id: ID!) {
    offer(id: $id) {
      id
      name
      description
      transport
      price
      user {
        shortName
      }
      gallery {
        images {
          key
        }
      }
      beneficator {
        name
        apiId
      }
    }
  }
`