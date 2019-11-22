import { Container } from './Container'
import { Title } from './Title'
import Text from './Text'
import Spacer from './Spacer'
import { ButtonLink } from './ButtonLink'

export const AboutSection = () => (
  <Container row>
    <Container><img src="" /></Container>
    <Container>
      <Title description="O nás">Proč to děláme a kdo jsme?</Title>
      <Text>
        Jsme parta lidí, která se vytvořením této platformy rozhodla podpořit
        neziskový sektor. Zjednodušit propojení dárce s dobročinnými
        organizacemi tak, aby s tím měly obě strany co nejméně starostí. Aby pár
        kliknutí na této stránce znamenalo radost, kterou uděláte hned dvakrát –
        tomu, kdo váš produkt koupí, a zároveň i neziskové organizaci.
      </Text>
      <Spacer />
      <ButtonLink href="/o-nas" secondary>Více o nás</ButtonLink>
    </Container>
  </Container>
)
