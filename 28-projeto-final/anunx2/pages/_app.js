import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import theme from '../src/theme'
import createEmotionCache from '../src/createEmotionCache'
import Template from '../src/components/Template'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

   return (
      <StyledEngineProvider injectFirst>
         <CacheProvider value={emotionCache}>
            <Head>
               <title>My page</title>
               <meta
                  name="viewport"
                  content="initial-scale=1, width=device-width"
               />
               <meta
                  name="description"
                  content="Site de vendas. Estudo de Next."
               ></meta>
            </Head>
            <ThemeProvider theme={theme}>
               {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
               <CssBaseline />
               <Template>
                  <Component {...pageProps} />
               </Template>
            </ThemeProvider>
         </CacheProvider>
      </StyledEngineProvider>
   )
}

MyApp.propTypes = {
   Component: PropTypes.elementType.isRequired,
   emotionCache: PropTypes.object,
   pageProps: PropTypes.object.isRequired,
}
