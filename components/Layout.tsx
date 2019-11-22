import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import styled from 'styled-components'

interface Props {
  children: JSX.Element[]
}

export const Layout = ({ children }: Props) => (
  <Main>
    <Header />
    {children}
    <Footer />
  </Main>
)


const Main = styled.main`
  min-height: 100vh;
`