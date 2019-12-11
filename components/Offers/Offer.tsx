import styled from 'styled-components'
import { ButtonLink } from '../ButtonLink'
import { Container } from '../Container'
import { Image } from '../Image'
import Spacer from '../Spacer'
import Text from '../Text'

interface Props {
  offer: any
}

export const OfferItem = ({ offer }: Props) => (
  <StyledContainer>
    <Image src={`https://davamcz.imgix.net/${offer.gallery.images[0].key}?w=255&h=255&fit=fillmax&fill=solid&fill-color=fff`} />
    <Spacer y={0.5} />
    <Text span color="orange">
      {offer.beneficator.name}
    </Text>
    <Spacer y={0.5} />
    <Text ellipsis>{offer.name}</Text>
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
  flex: 1 0 calc((100% / 4) - 30px);
  max-width: 255px;
  margin-right: 30px;
  margin-bottom: 36px;

  &:nth-child(4n) {
    margin-right: 0;
  }
`
