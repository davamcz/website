import styled from 'styled-components'

interface Props {
  active: boolean
  children: React.ReactNode
  onClick: () => void
}

export const SelectButton = ({ children, active, onClick }: Props) => (
  <StyledButton onClick={onClick} active={active}>{children}</StyledButton>
)

const StyledButton = styled.div<{ active: boolean }>`
  padding: 12px 18px;
  cursor: pointer;
  font-weight: bold;
  color: ${({ active, theme}) => active ? theme.colors.darkGrey : theme.colors.orange};
  border: 1px solid ${({ active, theme}) => active ? theme.colors.darkGrey : theme.colors.orange};
`
