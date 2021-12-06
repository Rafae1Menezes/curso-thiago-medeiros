import {Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button }from '@mui/material'
import Paper from '@mui/material/Paper'
import Card from '../../src/components/Card'
import { styled } from '@mui/material/styles'
import CategoryBar from '../../src/components/CategoryBar'
import { useState } from 'react'
import dbConnect from '../../src/utils/dbConnect'
import ProductsModel from '../../src/models/products'
import { useRouter } from 'next/router'

export default function Dashboard({ products }) {
   const route = useRouter()
   const [openModal, setOpenModal] = useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleClickEdit = (id) => {
   route.push(`/product/edit?id=${id}`)
}

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
                        actions={true}
                        handleClickOpenModal={handleClickOpenModal}
                        handleClickEdit={handleClickEdit}
                     />
                  </Grid>
               )
            })
         }
         
      </Grid>


      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Tem certeza que deseja deletar esse produto?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Essa ação não poderá ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancelar</Button>
          <Button onClick={handleCloseModal} autoFocus>
            Deletar
          </Button>
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
         products: JSON.parse(JSON.stringify(products)),
      },
   }
}