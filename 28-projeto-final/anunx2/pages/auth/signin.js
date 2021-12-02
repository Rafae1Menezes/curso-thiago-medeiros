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
   margin: theme.spacing(4, 0, 4),

   '& span': {
      backgroundColor: 'white',
      padding: '0 30px',
   },
}))

const Signin = () => {
   const [values, setValues] = useState({
      name: '',
      password: '',
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
               <Typography component="h5" variant="body1" align="center">
                  Entre com sua conta
               </Typography>
               <TextField
                  required
                  id="name"
                  name="name"
                  label="E-mail"
                  fullWidth
                  variant="standard"
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
               <br />
               <Button variant="contained" color="primary" fullWidth>
                  Entrar
               </Button>
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
   )
}

export default Signin
