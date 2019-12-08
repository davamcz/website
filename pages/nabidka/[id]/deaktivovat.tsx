import { useRouter } from 'next/router'
import {  } from '../../../generated/graphql'
import { withApollo } from "../../../lib/apollo"
import { Section } from '../../../components/Section'
import Text from '../../../components/Text'


export default withApollo(() => {
  const router = useRouter()
  const offerId = router.query.id
  const confirmationHash = router.query.ch

  console.log({offerId, confirmationHash})
  return (
    <Section>
      <Text>Ahoj</Text>
    </Section>
  )
})