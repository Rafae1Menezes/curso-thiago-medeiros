import PhotoCamera from '@mui/icons-material/PhotoCamera'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { styled, Box, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import Image  from 'next/image'


const Foto = styled('div')({
   position: 'relative',

   '&:hover div': {
      cursor: 'pointer',
      display: 'flex'
   },   

   div: {
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      color: 'white'
      }
})



const Action = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#f5f5f5',
   width: '100%',
   height: '100%',
   flexDirection: 'column',
   color: '#8d8d8d',
   '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#dfdfdf',
   },
}))


const Uploader = () => {
   const [open, setOpen] = useState(false)
   const handleClickOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   return (
      <>
         <Action onClick={handleClickOpen}>
            <PhotoCamera />
            <Typography component="div" variant="body2">
               Editar Album
            </Typography>
         </Action>

         <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="mds"
         >
            <DialogTitle id="alert-dialog-title">
               <Button onClick={handleClose} startIcon={<PhotoCamera />}>Adicionar Fotos</Button>
            </DialogTitle>
            <DialogContent>


            <Grid container spacing="3" sx={{ flexGrow: 1, marginTop: '1px', width:"700px" }}>
            <Grid item md={4} sm={4} xs={6}>
               <Foto>
                  <Image
                     name="capitao-america-painel-em-lona-1-50x1m-temas-infantil.jpg"
                     src="/upload/capitao-america-painel-em-lona-1-50x1m-temas-infantil.jpg"
                     width="100"
                     height="50"
                     alt=""
                     layout="responsive"
                     priority
                  />
                   <div><DeleteForeverIcon /></div>
               </Foto>
            </Grid>

            <Grid item md={4} sm={4} xs={6}>
               <Foto>
                  <Image
                     name="64e2b391-d717-4e18-97cc-1647bf23e8fd.jfif"
                     src="/upload/64e2b391-d717-4e18-97cc-1647bf23e8fd.jfif"
                     width="100"
                     height="50"
                     alt=""
                     layout="responsive"
                     priority
                  />
                   <div><DeleteForeverIcon /></div>
               </Foto>
            </Grid>
            <Grid item md={4} sm={4} xs={6}>
               <Foto>
                  <Image
                     name="1280x800-captain-america-mjolnir-artwork_1568053956.jpg"
                     src="/upload/1280x800-captain-america-mjolnir-artwork_1568053956.jpg"
                     width="100"
                     height="50"
                     alt=""
                     layout="responsive"
                     priority
                  />
                   <div><DeleteForeverIcon /></div>
               </Foto>
            </Grid>
            <Grid item md={4} sm={4} xs={6}>
               <Foto>
                  <Image
                     name="55573.jpg"
                     src="/upload/55573.jpg"
                     width="100"
                     height="50"
                     alt=""
                     layout="responsive"
                     priority
                  />
                   <div><DeleteForeverIcon /></div>
               </Foto>
            </Grid>
            <Grid item md={4} sm={4} xs={6}>
               <Foto>
                  <Image
                     name="bfdf9551-566b-4688-91aa-cc2a903b18ec.jfif"
                     src="/upload/bfdf9551-566b-4688-91aa-cc2a903b18ec.jfif"
                     width="100"
                     height="50"
                     alt=""
                     layout="responsive"
                     priority
                  />
                   <div><DeleteForeverIcon /></div>
               </Foto>
            </Grid>
         </Grid>



               
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} variant="contained">Cancelar</Button>
               <Button onClick={handleClose} variant="contained">Salvar</Button>
            </DialogActions>
         </Dialog>
      </>
   )
}

export default Uploader
