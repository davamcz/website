import styled from 'styled-components'
import { InputStyles, Label } from './Input'
import { Container } from './Container'
import { FunctionComponent } from 'react'

interface Props {
  label?: string
  error?: string
}

export const TextArea: FunctionComponent<Props> = ({ label }) => {
  return (
    <Container full>
      {label && <Label>{label}</Label>}
      <StyledTextArea />
    </Container>
  )
}

const StyledTextArea = styled.textarea`
  ${InputStyles()};
  height: 180px;
  resize: none;
`
