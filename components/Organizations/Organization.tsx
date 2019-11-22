import { Card } from '../Card'
import { Organization } from '../../generated/graphql'
import Text from '../Text'
import Spacer from '../Spacer'
import { Link } from '../Link'
import { stripProtocol } from '../../lib/utils'

interface Props {
  organization: Pick<Organization, 'name' | 'description' | 'url'>
}

export const OrganizationItem = ({ organization }: Props) => (
  <Card>
    <Text>{organization.description}</Text>
    <Spacer y={0.5} />
    <Link href={organization.url} title={organization.name}>
      {stripProtocol(organization.url)}
    </Link>
  </Card>
)
