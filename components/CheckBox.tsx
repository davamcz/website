import { CSSProperties, memo, useCallback } from 'react'
import styled from 'styled-components'

interface Props {
  checked: boolean
  name?: string
  onChange: (val: boolean) => void
  style?: CSSProperties
}

export const CheckBox = memo<Props>(({ checked, onChange, name, style }) => {
  const handleToggle = useCallback(() => {
    onChange(!checked)
  }, [checked, onChange])

  return (
    <Wrapper onClick={handleToggle} style={style}>
      <Input name={name} onChange={handleToggle} type="checkbox" />
      {checked && <Check />}
    </Wrapper>
  )
})

const Wrapper = styled.span`
  width: 18px;
  height: 18px;
  display: inline-flex;
  position: relative;
  user-select: none;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.grey};
`

const Input = styled.input`
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;
`

const SVG = styled.svg`
  position: absolute;
  top: 3px;
  left: 2px;
`

const Check = () => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="10"
    viewBox="0 0 13 10"
  >
    <path
      fill="none"
      fillRule="evenodd"
      stroke="#DBAC35"
      strokeWidth="2"
      d="M1 4.36L4.763 8 12 1"
    />
  </SVG>
)
