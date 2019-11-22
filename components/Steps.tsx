import { Container } from './Container'
import { Title } from './Title'
import { Step } from './Step'

export const Steps = () => (
  <Container>
    <Container style={{ maxWidth:'451px' }}>
      <Title description="Jak to funguje">
        Jednoduše spojujeme lidi pro dobrou věc
      </Title>
    </Container>

    <Container style={{ paddingTop: '48px', paddingBottom: '48px' }} row>
      <Step title="Krok č. 1" description="Nejprve si vyberte, kterou dobročinnou organizaci chcete podpořit."></Step>
      <Step title="Krok č. 2" description="Vytvořte nabídku s vaší darovanou věcí. My vám vygenerujeme platební odkaz."></Step>
      <Step title="Krok č. 3" description="Nyní můžete svůj inzerát zveřejnit a sdílet se všemi, ke kterým chcete, aby se nabídka dostala."></Step>
      <Step title="Krok č. 4" description="Poté, co vaše nabídka někoho zaujme, přes platební odkaz přispěje přímo vybrané organizaci."></Step>
      <Step title="Krok č. 5" description="Oba obdržíte potvrzení o daru. Domluvíte se na způsobu předání produktu nebo poskytnutí služby."></Step>
    </Container>
  </Container>
)
