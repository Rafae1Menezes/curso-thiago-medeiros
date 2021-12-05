import { Grid } from '@mui/material'
import { Box, styled } from '@mui/material'
import Image from 'next/image'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Button from '@mui/material/Button'

const Foto = styled('div')(({ theme }) => ({
   position: 'relative',

   '&:hover div': {
      cursor: 'pointer',
      display: 'flex',
   },

   div: {
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.primary.main + 'bb',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      color: 'white',
   },
}))

const Input = styled('input')({
   display: 'none',
})

const Uploads = ({ filesOld, filesNew, setFieldValue, setErrorFile }) => {

   const handleAddFile = fileList => {

      const newFiles = filesNew

      for (const file of fileList) {
         newFiles.push(Object.assign(file, { preview: URL.createObjectURL(file) }))
      }

      
      setFieldValue('filesNew', [...newFiles])
      setErrorFile(false)
   }

   const handleDeletePreview = fileName => {
      const newFilesOld = filesOld.filter(file => fileName !== file.name)
      setFieldValue('filesOld', [...newFilesOld])
   }

   const handleDeletePreviewNew = fileName => {
      const newFiles = filesNew.filter(file => fileName !== file.name)
      setFieldValue('filesNew', [...newFiles])
   }

   return (
      <>
         <Grid container spacing="3" sx={{ flexGrow: 1, marginBottom: '10px' }}>
            {filesOld.map((file, index) => (
               <Grid item md={4} sm={4} xs={6} key={index}>
                  <Foto>
                     <Image
                        name={file.name}
                        src={"/uploads/"+file.name}
                        width="4"
                        height="2"
                        alt=""
                        layout="responsive"
                        objectFit="cover"
                     />
                     <div onClick={() => handleDeletePreview(file.name)}>
                        <DeleteForeverIcon />
                     </div>
                  </Foto>
               </Grid>
            ))}

            {filesNew.map((file, index) => (
               <Grid item md={4} sm={4} xs={6} key={index}>
                  <Foto>
                     <Image
                        name={file.name}
                        src={file.preview}
                        width="4"
                        height="2"
                        alt=""
                        layout="responsive"
                        objectFit="cover"
                     />
                     <div onClick={() => handleDeletePreviewNew(file.name)}>
                        <DeleteForeverIcon />
                     </div>
                  </Foto>
               </Grid>
            ))}


         </Grid>
         <label htmlFor="contained-button-file">
            <Input
               name="filesNew"
               accept="image/*"
               id="contained-button-file"
               multiple
               type="file"
               onChange={e => handleAddFile(e.target.files)}
            />
            <input type="hidden" name="filesOld" value={filesOld} />
            <Button variant="outlined" component="span">
               Adicionar foto
            </Button>
         </label>
      </>
   )
}

export default Uploads
