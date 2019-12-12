import styled from 'styled-components'

interface Props {
  src: string
  maxWidth?: number
}

export const Image = ({ src, maxWidth }: Props) => {
  return <Box><Img src={src} style={{ maxWidth }} /></Box>
}

const Box = styled.div`
flex: 1;
  width: 100%;
  height: auto;
`

const Img = styled.img`
  width: 100%;
`
