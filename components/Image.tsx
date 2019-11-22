import styled from "styled-components"

export const Image = ({ src, maxWidth }: any) => {
  return <Img src={src} style={{ maxWidth }} />
}


const Img = styled.img`
  height:auto;
`