import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
   wrapper: {
		margin: theme.spacing(3)
	}
}))

const CustomersRegister = () => {
	const classes = useStyles()

	const [form, setForm] = useState({
		name: {
			value: '',
			error: false,
		},
		job: {
			value: '',
			error: false,
		},
	})

	const handleInputChange = e => {
		const {name, value} = e.target
		
		setForm({
			...form,
			[name]: {
				value,
			} 
		})
	}

	const handleRegisterButton = () => {
		let hasError = false
		let newFormState = {
			...form,
		}

		if(!form.name.value){
			newFormState.name = {
				value: form.name.value,
				error: true,
				helpText: 'Digite o campo nome corretamete'
			}
			hasError = true
		}

		if(!form.job.value){
			newFormState.job = {
				value: form.job.value,
				error: true,
				helpText: 'Digite o campo cargo corretamete'
			}
			hasError = true
		}

		if(hasError){
			return setForm(newFormState)
		}
		
		axios.post('https://reqres.in/api/users', {
			name: form.name.value,
			job: form.job.value
		}).then((response)=>{
			console.log('ok', response)
		})
         
	}

   return (
		<>
			<div className={classes.wrapper}>
				<TextField
					error={form.name.error}
					helperText={form.name.helpText}
					name="name"
					label="Digite seu nome" 
					variant="standard" 
					value={form.name.value} 
					onChange={handleInputChange} 
				/>
			</div>
			<div className={classes.wrapper}>
				<TextField
					error={form.job.error}
					helperText={form.job.helpText}
					name="job"
					label="Digite seu cargo" 
					variant="standard" 
					value={form.job.value} 
					onChange={handleInputChange}  
				/>
			</div>
			<div className={classes.wrapper}>
				<Button 
					variant="contained"
					onClick={handleRegisterButton}
				>
						Cadastrar
				</Button>
			</div>
			
		</>
   )
}

export default CustomersRegister
