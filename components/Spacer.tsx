import React from 'react'
import styled, { css } from 'styled-components'

interface Props {
  x?: number
  y?: number
  className?: string
  inline?: boolean
  padding?: boolean
}

export const Spacer: React.FC<Props> = ({
  x = 1,
  y = 1,
  className,
  inline,
  padding,
}) => {
  return (
    <SpacerBlock
      className={className}
      padding={padding}
      x={x}
      y={y}
      inline={inline}
    />
  )
}

export default Spacer

interface StyledProps {
  x: number
  y: number
  inline?: boolean
  padding?: boolean
}

const SpacerBlock = styled.span<StyledProps>`
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
  width: 1px;
  height: 1px;
  margin-left: ${({ x }) => `calc(${x * 24}px - 1px)`};
  margin-top: ${({ inline, y }) => (inline ? '0' : `calc(${y * 24}px - 1px)`)};

  ${({ padding, x, y, inline }) =>
    padding &&
    css`
      margin: 0;
      padding-left: calc(${x * 24}px - 1px);
      padding-top: ${inline ? '0' : `calc(${y * 24}px - 1px)`};
    `}
`
