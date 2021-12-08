import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Card from '../../src/components/Card'
import { styled } from '@mui/material/styles'
import dbConnect from '../../src/utils/dbConnect'
import ProductsModel from '../../src/models/products'
import Template from '../../src/components/Template'


const Item = styled(Paper)(({ theme }) => ({
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
}))

const Search = ({ query, productsAll }) => {
   return (
      <Template>
         <Typography component="div" variant="h4">
            Resultado da busca
         </Typography>

         {productsAll.length ? (
            <Typography component="div" variant="body1">
               {productsAll.length} produto(s) relacionados
               encontrados.
            </Typography>
         ) : null}

         <br />

         {!productsAll.length ? (
            <Typography
               component="div"
               variant="body1"
               align="center"
               sx={{ margin: '50px 0' }}
            >
               O resultado da busca não encontrou nenhum produto, tente novamete
               com outro termo.
               

            </Typography>
         ) : null}

         <Grid container spacing={3} sx={{ flexGrow: 1 }}>
            {productsAll.map(product => {
               return (
                  <Grid key={product._id} item lg={3} md={4} sm={6} xs={12}>
                     <Card
                        id={product._id}
                        image={`/uploads/${product.files[0].name}`}
                        title={product.name}
                        price={product.price}
                        category={product.category}
                     />
                  </Grid>
               )
            })}
         </Grid>
      </Template>
   )
}

export default Search

export async function getServerSideProps(req) {
   const { q } = req.query
   await dbConnect()
   const products = await ProductsModel.find({
      $or: [
         { name: { $regex: q, $options: 'i' } },
         { description: { $regex: q, $options: 'i' } },
      ],
   })


   return {
      props: {
         query: q,
         productsAll: JSON.parse(JSON.stringify(products)),
      },
   }
}
