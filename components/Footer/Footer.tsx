import styled from 'styled-components'
import { Container } from '../Container'
import { Logo } from '../Logo'
import Text from '../Text'
import { Link } from '../Link'
import { SocialLinks } from '../SocialLinks'

export const Footer = () => (
  <FooterContainer>
    <Container row vcenter style={{ justifyContent: 'space-between' }}>
      <Logo />
      <Text>&copy; {new Date().getFullYear()} Davam.cz</Text>
      <Text>
        V případe problémů a dotazů nás kontaktujte na{' '}
        <Link external underline href="mailto:info@davam.cz">
          info@davam.cz
        </Link>
      </Text>
      <SocialLinks />
    </Container>
  </FooterContainer>
)

const FooterContainer = styled.footer`
  padding: ${({ theme }) => `${theme.sizes.lineHeight}px 0`};
  background: ${({ theme }) => theme.colors.lightWhite};
`
