import { Container } from '../../components/Container'
import { HelpContainer } from '../../components/HelpContainer'
import { Offers } from '../../components/Offers'
import Spacer from '../../components/Spacer'
import Text from '../../components/Text'
import { withApollo } from '../../lib/apollo'

export default withApollo(() => (
  <>
    <Container>
      <Text h1 color="salmon" style={{ maxWidth: '490px'}}>
        Sdílená radost. Pro vás i dobročinnou organizaci.
      </Text>
      <Spacer y={2} />
      <Offers />
    </Container>
    <HelpContainer />
  </>
))
