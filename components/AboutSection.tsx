import { Container } from './Container'
import { Image } from './Image'
import Spacer from './Spacer'
import Text from './Text'
import { Title } from './Title'
// import { ButtonLink } from './ButtonLink'

export const AboutSection = () => (
  <Container row>
    <Container>
      <Image src="/davam-tym.jpg" />
    </Container>
    <Spacer x={2} />
    <Container center>
      <Title description="O nás">Proč to děláme a kdo jsme?</Title>
      <Spacer y={1.5} />
      <Text>
        Jsme parta lidí, která se vytvořením této platformy rozhodla podpořit
        neziskový sektor. Zjednodušit propojení dárce s dobročinnými
        organizacemi tak, aby s tím měly obě strany co nejméně starostí. Pár
        kliknutí na této stránce znamenalo radost, kterou uděláte hned dvakrát –
        tomu, kdo váš produkt koupí, a zároveň i neziskové organizaci.
      </Text>
      <Spacer />
      {/* <ButtonLink href="/o-nas" secondary>Více o nás</ButtonLink> */}
    </Container>
  </Container>
)
