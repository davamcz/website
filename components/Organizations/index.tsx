import gql from 'graphql-tag'
import { useOrganizationsQuery } from '../../generated/graphql'
import { Container } from '../Container'
import { OrganizationItem } from './Organization'

export const organizations = gql`
  query organizations {
    organizations {
      id
      name
      description
      url
      logo {
        key
      }
    }
  }
`

export const Organizations = () => {
  const { loading, data } = useOrganizationsQuery()

  if (loading) return <div>Loading</div>

  return (
    <Container row style={{ flexWrap: 'wrap' }}>
      {data &&
        data.organizations.map((organization, i) => (
          <OrganizationItem organization={organization} key={i} />
        ))}
    </Container>
  )
}
