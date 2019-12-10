import { ChangeEvent } from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import { Error, Label } from './Input'

interface Props {
  name?: string
  children: React.ReactNode
  label?: string
  onChange?: React.EventHandler<ChangeEvent<HTMLSelectElement>>
  onBlur?: any
  value: string
  error?: string
  defaultValue?: any
}

export const Select = ({
  name,
  children,
  label,
  onBlur,
  onChange,
  value,
  error,
}: Props) => (
  <Container>
    <Container row style={{ justifyContent: 'space-between' }}>
      {label && <Label>{label}</Label>}
      {error && <Error>{error}</Error>}
    </Container>
    <SelectContainer error={error}>
      <select name={name} onChange={onChange} onBlur={onBlur} value={value}>
        {children}
      </select>
    </SelectContainer>
  </Container>
)

const SelectContainer = styled.div<{ error?: string }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  appearance: none;
  display: inline-flex;
  outline: none;
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.darkGrey)};
  height: 48px;

  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 100%;
    border: none;
    box-shadow: none;
    background: transparent;
    background-image: none;
    width: 100%;
    padding: 0 20px;
    text-transform: none;
    font-size: 16px;
    /* Breaks Safari otherwise */
    text-rendering: initial;
  }

  select:-moz-focusing {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }

  select:focus {
    outline: none;
  }
`
