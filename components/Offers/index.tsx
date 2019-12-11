import gql from 'graphql-tag'
import { useOffersQuery } from '../../generated/graphql'
import { Container } from '../Container'
import { Placeholder } from '../Placeholder'
import Spacer from '../Spacer'
import { OfferItem } from './Offer'

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

  return (
    <Container row style={{ flexWrap: 'wrap' }}>
      {loading
        ? Array(12)
            .fill(0)
            .map(() => (
              <Container flex="1 0 calc((100% / 4) - 40px);">
                <Placeholder width={255} height={255} />
                <Spacer y={0.5} />
                <Placeholder width={100} height={18} />
                <Spacer y={0.5} />
                <Placeholder width={100} />
                <Spacer />
              </Container>
            ))
        :  data?.offers.map(offer => <OfferItem offer={offer} />)}
    </Container>
  )
}
