import { useCallback, useEffect, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Copy } from './Icons/Copy'

interface Props {
  onClick: () => void
}
export const CopyButtton = ({ onClick }: Props) => {
  const [clicked, setClicked] = useState(false)

  const click = useCallback(() => {
    if (!clicked) {
      setClicked(true)
      onClick()
    }
  }, [onClick])

  useEffect(() => {
    const timer = setTimeout(() => {
      setClicked(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [click, clicked])

  return (
    <ButtonContainer onClick={click} clicked={clicked}>
      <Copy />
    </ButtonContainer>
  )
}

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50px);
  }
`

const ButtonContainer = styled.div<{ clicked: boolean }>`
  position: relative;

  &:after {
    content: 'Zkopirovano';
    color: ${({ theme }) => theme.colors.salmon};
    display: inline-block;
    position: absolute;
    top: -2px;
    left: 50%;
    opacity: 0.001;
    text-align: center;
    font-weight: bold;
    transform: translate3d(-50%, 0, 0);
    white-space: nowrap;
    ${({ clicked }) =>
      clicked &&
      css`
        animation: ${fadeUp} 0.5s ease-in-out;
      `};
  }
`
