import { makeStyles } from '@material-ui/styles'
import { TextField,	Button, Typography } from '@material-ui/core'
import { useState } from 'react'

const useStyles = makeStyles(theme => ({
   wrapper: {
		margin: theme.spacing(3)
	}
}))

const Login = () => {
   const classes = useStyles()
   const [form, setForm] = useState({
      email: '',
      password: ''
   })

   const handleInputChange = e => {
      const { name, value } = e.target

      setForm({
         ...form,
         [name]: value
      })
   }

   const handleFormSubmit = () => {
      console.log(form)
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
            <Button variant="contained" onClick={handleFormSubmit} >
               Entrar
            </Button>
         </div>
      </>
   )
}

export default Login