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
}

export const Link: React.FC<Props> = ({
  children,
  href,
  as,
  title,
  external,
  underline,
  target,
}) => {
  if (external) {
    return (
      <StyledLink
        title={title}
        underline={underline}
        target={target}
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
      >
        {children}
      </StyledLink>
    </NextLink>
  )
}

interface StyledLinkProps {
  underline?: boolean
  color?: boolean
}

const StyledLink = styled.a<StyledLinkProps>`
  display: inline-flex;
  align-items: center;
  color: ${({ theme, color }) => (color ? theme.colors.orange : 'inherit')};
  text-decoration: none;
  cursor: pointer;
  translate: color 200ms ease-in;

  &:hover {
    color: ${({ theme, color }) => (color ? theme.colors.orange : 'inherit')};
    text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  }
`
