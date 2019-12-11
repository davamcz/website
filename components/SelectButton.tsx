import styled from 'styled-components'
import Spacer from './Spacer'

interface Props {
  active: boolean
  children: React.ReactNode
  onClick: () => void
}

export const SelectButton = ({ children, active, onClick }: Props) => (
  <StyledButton onClick={onClick} active={active}>
    <Active active={active} /> <Spacer x={0.5} />
    {children}
  </StyledButton>
)

const StyledButton = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 18px;
  cursor: pointer;
  font-weight: bold;
  color: ${({ active, theme }) =>
    active ? theme.colors.darkGrey : theme.colors.grey};
  border: 1px solid
    ${({ active, theme }) => (active ? theme.colors.orange : theme.colors.grey)};
`

const Active = styled.div<Pick<Props, 'active'>>`
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid
    ${({ theme, active }) => (active ? theme.colors.orange : theme.colors.grey)};
  border-radius: 100%;

  &:after {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    display: inline-block;
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 100%;

    background: ${({ theme, active }) =>
      active ? theme.colors.orange : 'transparent'};
  }
`
