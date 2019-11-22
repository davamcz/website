import { Container } from '../Container'
import Text from '../Text'
import { ButtonLink } from '../ButtonLink'
import { Offer, Organization } from '../../generated/graphql'
import Spacer from '../Spacer'

interface Props {
  offer: Pick<Offer, 'id' | 'name' | 'price'> & {
    beneficator: Pick<Organization, 'name'>
  }
}

export const OfferItem = ({ offer }: Props) => (
  <Container flex="0 0 auto">
    <img src="/img.jpg" />
    <Text span color="orange">
      {offer.beneficator.name}
    </Text>
    <Spacer y={0.5} />
    <Text>{offer.name}</Text>
    <Spacer y={0.5} />
    <Container row vcenter style={{ justifyContent: 'space-between' }}>
      <Text bold>{offer.price} Kč</Text>
      <ButtonLink secondary href="/catalog/[id]" as={`/katalog/${offer.id}`}>
        Zjistit více
      </ButtonLink>
    </Container>
  </Container>
)
