import { ChangeEvent, memo } from 'react'
import styled, { css } from 'styled-components'
import { Container } from './Container'
import Spacer from './Spacer'
import { Tooltip } from './Tooltip'

interface Props {
  value: any
  name: string
  label?: string
  type?: string
  placeholder?: string
  onChange?: React.EventHandler<ChangeEvent<HTMLInputElement>>
  onBlur?: any
  error?: string
  disabled?: boolean
  tooltip?: string
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
  tooltip,
}: Props) => {
  return (
    <Container full>
      <Container row style={{ justifyContent: 'space-between' }}>
        {label && (
          <Container row vcenter>
            <Label tooltip={tooltip}>{label}</Label>
          </Container>
        )}
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

export const Label = memo<{ children: React.ReactNode; tooltip?: string }>(
  ({ children, tooltip }) => (
    <Container row vcenter style={{ marginBottom: '16px' }}>
      <StyledLabel>{children}</StyledLabel>
      {tooltip && (
        <>
          <Spacer x={0.5} />
          <Tooltip message={tooltip} />
        </>
      )}
    </Container>
  )
)

const StyledLabel = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.orange};
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
