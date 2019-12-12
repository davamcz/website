import { useRouter } from 'next/router'
import styled from 'styled-components'
import { ButtonLink } from '../../components/ButtonLink'
import { Container } from '../../components/Container'
import { CopyBlock } from '../../components/CopyBlock'
import { Image } from '../../components/Image'
import { Link } from '../../components/Link'
import Spacer from '../../components/Spacer'
import Text from '../../components/Text'

export default () => {
  const router = useRouter()

  return (
    <Container direction={['column', 'column', 'row']} style={{ justifyContent: 'space-between' }}>
      <Container style={{ maxWidth: '440px' }}>
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
        <CopyBlock
          url={`${process.env.WEBSITE_URL}/nabidka/${router.query.id}`}
        />
        <Spacer />
        <Text h4>Co bude následovat?</Text>
        <Spacer y={1.5} />
        <Step number={1}>
          Sdílejte svůj inzerát s platebním odkazem na sociálních sítích,
          inzertním portálu či na naší facebookové stránce{' '}
          <Link
            external
            href="https://www.facebook.com/groups/2159998650981900/"
            color
            bold
          >
            Dobročinný bazar
          </Link>
        </Step>
        <Step number={2}>
          O tom, že někdo využil vašeho platebního odkazu, se dozvíte díky
          potvrzení o platbě, které vám přijde na váš e-mail
        </Step>
        <Step number={3}>
          Zároveň také obdržíte e-mail s důležitými informacemi, včetně kontaktu
          na dárce - co nejdříve se tedy domluvte na předání produktu či
          poskytnutí služby
        </Step>
        {/* <Step number={4}>
          Jako poděkování za podporu dobročinné organizace zašleme vám i dárci
          certifikát o věnovaném daru
        </Step> */}
        <ButtonLink href="/chci-darovat" style={{ alignSelf: 'flex-start' }}>
          Vytvořit nový platební odkaz
        </ButtonLink>
        <Spacer y={7} />
      </Container>
      <Spacer x={3} />
      <Container style={{ alignItems: 'flex-end' }}>
        <Spacer x={2} />
        <Image src="/dekujeme.jpg" maxWidth={460} />
      </Container>
    </Container>
  )
}

export const Step = ({
  number,
  children,
}: {
  number: number
  children: React.ReactNode
}) => (
  <>
    <Container style={{ maxWidth: '390px' }} row flex="0">
      <Ring>{number}</Ring>
      <Spacer />
      <Text style={{ flex: '1' }}>{children}</Text>
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
  background: ${({ theme }) => theme.colors.white};
`
