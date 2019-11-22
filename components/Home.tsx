import { Container } from './Container'
import Text from './Text'
import Spacer from './Spacer'
import { ButtonLink } from './ButtonLink'
import styled from 'styled-components'

export const Home = () => (
  <HomeContainer style={{ paddingTop: '144px', paddingBottom: '250px' }}>
    <Text h1 style={{ maxWidth:'660px' }}>
      Máte věc/službu, kterou chcete věnovat druhým a zároveň pomoci dobročinné
      organizaci?
    </Text>
    <Spacer />
    <Container row>
      <ButtonLink>Chci darovat</ButtonLink>
      <Spacer />
      <ButtonLink href="/katalog" secondary>Zobrazit nabídku</ButtonLink>
    </Container>
  </HomeContainer>
)

const HomeContainer = styled(Container)`
  object-fit: contain;
  background: 100% no-repeat url('/home-background.jpg');
  background-position: bottom right;
`
