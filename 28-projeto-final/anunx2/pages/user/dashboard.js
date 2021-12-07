import {
   Grid,
   Dialog,
   DialogTitle,
   DialogContent,
   DialogContentText,
   DialogActions,
   Button,
   Typography,
} from '@mui/material'
import Card from '../../src/components/Card'
import CategoryBar from '../../src/components/CategoryBar'
import { useState } from 'react'
import dbConnect from '../../src/utils/dbConnect'
import ProductsModel from '../../src/models/products'
import { useRouter } from 'next/router'
import axios from 'axios'
import useToasty from '../../src/context/Toasty'
import Link from '../../src/components/Link'



export default function Dashboard({ productsAll }) {
   const { setToasty } = useToasty()
   const route = useRouter()
   const [openModal, setOpenModal] = useState(false)
   const [products, setProducts] = useState(productsAll)
   const [category, setCategory] = useState('Todas')
   const [productId, setProductId] = useState()

   const handleClickOpenModal = (productId) => {
      setOpenModal(true)
      setProductId(productId)
   }

   const handleCloseModal = () => {
      setOpenModal(false)
   }

   const handleClickEdit = id => {
      route.push(`/product/edit?id=${id}`)
   }

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

   const handleConfirmRemove = () => {
      
      axios
         .delete('/api/products/delete', {
            data: {
               id: productId,
            },
         })
         .then(handleSuccess)
         .catch(handleError)
   }

   const handleSuccess = () => {

      const currentProducts = products.filter((product)=>product._id!==productId)
      setProducts(currentProducts)

      handleCloseModal()
      setToasty({
         open: true,
         severity: 'success',
         text: 'Anuncio removido com sucesso com sucesso!',
      })
   }

   const handleError = () => {
      handleCloseModal()
      setToasty({
         open: true,
         severity: 'error',
         text: 'Erro ao remover o anúncio.',
      })
   }

   const categories = []
   
   productsAll.forEach(product => {
      if(!categories.includes(product.category)) 
      categories.push(product.category)
   });

   return (
      <>
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
               Cadastre seu primero Produto
               <br /><br />
               <Link href="/product/add" noLinkStyle>
                  <Button color="primary" variant="contained">
                     Cadastrar Produto
                  </Button>
               </Link>
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
                        actions={true}
                        handleClickOpenModal={handleClickOpenModal}
                        handleClickEdit={handleClickEdit}
                     />
                  </Grid>
               )
            })}
         </Grid>

         <Dialog
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
            <DialogTitle id="alert-dialog-title">
               {'Tem certeza que deseja deletar esse produto?'}
            </DialogTitle>
            <DialogContent>
               <DialogContentText id="alert-dialog-description">
                  Essa ação não poderá ser desfeita.
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleCloseModal}>Cancelar</Button>
               <Button onClick={handleConfirmRemove}>Deletar</Button>
            </DialogActions>
         </Dialog>
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
