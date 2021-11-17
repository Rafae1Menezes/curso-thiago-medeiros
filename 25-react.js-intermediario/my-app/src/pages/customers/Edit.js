import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { TextField,	Button } from '@material-ui/core'

import Toasty from '../../components/Toasty'

const useStyles = makeStyles(theme => ({
   wrapper: {
		margin: theme.spacing(3)
	}
}))

const Edit = () => {
	const classes = useStyles()
	const { id } = useParams()

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

	const [openToasty, setOpenToasty] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		axios.get(`https://reqres.in/api/users/${id}`)
		   .then(response => {
			  	const { data } = response.data
				setForm({
					name: {
						value: data.first_name,
						error: false,
					},
					job: {
						value: data.job,
						error: false,
					},					
				})
			})
	 },[id])

	

	

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
		setIsLoading(true)
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
		
		axios.put(`https://reqres.in/api/users/${id}`, {
			name: form.name.value,
			job: form.job.value
		}).then((response)=>{
			setIsLoading(false)
			setOpenToasty(true)			
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
					disabled={isLoading}
				>
						{ isLoading ? "Aguarde..." : "Salvar Alterações"}
				</Button>
			</div>
			<Toasty 
				open={openToasty} 
				severity="success" 
				text="Registro atualizado com sucesso."
				onClose={()=> setOpenToasty(false)}
			/>
			
		</>
   )
}

export default Edit
