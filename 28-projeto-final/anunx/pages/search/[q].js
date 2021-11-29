import {
   Box,
   Container,
   Grid,
   IconButton,
   InputBase,
   Link,
   Paper,
   Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import SearchIcon from '@material-ui/icons/search'

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import slugify from 'slugify'

import ProductModel from '../../src/models/products'
import dbConnect from '../../src/utils/dbConnect'
import { formatCurrency } from '../../src/utils/currency'
import SearchField from '../../src/components/SearchField'

const useStyle = makeStyles(theme => ({
   box: {
      backgroundColor: theme.palette.background.white,
      padding: theme.spacing(3),
      marginBottom: theme.spacing(3),
   },
   gridContainer: {
      padding: '15px 0',
   },
   searchBox: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(0, 2),
      margin: theme.spacing(0, 0, 3),
   },
}))

const List = ({ products, termo }) => {
   const classes = useStyle()

   return (
      <TemplateDefault>
         <Container maxWidth="lg">
            <Typography
               component="h1"
               variant="h3"
               align="center"
               color="textPrimary"
            >
               Resultado da Busca
            </Typography>

            <SearchField />

            <Box className={classes.box}>
               <Typography component="h6" variant="h6">
                  Anúncios
               </Typography>
               <Typography component="span" variant="subtitle2">
                  ENCONTRADO {products.length} ANÚNCIO(S) PARA O TERMO{' '}
                  {`"${termo}"`}
               </Typography>

               <Grid container spacing={4} className={classes.gridContainer}>
                  {products.map(product => {
                     const category = slugify(product.category).toLowerCase()
                     const title = slugify(product.title).toLowerCase()

                     return (
                        <Grid key={product._id} item xs={12} sm={6} md={4}>
                           <Link href={`/${category}/${title}/${product._id}`}>
                              <Card
                                 image={`/uploads/${product.files[0].name}`}
                                 title={product.title}
                                 subtitle={formatCurrency(product.price)}
                              />
                           </Link>
                        </Grid>
                     )
                  })}
               </Grid>
            </Box>
         </Container>
      </TemplateDefault>
   )
}

export default List

export async function getServerSideProps({ query }) {
   const { q } = query

   await dbConnect()
   const products = await ProductModel.find({
      $or: [
         { title: { $regex: q, $options: 'i' } },
         { description: { $regex: q, $options: 'i' } },
      ],
   })

   return {
      props: {
         products: JSON.parse(JSON.stringify(products)),
         termo: q,
      },
   }
}
