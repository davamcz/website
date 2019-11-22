import Text from '../components/Text'
import { Container } from '../components/Container'
import { Organizations } from '../components/Organizations'
import { withApollo } from '../lib/apollo'

export default withApollo(() => (
  <Container>
    <Text h1 color="salmon">
      Komu společně pomáháme
    </Text>
    <Organizations />
  </Container>
))
