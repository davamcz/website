import Link from 'next/link'
import styled from 'styled-components'
import { ButtonLink } from '../ButtonLink'
import { Container } from '../Container'
import { Image } from '../Image'
import { Placeholder } from '../Placeholder'
import Spacer from '../Spacer'
import Text from '../Text'

interface Props {
  offer: any
}

export const OfferItem = ({ offer }: Props) => (
  <StyledContainer>
    <OfferLink id={offer.id}>
      <Image
        src={`https://davamcz.imgix.net/${offer.gallery.images[0].key}?w=255&h=255&fit=fillmax&fill=solid&fill-color=fff`}
      />
    </OfferLink>
    <Spacer y={0.5} />
    <Text span color="orange">
      {offer.beneficator.name}
    </Text>
    <Spacer y={0.5} />
    <OfferLink id={offer.id}>
      <Text ellipsis color="black">
        {offer.name}
      </Text>
    </OfferLink>
    <Spacer y={0.5} />
    <Container row vcenter style={{ justifyContent: 'space-between' }}>
      <Text bold>{offer.price} Kč</Text>
      <ButtonLink secondary small href="/nabidka/[id]" as={`/nabidka/${offer.id}`}>
        Zjistit více
      </ButtonLink>
    </Container>
  </StyledContainer>
)

export const OfferPlaceholder = () => (
  <StyledContainer>
    <Placeholder keepAspectRatio width={255} height={255} />
    <Spacer y={0.5} />
    <Placeholder width={180} height={12} />
    <Spacer y={0.5} />
    <Placeholder width={100} height={16} />
    <Spacer y={1.2} />
    <Placeholder width={100} height={16} />
  </StyledContainer>
)

const OfferLink = ({
  children,
  id,
}: {
  id: string
  children: React.ReactNode
}) => (
  <Link href="/nabidka/[id]" as={`/nabidka/${id}`} passHref>
    <A>{children}</A>
  </Link>
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

const A = styled.a`
  display: inline-flex;
  text-decoration: none;
`
