import {
   Box,
   Button,
   Container,
   FormControl,
   IconButton,
   InputAdornment,
   InputLabel,
   OutlinedInput,
   Select,
   TextField,
   Typography } from '@material-ui/core'

import { DeleteForever } from '@material-ui/icons'
import { makeStyles, ThemeProvider } from '@material-ui/styles'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import TemplateDefault from '../../src/templates/Default'


const useStyles = makeStyles( theme => ({
   mask: {},
   mainImage: {},
   container: {
      paddingBottom: theme.spacing(3)
   },
   boxContainer: {
      paddingBottom: theme.spacing(3)
   },
   box: {
      backgroundColor: theme.palette.background.white,
      padding: theme.spacing(3)
   },
   thumbsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 15
   },
   dropzone: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
      width: 200,
      height: 150,
      margin: '0 15px 15px 0',
      backgroundColor: theme.palette.background.default,
      border: '2px dashed gray'
   },
   thumb: {
      position: 'relative',
      width: 200,
      height: 150,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      margin: '0 15px 15px 0',

      '& $mainImage': {
         backgroundColor: 'blue',
         padding: '6px 10px',
         position: 'absolute',
         bottom: 0,
         left: 0,
      },

      '&:hover $mask': {
         display: 'flex'
      },

      '& $mask': {
         display: 'none',
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: 'rgba(0, 0, 0, 0.7)',
         width: '100%',
         height: '100%'
      }
   }
}))

const handleChangeCategory = () => {

}

const Publish = () => {
   const classes = useStyles()
   const [ files, setFiles] = useState([])

   const { getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
      onDrop: (acceptedFile) => {
         const newFiles = acceptedFile.map(file => {
            return Object.assign(file, {
               preview: URL.createObjectURL(file)
            })
         })

         setFiles([
            ...files,
            ...newFiles
         ])
      }
   })

  const handleRemoveFile = fileName => {
     const newFilesState = files.filter(file => fileName !== file.name )
     setFiles(newFilesState)
  }

   return (
      <TemplateDefault> 
         <Container maxWidth="sm" className={classes.container}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary">
               Publicar Anúncio
            </Typography>
            <Typography component="h5" variant="h5" align="center" color="textPrimary">
               Quanto mais detalhado, melhor!
            </Typography>
         </Container>

         <Container maxWidth="md" className={classes.boxContainer}>
            <Box className={classes.box}>
               <Typography component="h6" variant="h6" color="textPrimary">
                  Título do Anúncio
               </Typography>
               <TextField
                  label="ex. Bicicleta aro 18 com garantia"
                  size="small"
                  fullWidth
               />
               <br /><br />
               <Typography component="h6" variant="h6" color="textPrimary">
                  Categoria
               </Typography>
               <Select
                  native
                  value=""
                  fullWidth
                  onChange={handleChangeCategory}
                  inputProps={{
                     name: 'age'
                  }}
               >
                  <option value="">Selecione</option>
                  <option value={1}>Bebê e Criança</option>
                  <option value={2}>Agricultura</option>
                  <option value={3}>Moda</option>
                  <option value={4}>Carros, Motos e Barcos</option>
                  <option value={5}>Serviços</option>
                  <option value={6}>Lazer</option>
                  <option value={7}>Animais</option>
                  <option value={8}>Moveis, Casa e Jardim</option>
                  <option value={9}>Imóveis</option>
                  <option value={10}>Equipamntos e Ferramentas</option>
                  <option value={11}>Celulares e Tablets</option>
                  <option value={12}>Esporte</option>
                  <option value={13}>Tecnologia</option>
                  <option value={14}>Emprego</option>
                  <option value={15}>Outros</option>
               </Select>
            </Box>
         </Container>

         <Container maxWidth="md" className={classes.boxContainer}>
            <Box className={classes.box}>
               <Typography component="h6" variant="h6" color="textPrimary">
                  Imagens
               </Typography>
               <Typography component="div" variant="body2" color="textPrimary">
                  A primeira imagem é a foto principal do seu anúncio.
               </Typography>
               <Box className={classes.thumbsContainer}>
                  <Box className={classes.dropzone} {...getRootProps()}>
                     <input {...getInputProps()} />
                     <Typography variant="body2" color="textPrimary">
                        Clique para adicionar ou arraste a imagem para aqui.
                     </Typography>
                  </Box>

                  {
                     files.map((file, index) => (

                        <Box
                           key={file.name} 
                           className={classes.thumb}
                           style={{ backgroundImage: `url(${file.preview})` }}
                        >
                           {
                              index === 0 ?
                              <Box className={classes.mainImage}>
                                 <Typography variant="body2" color="secondary">
                                    Principal
                                 </Typography>
                              </Box>
                              : null
                           }
                           
                           <Box className={classes.mask}>
                              <IconButton color="secondary" onClick={() => handleRemoveFile(file.name)}>
                                 <DeleteForever fontSize="large" />
                              </IconButton>
                           </Box>
                        </Box>

                     ))
                  }

               </Box>
            </Box>
         </Container>

         <Container maxWidth="md" className={classes.boxContainer}>
            <Box className={classes.box}>
               <Typography component="h6" variant="h6" color="textPrimary">
                  Descrição
               </Typography>
               <Typography component="div" variant="body2" color="textPrimary">
                  Escreve os detalhes do que está vendendo
               </Typography>
               <TextField
                  multiline
                  rows={6}
                  variant="outlined"
                  fullWidth
               />
            </Box>
         </Container>

         <Container maxWidth="md" className={classes.boxContainer}>
            <Box className={classes.box}>
               <Typography component="h6" variant="h6" color="textPrimary">
                  Preço
               </Typography>
               <br />
               <FormControl fullWidth variant="outlined">
                  <InputLabel>Valor</InputLabel>
                  <OutlinedInput 
                     onChange={()=>{}}
                     startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                     labelWidth={40}
                  />
               </FormControl>
            </Box>
         </Container>

         <Container maxWidth="md" className={classes.boxContainer}>
            <Box className={classes.box}>
               <Typography component="h6" variant="h6" color="textPrimary" gutterBottom>
                  Dados de Contato
               </Typography>
               <TextField
                  label="Nome"
                  variant="outlined"
                  size="small"
                  fullWidth
               />
               <br /><br />
               <TextField
                  label="E-mail"
                  variant="outlined"
                  size="small"
                  fullWidth
               />
               <br /><br />
               <TextField
                  label="Telefone"
                  variant="outlined"
                  size="small"
                  fullWidth
               />
               <br /><br />
            </Box>
         </Container>

         <Container maxWidth="md" className={classes.boxContainer}>
            <Box textAlign="right">
               <Button variant="contained" color="primary">
                  Publicar Anúncio
               </Button>
            </Box>
         </Container>

      </TemplateDefault>
   )
}

export default Publish