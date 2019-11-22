import { Container } from './Container'
import { ButtonLink } from './ButtonLink'
import Text from './Text'
import Spacer from './Spacer'
import { Image } from './Image'

export const OrganizationsContainer = () => (
  <Container>
    <Spacer />
    <Text color="orange" span>
      Organizace, kterým společně pomáháme
    </Text>
    <Container row style={{ justifyContent: 'space-between'}}>
      <Image src="https://davamcz.imgix.net/organizace/zdravotni-klaun.svg" />
      <Image src="https://davamcz.imgix.net/organizace/hnuti-brontosaurus.png" maxWidth={161} />
      <Image src="https://davamcz.imgix.net/organizace/lekari-bez-hranic.png" maxWidth={136} />
      <Image src="https://davamcz.imgix.net/organizace/armada-spasy.svg" />
      <Image src="https://davamcz.imgix.net/organizace/hnuti-duha.png" maxWidth={138} />
      <ButtonLink secondary href="/komu-pomahame">
        Zobrazit všechny
      </ButtonLink>
    </Container>
    <Spacer />
  </Container>
)
