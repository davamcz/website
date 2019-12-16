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
      <Link external href={organization.url} title={organization.name} color>
        {stripProtocol(organization.url)}
      </Link>
    </Container>
  </OrganizationCard>
)

const OrganizationCard = styled.div`
  width: 32%;
  box-shadow: ${({ theme }) => theme.shadow.box};
  margin-bottom: 36px;
  margin-right: 2%;
  &:nth-child(3n) {
    margin-right: 0;
  }

  @media screen and (min-width: 601px) and (max-width: 960px) {
    width: 48%;
    margin-right: 4%;
    &:nth-child(3n) {
      margin-right: 4%;
    }

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-right: 0;

    &:nth-child(3n),
    &:nth-child(2n) {
      margin-right: 0;
    }
  }
`
