
import { Formik } from 'formik'

import {
   Container,
   Box,
   Input,
   Typography,
   FormControl,
   FormHelperText,
   InputLabel,
   Button,
} from '@material-ui/core'

import TemplateDefault from '../../../src/templates/Default'
import useStyles from './styles'

import { initialValues, validationSchema } from './formValues'





const SingUp = () => {
   const classes = useStyles()

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
               onSubmit={values => {
                  console.log('ok, enviou o form', values)
               }}
            >
               {({
                  touched,
                  values,
                  errors,
                  handleChange,
                  handleSubmit,
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

                           <Box fullWidth>
                              <Button
                                 fullWidth
                                 variant="contained"
                                 color="primary"
                                 type="submit"
                              >
                                 Publicar Anúncio
                              </Button>
                           </Box>
                           <br />

                           <Typography component="div" variant="body2">
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

export default SingUp
