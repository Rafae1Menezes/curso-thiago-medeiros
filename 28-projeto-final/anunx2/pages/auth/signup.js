import {
   Box,
   Button,
   Typography,
   Stack,
   styled,
   TextField,
   FormControl,
   InputLabel,
   Input,
   InputAdornment,
   IconButton,
   FormHelperText,
   CircularProgress
} from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { Formik } from 'formik'
import { initialValues, validationSchema } from './signupFormValues'
import Paper from '../../src/components/Paper'

const Divider = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#e8e8e8',
   width: '100%',
   height: 1,
   margin: theme.spacing(2, 0, 2),

   '& span': {
      backgroundColor: 'white',
      padding: '0 30px',
   },
}))

const Signup = () => {
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
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                     <Paper sx={{ width: '500px' }}>
                        <Stack alignItems="center" gap={2}>
                           <Typography
                              component="h5"
                              variant="h5"
                              align="center"
                              sx={{ marginBottom: '10px' }}
                           >
                              Criar uma conta
                           </Typography>
                           <Button
                              variant="contained"
                              color="background"
                              sx={{ width: 250 }}
                              startIcon={
                                 <Image
                                    src="/images/logo_google.svg"
                                    width={20}
                                    height={20}
                                    alt="Login com Google"
                                 />
                              }
                           >
                              Criar com Google
                           </Button>
                           <Divider>
                              <span>ou</span>
                           </Divider>
                           <Typography
                              component="h5"
                              variant="body1"
                              align="center"
                           >
                              Crie uma conta o seu e-mail
                           </Typography>
                           <TextField
                              id="name"
                              name="name"
                              label="Nome"
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
                              id="city"
                              name="city"
                              label="Cidade"
                              variant="standard"
                              fullWidth
                              value={values.city}
                              onChange={handleChange}
                              helperText={
                                 errors.city && touched.city && errors.city
                              }
                              error={errors.city && touched.city}
                           />
                           <TextField
                              id="phone"
                              name="phone"
                              label="Telefone"
                              type="number"
                              variant="standard"
                              fullWidth
                              value={values.phone}
                              onChange={handleChange}
                              helperText={
                                 errors.phone && touched.phone && errors.phone
                              }
                              error={errors.phone && touched.phone}
                           />
                           <TextField
                              id="email"
                              name="email"
                              label="E-mail"
                              variant="standard"
                              fullWidth
                              value={values.email}
                              onChange={handleChange}
                              helperText={
                                 errors.email && touched.email && errors.email
                              }
                              error={errors.email && touched.email}
                           />
                           <FormControl
                              sx={{ m: 1, width: '100%' }}
                              variant="standard"
                              error={errors.password && touched.password}
                           >
                              <InputLabel htmlFor="password">Senha</InputLabel>
                              <Input
                                 id="password"
                                 name="password"
                                 type={showPasswords? 'text' : 'password'}
                                 value={values.password}
                                 onChange={handleChange}
                                 endAdornment={
                                    <InputAdornment position="end">
                                       <IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                          edge="end"
                                       >
                                          {showPasswords ? (
                                             <VisibilityOff />
                                          ) : (
                                             <Visibility />
                                          )}
                                       </IconButton>
                                    </InputAdornment>
                                 }
                                 label="Password"
                              />
                              <FormHelperText>
                                    {(errors.password && touched.password) && errors.password} 
                              </FormHelperText>
                           </FormControl>
                           <FormControl
                              sx={{ m: 1, width: '100%' }}
                              variant="standard"
                              error={errors.passwordConf && touched.passwordConf}
                           >
                              <InputLabel htmlFor="passwordConf">
                                 Confirmar senha
                              </InputLabel>
                              <Input
                                 id="passwordConf"
                                 name="passwordConf"
                                 type={showPasswords ? 'text' : 'password'}
                                 value={values.passwordConf}
                                 onChange={handleChange}
                                 endAdornment={
                                    <InputAdornment position="end">
                                       <IconButton
                                          aria-label="toggle password visibility"
                                          onClick={handleClickShowPassword}
                                          onMouseDown={handleMouseDownPassword}
                                          edge="end"
                                       >
                                          {showPasswords ? (
                                             <VisibilityOff />
                                          ) : (
                                             <Visibility />
                                          )}
                                       </IconButton>
                                    </InputAdornment>
                                 }
                                 label="Senha"
                              />
                              <FormHelperText>
                                    {(errors.passwordConf && touched.passwordConf) && errors.passwordConf} 
                              </FormHelperText>
                           </FormControl>

                           
                           {
                              isSubmitting
                              ? (
                                 <CircularProgress size="30px" />
                              ) : (
                                 <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                 >
                                    Criar Conta
                                 </Button>
                                 )
                           }
                           
                           <Typography
                              component="h5"
                              variant="body2"
                              align="center"
                           >
                              Já tem uma conta? Click aqui para criar entrar.
                           </Typography>
                        </Stack>
                     </Paper>
                  </Box>
               </form>
            )
         }}
      </Formik>
   )
}

export default Signup
