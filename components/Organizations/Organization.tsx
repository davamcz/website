import { Card } from '../Card'
import { Organization, File } from '../../generated/graphql'
import Text from '../Text'
import Spacer from '../Spacer'
import { Link } from '../Link'
import { stripProtocol } from '../../lib/utils'
import { Image } from '../Image'
import { Container } from '../Container'

interface Props {
  organization: Pick<Organization, 'name' | 'description' | 'url'> & {
    logo: Pick<File, 'key'>
  }
}

export const OrganizationItem = ({ organization }: Props) => (
  <Card>
    <Container center style={{ width: '350px', padding: '30px 60px' }}>
      <Image src={`https://davamcz.imgix.net/${organization.logo.key}?h=68`} />
      <Spacer y={1.5} />
      <Text>{organization.description}</Text>
      <Spacer y={0.5} />
      <Link href={organization.url} title={organization.name} color>
        {stripProtocol(organization.url)}
      </Link>
    </Container>
  </Card>
)
 