import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Loading } from './Loading'

interface Props {
  secondary?: boolean
  noShadow?: boolean
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

export const Button: FunctionComponent<Props> = ({
  children,
  secondary,
  disabled,
  noShadow,
  loading,
  onClick,
}) => {
  return (
    <>
      <StyledButton
        disabled={disabled}
        secondary={secondary}
        noShadow={noShadow}
        loading={loading}
        onClick={onClick}
      >
        {children}
        {loading && (
          <Absolute>
            <Loading color={secondary ? 'black' : 'white'} />
          </Absolute>
        )}
      </StyledButton>
    </>
  )
}

const StyledButton = styled.button<Props>`
  position: relative;
  padding: 12px;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme, secondary, loading }) =>
    loading
      ? 'transparent'
      : secondary
      ? theme.colors.black
      : theme.colors.white};
  border: 1px solid
    ${({ theme, secondary }) =>
      secondary ? theme.colors.black : theme.colors.salmon};
  background: ${({ theme, secondary }) =>
    secondary ? theme.colors.white : theme.colors.salmon};
  box-shadow: ${({ theme, secondary }) => !secondary && theme.shadow.button};
  font-weight: 700;

  &:disabled {
    background: ${({ theme }) => theme.colors.grey};
    border-color: ${({ theme }) => theme.colors.grey};
    cursor: not-allowed;
    box-shadow: none;
  }
`

const Absolute = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
