import { useOffersQuery } from '../../generated/graphql'
import { Container } from '../Container'
import { OfferItem, OfferPlaceholder } from './Offer'

export const Offers = () => {
  const { data, loading } = useOffersQuery({ variables: { active: true, publicOffer: true } })

  return (
    <Container row style={{ flexWrap: 'wrap' }}>
      {loading
        ? Array(12)
            .fill(0)
            .map(() => <OfferPlaceholder />)
        : data?.offers.map(offer => <OfferItem offer={offer} />)}
    </Container>
  )
}
