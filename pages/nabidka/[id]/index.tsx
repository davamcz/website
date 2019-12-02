import { HelpContainer } from '../../../components/HelpContainer'
import { OrganizationsContainer } from '../../../components/OrganizationsContainer'
import { Container } from '../../../components/Container'
import Text from '../../../components/Text'
import Spacer from '../../../components/Spacer'
import { ButtonLink } from '../../../components/ButtonLink'
import { useOfferQuery } from '../../../generated/graphql'
import { useRouter } from 'next/router'
import { withApollo } from '../../../lib/apollo'
import { useState } from 'react'
import { AmountInput } from '../../../components/AmountInput'
import { Image } from '../../../components/Image'

export default withApollo(() => {
  const router = useRouter()

  const { data } = useOfferQuery({
    variables: { id: router.query.id as string },
  })

  const [amount, setAmount] = useState(1)

  const offer = data?.offer

  return (
    <>
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
              <AmountInput amount={amount} changeAmount={setAmount} />
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
