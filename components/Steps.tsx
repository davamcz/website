import styled from 'styled-components'
import { Container } from './Container'
import { Step } from './Step'
import { Title } from './Title'

export const Steps = () => (
  <Container>
    <Container style={{ maxWidth: '451px' }}>
      <Title description="Jak to funguje">
        Jednoduše spojujeme lidi pro dobrou věc
      </Title>
    </Container>

    <StyledContainer
      direction={['column', 'column', 'row']}
    >
      <Step
        title="Krok č. 1"
        description="Nejprve si vyberte, kterou dobročinnou organizaci chcete podpořit."
      ></Step>
      <Step
        title="Krok č. 2"
        description="Vytvořte nabídku s vaší darovanou věcí. My vám vygenerujeme platební odkaz."
      ></Step>
      <Step
        title="Krok č. 3"
        description="Svůj inzerát zveřejněte a sdílejte se všemi, ke kterým chcete, aby se nabídka dostala."
      ></Step>
      <Step
        title="Krok č. 4"
        description="Vyčkejte, až vaše nabídka někoho zaujme a přes platební odkaz přímo přispěje vybrané organizaci."
      ></Step>
      <Step
        title="Krok č. 5"
        description="Domluvte se na způsobu předání produktu nebo poskytnutí služby."
      ></Step>
    </StyledContainer>
  </Container>
)

const StyledContainer = styled(Container)`
  padding: 48px 0;
  justify-content: space-between;

  @media screen  and (max-width: 960px) {
    align-items: center;
  }
`
