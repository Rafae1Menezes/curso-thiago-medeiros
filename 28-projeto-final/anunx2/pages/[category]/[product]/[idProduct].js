import { useState } from 'react'
import Paper from '../../../src/components/Paper'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Avatar from '@mui/material/Avatar';

import Rating from '@mui/material/Rating'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import Link from '../../../src/components/Link'
import Gallery from '../../../src/components/Gallery'

const TitlePaper = styled(Typography)(({ theme }) => ({
   ...theme.typography.body2,
   lineHeight: '22px',
   maxHeight: '45px',
   overflow: 'hidden',
   marginBottom: '15px',
   color: theme.palette.text.secondary,
}))

const TitleProduct = styled(Typography)(({ theme }) => ({
   ...theme.typography.h5,

   marginBottom: '25px',
   overflow: 'wrap',
}))

const Price = styled(Typography)(({ theme }) => ({
   ...theme.typography.body1,
   color: theme.palette.secondary.main,
   marginBottom: '10px',
   fontWeight: 'bold',
   fontSize: '25px',
   
}))

const Description = styled(Typography)(({ theme }) => ({
   ...theme.typography.body2,
   color: theme.palette.text.primary,
   lineHeight: '25px',
   marginBottom: '20px',
}))

const Flex = styled(Box)(({ theme }) => ({
   ...theme.typography.body2,
   color: theme.palette.text.secondary,
   display: 'flex',
   gap: '8px',
   alignItems: 'center'
}))

const ProductPage = ({ idProduct }) => {
   const [value, setValue] = useState(3)

   return (
      <Grid container spacing={2}>
         <Grid item md={8} xs={12}>
            <Paper spaceBottom>
               <Gallery />
            </Paper>

            <Paper spaceBottom>
               <TitlePaper>Publicado 16 junho de 2021</TitlePaper>
               <Description>
                  Seminovo, maravilhoso. Sem detalhes. 30mil km rodados a
                  penas.Não perca essa oportunidade incrível.
               </Description>
               <Chip label="Nome da catogoria" />
            </Paper>
         </Grid>
         <Grid item md={4} xs={12}>
            <Paper spaceBottom>
               <TitlePaper>Novo | 20 unidades disponíveis</TitlePaper>

               <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                     setValue(newValue)
                  }}
                  sx={{ marginBottom: '15px' }}
               />

               <TitleProduct>Ford Ka 2018. Completo. Ótimio estado de conservação.</TitleProduct>
               <Price>R$ 30.000,00</Price>
               
               <Flex>                     
                  <Box><LocalShippingIcon /></Box>
                  <Box><Link href="#"  noLinkStyle>Ver mais formas de entrega</Link></Box>
               </Flex>

               <Button variant="contained" startIcon={<LocalGroceryStoreIcon />}  fullWidth>Colocar no Carrinho</Button>
            </Paper>
            <Paper>
               <TitlePaper>Informações sobre o vendedor</TitlePaper>

               <Flex sx={{marginBottom: '20px'}}>                     
                  <Box><Avatar  /></Box>
                  <Box>
                     <Typography   variant="span" component="span" sx={{fontWeight: 'bold'}}> Rafael Menezes </Typography> 
                     <br/> Mahuaçu-MG</Box>
               </Flex>
               
               <Flex>                     
                  <Box><LocalPhoneIcon /></Box>
                  <Box>(33) 98547-85415</Box>
               </Flex>

               <Flex>                     
                  <Box><EmailIcon /></Box>
                  <Box>menezes@gmail.com</Box>
               </Flex>
            </Paper>
         </Grid>
      </Grid>
   )
}

export async function getServerSideProps({ query }) {
   const { idProduct } = query

   return {
      props: {
         idProduct: JSON.parse(JSON.stringify(idProduct)),
      },
   }
}

export default ProductPage
