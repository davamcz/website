import styled from 'styled-components'
import { ButtonLink } from './ButtonLink'
import { Container } from './Container'
import Spacer from './Spacer'
import Text from './Text'

export const Home = () => (
  <HomeWrapper>
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
      <Container
        style={{ alignItems: 'flex-start' }}
        direction={['column', 'row', 'row']}
      >
        <ButtonLink href="/vytvorit-nabidku">Vytvořit nabídku</ButtonLink>
        <Spacer />
        <ButtonLink href="/nabidka" secondary>
          Zobrazit nabídky
        </ButtonLink>
      </Container>
    </HomeContainer>
  </HomeWrapper>
)

const HomeContainer = styled(Container)`
  object-fit: contain;
  background: 100% no-repeat url('/home-background.png');
  background-position: bottom right;

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background: 100% no-repeat url('/home-background@2x.png');
    background-size: 420px auto;
    background-position: bottom right;
  }

  @media screen and (max-width: 601px) {
    background-size: 250px;
  }
`

const HomeWrapper = styled.div`
  background: url('/background.svg') no-repeat;
  background-position: bottom;
  background-size: 100%;
`
