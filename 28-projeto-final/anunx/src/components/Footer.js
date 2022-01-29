import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from './Link'

const Footer = () => {
   return (
      <Container maxwidth="lg" component="footer">
         <Box sx={{ borderTop: '1px solid #999999', padding: '30px 0' }}>
            <Grid container spacing={3}>
               <Grid item xs={6} sm={3}>
                  <Box textAlign="center">
                     <Link href="#" noLinkStyle>
                        Ajuda e Contato
                     </Link>
                  </Box>
               </Grid>
               <Grid item xs={6} sm={3}>
                  <Box textAlign="center">
                     <Link href="#" noLinkStyle>
                        Dicas de Segurança
                     </Link>
                  </Box>
               </Grid>
               <Grid item xs={6} sm={3}>
                  <Box textAlign="center">
                     <Link href="#" noLinkStyle>
                        Anunciar e Vender
                     </Link>
                  </Box>
               </Grid>
               <Grid item xs={6} sm={3}>
                  <Box textAlign="center">
                     <Link href="#" noLinkStyle>
                        Plano profissional
                     </Link>
                  </Box>
               </Grid>
            </Grid>
         </Box>
      </Container>
   )
}

export default Footer
