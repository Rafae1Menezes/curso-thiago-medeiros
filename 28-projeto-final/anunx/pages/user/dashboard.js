import {
   Button,
   Container,
   Grid,
   Link,
   Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import { getSession } from 'next-auth/client'
import ProductsModel from '../../src/models/products'
import dbConnect from '../../src/utils/dbConnect'
import { formatCurrency } from '../../src/utils/currency'


const useStyles = makeStyles(theme => ({
   buttonAdd: {
      margin: '30px auto',
      display: 'block'
   }
}))

const  Dashboard = ({ products }) => {
   const classes = useStyles()

   return (
      <TemplateDefault>
         <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center">
               Meus Anúncios
            </Typography> 
            <Link href="/user/publish" >
               <Button variant="contained" color="primary" className={classes.buttonAdd}>
                  Públicar novo anúncio
               </Button>
            </Link>
         </Container>
         <Container maxWidth="lg">
            <Grid container spacing={4}>
               {
                  products.map(product => (
                     <Grid key={product._id} item xs={12} sm={6} md={4}>                  
                        <Card 
                           image={`/uploads/${product.files[0].name}`}
                           title={product.title}
                           subtitle={formatCurrency(product.price)}
                           actions={
                              <>
                                 <Button size="small" color="primary">
                                    Editar
                                 </Button>
                                 <Button size="small" color="primary">
                                    Remover
                                 </Button>
                              </>
                           }
                        />
                     </Grid>
                  ))
               }
                                         

            </Grid>
         </Container>
      </TemplateDefault>
   )
}

Dashboard.requireAuth = true

export default Dashboard

export async function getServerSideProps({ req }) {
   const session = await getSession({ req })
   await dbConnect()

   const products = await ProductsModel.find({ 'user.id': session?.userId})
   
   return {
      props: {
         products: JSON.parse(JSON.stringify(products))
      }
   }
}