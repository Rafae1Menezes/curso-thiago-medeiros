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
   CircularProgress,
} from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import { Formik } from 'formik'
import { initialValues, validationSchema } from './signinFormValues'
import Paper from '../../src/components/Paper'
import { signIn } from 'next-auth/react'
import { Alert } from '@mui/material'
import { boolean } from 'yup/lib/locale'

const Divider = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#e8e8e8',
   width: '100%',
   height: 1,
   margin: theme.spacing(4, 0, 4),

   '& span': {
      backgroundColor: 'white',
      padding: '0 30px',
   },
}))

const Signin = ({ APP_URL, error }) => {
   const [showPasswords, setShowPassword] = useState(false)
   const handleClickShowPassword = () => setShowPassword(!showPasswords)
   const handleMouseDownPassword = event => event.preventDefault()

   const handleFormSubmit = values => {
      signIn('credentials', {
         email: values.email,
         password: values.password,
         callbackUrl: `${APP_URL}/user/dashboard`,
      })
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
                        <Stack alignItems="center">
                           <Typography
                              component="h5"
                              variant="h5"
                              align="center"
                              sx={{ marginBottom: '20px' }}
                           >
                              Entrar
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
                              Entrar com Google
                           </Button>
                           <Divider>
                              <span>ou</span>
                           </Divider>
                           <Typography
                              component="h5"
                              variant="body1"
                              align="center"
                           >
                              Entre com sua conta
                           </Typography>

                           {error ? (
                              <Alert
                                 severity="error"
                                 sx={{ width: '100%' }}
                                 elevation={0}
                                 variant="outlined"
                              >
                                 Usuário ou senha incorreto.
                              </Alert>
                           ) : null}

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
                              fullWidth
                              sx={{ m: 2, width: '100%' }}
                              variant="standard"
                              error={errors.password && touched.password}
                           >
                              <InputLabel htmlFor="password">Senha</InputLabel>
                              <Input
                                 id="password"
                                 name="password"
                                 type={showPasswords ? 'text' : 'password'}
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
                                 {errors.password &&
                                    touched.password &&
                                    errors.password}
                              </FormHelperText>
                           </FormControl>
                           <br />
                           {isSubmitting ? (
                              <CircularProgress size="30px" />
                           ) : (
                              <Button
                                 fullWidth
                                 variant="contained"
                                 color="primary"
                                 type="submit"
                              >
                                 Entrar
                              </Button>
                           )}
                           <Typography
                              component="h5"
                              variant="body2"
                              align="center"
                              sx={{ marginTop: '10px' }}
                           >
                              Não tem uma conta? Click aqui para criar uma.
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

export default Signin

export const getServerSideProps = ({ req }) => {
   const error = req.body

   return {
      props: {
         APP_URL: process.env.APP_URL,
         error: error !== '',
      },
   }
}
