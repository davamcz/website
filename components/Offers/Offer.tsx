import { Container } from '../Container'
import Text from '../Text'
import { ButtonLink } from '../ButtonLink'
import Spacer from '../Spacer'
import styled from 'styled-components'
import { Image } from '../Image'

interface Props {
  offer:  any
}

export const OfferItem = ({ offer }: Props) => (
  <StyledContainer>
    <Image src={`https://davamcz.imgix.net/${offer.gallery.images[0].key}?w=255`} />
    <Spacer y={0.5} />
    <Text span color="orange">
      {offer.beneficator.name}
    </Text>
    <Spacer y={0.5} />
    <Text>{offer.name}</Text>
    <Spacer y={0.5} />
    <Container row vcenter style={{ justifyContent: 'space-between' }}>
      <Text bold>{offer.price} Kč</Text>
      <ButtonLink secondary href="/nabidka/[id]" as={`/nabidka/${offer.id}`}>
        Zjistit více
      </ButtonLink>
    </Container>
  </StyledContainer>
)


const StyledContainer = styled(Container)`
  flex: 0 0 auto;
  margin-right: 30px;
  margin-bottom: 36px;

  &:nth-child(4n) {
    margin-right: 0;
  }
`