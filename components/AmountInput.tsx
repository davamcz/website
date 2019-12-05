import styled from 'styled-components'
import { Container } from './Container'
import { useCallback } from 'react'
import { SmallArrow } from './Icons/SmallArrow'

interface Props {
  amount: number
  changeAmount: (n: number) => void
  max: number
}

export const AmountInput = ({ amount, changeAmount, max }: Props) => {
  const changeValue = useCallback(
    (n: number) => {
      if (n > 0) {
        changeAmount(amount + n)
      } else if (amount > 1) {
        changeAmount(amount + n)
      }
    },
    [amount, changeAmount]
  )

  return (
    <Container row flex="0 0 auto">
      <StyledInput value={amount} type="number" />
      <Container flex="0 0 auto">
        <Button onClick={() => changeValue(1)} disabled={amount >= max}><SmallArrow/></Button>
        <Button onClick={() => changeValue(-1)} disabled={amount <= 1}><SmallArrow up={false}/></Button>
      </Container>
    </Container>
  )
}

const StyledInput = styled.input`
  padding: 12px;
  width: 48px;
  font-size: 16px;
  border: 1px solid #b5b5b5;
  border-right: 0;
  font-family: ${({ theme }) => theme.font.body};
  outline: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
  & {
    -moz-appearance: textfield; /* Firefox */
  }
`

const Button = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 22px;
  background: #f5f5f5;
  border: 1px solid #b5b5b5;
  outline: none;
  cursor: pointer;
  &:nth-child(2) {
    border-top: 0;
  }
  &:disabled {
    cursor: not-allowed;
  }
`
