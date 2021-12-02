import Head from 'next/head'
import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"

const Template = ({ children }) => {

   return (
      <>
         <Head>
            <title>Anunx</title>
         </Head>
         <Header />
         <Content>
            { children }
         </Content>
         <Footer />
      </>
   )
}

export default Template