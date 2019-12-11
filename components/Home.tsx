import styled from 'styled-components'
import { ButtonLink } from './ButtonLink'
import { Container } from './Container'
import Spacer from './Spacer'
import Text from './Text'

export const Home = () => (
  <HomeContainer style={{ paddingTop: '144px', paddingBottom: '250px' }}>
    <Text h1 style={{ maxWidth: '480px' }}>
      Jednoduše spojujeme lidi pro dobrou věc
    </Text>
    <Spacer />
    <Text style={{ maxWidth: '420px' }}>
      Máte věc nebo službu, kterou chcete věnovat druhým a zároveň pomoci
      dobročinné organizaci?
    </Text>
    <Spacer />
    <Container row>
      <ButtonLink href="/chci-darovat">Chci darovat</ButtonLink>
      <Spacer />
      <ButtonLink href="/nabidka" secondary>
        Zobrazit nabídku
      </ButtonLink>
    </Container>
  </HomeContainer>
)

const HomeContainer = styled(Container)`
  object-fit: contain;
  background: 100% no-repeat url('/home-background.jpg');
  background-position: bottom right;
`
