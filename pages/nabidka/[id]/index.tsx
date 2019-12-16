import { useRouter } from 'next/router'
import { useState } from 'react'
import { AmountInput } from '../../../components/AmountInput'
import { ButtonLink } from '../../../components/ButtonLink'
import { Container } from '../../../components/Container'
import { Gallery } from '../../../components/Gallery'
import { HelpContainer } from '../../../components/HelpContainer'
import { MetaTags } from '../../../components/MetaTags'
import { OrganizationsContainer } from '../../../components/OrganizationsContainer'
import { Placeholder } from '../../../components/Placeholder'
import Spacer from '../../../components/Spacer'
import Text from '../../../components/Text'
import { useOfferQuery } from '../../../generated/graphql'
import { withApollo } from '../../../lib/apollo'

export default withApollo(
  () => {
    const router = useRouter()

    const { data, loading } = useOfferQuery({
      variables: { id: router.query.id as string },
    })

    const [amount, setAmount] = useState(1)

    const offer = data?.offer

    console.log(offer?.description)

    return (
      <>
        {offer &&
          <MetaTags
            title={`Davam.cz - ${offer?.name} za ${offer?.price}Kč pro ${offer?.beneficator.name}`}
            description={offer?.description as string}
            image={`https://davamcz.imgix.net/${offer?.gallery.images &&
              offer.gallery.images[0].key}`}
          />
        }
        <Spacer y={2} />
        <Container
          direction={['column', 'column', 'row']}
          style={{ justifyContent: 'space-between' }}
        >
          <Gallery
            loading={loading}
            images={offer?.gallery.images as Array<any>}
          />
          <Container style={{ maxWidth: '475px' }}>
            {loading ? (
              <>
                <Placeholder height={40} width={200} />
                <Spacer x={0.5} />

                <Placeholder height={16} width={250} />
                <Spacer />
                <Placeholder height={16} width={240} />
                <Placeholder height={16} width={260} />
                <Placeholder height={16} width={230} />
              </>
            ) : (
              <>
                <Text h1>{offer?.name}</Text>
                <Spacer x={0.5} />
                <Text bold>Tento produkt daruje: {offer?.user.shortName}</Text>
                <Spacer />
                <Text>
                  {offer?.description.split('\n').map(text => (
                    <>
                      {text}
                      <br />
                    </>
                  ))}
                </Text>
                <Spacer />
                {offer?.transport && offer?.transport !== '' && (
                  <Container row flex="0 0 auto">
                    <Text bold>Doprava:</Text>&nbsp;
                    <Text>{offer?.transport}</Text>
                  </Container>
                )}
                <Text color="orange" bold>
                  Příspěvek poputuje na: {offer?.beneficator.name}
                </Text>
                <Spacer y={1.5} />
                <Container
                  row
                  vcenter
                  style={{ justifyContent: 'space-between' }}
                  flex="0"
                >
                  <Text bold>{(offer?.price as number) * amount} Kč</Text>
                  <Container row center>
                    <AmountInput
                      amount={amount}
                      changeAmount={setAmount}
                      max={offer?.remainingAmount || 1}
                    />
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
              </>
            )}
          </Container>
        </Container>
        <Spacer y={2} />
        <HelpContainer />
        <OrganizationsContainer />
      </>
    )
  },
  { ssr: true }
)
