import { ContactForm } from '../components/ContactForm'
import { ContactInfo } from '../components/ContactInfo'
import { Container } from '../components/Container'
// import { PressKit } from '../components/PressKit'
import { FAQ } from '../components/FAQ'
import Spacer from '../components/Spacer'
import Text from '../components/Text'

export default () => (
  <Container>
    <Container center style={{ paddingTop: '36px' }}>
      <Text h1 color="salmon">
        Kontaktujte nás
      </Text>
    </Container>
    <Spacer></Spacer>
    <Container
      style={{ paddingBottom: '36px' }}
      direction={['column', 'column', 'row']}
    >
      <ContactForm />
      <Spacer x={4} />
      <ContactInfo />
    </Container>

    <Spacer></Spacer>

    <Container center style={{ paddingTop: '36px' }}>
      <Text h1 as="h2">
        Často kladené dotazy
      </Text>
    </Container>
    <Spacer></Spacer>
    <Container style={{ paddingBottom: '36px' }}>
      <FAQ />
    </Container>

    <Spacer></Spacer>

    {/* <Container center style={{ paddingTop: '36px' }}>
      <Text h1 as="h2">
        Pro média
      </Text>
    </Container>
    <Spacer></Spacer> */}
    {/* <Container style={{ paddingBottom: '72px' }}>
      <PressKit />
    </Container> */}
  </Container>
)
