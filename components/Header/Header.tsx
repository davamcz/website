import { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import { ButtonLink } from '../ButtonLink'
import { Container } from '../Container'
import { Link } from '../Link'
import { Logo } from '../Logo'
import Spacer from '../Spacer'
// import { AuthButton } from '../AuthButton'

export const Header = () => {
  const [active, setActive] = useState(false)

  const toogleMenu = useCallback(() => {
    setActive(!active)
  }, [active, setActive])

  return (
    <Container
      row
      style={{ justifyContent: 'space-between', padding: '24px 0' }}
      hcenter
    >
      <Logo />
      <Menu active={active}>
        <MiddleMenu direction={['column', 'column', 'row']} vcenter>
          <Link href="/" title="Kontakt" showActive>
            Domů
          </Link>
          <Spacer />

          <Link href="/komu-pomahame" title="Komu pomáhame" showActive>
            Komu pomáhame
          </Link>
          <Spacer x={0.5} />

          <Link href="/kontakt" title="Kontakt" showActive>
            Kontakt
          </Link>
        </MiddleMenu>
        <Container
          direction={['column', 'column', 'row']}
          flex="0 0 auto"
          vcenter
        >
          <Spacer x={0.5} />
          <ButtonLink href="/nabidka" secondary>
            Zobrazit nabídku
          </ButtonLink>

          <Spacer x={0.5} />
          <ButtonLink href="/vytvorit-nabidku">Vytvořit nabídku</ButtonLink>
        </Container>
      </Menu>
      <MenuButton active={active} onClick={toogleMenu}>
        X
      </MenuButton>
    </Container>
  )
}

const MiddleMenu = styled(Container)`
  flex: 1 0 auto;

  @media screen and (max-width: 960px) {
    flex: 0 0 auto;
  }
`

const Menu = styled.div<{ active: boolean }>`
  z-index: 9;
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 960px) {
    display: none;
    ${({ active }) =>
      active &&
      css`
        display: flex;
        flex-flow: column;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 40px;
      `}
  }
`

const MenuButton = styled.div<{ active: boolean }>`
  display: none;
  z-index: 10;
  @media screen and (max-width: 960px) {
    display: block;;
  }

    position: relative;
    width: 24px;
    height: 24px;

    background: transparent;
    border-top: 3px solid;
    border-bottom: 3px solid;

    color: ${({ theme }) => theme.colors.salmon};
    font-size: 0;

    transition: all 125ms ease-in;

    &:before,
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 3px;

      position: absolute;
      top: 50%;
      left: 50%;

      background: currentColor;

      transform: translate(-50%, -50%);
      transition: transform 125ms ease-in;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.darkSalmon};
  }

  
  ${({ active }) =>
    active &&
    css`
      border-color: transparent;
      &:before {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    `}
`
