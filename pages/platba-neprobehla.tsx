import { Section } from '../components/Section'
import { Container } from '../components/Container'
import Spacer from '../components/Spacer'
import Text from '../components/Text'

export default () => (
  <Section>
    <Container style={{ maxWidth: '420px' }}>
      <Spacer y={4} />
      <Text h1 color="salmon">
        Vaše platba neproběhla v pořádku
      </Text>
      <Spacer />
      <Text>
        Máte v nastavení svého internetového bankovnictví možnost platby kartou
        online? Nepřekročili jste nastavený denní limit? Prosíme, zkontrolujte
        si své nastavení a poté transakci zopakujte.
      </Text>
    </Container>
  </Section>
)
