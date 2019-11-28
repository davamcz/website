import { ChangeEvent } from 'react'
import styled, { css } from 'styled-components'
import { Container } from './Container'

interface Props {
  value: string
  name: string
  label?: string
  type?: string
  placeholder?: string
  onChange?: React.EventHandler<ChangeEvent<HTMLInputElement>>
  onBlur?: any
  error?: string
  disabled?: boolean
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
  disabled,
}: Props) => {
  return (
    <Container full>
      <Container row style={{ justifyContent: 'space-between' }}>
        {label && <Label>{label}</Label>}
        {error && <Error>{error}</Error>}
      </Container>
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        disabled={disabled}
      />
    </Container>
  )
}

export const Label = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 12px;
  font-weight: 700;
`

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.red};
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
  ${({ error, theme }) => (error ? `border-color: ${theme.colors.red}` : '')};
`
