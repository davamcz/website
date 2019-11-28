import { Container } from './Container'
import { Link } from './Link'
import { Facebook } from './Icons/Facebook'
import Spacer from './Spacer'
import { Twitter } from './Icons/Twitter'

export const SocialLinks = () => (
  <Container row flex="0 0 auto">
    <Link external href="https://www.facebook.com/fundlamb/" target="_blank">
      <Facebook />
    </Link>
    <Spacer x={0.5} />
    <Link
      external
      href="https://twitter.com/Davamcz"
      title="Davamcz Twitter"
      target="_blank"
    >
      <Twitter />
    </Link>
  </Container>
)
