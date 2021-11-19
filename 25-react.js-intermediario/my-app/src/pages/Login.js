import { makeStyles } from '@material-ui/styles'
import { TextField,	Button, Typography } from '@material-ui/core'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useAuth from '../state/auth'

const useStyles = makeStyles(theme => ({
   wrapper: {
		margin: theme.spacing(3)
	}
}))

const Login = () => {
   const navigate = useNavigate();
   const classes = useStyles()
   const [form, setForm] = useState({
      email: '',
      password: ''
   })

   const [ isLoading, setIsLoading ] = useState(false)

   const { user, setUser } = useAuth()

   const handleInputChange = e => {
      const { name, value } = e.target

      setForm({
         ...form,
         [name]: value
      })
   }

   const handleFormSubmit = () => {
      setIsLoading(true)

      setTimeout(() => {

         setUser({
            logged: true,
            email: form.email
         })

         navigate(`/`)

      }, 4000)
   }

   return (
      <>
         <Typography variant="h4" component="div">
            Acesso Restrito
         </Typography>

         <div className={classes.wrapper}>
            <TextField
               label="Digite o seu e-mail"
               name="email"
               variant="standard"
               onChange={handleInputChange} 
            />
         </div>
         <div className={classes.wrapper}>
            <TextField
               label="Digite sua senha"
               name="password"
               variant="standard"
               type="password" 
               onChange={handleInputChange}
               
            />
         </div>
         <div className={classes.wrapper}>
            <Button  variant="contained" onClick={handleFormSubmit} disabled={isLoading}>
               {
                  isLoading ? 'Aguarde...' : 'Entrar'
               }
            </Button>
         </div>
      </>
   )
}

export default Login