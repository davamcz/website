import { FunctionComponent } from 'react'
import { Container } from './Container'
import Text from './Text'
import Spacer from './Spacer'

interface Props {
  title: string
  description: string
}

export const Step: FunctionComponent<Props> = ({ title, description }) => (
  <Container center>
    <Text bold>{title}</Text>
    <Spacer />
    <Text>{description}</Text>
  </Container>
)
