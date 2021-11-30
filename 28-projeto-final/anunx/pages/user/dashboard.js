import {
   Button,
   Dialog,
   DialogActions,
   DialogContent,
   DialogContentText,
   DialogTitle,
   Container,
   Grid,
   Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'
import { getSession } from 'next-auth/client'
import ProductsModel from '../../src/models/products'
import dbConnect from '../../src/utils/dbConnect'
import { formatCurrency } from '../../src/utils/currency'
import { useState } from 'react'
import axios from 'axios'
import useToasty from '../../src/contexts/Toasty'

import MyLink from '../../src/components/MyLink'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
   buttonAdd: {
      margin: '30px auto',
      display: 'block',
   },
}))

const Dashboard = ({ products }) => {
   const route = useRouter()
   const [productId, setProductId] = useState()
   const [openConfimModal, setOpenConfimModal] = useState(false)
   const [removedProducts, setRemovedProducts] = useState([])

   const classes = useStyles()
   const { setToasty } = useToasty()

   const handleCloseModal = () => setOpenConfimModal(false)
   const handleOpenModal = productId => {
      setOpenConfimModal(true)
      setProductId(productId)
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
      setRemovedProducts([...removedProducts, productId])
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

   const handleEdit = (id) => {
      route.push(`/user/edit/${id}`)
   }

   return (
      <TemplateDefault>
         <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center">
               Meus Anúncios
            </Typography>
            <MyLink href="/user/publish">
               <Button
                  variant="contained"
                  color="primary"
                  className={classes.buttonAdd}
               >
                  Públicar novo anúncio
               </Button>
            </MyLink>
         </Container>
         <Container maxWidth="lg">
            {products.length === removedProducts.length && (
               <Typography
                  component="div"
                  variant="body1"
                  align="center"
                  color="textPrimary"
                  gutterBottom
               >
                  Nenhum anúncio púlicado
               </Typography>
            )}
            <Grid container spacing={4}>
               {products.map(product => {
                  if (removedProducts.includes(product._id)) return null
                  

                  return (
                     <Grid key={product._id} item xs={12} sm={6} md={4}>
                        <Card
                           id={product._id}
                           category={product.category}
                           image={`/uploads/${product.files[0].name}`}
                           title={product.title}
                           subtitle={formatCurrency(product.price)}
                           actions={
                              <>
                                 <Button size="small" color="primary" onClick={() => handleEdit(product._id)}>
                                    Editar
                                 </Button>
                                 <Button
                                    size="small"
                                    color="primary"
                                    onClick={() => handleOpenModal(product._id)}
                                 >
                                    Remover
                                 </Button>
                              </>
                           }
                        />

                     </Grid>
                  )
               })}
            </Grid>
         </Container>

         <Dialog open={openConfimModal} onClose={handleCloseModal}>
            <DialogTitle>Deseja realmnte remover este anúcio?</DialogTitle>
            <DialogContent>
               <DialogContentText id="alert-dialog-description">
                  Ao confirmar a operação, não sera possível reverter a ação.
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleCloseModal} color="primary">
                  Cancelar
               </Button>
               <Button onClick={handleConfirmRemove} color="primary" autoFocus>
                  Remover
               </Button>
            </DialogActions>
         </Dialog>
      </TemplateDefault>
   )
}

Dashboard.requireAuth = true

export default Dashboard

export async function getServerSideProps({ req }) {
   const session = await getSession({ req })
   await dbConnect()

   const products = await ProductsModel.find({ 'user.id': session?.userId })

   return {
      props: {
         products: JSON.parse(JSON.stringify(products)),
      },
   }
}
