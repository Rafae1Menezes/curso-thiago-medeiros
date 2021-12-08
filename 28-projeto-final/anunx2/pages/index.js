import Grid from '@mui/material/Grid'
import Card from '../src/components/Card'
import CategoryBar from '../src/components/CategoryBar'
import dbConnect from '../src/utils/dbConnect'
import ProductsModel from '../src/models/products'
import { useState } from 'react'
import { Typography } from '@mui/material'
import Template from '../src/components/Template'

export default function Index({ productsAll }) {
   const [products, setProducts] = useState(productsAll)
   const [category, setCategory] = useState('Todas')

   const categories = []

   productsAll.forEach(product => {
      if (!categories.includes(product.category))
         categories.push(product.category)
   })

   const handleChangeCategory = newCategory => {
      const filter = ''

      if (newCategory === 'Todas') filter = productsAll
      else
         filter = productsAll.filter(
            product => newCategory === product.category
         )

      setCategory(newCategory)
      setProducts(filter)
   }

   return (
      <Template>
         <CategoryBar
            categories={categories}
            category={category}
            handleChange={handleChangeCategory}
         />
         <br />

         {!products.length ? (
            <Typography
               component="div"
               variant="body1"
               align="center"
               sx={{ margin: '50px 0' }}
            >
               Nem produto cadastrado.
            </Typography>
         ) : null}

         <Grid container spacing={3} sx={{ flexGrow: 1 }}>
            {products.map(product => {
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

export async function getServerSideProps() {
   await dbConnect()

   const products = await ProductsModel.find()

   return {
      props: {
         productsAll: JSON.parse(JSON.stringify(products)),
      },
   }
}
