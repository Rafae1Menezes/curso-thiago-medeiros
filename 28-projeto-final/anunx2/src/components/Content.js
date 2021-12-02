import Container from "@mui/material/Container"
import { styled } from '@mui/material/styles'

const MyContainer = styled(Container)({
   paddingTop: '30px',
   paddingBottom: '40px',
})

const Content = ({ children }) => {

   return (
      <MyContainer maxWidth="lg">
         { children }
      </MyContainer>
   )
}

export default Content