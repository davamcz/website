import Text from '../Text'
import Spacer from '../Spacer'
import { Card } from '../Card'
import { Container } from '../Container'
import { Link } from '../Link'
import { RoundedArrow } from '../Icons/RoundedArrow'

export const PressKit = () => {
  return (
    <Container row>
      <Container>
        <Card>
          <Container
            style={{ padding: '24px', paddingLeft: '62.5px' }}
            vcenter
            row
          >
            <Link href="">
              <RoundedArrow />
            </Link>
            <Spacer />
            <Text bold underline>
              Stáhněte si kompletní balíček pro média, který obsahuje loga,
              článek o nás a fotografie
            </Text>
          </Container>
        </Card>
      </Container>
      <Spacer />
      <Container>
        <Card>
          <Container
            style={{ padding: '24px', paddingLeft: '62.5px' }}
            vcenter
            row
          >
            <Link href="">
              <RoundedArrow />
            </Link>
            <Spacer />
            <Text>Stáhnout pouze loga ve formátech AI, PDF? PNG a JPG</Text>
          </Container>
        </Card>
      </Container>
    </Container>
  )
}
