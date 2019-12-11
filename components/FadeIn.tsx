import styled, { keyframes } from 'styled-components'

interface Props {
  children: React.ReactNode
}

export const FadeIn = ({ children }: Props) => <Fade>{children}</Fade>

const fadeIn = keyframes`
  from {	 
    opacity: 0.3;	   
  }	  
  to {	 
    opacity: 1;	  
  }
`

const Fade = styled.span`
  display: inherit;
  box-sizing: initial;
  animation: ${fadeIn} 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards;
`
