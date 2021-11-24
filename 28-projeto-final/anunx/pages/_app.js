import { useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import PropTypes from 'prop-types'
import { ToastyProvider }  from '../src/contexts/Toasty'
import theme from '../src/theme'

export default function MyApp(props) {
   const { Component, pageProps } = props

   /* useEffect(() => {
      //Remove the server-side injected css;
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles) {
         jssStyles.parentElement.removeChild(jssStyles)
      }
   }, []) */

   return (
      <>
         <Head>
            <title>AnunX</title>
            <meta
               name="viewport"
               content="minimum-scale=1, initial-scale=1, width=device-width"
            />
         </Head>
         <ThemeProvider theme={theme}>
            <ToastyProvider>
               <CssBaseline />
               <Component {...pageProps} />
            </ToastyProvider>
         </ThemeProvider>
      </>
   )
}

MyApp.propTypes = {
   Component: PropTypes.elementType.isRequired,
   pageProps: PropTypes.object.isRequired,
}
