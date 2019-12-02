import gql from 'graphql-tag'
import { useOffersQuery } from '../../generated/graphql'
import { OfferItem } from './Offer'
import { Container } from '../Container'

export const offers = gql`
  query offers($active: Boolean) {
    offers(active: $active) {
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
  }
`

export const Offers = () => {
  const { data, loading } = useOffersQuery({ variables: { active: true } })

  if (loading) return <div>Loading</div>

  return (
    <Container row style={{ flexWrap: 'wrap' }}>
      {data && data.offers.map(offer => <OfferItem offer={offer} />)}
    </Container>
  )
}
