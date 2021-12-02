import {Grid, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button }from '@mui/material'
import Paper from '@mui/material/Paper'
import Card from '../../src/components/Card'
import { styled } from '@mui/material/styles'
import CategoryBar from '../../src/components/CategoryBar'
import { useState } from 'react'


export default function Dashboard() {
   const [openModal, setOpenModal] = useState(false);

  const handleClickOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

   return (
      <>

      <CategoryBar />
      <br />
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
         <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card
               image="https://i.picsum.photos/id/603/200/200.jpg?hmac=0BCtNqTfCvRnGEYZ9CJPnBJ8RjT9g0wRO3iDtLHWcnY"
               title="Ford Ka 2018. Completo. Ótimio estado de conservação."
               price="300,00"
               actions={true}
               handleClickOpenModal={handleClickOpenModal}
            />
         </Grid>
         <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card
               image="https://i.picsum.photos/id/603/200/200.jpg?hmac=0BCtNqTfCvRnGEYZ9CJPnBJ8RjT9g0wRO3iDtLHWcnY"
               title="Ford Ka 2018. Completo. Ótimio estado de conservação."
               price="300,00"
               actions={true}
               handleClickOpenModal={handleClickOpenModal}
            />
         </Grid>
         <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card
               image="https://i.picsum.photos/id/603/200/200.jpg?hmac=0BCtNqTfCvRnGEYZ9CJPnBJ8RjT9g0wRO3iDtLHWcnY"
               title="Ford Ka 2018. Completo. Ótimio estado de conservação."
               price="300,00"
               actions={true}
               handleClickOpenModal={handleClickOpenModal}
            />
         </Grid>
         <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card
               image="https://i.picsum.photos/id/603/200/200.jpg?hmac=0BCtNqTfCvRnGEYZ9CJPnBJ8RjT9g0wRO3iDtLHWcnY"
               title="Ford Ka 2018. Completo. Ótimio estado de conservação."
               price="300,00"
               actions={true}
               handleClickOpenModal={handleClickOpenModal}
            />
         </Grid>
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
