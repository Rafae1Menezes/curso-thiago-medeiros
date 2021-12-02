import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Link from './Link'

const Header = () => {
   return (
      <AppBar position="static"spacing="3">
         <Container maxWidth="lg">
            <Toolbar >
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <Link href="/" noLinkStyle>
                     AnunX
                  </Link>
               </Typography>
               <Link href="/product/add" noLinkStyle>
                  <Button color="inherit" variant="outlined">
                     Anunciar e Vender
                  </Button>
               </Link>
               <Link href="/auth/signin" noLinkStyle>
                  <Button color="inherit" variant="outlined">
                     Entrar
                  </Button>
               </Link>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default Header
