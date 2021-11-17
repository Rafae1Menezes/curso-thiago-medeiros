import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/styles'
import { useNavigate } from 'react-router-dom'

import CustomerCard from '../../components/CustomerCard'


const useStyles = makeStyles(theme => ({
   root: {
      flexGrouw: 1,
   },
   card: {
      margin: theme.spacing(2),
   },
}))

const List = () => {
   const classes = useStyles()
   const [customers, setCustomers] = useState([])
   const navigate = useNavigate();

   useEffect(() => {
      axios.get('https://reqres.in/api/users')
         .then(response => {
            const { data } = response.data
            setCustomers(data)
         })
   }, [])


   const handleRemoveCustomer = (id, setIsLoading) => {
      setIsLoading(true)
		axios.delete(`https://reqres.in/api/users/${id}`)
         .then( response => {
            const newCustomersState = customers.filter(customer => customer.id !== id)
            setCustomers(newCustomersState)
            setIsLoading(false)
         })

	}

   const handleEditCustomer = id => {
      navigate(`/customers/edit/${id}`)
   }

   return (
      <>
         <Grid container>
            {customers.map(item => (
               <Grid item xs={12} md={4} key={item.id}>
                  <CustomerCard
                     id={item.id}
                     name={item.first_name}
                     lastName={item.last_name}
                     email={item.email}
                     avatar={item.avatar}
                     className={classes.card}
                     onRemoveCustomer={handleRemoveCustomer}
                     onEditCustomer={handleEditCustomer}
                  />
               </Grid>
            ))}
         </Grid>         
      </>
   )
}

export default List
