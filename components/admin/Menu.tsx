import { Container } from '../Container'
import { useUserQuery } from '../../generated/graphql'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Link from 'next/link'
import Spacer from '../Spacer'
import Text from '../Text'
import { Card } from '../Card'

export const Menu = () => {
  const { data } = useUserQuery()
  const { pathname } = useRouter()

  const isProfile = pathname === '/profil'
  const isOffer = pathname === '/nabidky'

  const User = () =>
    data && data.user ? (
      <>
        <Text bold>{data.user.fullName}</Text>
      </>
    ) : (
      <></>
    )

  return (
    <Card>
      <Container hcenter>
        <User />
        <Spacer />
        <MenuLink href="/profil" active={isProfile}>
          Základní informace
        </MenuLink>
        <Spacer y={0.5} />
        <MenuLink href="/nabidky" active={isOffer}>
          Vaše nabídky
        </MenuLink>
      </Container>
    </Card>
  )
}

interface Props {
  href: string
  children: React.ReactNode
  active: boolean
}

const MenuLink = ({ href, children, active }: Props) => (
  <Link href={href} passHref>
    <StyledLink active={active}>{children}</StyledLink>
  </Link>
)

const StyledLink = styled.a<{
  active: boolean
}>`
  text-decoration: none;
  font-weight: 700;
  color: ${({ active, theme }) =>
    active ? theme.colors.salmon : theme.colors.darkGrey};
`
