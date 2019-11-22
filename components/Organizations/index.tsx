import gql from 'graphql-tag'
import { useOrganizationsQuery } from '../../generated/graphql'
import { Container } from '../Container'
import { OrganizationItem } from './Organization'

export const organizations = gql`
  query organizations {
    organizations {
      name
      description
      url
    }
  }
`

export const Organizations = () => {
  const {
    loading,
    data,
  } = useOrganizationsQuery()

  if (loading) return <div>Loading</div>

  console.log(data)

  return (
    <Container>
      {data && data.organizations.map((organization, i) => (
        <OrganizationItem organization={organization} key={i} />
      ))}
    </Container>
  )
}
