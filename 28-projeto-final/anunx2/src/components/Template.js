import Content from "./Content"
import Footer from "./Footer"
import Header from "./Header"

const Template = ({ children }) => {

   return (
      <>
         <Header />
         <Content>
            { children }
         </Content>
         <Footer />
      </>
   )
}

export default Template