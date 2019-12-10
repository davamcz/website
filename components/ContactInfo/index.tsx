import styled from 'styled-components'
import { Container } from '../Container'
import { Link } from '../Link'
import { SocialLinks } from '../SocialLinks'
import Spacer from '../Spacer'
import Text from '../Text'

interface Props {
  maxWidth?: string
}

export const ContactInfo = ({ maxWidth = '730px' }: Props) => {
  return (
    <Container
      style={{
        width: '100%',
        maxWidth,
        paddingTop: '36px',
        paddingLeft: '62.5px',
      }}
    >
      <ContactInfoContainer>
        <Text>
          Máte nějaké dotazy, náměty, nápady? Napište nám! Využijte náš
          kontaktní formulář nebo oslovte konkrétního člověka z našeho týmu.
        </Text>
        <Spacer />
        <Text bold color="orange">
          Dávám.cz
        </Text>
        <Container>
          <Link external href="tel+420737875551">
            +420 737 875 551
          </Link>
          <Link external href="mailto:info@davam.cz">
            info@davam.cz
          </Link>
        </Container>
        <Spacer />
        <Text bold color="orange">
          Sledujte nás
        </Text>
        <Spacer y={0.5} />
        <SocialLinks />
      </ContactInfoContainer>
    </Container>
  )
}

const ContactInfoContainer = styled.article`
  padding: ${({ theme }) => `${theme.sizes.lineHeight}px 0`};
`
