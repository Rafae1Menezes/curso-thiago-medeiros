import { Formik } from 'formik'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import Image from 'next/image'

import {
   Container,
   Box,
   Input,
   Typography,
   FormControl,
   FormHelperText,
   InputLabel,
   Button,
   CircularProgress,
} from '@material-ui/core'

import TemplateDefault from '../../../src/templates/Default'
import { initialValues, validationSchema } from './formValues'

import useStyles from './styles'
import { Alert } from '@material-ui/lab'

const SignIn = ({ APP_URL }) => {
   const classes = useStyles()
   const router = useRouter()

   const handleFormSubmit = async values => {
      signIn('credentials', {
         email: values.email,
         password: values.password,
         callbackUrl: `${APP_URL}/user/dashboard`,
      })
   }

   const handleGoogleLogin = () => {
      signIn('google', { callbackUrl: `${APP_URL}/user/dashboard` })
   }

   return (
      <TemplateDefault>
         <Container maxWidth="sm" className={classes.container}>
            <Typography
               component="h1"
               variant="h2"
               align="center"
               color="textPrimary"
            >
               Entre na sua conta
            </Typography>
         </Container>

         <Container maxWidth="md" className={classes.boxContainer}>
            <Box className={classes.box}>
               <Box display="flex" justifyContent="center">
                  <Button
                     variant="contained"
                     color="primary"
                     startIcon={
                        <Image
                           src="/images/logo_google.svg"
                           width={20}
                           height={20}
                           alt="Login com Google"
                        />
                     }
                     onClick={handleGoogleLogin}
                  >
                     Entrar com Google
                  </Button>
               </Box>

               <Box className={classes.orSeparator}>
                  <span>ou</span>
               </Box>

               <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={values => handleFormSubmit(values)}
               >
                  {({
                     touched,
                     values,
                     errors,
                     handleChange,
                     handleSubmit,
                     isSubmitting,
                  }) => {
                     return (
                        <form onSubmit={handleSubmit}>
                           {router.query.i === '1' ? (
                              <Alert severity="error">
                                 Usuário ou senha inválidos
                              </Alert>
                           ) : null}
                           <FormControl
                              error={errors.email && touched.email}
                              fullWidth
                           >
                              <InputLabel className={classes.inputLabel}>
                                 E-mail
                              </InputLabel>
                              <Input
                                 name="email"
                                 type="email"
                                 value={values.email}
                                 onChange={handleChange}
                              />
                              <FormHelperText>
                                 {errors.email && touched.email
                                    ? errors.email
                                    : null}
                              </FormHelperText>
                           </FormControl>
                           <br />
                           <br />

                           <FormControl
                              error={errors.password && touched.password}
                              fullWidth
                           >
                              <InputLabel className={classes.inputLabel}>
                                 Senha
                              </InputLabel>
                              <Input
                                 name="password"
                                 type="password"
                                 value={values.password}
                                 onChange={handleChange}
                              />
                              <FormHelperText>
                                 {errors.password && touched.password
                                    ? errors.password
                                    : null}
                              </FormHelperText>
                           </FormControl>
                           <br />
                           <br />
                           <br />

                           {isSubmitting ? (
                              <CircularProgress className={classes.loading} />
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

                           <br />
                           <br />

                           <Typography
                              component="div"
                              variant="body2"
                              align="left"
                           >
                              Não tem conta? clique aqui para criar uma.
                           </Typography>
                        </form>
                     )
                  }}
               </Formik>
            </Box>
         </Container>
      </TemplateDefault>
   )
}

export default SignIn

export const getServerSideProps = () => ({
   props: {
      APP_URL: process.env.APP_URL,
   },
 })