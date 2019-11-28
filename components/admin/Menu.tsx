import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from '../Container'
import { useUserQuery } from '../../generated/graphql'
import Spacer from '../Spacer'
import Text from '../Text'
import { Card } from '../Card'
import { SmallArrow } from '../Icons/SmallArrow'

export const Menu = () => {
  const { data } = useUserQuery()
  const { pathname } = useRouter()

  const isProfile = pathname === '/profil'
  // const isOffer = pathname === '/nabidky'

  const User = () =>
    data && data.user ? (
      <>
        <Avatar src="/no-avatar.svg" />
        <Spacer />
        <Text bold>{data.user.fullName}</Text>
      </>
    ) : (
      <></>
    )

  return (
    <Container flex="0 0 auto">
      <Spacer y={2} />
      <Card>
        <Container hcenter style={{ width: '285px' }}>
          <Spacer />
          <User />
          <Spacer />
          <MenuLink href="/profil" active={isProfile}>
            Základní informace
          </MenuLink>
          <Spacer y={0.5} />
          {/* <MenuLink href="/nabidky" active={isOffer}>
          Vaše nabídky
        </MenuLink> */}
          <Spacer />
        </Container>
      </Card>
    </Container>
  )
}

interface Props {
  href: string
  children: React.ReactNode
  active: boolean
}

const MenuLink = ({ href, children, active }: Props) => (
  <Container row vcenter>
    <SmallArrow />
    <Spacer x={0.5} />
    <Link href={href} passHref>
      <StyledLink active={active}>{children}</StyledLink>
    </Link>
  </Container>
)

const StyledLink = styled.a<{
  active: boolean
}>`
  text-decoration: none;
  font-weight: 700;
  color: ${({ active, theme }) =>
    active ? theme.colors.salmon : theme.colors.darkGrey};
`

const Avatar = styled.img`
  margin-top: -70px;
`
