import { FunctionComponent } from 'react'
import { Container } from './Container'
import Text from './Text'
import Spacer from './Spacer'
import styled from 'styled-components'

interface Props {
  title: string
  description: string
}

export const Step: FunctionComponent<Props> = ({ title, description }) => (
  <Container hcenter style={{ maxWidth: '190px'}}>
    <Block>
      <Text bold style={{ marginBottom: '17px' }}>
        {title}
      </Text>
      <Rectangle />
    </Block>
    <Spacer />
    <Text center>{description}</Text>
  </Container>
)

const Block = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 24px;
  box-shadow: 0 20px 60px 0 rgba(0, 0, 0, 0.1);
`

const Rectangle = styled.div`
  width: 24px;
  height: 7px;
  background: ${({ theme }) => theme.colors.salmon};
  margin: 0 auto;
`
