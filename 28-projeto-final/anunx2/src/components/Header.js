import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Link from './Link'
import SearchField from './SearchField'

const Header = () => {
   const auth = true

   return (
      <>
         <AppBar position="static" spacing="3">
            <Container maxWidth="lg">
               <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 5 }}>
                     <Link href="/" noLinkStyle>
                        AnunX
                     </Link>
                  </Typography>

                  <Box
                     sm={0}
                     display={{ xs: 'none', sm: 'none', md: 'block' }}
                     sx={{ flexGrow: 3 }}
                  >
                     <SearchField />
                  </Box>

                  {auth ? (
                     <Link href="/product/add" noLinkStyle>
                        <Button color="inherit" variant="outlined">
                           Anunciar e Vender
                        </Button>
                     </Link>
                  ) : (
                     <>
                        <Link href="/auth/signin" noLinkStyle>
                           <Button
                              color="inherit"
                              variant="outlined"
                              sx={{ marginRight: '15px' }}
                           >
                              SingIn
                           </Button>
                        </Link>
                        <Link href="/auth/signup" noLinkStyle>
                           <Button color="inherit" variant="outlined">
                              SingUp
                           </Button>
                        </Link>
                     </>
                  )}
               </Toolbar>
            </Container>
         </AppBar>
         <Container maxWidth="lg">
            <Box
               display={{ xs: 'block', sm: 'block', md: 'none' }}
               sx={{ flexGrow: 1, marginTop: '20px' }}
            >
               <SearchField />
            </Box>
         </Container>
      </>
   )
}

export default Header
