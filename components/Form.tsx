import { Button } from "./Button"
import Spacer from "./Spacer"
import styled from "styled-components"
import { Container } from "./Container"

interface Props {
  children: any
  onSubmit: any
  center?: boolean
  buttonText?: string
  loading?: boolean
}

export const Form = ({ children, onSubmit, center, buttonText, loading }: Props) => {
  return (
    <StyledForm onSubmit={onSubmit} center={center}>
      {children}
      <Spacer/>
      <Container noWrapper row hcenter={center}>
        <Button loading={loading}>{buttonText ? buttonText : 'Odeslat'}</Button>
      </Container>
    </StyledForm>
  )
}


const StyledForm = styled.form<{center?: boolean}>`
  width: 100%;
`


