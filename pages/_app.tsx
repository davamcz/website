import App from 'next/app'
import { Layout } from '../components/Layout'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { GlobalStyles } from '../styles/GlobalStyles'
import Head from 'next/head'

export default class Davam extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Dávám - Jednoduše spojujeme lidi pro dobrou věc</title>
          <link rel="shortcut icon" href="/favicon.ico" /> 
        </Head>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
            <GlobalStyles />
          </Layout>
        </ThemeProvider>
      </>
    )
  }
}
