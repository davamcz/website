import { Container } from './Container'
import styled from 'styled-components'

interface Props {
  children: React.ReactNode
}

export const Section = ({ children }: Props) => (
  <StyledSection full>{children}</StyledSection>
)

const StyledSection = styled(Container)`
  min-height: calc(100vh - 98px - 102px);
  background: url('/background.svg') no-repeat;
  background-position: bottom;
  background-size: 100%;
`
