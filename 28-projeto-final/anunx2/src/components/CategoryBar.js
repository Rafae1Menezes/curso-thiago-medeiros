import { Box, Divider, styled, Grid, Button as ButtonMui } from '@mui/material'
import {
   fontWeight,
   height,
   FormControl,
   InputLabel,
   Select,
   MenuItem,
} from '@mui/material'
import Link from './Link'
import { useState } from 'react'
import { Typography } from '@mui/material'

const Item = styled(ButtonMui)({
   padding: '8px 15px',

   color: '#fff',
   fontWeight: 'normal',
   fontSize: 13,
   width: '100%',
})

const CategoryBar = () => {
   const [category, setCategory] = useState('')

   const handleChange = event => {
      setCategory(event.target.value)
   }

   return (
      <Grid container sx={{ flexGrow: 1 }}>
         <Grid item md="9" sm="8" xs="12"><Typography component="div" variant="h4">Produtos de Bebê</Typography></Grid>
         <Grid item md="0" sm="0" xs="12"><br /></Grid>
         <Grid item md="3" sm="4" xs="12" align="right">
            <FormControl fullWidth>
               <InputLabel id="demo-simple-select-label">
               Filtrar por Categoria
               </InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Filtrar por Categoria"
                  onChange={handleChange}
                  sx={{height: "45px"}}
               >
                  <MenuItem value="Todas" selected>TOdas</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
               </Select>
            </FormControl>
         </Grid>
      </Grid>
   )
}

export default CategoryBar
