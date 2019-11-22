import { Container } from '../Container'
import { ButtonLink } from '../ButtonLink'
import { Logo } from '../Logo'
import { Link } from '../Link'
import Spacer from '../Spacer'
import { AuthButton } from '../AuthButton'

export const Header = () => {
  return (
    <Container row style={{ justifyContent: 'space-between', padding: '24px 0' }} hcenter>
      <Logo />
      <Container row flex="0 0 auto">
        <Link href="/" title="Kontakt">
          Domů
        </Link> 
        <Spacer />
        {/*<Link href="/about" title="Jak to funguje">
          Jak to funguje
        </Link>
        <Link href="/about" title="Komu pomáhame">
          Komu pomáhame
        </Link>
        <Link href="/about" title="O nás">
          O nás
        </Link>*/}
        <Link href="/kontakt" title="Kontakt">
          Kontakt
        </Link> 
      </Container>
      <Container row flex="0 0 auto" vcenter>
        <AuthButton />
        {/* <Spacer x={0.5} />
        <ButtonLink href="/nabidka" secondary>
          Nabídka
        </ButtonLink>
        */}
        <Spacer x={0.5} />
        <ButtonLink href="/chci-darovat">Chci darovat</ButtonLink> 
      </Container>
    </Container>
  )
}