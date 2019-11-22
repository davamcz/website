import { ChangeEvent } from 'react'
import styled, { css } from 'styled-components'
import { Container } from './Container'

interface Props {
  value: string
  name: string
  label?: string
  type: any
  placeholder: string
  onChange: React.EventHandler<ChangeEvent<HTMLInputElement>>
  onBlur: any
  error?: string
}

export const Input = ({
  value,
  label,
  name,
  onChange,
  onBlur,
  type,
  placeholder,
  error,
}: Props) => {
  return (
    <Container full>
      {label && <Label>{label}</Label>}
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}

export const Label = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 12px;
  font-weight: 700;
`

const Error = styled.span`
  color: ${({theme}) => theme.colors.red};
`

export const InputStyles = () => css`
  outline: none;
  padding: 12px 20px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.font.body};
  border: 1px solid ${({ theme }) => theme.colors.black};
`

const StyledInput = styled.input<{ error?: string }>`
  ${InputStyles()}
  ${({ error, theme }) => error ? `border-color: ${theme.colors.red}`: ''};
`


