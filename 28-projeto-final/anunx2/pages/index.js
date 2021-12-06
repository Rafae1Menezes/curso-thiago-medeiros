import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Card from '../src/components/Card'
import { styled } from '@mui/material/styles'
import CategoryBar from '../src/components/CategoryBar'
import dbConnect from '../src/utils/dbConnect'
import ProductsModel from '../src/models/products'

export default function Index({ products }) {

   return (
      <>

      <CategoryBar />
      <br />
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
         {
            products.map(product => {
               return (
                  <Grid key={product._id} item lg={3} md={4} sm={6} xs={12}>
                     <Card
                        id={product._id}
                        image={`/uploads/${product.files[0].name}`}
                        title={product.name}
                        price={product.price}
                     />
                  </Grid>
               )
            })
         }
      </Grid>
      </>
   )
}

export async function getServerSideProps() {
   await dbConnect()

   const products = await ProductsModel.find()


   return {
      props: {
         products: JSON.parse(JSON.stringify(products)),
      },
   }
}