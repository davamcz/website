import React from 'react'
import styled from 'styled-components'
import Text from './Text'

interface Props {
  children: React.ReactNode
}

const Box = styled.div`
  border: 2px solid red;
  padding: 13px;
  background: floralwhite;
`

export const Message = ({ children }: Props) => (
  <Box>
    <Text bold>{children}</Text>
  </Box>
)
