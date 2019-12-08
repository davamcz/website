import { useRouter } from 'next/router'
import { useChangeActiveStateOfferMutation, useOfferQuery } from '../../../generated/graphql'
import { withApollo } from "../../../lib/apollo"
import { Section } from '../../../components/Section'
import { Container } from '../../../components/Container'
import Spacer from '../../../components/Spacer'
import Text from '../../../components/Text'
import { Button } from '../../../components/Button'


export default withApollo(() => {
  const router = useRouter()
  
  const offerId = router.query.id as string
  const confirmationHash = router.query.ch as string
  const { data: offerData } = useOfferQuery({
    variables: { id: offerId },
  })
  const offer = offerData?.offer
  const isActive = offer?.active
  const [changeActiveStateOfferMutation, { loading }] = useChangeActiveStateOfferMutation()
  const values = {
    offerId,
    confirmationHash,
    active: !isActive
  }
  return (
    <Section>
      <Container style={{ maxWidth: '420px' }}>
        <Spacer y={4} />
        <Text h1 color="black">
          {isActive
            ? `Deaktivace nabídky ${offer?.name}`
            : `Nabídka ${offer?.name} není aktivní`}
        </Text>
        <Spacer />
        {isActive && 
          <Text>
            Rozhodli jste se deaktivovat svou nabídku. Tato nabídka nebude nadále viditelná v našem 
            katalogu a nebude možné za ni darovat neziskovkám. Pokud se rozhodnete pro opětovnou 
            <strong> aktivaci</strong>, využijte, prosím, opět odkaz v e-mailu.
          </Text>
        }
        {!isActive && 
          <Text>
            Tato nabídka není aktivní. Přejete si ji znovu aktivovat?
          </Text>
        }

        <Spacer />
        <Button
        loading={loading}
        onClick={() => changeActiveStateOfferMutation({ variables: values })}
      >
        {isActive ? 'Deaktivovat!' : 'Aktivovat!'}
      </Button>

      </Container>
    </Section>
  )
})