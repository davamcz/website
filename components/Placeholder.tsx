import styled, { keyframes } from 'styled-components'

interface Props {
  width?: number
  height?: number
}

export const Placeholder = ({ height = 24, width = 24 }: Props) => (
  <Box height={height} width={width} />
)

const loading = keyframes`
  0% {
    background-position: 200% 50%;
  }
  100% {
    background-position: -200% 50%;
  }
`

const Box = styled.div<Props>`
  width: 100%;
  max-width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  background: #eaeaea;
  background: linear-gradient(
    270deg,
    #fafafa,
    #eaeaea,
    #eaeaea,
    #fafafa
  );
  background-size: 400% 400%;
  border-radius: 8px;
  animation: ${loading} 8s ease-in-out infinite;
`


