import { ButtonLink } from './ButtonLink'
import { Container } from './Container'
import { Image } from './Image'
import Spacer from './Spacer'
import Text from './Text'

export const OrganizationsContainer = () => (
  <Container>
    <Spacer />
    <Text color="orange" span>
      Organizace, kterým společně pomáháme
    </Text>
    <Container
      direction={['column', 'column', 'row']}
      center
      style={{ justifyContent: 'space-between' }}
    >
      <Image src="https://davamcz.imgix.net/organizace/zdravotni-klaun.svg" maxWidth={151} />
      <Spacer />
      <Image
        src="https://davamcz.imgix.net/organizace/hnuti-brontosaurus.png"
        maxWidth={161}
      />
      <Spacer />

      <Image
        src="https://davamcz.imgix.net/organizace/lekari-bez-hranic.png"
        maxWidth={136}
      />
      <Spacer />

      <Image src="https://davamcz.imgix.net/organizace/armada-spasy.svg" maxWidth={35} />
      <Spacer />

      <Image
        src="https://davamcz.imgix.net/organizace/hnuti-duha.png"
        maxWidth={138}
      />
      <Spacer />

      <ButtonLink secondary href="/komu-pomahame">
        Zobrazit všechny
      </ButtonLink>
    </Container>
    <Spacer />
  </Container>
)
