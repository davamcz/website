import App from 'next/app'
import Head from 'next/head'
import { withRouter, Router } from 'next/router'
import { ThemeProvider } from 'styled-components'
import { Layout } from '../components/Layout'
import { GlobalStyles } from '../styles/GlobalStyles'
import { theme } from '../styles/theme'
import { pageview } from '../lib/gtag'

Router.events.on('routeChangeComplete', url => pageview(url))
class Davam extends App {
  render() {
    const { Component, pageProps, router } = this.props

    return (
      <>
        <Head>
          <title key="title">
            Dávám - Jednoduše spojujeme lidi pro dobrou věc
          </title>
          <meta
            key="description"
            name="description"
            content="Jednoduše spojujeme lidi pro dobrou věc"
          />
          <meta key="og:type" property="og:type" content="website" />
          <meta
            key="og:title"
            property="og:title"
            content="Dávám - Jednoduše spojujeme lidi pro dobrou věc"
          />
          <meta
            key="og:description"
            property="og:description"
            content="Jednoduše spojujeme lidi pro dobrou věc"
          />
          <meta
            key="og:image"
            property="og:image"
            content={`${process.env.WEBSITE_URL}/davam.png`}
          />
          <meta
            property="og:url"
            content={`${process.env.WEBSITE_URL}${router.asPath}`}
          />
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

export default withRouter(Davam)
