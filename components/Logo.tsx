import Link from 'next/link'
import styled from 'styled-components'

export const Logo = () => (
  <Link href="/" passHref>
    <LogoText title="Davam">Davam</LogoText>
  </Link>
)

const LogoText = styled.a`
  display: block;
  width: 140px;
  height: 44px;
  background: url('/logo.svg');
  background-size: 100%;
  text-indent: -9999px;
`
