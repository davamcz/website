import { Container } from '../Container'
import { Image } from '../Image'
import Spacer from '../Spacer'
import Text from '../Text'
import { Title } from '../Title'
// import { ButtonLink } from './ButtonLink'

export const AboutSection = () => (
  <Container direction={['column', 'column', 'row']}>
    <Container>
      <Image src="/davam-tym.jpg" />
    </Container>
    <Spacer x={2} />
    <Container center>
      <Title description="O nás">Proč to děláme a kdo jsme?</Title>
      <Spacer y={1.5} />
      <Text>
        Jsme parta lidí, kteří se rozhodli vytvořením dobročinného tržiště
        podpořit neziskový sektor. Chceme jednoduchým způsobem pomáhat
        dobročinným organizacím. Proč? Uvědomujeme si, kolik dobrého tyto
        organizace konají. Ať už jde o pomoc druhým, nebo o přírodu. Dělají toho
        mnoho a jsou pro naši společnost naprosto nepostradatelné! A tak jsme
        dali hlavy dohromady a začali přemýšlet, co bychom mohli na oplátku
        udělat my, pro ně. Až nás napadlo. Všichni máme doma věci, které nám již
        neslouží, ale jinému by udělaly radost. A proč neudělat radost
        dvojnásobnou - tomu, kdo váš produkt nebo službu koupí, a zároveň
        dobročinné organizaci!
      </Text>
      <Spacer />
      {/* <ButtonLink href="/o-nas" secondary>Více o nás</ButtonLink> */}
    </Container>
  </Container>
)
