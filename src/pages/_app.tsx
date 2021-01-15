import React from 'react'
import { NextComponentType } from 'next'
import { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '../styles'

// https://github.com/vercel/next.js/issues/7515#issuecomment-610414484
const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default App
