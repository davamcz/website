import styled from "styled-components"

interface Props {
  src: string
  maxWidth?: number
}


export const Image = ({ src, maxWidth }: Props) => {
  return <Img src={src} style={{ maxWidth }} />
}


const Img = styled.img`
  height:auto;
`