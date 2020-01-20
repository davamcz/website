import React, { CSSProperties } from 'react'
import styled from 'styled-components'

interface Props {
  style?: CSSProperties
}

export const Card: React.FC<Props> = ({ children, style }) => <Box style={style}>{children}</Box>

const Box = styled.div`
  flex: 1;
  box-shadow: ${({ theme }) => theme.shadow.box};
  background: ${({  theme})  => theme.colors.white};
`
