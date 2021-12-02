import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Card from '../../src/components/Card'
import { styled } from '@mui/material/styles'
import CategoryBar from '../../src/components/CategoryBar'

const Item = styled(Paper)(({ theme }) => ({
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
}))

export default function Search() {
   return (
      <>
            <Typography component="div" variant="h4">
               Resultado da busca 
            </Typography>
      
            <Typography component="div" variant="body1">
               Iphone 12 - 8 produtos relacionados encontrados. 
            </Typography>
      
      <br />
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
         <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card
               image="https://i.picsum.photos/id/603/200/200.jpg?hmac=0BCtNqTfCvRnGEYZ9CJPnBJ8RjT9g0wRO3iDtLHWcnY"
               title="Ford Ka 2018. Completo. Ótimio estado de conservação."
               price="300,00"
            />
         </Grid>
         <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card
               image="https://i.picsum.photos/id/603/200/200.jpg?hmac=0BCtNqTfCvRnGEYZ9CJPnBJ8RjT9g0wRO3iDtLHWcnY"
               title="Ford Ka 2018. Completo. Ótimio estado de conservação."
               price="300,00"
            />
         </Grid>
         <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card
               image="https://i.picsum.photos/id/603/200/200.jpg?hmac=0BCtNqTfCvRnGEYZ9CJPnBJ8RjT9g0wRO3iDtLHWcnY"
               title="Ford Ka 2018. Completo. Ótimio estado de conservação."
               price="300,00"
            />
         </Grid>
         <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card
               image="https://i.picsum.photos/id/603/200/200.jpg?hmac=0BCtNqTfCvRnGEYZ9CJPnBJ8RjT9g0wRO3iDtLHWcnY"
               title="Ford Ka 2018. Completo. Ótimio estado de conservação."
               price="300,00"
            />
         </Grid>
      </Grid>
      </>
   )
}
