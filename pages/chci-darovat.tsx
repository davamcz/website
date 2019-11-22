import Text from '../components/Text'
import { Section } from '../components/Section'
import { Container } from '../components/Container'
import Spacer from '../components/Spacer'

export default () => (
  <Section>
    <Container>
      <Text h1>Rozhodli jste se darovat</Text>
      <Spacer y={0.5} />
      <Text>
        Vytvořte si pomocí našeho formuláře platební odkaz, díky kterému druzí
        snadno zakoupí vaši věc/službu a přímo tak přispějí vámi vybrané
        neziskové organizaci. Platba (ani žádná její část) nepřijde ani vám, ani
        nám, ale v plné výši poputuje na účet neziskové organizace.
      </Text>
    </Container>
  </Section>
)
