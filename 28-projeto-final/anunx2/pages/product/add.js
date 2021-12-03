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
import Upload from '../../src/components/Upload'
import { useState } from 'react'
import { FormControl } from '@mui/material'
import Paper from '../../src/components/Paper'

import { Formik } from 'formik'
import { initialValues, validationSchema } from './addFormValues'

const Add = () => {
   const [showPasswords, setShowPassword] = useState(false)
   const handleClickShowPassword = () => setShowPassword(!showPasswords)
   const handleMouseDownPassword = event => event.preventDefault()

   const handleFormSubmit = values => {
      console.log(values)
   }

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={values => handleFormSubmit(values)}
      >
         {({
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleSubmit,
         }) => {
            return (
               <form onSubmit={handleSubmit}>
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
                                 (errors.name && touched.name) && errors.name
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
                                 (errors.price && touched.price) && errors.price
                              }
                              error={errors.price && touched.price}
                           />

                              <FormControl variant="standard" fullWidth error={errors.category && touched.category}>
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
                                    {(errors.category && touched.category) && errors.category} 
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
                                 (errors.description && touched.description) && errors.description
                              }
                              error={errors.description && touched.description}
                           />
                           </Stack>
                        </Grid>
                        <Grid item md={0.4} sm={0.2} xs={1}>
                           <br />
                        </Grid>
                        <Grid item md={4.6} sm={4.8} xs={12}>
                           <Typography
                              component="div"
                              variant="body1"
                              sx={{
                                 borderBottom: '1px solid #888',
                                 marginBottom: '10px',
                              }}
                              color="text.secondary"
                           >
                              Fotos
                           </Typography>
                           <Upload />
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
