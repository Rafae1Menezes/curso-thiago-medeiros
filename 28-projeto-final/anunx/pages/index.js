import { Container, Grid, makeStyles, Typography } from '@material-ui/core'

import TemplateDefault from '../src/templates/Default'
import Card from '../src/components/Card'
import SearchField from '../src/components/SearchField'
import { getSession } from 'next-auth/client'
import dbConnect from '../src/utils/dbConnect'
import ProductsModel from '../src/models/products'
import { formatCurrency } from '../src/utils/currency'

const useStyles = makeStyles(theme => ({
   cardMedia: {
      paddingTop: '56%',
   },
}))

const Home = ({ products }) => {
   const classes = useStyles()

   return (
      <TemplateDefault>
         <Container maxWidth="md">
            <Typography
               component="h1"
               variant="h3"
               align="center"
               color="textPrimary"
            >
               O que deseja encontrar?
            </Typography>

            <SearchField />
         </Container>

         <Container maxWidth="lg" className={classes.cardGrid}>
            <Typography
               component="h2"
               variant="h4"
               align="center"
               color="textPrimary"
            >
               Destaques
            </Typography>
            <br />
            <Grid container spacing={4}>
               {products.map(product => {
                  return (
                     <Grid key={product._id} item xs={12} sm={6} md={4}>
                        <Card
                           id={product._id}
                           category={product.category}
                           image={`/uploads/${product.files[0].name}`}
                           title={product.title}
                           subtitle={formatCurrency(product.price)}
                        />
                     </Grid>
                  )
               })}
            </Grid>
         </Container>
      </TemplateDefault>
   )
}

export default Home

export async function getServerSideProps({ req }) {
   const session = await getSession({ req })
   await dbConnect()

   const products = await ProductsModel.find()

   return {
      props: {
         products: JSON.parse(JSON.stringify(products)),
      },
   }
}
