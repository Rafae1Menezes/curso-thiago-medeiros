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
   InputAdornment,
} from '@mui/material'
import { useRouter } from 'next/router'
import Uploads from '../../src/components/Uploads'
import { FormControl } from '@mui/material'
import Paper from '../../src/components/Paper'
import useToasty from '../../src/context/Toasty'
import { getSession } from 'next-auth/react'
import Template from '../../src/components/Template'
import { Formik } from 'formik'
import { initialValues, validationSchema } from './addFormValues'
import axios from 'axios'

const Add = ({ userId }) => {
   const { setToasty } = useToasty()
   const router = useRouter()

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

      formData.append('userId', userId)

      axios
         .post('/api/products/add', formData)
         .then(handleSuccess)
         .catch(handleError)
   }

   const handleSuccess = () => {
      setToasty({
         open: true,
         text: 'Produto cadastrado com sucesso!',
         severity: 'success',
      })

      router.push('/user/dashboard')
   }

   const handleError = () => {
      setToasty({
         open: true,
         text: 'Aconteceu um erro ao tentar cadastrar o produto!',
         severity: 'error',
      })
   }

   const handleCancel = () => {
      router.push('/user/dashboard')
   }

   return (
      <Template>
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
                           <Grid item md={5.8} sm={5.9} xs={12}>
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
                                       errors.name &&
                                       touched.name &&
                                       errors.name
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
                                    InputProps={{
                                       startAdornment: (
                                          <InputAdornment position="start">
                                             R$
                                          </InputAdornment>
                                       ),
                                    }}
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
                                       <MenuItem value="Agricultura">
                                          Agricultura
                                       </MenuItem>
                                       <MenuItem value="Moda">Moda</MenuItem>
                                       <MenuItem value="Carros, Motos e Barcos">
                                          Carros, Motos e Barcos
                                       </MenuItem>
                                       <MenuItem value="Serviços">
                                          Serviços
                                       </MenuItem>
                                       <MenuItem value="Moveis, Casa e Jardim">
                                          Moveis, Casa e Jardim
                                       </MenuItem>
                                       <MenuItem value="Imóveis">
                                          Imóveis
                                       </MenuItem>
                                       <MenuItem value="Equipamentos e Ferramentas">
                                          Equipamentos e Ferramentas
                                       </MenuItem>
                                       <MenuItem value="Celulares e Tablets">
                                          Celulares e Tablets
                                       </MenuItem>
                                       <MenuItem value="Tecnologia">
                                          Tecnologia
                                       </MenuItem>
                                       <MenuItem value="Emprego">
                                          Emprego
                                       </MenuItem>
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
                           <Grid item md={5.8} sm={5.9} xs={12}>
                              <Typography
                                 component="div"
                                 variant="body1"
                                 sx={{
                                    borderBottom: `1px solid ${
                                       errors.files && touched.files
                                          ? 'red'
                                          : '#888'
                                    }`,
                                    marginBottom: '10px',
                                 }}
                                 color={
                                    errors.files && touched.files
                                       ? 'red'
                                       : 'text.secondary'
                                 }
                              >
                                 Fotos
                              </Typography>
                              {errors.files && touched.files && (
                                 <Typography
                                    component="div"
                                    variant="body2"
                                    color="red"
                                 >
                                    {' '}
                                    * Adicione pelo menos uma foto
                                 </Typography>
                              )}

                              <Uploads
                                 files={values.files}
                                 setFieldValue={setFieldValue}
                              />
                           </Grid>
                        </Grid>
                        <br />
                        <br />
                        <Stack direction="row" spacing={1} maxWidth="500px">
                           <Button
                              variant="contained"
                              fullWidth
                              onClick={handleCancel}
                           >
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
      </Template>
   )
}

Add.auth = true

Add.getInitialProps = async ({ req, res }) => {
   const session = await getSession({ req })

   return { userId: session.user._id }
}

export default Add
