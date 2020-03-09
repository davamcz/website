import { Container } from '../components/Container'
import { Organizations } from '../components/Organizations'
import Spacer from '../components/Spacer'
import Text from '../components/Text'
import {
  OrganizationDetailFragment,
  OrganizationsQuery,
} from '../generated/graphql'
import { organizationsQuery } from '../graphql/queries'
import { initApolloClient } from '../lib/apollo'
import { ActionSection } from '../components/sections/ActionSection'

export interface OrganizationsProps {
  organizations: Array<OrganizationDetailFragment>
}

export default ({ organizations }: OrganizationsProps) => (
  <Container>
    <Text h1 color="salmon" style={{ maxWidth: '350px' }}>
      Komu společně pomáháme
    </Text>
    <Spacer y={2} />
    <Organizations organizations={organizations} />
    <Spacer y={2} />
    <ActionSection />
  </Container>
)

export async function getStaticProps() {
  const client = initApolloClient({})

  const {
    data: { organizations },
  } = await client.query<OrganizationsQuery>({ query: organizationsQuery })

  return {
    props: {
      organizations,
    },
  }
}
