import { Container } from './Container'
import Text from './Text'
import Spacer from './Spacer'

interface Props {
  children: React.ReactNode
  description: string
}

export const Title = ({ children, description }: Props) => (
  <Container flex="0 0 auto">
    <Text uppercase color="orange" span>{description}</Text>
    <Spacer />
    <Text h1 as="h2" color="darkGrey">{children}</Text>
  </Container>
)
