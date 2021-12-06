import { Grid } from '@mui/material'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import { Typography } from '@mui/material'

const CategoryBar = ({ categories, category, handleChange }) => {

   console.log(categories)

   return (
      <Grid container sx={{ flexGrow: 1 }}>
         <Grid item md={9} sm={8} xs={12}>
            <Typography component="div" variant="h4">
               {category}
            </Typography>
         </Grid>
         <Grid item md={0.1} sm={0.1} xs={12}>
            <br />
         </Grid>
         <Grid item md={2.9} sm={3.9} xs={12} align="right">
            <FormControl fullWidth>
               <InputLabel id="demo-simple-select-label">
                  Filtrar por Categoria
               </InputLabel>
               <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Filtrar por Categoria"
                  onChange={(e) => handleChange(e.target.value)}
                  sx={{ height: '45px' }}
               >
                  <MenuItem value="Todas">Todas</MenuItem>
                  {
                     categories.map((cat, i)=>{return(
                        <MenuItem key={i} value={cat}>{cat}</MenuItem>
                     )})
                  }
                  
               </Select>
            </FormControl>
         </Grid>
      </Grid>
   )
}

export default CategoryBar
