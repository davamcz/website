import NextLink from 'next/link'
import React from 'react'
import styled from 'styled-components'

interface Props {
  href: string
  title?: string
  as?: string
  external?: boolean
  underline?: boolean
  target?: string
  color?: boolean
  bold?: boolean
}

export const Link: React.FC<Props> = ({
  children,
  href,
  as,
  title,
  external,
  underline,
  target,
  color,
  bold,
}) => {
  if (external) {
    return (
      <StyledLink
        title={title}
        underline={underline}
        target={target}
        href={href}
        bold={bold}
        colored={color}
      >
        {children}
      </StyledLink>
    )
  }
  return (
    <NextLink href={href} as={as} passHref>
      <StyledLink
        title={title}
        underline={underline}
        target={target}
        colored={color}
        bold={bold}
      >
        {children}
      </StyledLink>
    </NextLink>
  )
}

interface StyledLinkProps {
  underline?: boolean
  colored?: boolean
  bold?: boolean
}

const StyledLink = styled.a<StyledLinkProps>`
  display: inline-flex;
  align-items: center;
  color: ${({ theme, colored }) => (colored ? theme.colors.orange : 'inherit')};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  text-decoration: none;
  cursor: pointer;
  translate: color 200ms ease-in;

  &:hover {
    color: ${({ theme, colored }) =>
      colored ? theme.colors.orange : 'inherit'};
    text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  }
`
