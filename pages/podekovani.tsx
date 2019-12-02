import { Section } from '../components/Section'
import { Container } from '../components/Container'
import Spacer from '../components/Spacer'
import Text from '../components/Text'

export default () => (
  <Section>
    <Container style={{ maxWidth: '420px' }}>
      <Spacer y={4} />
      <Text h1 color="salmon">
        Děkujeme za darované peníze
      </Text>
      <Spacer />
      <Text>
        Vaše platba proběhla úspěšně! Vaším darem jste udělali radost hned
        dvakrát - dobromanovi, který produkt nabídl, a neziskové organizaci,
        která nyní obdržela celou vaši částku. Děkujeme a věříme, že portálu
        davam.cz opět brzy využijete!
      </Text>
    </Container>
  </Section>
)
