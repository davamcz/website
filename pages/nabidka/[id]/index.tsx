import { useRouter } from 'next/router'
import { useState } from 'react'
import { AmountInput } from '../../../components/AmountInput'
import { ButtonLink } from '../../../components/ButtonLink'
import { Container } from '../../../components/Container'
import { HelpContainer } from '../../../components/HelpContainer'
import { Image } from '../../../components/Image'
import { MetaTags } from '../../../components/MetaTags'
import { OrganizationsContainer } from '../../../components/OrganizationsContainer'
import Spacer from '../../../components/Spacer'
import Text from '../../../components/Text'
import { useOfferQuery } from '../../../generated/graphql'
import { withApollo } from '../../../lib/apollo'


export default withApollo(() => {
  const router = useRouter()

  const { data } = useOfferQuery({
    variables: { id: router.query.id as string },
  })

  const [amount, setAmount] = useState(1)

  const offer = data?.offer

  return (
    <>
      <MetaTags title={`Davam.cz - ${offer?.name} za ${offer?.price}Kč pro ${offer?.beneficator.name}`} description={offer?.description as string} image={`https://davamcz.imgix.net/${offer?.gallery.images && offer.gallery.images[0].key}}`} />
      <Container row style={{ justifyContent: 'space-between' }}>
        <Container flex="0 0 auto">
          {offer && (
            <Image
              src={`https://davamcz.imgix.net/${offer.gallery.images &&
                offer.gallery.images[0].key}?w=505`}
            />
          )}
        </Container>
        <Container style={{ maxWidth: '475px' }}>
          <Spacer y={2} />
          <Text h1>{offer?.name}</Text>
          <Spacer />
          <Text bold>Tento produkt daruje: {offer?.user.shortName}</Text>
          <Spacer />
          <Text>{offer?.description}</Text>
          <Spacer />
          {offer?.transport && offer?.transport !== '' && <Container row flex="0"><Text bold>Doprava:</Text>&nbsp;<Text>{offer?.transport}</Text></Container>}
          <Text color="orange" bold>
            Příspěvek poputuje na: {offer?.beneficator.name}
          </Text>
          <Spacer y={1.5} />
          <Container row vcenter style={{ justifyContent: 'space-between' }} flex="0">
            <Text bold>{(offer?.price as number) * amount} Kč</Text>
            <Container row center>
              <AmountInput amount={amount} changeAmount={setAmount} max={offer?.remainingAmount || 1} />
              <Spacer />
              <Text bold>ks</Text>
            </Container>
            <ButtonLink
              href={`/nabidka/[id]/koupit?mnozstvi=${amount}`}
              as={`/nabidka/${offer?.id}/koupit?mnozstvi=${amount}`}
            >
              Darovat peníze
            </ButtonLink>
          </Container>
        </Container>
      </Container>
      <Spacer y={2} />
      <HelpContainer />
      <OrganizationsContainer />
    </>
  )
})
