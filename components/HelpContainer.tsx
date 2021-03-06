import { Container } from './Container'
import styled from 'styled-components'
import { ButtonLink } from './ButtonLink'
import Text from './Text'
import Spacer from './Spacer'

export const HelpContainer = () => (
  <Section>
    <Container hcenter>
      <Spacer y={3} />
      <Text color="salmon" span uppercase weight={700}>
        Je to jednoduché
      </Text>
      <Spacer y={0.5} />
      <Text h1 as="h2" color="darkGrey" center style={{ maxWidth: '480px' }}>
        Pojďte s námi pomáhat!
      </Text>
      <Spacer />
      <Text>Každý, kdo se zapojí, rozdává dvojnásobnou radost.</Text>
      <Spacer />
      <ButtonLink href="/vytvorit-nabidku">Vytvořit nabídku</ButtonLink>
      <Spacer y={4} />
    </Container>
  </Section>
)

const Section = styled.section`
  background: ${({ theme }) => theme.colors.peach};
  background-image: url('/heart.svg');
  background-repeat: no-repeat;
  background-position: 5% bottom;
`
