import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/styles'


import CustomerCard from '../components/CustomerCard'


const useStyles = makeStyles(theme => ({
   root: {
      flexGrouw: 1,
   },
   card: {
      margin: theme.spacing(2),
   },
}))

const Customers = () => {
   const classes = useStyles()

   const [cutomers, setCustomers] = useState([])
  

   useEffect(() => {
      axios.get('https://reqres.in/api/users').then(response => {
         const { data } = response.data
         setCustomers(data)
      })
   }, [])

   return (
      <>
         <Grid container>
            {cutomers.map(item => (
               <Grid item xs={12} md={4} key={item.id}>
                  <CustomerCard
                     key={item.id}
                     name={item.first_name}
                     lastName={item.last_name}
                     email={item.email}
                     avatar={item.avatar}
                     className={classes.card}
                  />
               </Grid>
            ))}
         </Grid>         
      </>
   )
}

export default Customers
