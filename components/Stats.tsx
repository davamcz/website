import styled from 'styled-components'
import { Container } from './Container'
import Spacer from './Spacer'
import { Rectangle } from './Step'
import Text from './Text'
import { Title } from './Title'

export default () => (
  <Container>
    <Title description="Velká radost" center>
      Kolik se vás už podílelo
    </Title>
    <Spacer y={2} />
    <Container center direction={['column', 'column', 'row']} style={{ justifyContent: 'space-between' }}>
      <Stat title="Zapojených organizací" value="7" />
      <Spacer y={2} />
      <Stat title="Proběhlých darů" value="85" />
      <Spacer y={2} />
      <Stat title="Získáno na dobročinnost" value="23091Kč" />
    </Container>
    <Spacer y={4} />
  </Container>
)

const Stat = ({ value, title }: { value: string; title: string }) => (
  <Block>
    <Spacer />
    <Text h1 as="span">
      {value}
    </Text>
    <Text color="salmon" span>
      {title}
    </Text>
    <Spacer />
    <Rectangle />
  </Block>
)

const Block = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  width: 100%;      
  max-width: 255px;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.box};
`
