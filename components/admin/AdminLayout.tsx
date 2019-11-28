import { Section } from '../Section'
import { Menu } from './Menu'
import { Container } from '../Container'

interface Props {
  children: React.ReactNode
}

export const AdminLayout = ({ children }: Props) => (
  <Section>
    <Container row style={{ justifyContent: 'space-between' }}>
      <Menu />
      <Container style={{ paddingLeft: '10%' }}>{children}</Container>
    </Container>
  </Section>
)
