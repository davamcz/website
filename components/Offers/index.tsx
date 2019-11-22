import gql from 'graphql-tag'
import { useOffersQuery } from '../../generated/graphql'
import { OfferItem } from './Offer'
import { Container } from '../Container'

export const offers = gql`
  query offers {
    offers {
      id
      name
      price
      beneficator {
        name
      }
    }
  }
`

export const Offers  = () => {
  const { data, loading } = useOffersQuery()

  if (loading) return <div>Loading</div>

  return (
    <Container row style={{ flexWrap: 'wrap', justifyContent: 'space-between'}}>
      {data && data.offers.map((offer) => <OfferItem offer={offer} />)}
    </Container>
  )
}