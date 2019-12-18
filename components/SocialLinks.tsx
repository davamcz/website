import { Container } from './Container'
import { Link } from './Link'
import { Facebook } from './Icons/Facebook'
import Spacer from './Spacer'
import { Twitter } from './Icons/Twitter'
import { Instagram } from './Icons/Instagram'

export const SocialLinks = () => (
  <Container row flex="0 0 auto">
    <Link external href="https://www.facebook.com/davamcz/">
      <Facebook />
    </Link>
    <Spacer x={0.5} />
    <Link
      external
      href="https://twitter.com/Davamcz"
      title="Davamcz Twitter"
    >
      <Twitter />
    </Link>
    <Spacer x={0.5} />
    <Link
      external
      href="https://www.instagram.com/davam.cz/"
      title="Davamcz Instagram"
    >
      <Instagram />
    </Link>
  </Container>
)
