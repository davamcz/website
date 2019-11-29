import Text from '../components/Text'
import { Container } from '../components/Container'
import { Organizations } from '../components/Organizations'
import { withApollo } from '../lib/apollo'
import Spacer from '../components/Spacer'

export default withApollo(() => (
  <Container>
    <Text h1 color="salmon" style={{ maxWidth: '350px' }}>
      Komu společně pomáháme
    </Text>
    <Spacer y={2} />
    <Organizations />
  </Container>
))
