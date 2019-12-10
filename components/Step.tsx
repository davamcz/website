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
  <Container hcenter style={{ maxWidth: '190px' }}>
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
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.box};
`

export const Rectangle = styled.div`
  width: 24px;
  height: 7px;
  background: ${({ theme }) => theme.colors.salmon};
  margin: 0 auto;
`
