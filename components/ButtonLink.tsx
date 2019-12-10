import React, { CSSProperties } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

interface Props {
  href?: string
  as?: string
  secondary?: boolean
  title?: string
  noShadow?: boolean
  style?: CSSProperties
}

export const ButtonLink: React.FC<Props> = ({
  children,
  href,
  as,
  title,
  secondary,
  noShadow,
  style,
}) => {
  const Button = () => (
    <StyledLink title={title} style={style}>
      {children}
    </StyledLink>
  )

  if (href) {
    return (
      <Link href={href} as={as} passHref>
        <StyledLink
          secondary={secondary}
          noShadow={noShadow}
          title={title}
          style={style}
        >
          {children}
        </StyledLink>
      </Link>
    )
  }
  return <Button />
}

interface LinkProps {
  secondary?: boolean
  noShadow?: boolean
}

const StyledLink = styled.a<LinkProps>`
  padding: 12px;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme, secondary }) =>
    secondary ? theme.colors.black : theme.colors.white};
  border: 1px solid
    ${({ theme, secondary }) =>
      secondary ? theme.colors.black : theme.colors.salmon};
  background: ${({ theme, secondary }) =>
    secondary ? theme.colors.white : theme.colors.salmon};
  box-shadow: ${({ theme, secondary }) => !secondary && theme.shadow.button};
  font-weight: 700;
`
