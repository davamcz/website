import gql from 'graphql-tag'

export const organizationFragment = gql`
  fragment OrganizationDetail on Organization {
    id
    name
    description
    url
    logo {
      key
    }
  }
`

export const organizationsQuery = gql`
  query organizationsQuery {
    organizations {
      id
      name
      description
      url
      logo {
        key
      }
    }
  }
`

export const offer = gql`
  query offer($id: ID!) {
    offer(id: $id) {
      id
      name
      description
      transport
      price
      remainingAmount
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
        projectId
      }
    }
  }
`
