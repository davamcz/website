import Text from '../Text'
import Spacer from '../Spacer'
import { Container } from '../Container'
import { Link } from '../Link'
import { Plus } from '../Icons/Plus'
import { Minus } from '../Icons/Minus'

export const FAQ = () => {
  return (
    <Container row>
      <Container>
        <Container style={{ padding: '24px' }} vcenter row>
          <Link href="">
            <Plus />
          </Link>
          <Spacer />
          <Text>Jsme parta lidí, která se vytvořením této platformy rozhodla podpořit neziskový sektor?</Text>
        </Container>
        <Container style={{ paddingLeft: '24px' }}>
          <Text bold>Ano jsme</Text>
        </Container>
      </Container>
      <Spacer />
      <Container>
        <Container style={{ padding: '24px' }} vcenter row>
          <Link href="">
            <Minus />
          </Link>
          <Spacer />
          <Text>Jsme parta lidí, která se vytvořením této platformy rozhodla podpořit neziskový sektor?</Text>
        </Container>
        <Container style={{ paddingLeft: '24px' }}>
          <Text bold>Ano jsme</Text>
        </Container>
      </Container>
    </Container>
  )
}
