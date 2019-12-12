import styled from 'styled-components'
import { OrganizationDetailFragment } from '../../generated/graphql'
import { stripProtocol } from '../../lib/utils'
import { Container } from '../Container'
import { Image } from '../Image'
import { Link } from '../Link'
import Spacer from '../Spacer'
import Text from '../Text'

interface Props {
  organization: OrganizationDetailFragment
}

export const OrganizationItem = ({ organization }: Props) => (
  <OrganizationCard>
    <Container center style={{ padding: '30px 60px' }}>
      <Image src={`https://davamcz.imgix.net/${organization.logo.key}?h=68`} />
      <Spacer y={1.5} />
      <Text>{organization.description}</Text>
      <Spacer y={0.5} />
      <Link href={organization.url} title={organization.name} color>
        {stripProtocol(organization.url)}
      </Link>
    </Container>
  </OrganizationCard>
)

const OrganizationCard = styled.div`
  width: 28.5714286%;
  box-shadow: ${({ theme }) => theme.shadow.box};
  margin-bottom: 36px;
  margin-right: 30px;
  &:nth-child(3n) {
    margin-right: 0;
  }
`
