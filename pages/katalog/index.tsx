import { Container } from '../../components/Container'
import Text from '../../components/Text'
import { Offers } from '../../components/Offers'
import { withApollo } from '../../lib/apollo'
import { HelpContainer } from '../../components/HelpContainer'

export default withApollo(() => (
  <>
    <Container>
      <Text h1 color="salmon">
        Sdílená radost. Pro vás i organizaci.
      </Text>
      <Offers />
    </Container>
    <HelpContainer />
  </>
))
