import gql from 'graphql-tag'
import { useRouter } from 'next/router'
import { Container } from '../components/Container'
import { Section } from '../components/Section'
import Spacer from '../components/Spacer'
import Text from '../components/Text'
import { useGetTransactionStatusQuery } from '../generated/graphql'
import { withApollo } from '../lib/apollo'

export const transactionStatus = gql`
  query getTransactionStatus($id: ID!) {
    getTransactionStatus(id: $id) {
      status
    }
  }
`

export default withApollo(
  () => {
    const router = useRouter()

    useGetTransactionStatusQuery({
      variables: { id: router.query.transaction_id as string },
      skip: !router.query.transaction_id,
    })

    return (
      <Section>
        <Container style={{ maxWidth: '420px' }}>
          <Spacer y={4} />
          <Text h1 color="salmon">
            Děkujeme za darované peníze
          </Text>
          <Spacer />
          <Text>
            Vaše platba proběhla úspěšně! Vaším darem jste udělali radost hned
            dvakrát - dobromanovi, který produkt nabídl, a neziskové organizaci,
            která nyní obdržela celou vaši částku. Děkujeme a věříme, že portálu
            davam.cz opět brzy využijete!
          </Text>
        </Container>
      </Section>
    )
  },
  { ssr: false }
)
