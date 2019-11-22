import styled from 'styled-components'
import { Container } from '../Container'
import { Logo } from '../Logo'
import Text from '../Text'
import { Link } from '../Link'
import { Facebook } from '../Icons/Facebook'
import { Twitter } from '../Icons/Twitter'
import Spacer from '../Spacer'
// import { Instagram } from '../Icons/Instagram'

export const Footer = () => (
  <FooterContainer>
    <Container row vcenter style={{ justifyContent: 'space-between' }}>
      <Logo />
      <Text>&copy; {new Date().getFullYear()} Davam.cz</Text>
      <Text>
        V případe problémů a dotazů nás kontaktujte na{' '}
        <Link external href="mailto:info@davam.cz">info@davam.cz</Link>
      </Text>
      <Container row flex="0 0 auto">
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
    </Container>
  </FooterContainer>
)

const FooterContainer = styled.footer`
  padding: ${({ theme }) => `${theme.sizes.lineHeight}px 0`};
  background: ${({ theme }) => theme.colors.lightWhite};
`
