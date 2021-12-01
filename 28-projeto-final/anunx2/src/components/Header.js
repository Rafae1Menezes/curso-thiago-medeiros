import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

const Header = () => {
   return (
      <AppBar position="static">
         <Container maxWidth="lg">
            <Toolbar sx={{ paddingLeft: 0 }}>
               <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  AnunX
               </Typography>
               <Button color="inherit" variant="outlined">Anunciar e Vender</Button>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default Header
