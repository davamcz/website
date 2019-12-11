import { memo } from 'react'
import styled, { keyframes } from 'styled-components'

interface Props {
  width?: number
  height?: number
  keepAspectRatio?: boolean
}

export const Placeholder = memo<Props>(
  ({ height = 24, width = 24, keepAspectRatio = false }) => (
    <Box heightSize={height} widthSize={width} keepAspectRatio={keepAspectRatio} />
  )
)

const loading = keyframes`
  0% {
    background-position: 200% 50%;
  }
  100% {
    background-position: -200% 50%;
  }
`

const Box = styled.div<{
  widthSize: number
  heightSize: number
  keepAspectRatio: boolean
}>`
  display: block;
  width: 100%;
  max-width: ${({ widthSize }) => widthSize}px;
  height: auto;
  position: relative;
  overflow: hidden;
  padding-top: ${({ keepAspectRatio, widthSize, heightSize }) =>
    keepAspectRatio ? `${100 / (widthSize / heightSize)}%` : `${heightSize}px`};
  background: #eaeaea;
  margin-top: ${({ heightSize }) => heightSize < 24 ? (24 - heightSize) / 2 : 0}px;
  background: linear-gradient(270deg, #fafafa, #eaeaea, #eaeaea, #fafafa);
  background-size: 400% 400%;
  border-radius: 8px;
  animation: ${loading} 8s ease-in-out infinite;
`
