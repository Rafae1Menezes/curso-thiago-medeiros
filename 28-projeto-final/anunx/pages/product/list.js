import {
   Box,
   Container,
   Grid,
   IconButton,
   InputBase,
   Paper,
   Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import SearchIcon from '@material-ui/icons/search'

import TemplateDefault from '../../src/templates/Default'
import Card from '../../src/components/Card'

const useStyle = makeStyles(theme => ({
   box: {
      backgroundColor: theme.palette.background.white,
      padding: theme.spacing(3),
      marginBottom: theme.spacing(3),
   },
   gridContainer: {
      padding: "15px 0"
   },
   searchBox: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(0, 2,),
      margin: theme.spacing(0, 0, 3),
   }
}))

const List = () => {
   const classes = useStyle()

   return (
      <TemplateDefault>
         <Container maxWidth="lg">

            <Paper className={classes.searchBox}>
               <InputBase 
                  placeholder="Ex.: iPhone 12 com garantia"
                  fullWidth
               />
               <IconButton type="submit" aria-label="search">
                  <SearchIcon />
               </IconButton>
            </Paper>

            <Box className={classes.box}>
               <Typography component="h6" variant="h6">
                  Anúncios
               </Typography>
               <Typography component="span" variant="subtitle2">
                  ENCONTRADO 200 ANÚNCIOS
               </Typography>
               
               <Grid container spacing={4} className={classes.gridContainer}>

                  <Grid item xs={12} sm={6} md={4}>                  
                     <Card 
                        image="https://source.unsplash.com/random?a=5"
                        title="Produto X"
                        subtitle="R$ 60,00"
                     />
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>                  
                     <Card 
                        image="https://source.unsplash.com/random?a=1"
                        title="Produto X"
                        subtitle="R$ 60,00"
                     />
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>                  
                     <Card 
                        image="https://source.unsplash.com/random?a=2"
                        title="Produto X"
                        subtitle="R$ 60,00"
                     />
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>                  
                     <Card 
                        image="https://source.unsplash.com/random?a=3"
                        title="Produto X"
                        subtitle="R$ 60,00"
                     />
                  </Grid>

                  <Grid item xs={12} sm={6} md={4}>                  
                     <Card 
                        image="https://source.unsplash.com/random?a=4"
                        title="Produto X"
                        subtitle="R$ 60,00"
                     />
                  </Grid>
               </Grid>
            </Box>
         </Container>
      </TemplateDefault>
   )
}

export default List
