
import { Formik } from 'formik'
import axios from 'axios'
import { useRouter } from 'next/router'
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
import useToasty from '../../../src/contexts/Toasty'

import useStyles from './styles'




const SignUp = () => {
   const classes = useStyles()
   const router = useRouter()
   const { setToasty } = useToasty()


   const handleFormSubmit = async values => {
      const response = await axios.post('/api/users', values)

      if ((await response).data.success){
         setToasty({
            open: true,
            severity: 'success',
            text: 'Cadastro realizado com sucesso!'
         })
         router.push('/auth/signin')
      }
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
               Crie sua Conta
            </Typography>
            <Typography
               component="h5"
               variant="h5"
               align="center"
               color="textPrimary"
            >
               E anuncie para todo o Brasil
            </Typography>
         </Container>

         <Container maxWidth="md" className={classes.boxContainer}>
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
                        <Box className={classes.box}>
                           <FormControl
                              error={errors.name && touched.name}
                              fullWidth
                           >
                              <InputLabel className={classes.inputLabel}>
                                 Nome
                              </InputLabel>
                              <Input
                                 name="name"
                                 value={values.name}
                                 onChange={handleChange}
                              />
                              <FormHelperText>
                                 {errors.name && touched.name
                                    ? errors.name
                                    : null}
                              </FormHelperText>
                           </FormControl>
                           <br />
                           <br />

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

                           <FormControl
                              error={errors.passwordConf && touched.passwordConf}
                              fullWidth
                           >
                              <InputLabel className={classes.inputLabel}>
                                 Confirmação de Senha
                              </InputLabel>
                              <Input
                                 name="passwordConf"
                                 type="password"
                                 value={values.passwordConf}
                                 onChange={handleChange}
                              />
                              <FormHelperText>
                                 {errors.passwordConf &&
                                 touched.passwordConf
                                    ? errors.passwordConf
                                    : null}
                              </FormHelperText>
                           </FormControl>
                           <br />
                           <br />
                           <br />

                           {
                              isSubmitting
                              ? (
                                 <CircularProgress className={classes.loading} />
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
                           
                           
                           <br />
                           <br />

                           <Typography component="div" variant="body2" align="left">
                              Ja tem uma conta? Entre aqui.
                           </Typography>
                        </Box>
                     </form>
                  )
               }}
            </Formik>
         </Container>
      </TemplateDefault>
   )
}

export default SignUp
