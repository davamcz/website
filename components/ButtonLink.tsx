import Link from 'next/link'
import React, { CSSProperties } from 'react'
import { StyledButton } from './Button'

interface Props {
  href: string
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
  return (
    <Link href={href} as={as} passHref>
      <StyledButton
        secondary={secondary}
        noShadow={noShadow}
        title={title}
        style={style}
        as="a"
      >
        {children}
      </StyledButton>
    </Link>
  )
}
