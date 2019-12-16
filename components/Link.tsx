import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

interface Props {
  href: string
  title?: string
  as?: string
  external?: boolean
  target?: string
  color?: boolean
  bold?: boolean
  showActive?: boolean
  onClick?: () => void
}

export const Link: React.FC<Props> = ({
  children,
  href,
  as,
  title,
  external,
  target,
  color,
  bold,
  showActive,
  onClick
}) => {
  const router = useRouter()

  if (external) {
    return (
      <StyledLink
        title={title}
        target={target ? target : '_blank'}
        href={href}
        bold={bold}
        colored={color}
        onClick={onClick}
      >
        {children}
      </StyledLink>
    )
  }

  return (
    <NextLink href={href} as={as} passHref>
      <StyledLink
        title={title}
        target={target}
        colored={color}
        bold={bold}
        active={showActive && href === router.pathname}
        onClick={onClick}
      >
        {children}
      </StyledLink>
    </NextLink>
  )
}

interface StyledLinkProps {
  colored?: boolean
  bold?: boolean
  active?: boolean
}

const StyledLink = styled.a<StyledLinkProps>`
  display: inline-flex;
  align-items: center;
  color: ${({ theme, colored, active }) =>
    active ? theme.colors.orange : colored ? theme.colors.orange : 'inherit'};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-decoration: none;
  cursor: pointer;
  translate: color 200ms ease-in;

  &:hover {
    color: ${({ theme, colored }) =>
      colored ? theme.colors.orange : 'inherit'};
    text-decoration: underline;
  }
`
