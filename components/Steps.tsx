import styled from 'styled-components'
import { Container } from './Container'
import { Step } from './Step'
import { Title } from './Title'

export const Steps = () => (
  <Container>
    <Container style={{ maxWidth: '451px' }}>
      <Title description="Jak to funguje">Je to rychlé a jednoduché</Title>
    </Container>

    <StyledContainer direction={['column', 'column', 'row']}>
      <Step
        title="Krok č. 1"
        description="Nejprve si vyberte, kterou dobročinnou organizaci chcete podpořit."
      ></Step>
      <Step
        title="Krok č. 2"
        description="Vytvořte nabídku na vaši věc či službu."
      ></Step>
      <Step
        title="Krok č. 3"
        description="My Vám k tomu ještě vygenerujeme URL odkaz nabídky pro sdílení třeba na sociálních sítích."
      ></Step>
      <Step
        title="Krok č. 4"
        description="Zájemce koupí produktu/služby daruje veškeré peníze dobročínné organizaci."
      ></Step>
      <Step
        title="Krok č. 5"
        description="Na závěr se domluvte na způsobu předání produktu, nebo poskytnutí služby. Oba také obdržíte potvrzení o daru."
      ></Step>
    </StyledContainer>
  </Container>
)

const StyledContainer = styled(Container)`
  padding: 48px 0;
  justify-content: space-between;

  @media screen and (max-width: 960px) {
    align-items: center;
  }
`
