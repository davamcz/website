import React from 'react'
import styled from 'styled-components'

interface Props {}

export const Card: React.FC<Props> = ({ children }) => <Box>{children}</Box>

const Box = styled.div`
  box-shadow: ${({ theme }) => theme.shadow.box};
`
