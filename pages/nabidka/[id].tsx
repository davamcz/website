import { HelpContainer } from '../../components/HelpContainer'
import { OrganizationsContainer } from '../../components/OrganizationsContainer'
import { Container } from '../../components/Container'
import Text from '../../components/Text'
import Spacer from '../../components/Spacer'
import { ButtonLink } from '../../components/ButtonLink'
import { paymentLink } from '../../lib/paymentLink'

export default () => {
  const {
    name,
    user: { fullName },
    description,
    price,
    beneficator: { name: beneficatorName },
  } = {
    name: 'Kurz fotografie Brno',
    user: { fullName: 'Jarmila S.' },
    description: 'dsadasda',
    price: 150,
    beneficator: { name: 'Armada spasy' },
  }

  return (
    <>
      <Container row>
        <Container>Gallery</Container>
        <Container>
          <Text h1>{name}</Text>
          <Spacer />
          <Text bold>Tento produkt daruje: {fullName}</Text>
          <Spacer />
          <Text>{description}</Text>
          <Spacer />
          <Text color="orange" bold>
            Příspěvek poputuje na: {beneficatorName}
          </Text>
          <Container row vcenter style={{ justifyContent: 'space-between' }}>
            <Text bold>{price} Kč</Text>
            <ButtonLink href={paymentLink()} as={''}>
              Darovat peníze
            </ButtonLink>
          </Container>
        </Container>
      </Container>
      <HelpContainer />
      <OrganizationsContainer />
    </>
  )
}
