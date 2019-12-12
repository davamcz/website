import styled from 'styled-components'
import { Container } from '../Container'
import { Link } from '../Link'
import { Logo } from '../Logo'
import { SocialLinks } from '../SocialLinks'
import Text from '../Text'

export const Footer = () => (
  <FooterContainer>
    <Container center style={{ justifyContent: 'space-between' }} direction={['column', 'column', 'row']}>
      <Logo />
      <Text>&copy; {new Date().getFullYear()} Davam.cz</Text>
      <Text center>
        V případe problémů a dotazů nás kontaktujte na{' '}
        <Link external color href="mailto:info@davam.cz">
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
