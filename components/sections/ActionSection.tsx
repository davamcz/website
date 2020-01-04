import { Title } from '../Title'
import { Container } from '../Container'
import Text from '../Text'
import Spacer from '../Spacer'
import { ButtonLink } from '../ButtonLink'
import { Card } from '../Card'

export const ActionSection = () => (
  <>
    <Container>
      <Title center description="Je to jednoduché">
        Rozhodli jste se zapojit?
      </Title>
      <Spacer x={1.5} />

      <Container direction={['column', 'column', 'row']}>
        <Card>
          <Container center>
            <Spacer y={2} />
            <Text
              h1
              center
              color="orange"
              as="h3"
              style={{ maxWidth: '330px' }}
            >
              Darujte svoji věc nebo službu
            </Text>
            <Spacer y={1.5} />
            <ButtonLink href="/vytvorit-nabidku">Vytvořit nabídku</ButtonLink>
            <Spacer y={2} />
          </Container>
        </Card>
        <Spacer />
        <Card>
          <Container center>
            <Spacer y={2} />

            <Text
              h1
              center
              color="orange"
              as="h3"
              style={{ maxWidth: '330px' }}
            >
              Pomozte koupí darované věci
            </Text>
            <Spacer y={1.5} />
            <ButtonLink secondary href="/nabidka">
              Zobrazit nabídky
            </ButtonLink>
            <Spacer y={2} />
          </Container>
        </Card>
      </Container>
    </Container>
    <Spacer y={2} />
  </>
)
