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
  height: 60px;
  background: url('/logo.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  text-indent: -9999px;
`
