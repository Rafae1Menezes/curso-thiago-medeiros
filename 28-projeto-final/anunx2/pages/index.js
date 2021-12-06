import Grid from '@mui/material/Grid'
import Card from '../src/components/Card'
import CategoryBar from '../src/components/CategoryBar'
import dbConnect from '../src/utils/dbConnect'
import ProductsModel from '../src/models/products'
import { useState } from 'react'

export default function Index({ productsAll }) {
   const [products, setProducts] = useState(productsAll)
   const [category, setCategory] = useState('Todas')

   const categories = []
   
   productsAll.forEach(product => {
      if(!categories.includes(product.category)) 
      categories.push(product.category)
   });

   const handleChangeCategory = newCategory => {
      const filter = ''      

      if (newCategory === 'Todas') filter = productsAll
      else filter = productsAll.filter(product => newCategory === product.category)

      setCategory(newCategory)
      setProducts(filter)   
   }

   return (
      <>
         <CategoryBar
            categories={categories}
            category={category}
            handleChange={handleChangeCategory}
         />
         <br />
         <Grid container spacing={3} sx={{ flexGrow: 1 }}>
            {products.map(product => {
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
            })}
         </Grid>
      </>
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
