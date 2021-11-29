import {
   Container,
   Grid,
   IconButton,
   InputBase,
   Link,
   makeStyles,
   Paper,
   Typography
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/search'

import TemplateDefault from '../src/templates/Default'
import Card from '../src/components/Card'
import { getSession } from 'next-auth/client'
import dbConnect from '../src/utils/dbConnect'
import ProductsModel from '../src/models/products'
import { formatCurrency } from '../src/utils/currency'

const useStyles = makeStyles( theme => ({
   searchBox: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(0, 2,),
      margin: theme.spacing(3, 0, 6),
   },
   cardMedia: {
      paddingTop: '56%'
   },
}))


const Home = ({ products }) => {
   const classes = useStyles()

   return (
      <TemplateDefault>
         <Container maxWidth="md">
            <Typography component="h1" variant="h3" align="center" color="textPrimary">
               O que deseja encontrar?
            </Typography>
            <Paper className={classes.searchBox}>
               <InputBase 
                  placeholder="Ex.: iPhone 12 com garantia"
                  fullWidth
               />
               <IconButton>
                  <SearchIcon />
               </IconButton>
            </Paper>
         </Container>

         <Container maxWidth="lg" className={classes.cardGrid}>
            <Typography component="h2" variant="h4" align="center" color="textPrimary">
               Destaques
            </Typography>
            <br />
            <Grid container spacing={4}>
               {
                  products.map(product => (
                     <Grid key={product._id} item xs={12} sm={6} md={4}>     
                        <Link href={`/${product.category}/${product.title}/${product._id}`} >             
                           <Card 
                              image={`/uploads/${product.files[0].name}`}
                              title={product.title}
                              subtitle={formatCurrency(product.price)}
                           />
                           </Link>
                     </Grid>
                  ))
               }
               

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
         products: JSON.parse(JSON.stringify(products))
      }
   }
}