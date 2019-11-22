import { Section } from '../Section'
import { Menu } from './Menu'
import { Container } from '../Container'

interface Props {
  children: React.ReactNode
}

export const AdminLayout = ({ children }: Props) => (
  <Section>
    <Container row>
      <Menu />
      <Container>{children}</Container>
    </Container>
  </Section>
)
