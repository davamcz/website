import { Container } from './Container'
import Text from './Text'
import Spacer from './Spacer'

interface Props {
  children: React.ReactNode
  description: string
  center?: boolean
}

export const Title = ({ children, description, center }: Props) => (
  <Container flex="0 0 auto" center={center}>
    <Text uppercase color="orange" span>{description}</Text>
    <Spacer />
    <Text h1 as="h2" color="darkGrey">{children}</Text>
  </Container>
)
