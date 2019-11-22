import styled, { keyframes } from 'styled-components'
import { Colors } from '../types/styled'

interface Props {
  height?: number
  size?: number
  color?: Colors
}

export const Loading = ({ height, color, size = 8 }: Props) => (
  <StyledLoading color={color} height={height} size={size}>
    <span />
    <span />
    <span />
  </StyledLoading>
)

const blink = keyframes`
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
`

const StyledLoading = styled.span<Props>`
  display: inline-flex;
  align-items: center;
  height: ${({ height }) => (height ? `${height}px` : 'auto')};

  span {
    animation-name: ${blink};
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    border-radius: 50%;
    background-color: ${({ theme, color }) =>
      color ? theme.colors[color] : theme.colors.darkGrey};
    display: inline-block;
    margin: 0 1px;
  }

  span:nth-of-type(2) {
    animation-delay: 0.2s;
  }

  span:nth-of-type(3) {
    animation-delay: 0.4s;
  }
`
