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
  query organizations {
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

export const offerFragment = gql`
  fragment OfferDetail on Offer {
    id
    name
    price
    beneficator {
      name
    }
    gallery {
      images {
        key
      }
    }
  }
`

export const offers = gql`
  query offers($active: Boolean, $publicOffer: Boolean) {
    offers(active: $active, publicOffer: $publicOffer) {
      ...OfferDetail
    }
  }
  ${offerFragment.originalDocument}
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
      active
      beneficator {
        name
        apiId
        projectId
      }
    }
  }
`
