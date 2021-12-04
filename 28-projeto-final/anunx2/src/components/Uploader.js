import PhotoCamera from '@mui/icons-material/PhotoCamera'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { styled, Box, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import Image from 'next/image'

const Foto = styled('div')({
   position: 'relative',

   '&:hover div': {
      cursor: 'pointer',
      display: 'flex',
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
      color: 'white',
   },
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

const Input = styled('input')({
   display: 'none',
 });

const Uploader = () => {
   const [files, setFiles] = useState([])
   const [open, setOpen] = useState(false)
   const handleClickOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)

   const handleChange = fileList => {
      const newFiles = []

      for (const file of fileList) {
         newFiles.push(
            Object.assign(file, { preview: URL.createObjectURL(file) })
         )
      }

      setFiles([...files, ...newFiles])
   }

   return (
      <>
         <Action onClick={handleClickOpen}>
            <PhotoCamera />
            <Typography component="div" variant="body2">
               Editar Album
            </Typography>
         </Action>

         <Dialog open={open} onClose={handleClose} maxWidth="mds">
            <DialogTitle id="alert-dialog-title">
              

               <label htmlFor="contained-button-file">
                  <Input
                     name="files"
                     accept="image/*"
                     id="contained-button-file"
                     multiple
                     type="file"
                     onChange={e => handleChange(e.target.files)}
                  />
                  <Button variant="outlined" component="span">
                     Adicionar foto
                  </Button>
               </label>
            </DialogTitle>
            <DialogContent>
               <Grid
                  container
                  spacing="3"
                  sx={{ flexGrow: 1, marginTop: '1px', width: '700px' }}
               >
                  {files.map((file, index) => (
                     <Grid item md={4} sm={4} xs={6} key={index}>
                        <Foto>
                           <Image
                              name={file.name}
                              src={file.preview}
                              width="100"
                              height="50"
                              alt=""
                              layout="responsive"
                              objectFit="cover"
                           />
                           <div>
                              <DeleteForeverIcon />
                           </div>
                        </Foto>
                     </Grid>
                  ))}
               </Grid>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose} variant="contained">
                  Cancelar
               </Button>
               <Button onClick={handleClose} variant="contained">
                  Salvar
               </Button>
            </DialogActions>
         </Dialog>
      </>
   )
}

export default Uploader
