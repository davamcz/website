import styled from 'styled-components'
import Text from '../Text'
import Spacer from '../Spacer'
import { Twitter } from '../Icons/Twitter';
import { Facebook } from '../Icons/Facebook';
// import { Instagram } from '../Icons/Instagram';
import { Link } from '../Link';
import { Container } from '../Container'

interface Props {
  maxWidth?: string
}

export const ContactInfo = ({ maxWidth = '730px' }: Props) => {
  return (
    <Container style={{ width: '100%', maxWidth, paddingTop: '36px', paddingLeft: '62.5px' }}>
      <ContactInfoContainer>
        <Text>
          Máte nějaké dotazy, náměty, nápady? Napište nám! Využijte náš
          kontaktní formulář nebo oslovte konkrétního člověka z našeho týmu.
        </Text>
        <Spacer />
        <Text bold color="orange">
          Dávám.cz
        </Text>
        <Text>
          +420 737 875 551
        </Text>
        <Text>
          info@davam.cz
        </Text>
        <Spacer />
        <Text bold color="orange">
          Sledujte nás
        </Text>
        <Container row flex="0 0 auto" style={{ paddingTop: '12px' }}>
          <Link external href="https://www.facebook.com/fundlamb/" target="_blank">
            <Facebook />
          </Link>
          <Spacer/>
          <Link external href="https://twitter.com/Davamcz" title="Davamcz Twitter" target="_blank">
            <Twitter />
          </Link>
          {/* <Link href="">
            <Instagram />
          </Link> */}
        </Container>
      </ContactInfoContainer>
    </Container>
  )
}

const ContactInfoContainer = styled.article`
  padding: ${({ theme }) => `${theme.sizes.lineHeight}px 0`};
`
