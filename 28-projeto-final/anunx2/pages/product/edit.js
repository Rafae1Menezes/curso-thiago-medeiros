import {
   Typography,
   Grid,
   TextField,
   Stack,
   InputLabel,
   Select,
   MenuItem,
   Button,
   FormHelperText,
} from '@mui/material'
import { useRouter } from 'next/router'
import UploadsEdit from '../../src/components/UploadsEdit'
import { FormControl } from '@mui/material'
import Paper from '../../src/components/Paper'

import { Formik } from 'formik'
import { initialValues, validationSchema } from './editFormValues'
import axios from 'axios'
import ProductsModel from '../../src/models/products'
import { useState } from 'react'


const Edit = ({ product }) => {
   const router = useRouter()
   const [ errorFile, setErrorFile ] = useState(false)

   const handleFormSubmit = values => {
      
      if(!values.filesOld.length && !values.filesOld.length){
         setErrorFile(true)
      }      
      
      const formData = new FormData()

      for (const field in values) {
         if (field === 'filesOld') {
            formData.append('filesOld', JSON.stringify(values.filesOld))
         } else if (field === 'filesNew') {
            values.filesNew.forEach(file => {
               formData.append('filesNew', file)
            })
         }else {
            formData.append(field, values[field])
         }
      }      


      formData.append('userId', "123abc")

      axios
         .put('/api/products/edit', formData)
         .then(handleSuccess)
         .catch(handleError)  
   }

   const handleSuccess = () => {
      router.push('/user/dashboard')
   }

   const handleError = () => {
      console.log("deu ruim")
   }

     return (
      <Formik
         initialValues={product}
         validationSchema={validationSchema}
         onSubmit={handleFormSubmit}
      >
         {({
            values,
            errors,
            touched,
            handleChange,
            setFieldValue,
            handleSubmit,
         }) => {
            return (
               <form onSubmit={handleSubmit} type="POST">
                  <Paper variant="outlined" align="center">
                     <Typography variant="h4" gutterBottom align="center">
                        Editar Produto
                     </Typography>
                     <br />
                     <Grid container spacing="0" sx={{ flexGrow: 1 }}>
                        <Grid item md={7} sm={7} xs={12}>
                           <Stack spacing={2}>
                              <TextField
                                 id="name"
                                 name="name"
                                 label="Nome do produto"
                                 variant="standard"
                                 fullWidth
                                 value={values.name}
                                 onChange={handleChange}
                                 helperText={
                                    errors.name && touched.name && errors.name
                                 }
                                 error={errors.name && touched.name}
                              />
                              <TextField
                                 id="price"
                                 name="price"
                                 label="Preço"
                                 type="number"
                                 variant="standard"
                                 fullWidth
                                 value={values.price}
                                 onChange={handleChange}
                                 helperText={
                                    errors.price &&
                                    touched.price &&
                                    errors.price
                                 }
                                 error={errors.price && touched.price}
                              />

                              <FormControl
                                 variant="standard"
                                 fullWidth
                                 error={errors.category && touched.category}
                              >
                                 <InputLabel id="category">
                                    Categoria
                                 </InputLabel>
                                 <Select
                                    labelId="category"
                                    id="category"
                                    name="category"
                                    value={values.category}
                                    onChange={handleChange}
                                    label="category"
                                 >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                 </Select>
                                 <FormHelperText>
                                    {errors.category &&
                                       touched.category &&
                                       errors.category}
                                 </FormHelperText>
                              </FormControl>

                              <TextField
                                 id="description"
                                 name="description"
                                 label="Descrição do produto"
                                 variant="standard"
                                 fullWidth
                                 rows={6}
                                 multiline
                                 value={values.description}
                                 onChange={handleChange}
                                 helperText={
                                    errors.description &&
                                    touched.description &&
                                    errors.description
                                 }
                                 error={
                                    errors.description && touched.description
                                 }
                              />
                           </Stack>
                        </Grid>
                        <Grid item md={0.4} sm={0.2} xs={1}>
                           <br />
                        </Grid>
                        <Grid item md={4.6} sm={4.8} xs={12}>
                           <Typography
                              onClick={() => console.log(typeof setFieldValue)} 
                              
                              component="div"
                              variant="body1"
                              sx={{
                                 borderBottom: `1px solid ${errorFile ? 'red' : '#888'}`,
                                 marginBottom: '10px',
                              }}
                              color={errorFile ? 'red' : 'text.secondary'}
                           >
                              Fotos
                           </Typography>
                           {errorFile && (<Typography component="div" variant="body2" color="red"> * Adicione pelo menos uma foto</Typography>)}
                           
                           
                            <UploadsEdit
                              filesOld={values.filesOld}
                              filesNew={values.filesNew}
                              setFieldValue={setFieldValue}
                              setErrorFile={setErrorFile}
                           /> 
                        </Grid>
                     </Grid>
                     <br />
                     <br />
                     <Stack direction="row" spacing={1} maxWidth="500px">
                        <Button variant="contained" fullWidth>
                           Cancelar
                        </Button>
                        <Button variant="contained" fullWidth type="submit">
                           Salvar
                        </Button>
                     </Stack>
                  </Paper>
               </form>
            )
         }}
      </Formik>
   )
}

export default Edit

export const getServerSideProps = async (req) => {
   const { id } = req.query

   const product = await ProductsModel.findById(id)

  

   const productEdit = {
      _id: product._id,
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description,
      filesOld: product.files,
      filesNew: []
   }


   
   return {
      props: {
         product: JSON.parse(JSON.stringify(productEdit))
      }
   }
}