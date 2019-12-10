import styled from 'styled-components'
import { InputStyles, Label, Error } from './Input'
import { Container } from './Container'
import { FunctionComponent, ChangeEvent } from 'react'

interface Props {
  label?: string
  error?: string
  value: string
  name: string
  onChange: React.EventHandler<ChangeEvent<HTMLTextAreaElement>>
  onBlur?: any
}

export const TextArea: FunctionComponent<Props> = ({
  label,
  error,
  name,
  onChange,
  value,
}) => {
  return (
    <Container full>
      <Container row style={{ justifyContent: 'space-between' }}>
        {label && <Label>{label}</Label>}
        {error && <Error>{error}</Error>}
      </Container>
      <StyledTextArea
        name={name}
        value={value}
        onChange={onChange}
        error={error}
      />
    </Container>
  )
}

const StyledTextArea = styled.textarea<{ error?: string }>`
  ${InputStyles()};
  ${({ error, theme }) => (error ? `border-color: ${theme.colors.red}` : '')};
  height: 180px;
  resize: none;
`
