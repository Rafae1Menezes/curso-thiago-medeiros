import Paper from '../../src/components/Paper'
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
} from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

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
   const [values, setValues] = useState({
      name: '',
      city: '',
      phone: '',
      email: '',
      password: '',
      passwordConfirm: '',
      showPassword: false,
   })


   const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

   const handleClickShowPassword = () => {
      setValues({
         ...values,
         showPassword: !values.showPassword,
      })
   }

   const handleMouseDownPassword = event => {
      event.preventDefault()
   }

   return (
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
               <Typography component="h5" variant="body1" align="center">
                  Crie uma conta o seu e-mail
               </Typography>
               <TextField
                  required
                  id="name"
                  name="name"
                  label="Nome"
                  fullWidth
                  variant="standard"
                  value={values.name}
               />
               <TextField
                  required
                  id="city"
                  name="city"
                  label="Cidade"
                  fullWidth
                  variant="standard"
                  value={values.city}
               />
               <TextField
                  required
                  id="phone"
                  name="phone"
                  label="Telefone"
                  fullWidth
                  variant="standard"
                  value={values.phone}
               />
               <TextField
                  required
                  id="email"
                  name="email"
                  label="E-mail"
                  fullWidth
                  variant="standard"
                  value={values.email}
               />
               <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
                  <InputLabel htmlFor="outlined-adornment-password">
                     Senha
                  </InputLabel>
                  <Input
                     id="outlined-adornment-password"
                     type={values.showPassword ? 'text' : 'password'}
                     value={values.password}
                     onChange={handleChange('password')}
                     endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                           >
                              {values.showPassword ? (
                                 <VisibilityOff />
                              ) : (
                                 <Visibility />
                              )}
                           </IconButton>
                        </InputAdornment>
                     }
                     label="Password"
                  />
               </FormControl>
               <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
                  <InputLabel htmlFor="outlined-adornment-password">
                     Confirmar senha
                  </InputLabel>
                  <Input
                     id="outlined-adornment-passwordConfirm"
                     type={values.showPassword ? 'text' : 'password'}
                     value={values.passwordConfirm}
                     onChange={handleChange('passwordConfirm')}
                     endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                           >
                              {values.showPassword ? (
                                 <VisibilityOff />
                              ) : (
                                 <Visibility />
                              )}
                           </IconButton>
                        </InputAdornment>
                     }
                     label="Password"
                  />
               </FormControl>
               
               
               <Button variant="contained" color="primary" fullWidth>
                  Cadastrar
               </Button>
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
   )
}

export default Signup
