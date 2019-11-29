import { Container } from '../../components/Container'
import Text from '../../components/Text'
import Spacer from '../../components/Spacer'
import { ButtonLink } from '../../components/ButtonLink'
import { CopyBlock } from '../../components/CopyBlock'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { Image } from '../../components/Image'

export default () => {
  const router = useRouter()

  return (
    <Container row style={{ justifyContent: 'space-between' }}>
      <Container style={{ maxWidth: '440px'}}>
        <Text h1 color="salmon">
          Výborně, vaše nabídka je nyní aktivní!
        </Text>
        <Spacer y={0.5} />
        <Text>
          Děkujeme, že jste se rozhodli darovat vaši věc/službu pro dobrou věc.
          Na e-mail jsme vám zaslali shrnutí důležitých informací.
        </Text>
        <Spacer />
        <Text bold color="orange">
          Vaši nabídku naleznete zde
        </Text>
        <Spacer y={0.5} />
        <CopyBlock url={`${process.env.WEBSITE_URL}/katalog/${router.query.id}`} />
        <Spacer />
        <Text h4>Co bude následovat?</Text>
        <Spacer y={1.5} />
        <Step number={1}>
          Jakmile vaše nabídka někoho zaujme, párkrát klikne a zaplatí pomocí
          vygenerovaného platebního odkazu.
        </Step>
        <Step number={2}>
          Nezisková organizace obdrží peníze a vám i darujícímu přijde na e-mail
          potvrzení o platbě. Vy i nezisková organizace jásáte.
        </Step>
        <Step number={3}>
          Aby se mohl radovat i darující, domluvte se co nejdříve na předání
          produktu.
        </Step>
        <Step number={4}>
          I my máme radost. Věříme, že opět někdy využijete tohoto způsobu, jak
          rozdávat radost a inspirovat druhé.
        </Step>
        <ButtonLink href="/chci-darovat" style={{ alignSelf: 'flex-start' }}>
          Vytvořit nový platební odkaz
        </ButtonLink>
        <Spacer y={7} />
      </Container>
      <Spacer x={3} />
      <Container style={{ alignItems: 'flex-end'}}>
        <Spacer x={2} />
        <Image src="/dekujeme.jpg" maxWidth={460} />
      </Container>
    </Container>
  )
}

const Step = ({
  number,
  children,
}: {
  number: number
  children: React.ReactNode
}) => (
  <>
    <Container style={{ maxWidth: '390px' }} row>
      <Ring>{number}</Ring>
      <Spacer />
      {children}
    </Container>
    <Spacer y={1.5} />
  </>
)

const Ring = styled.div`
  display: flex;
  align-self: flex-start;
  min-width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  font-size: 20px;
  font-weight: bold;
  box-shadow: ${({ theme }) => theme.shadow.box};
`
