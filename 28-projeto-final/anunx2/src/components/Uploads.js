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

const Uploads = ({ files, setFieldValue }) => {
   const handleAddFile = fileList => {
      const newFiles = files

      for (const file of fileList) {
         newFiles.push(Object.assign(file, { preview: URL.createObjectURL(file) }))
      }
      //console.log(newFiles)

      setFieldValue('files', [...newFiles])
   }

   const handleDeletePreview = fileName => {
      const newFiles = files.filter(file => fileName !== file.name)
      setFieldValue('files', [...newFiles])
   }

   return (
      <>
         <Grid container spacing="3" sx={{ flexGrow: 1, marginBottom: '10px' }}>
            {files.map((file, index) => (
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
                     <div onClick={() => handleDeletePreview(file.name)}>
                        <DeleteForeverIcon />
                     </div>
                  </Foto>
               </Grid>
            ))}
         </Grid>
         <label htmlFor="contained-button-file">
            <Input
               name="files"
               accept="image/*"
               id="contained-button-file"
               multiple
               type="file"
               onChange={e => handleAddFile(e.target.files)}
            />
            <Button variant="outlined" component="span">
               Adicionar foto
            </Button>
         </label>
      </>
   )
}

export default Uploads
