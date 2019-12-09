import { OrganizationsProps } from '../../pages/komu-pomahame'
import { Container } from '../Container'
import { OrganizationItem } from './Organization'

export const Organizations = ({ organizations }: OrganizationsProps) => {
  return (
    <Container row style={{ flexWrap: 'wrap' }}>
      {organizations.map((organization, i) => (
        <OrganizationItem organization={organization} key={i} />
      ))}
    </Container>
  )
}
