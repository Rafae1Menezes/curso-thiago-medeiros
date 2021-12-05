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
import Uploads from '../../src/components/Uploads'
import { FormControl } from '@mui/material'
import Paper from '../../src/components/Paper'

import { Formik } from 'formik'
import { initialValues, validationSchema } from './addFormValues'
import axios from 'axios'

const Add = () => {

   const handleFormSubmit = values => {
      

      const formData = new FormData()

      for (const field in values) {
         if (field === 'files') {
            values.files.forEach(file => {
               formData.append('files', file)
            })
         } else {
            formData.append(field, values[field])
         }
      }

      formData.append('userId', "123abc")

      axios
         .post('/api/products/add', formData)
         .then(handleSuccess)
         .catch(handleError)  
   }

   const handleSuccess = () => {
      console.log("deu bom")
   }

   const handleError = () => {
      console.log("deu ruim")
   }

   return (
      <Formik
         initialValues={initialValues}
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
                        Cadastro do Produto
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
                                 borderBottom: `1px solid ${errors.files ? 'red' : '#888'}`,
                                 marginBottom: '10px',
                              }}
                              color={errors.files ? 'red' : 'text.secondary'}
                           >
                              Fotos
                           </Typography>
                           {errors.files && (<Typography component="div" variant="body2" color="red"> * Adicione pelo menos uma foto</Typography>)}
                           

                            <Uploads
                              files={values.files}
                              setFieldValue={setFieldValue}
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
                           Cadastrar
                        </Button>
                     </Stack>
                  </Paper>
               </form>
            )
         }}
      </Formik>
   )
}

export default Add
