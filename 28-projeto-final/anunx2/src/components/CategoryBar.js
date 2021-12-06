import { Grid } from '@mui/material'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import { Typography } from '@mui/material'

const CategoryBar = ({ category, handleChange }) => {
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

                  <MenuItem value="Agricultura">Agricultura</MenuItem>
                  <MenuItem value="Moda">Moda</MenuItem>
                  <MenuItem value="Carros, Motos e Barcos">
                     Carros, Motos e Barcos
                  </MenuItem>
                  <MenuItem value="Serviços">Serviços</MenuItem>
                  <MenuItem value="Moveis, Casa e Jardim">
                     Moveis, Casa e Jardim
                  </MenuItem>
                  <MenuItem value="Imóveis">Imóveis</MenuItem>
                  <MenuItem value="Equipamentos e Ferramentas">
                     Equipamentos e Ferramentas
                  </MenuItem>
                  <MenuItem value="Celulares e Tablets">
                     Celulares e Tablets
                  </MenuItem>
                  <MenuItem value="Tecnologia">Tecnologia</MenuItem>
                  <MenuItem value="Emprego">Emprego</MenuItem>
               </Select>
            </FormControl>
         </Grid>
      </Grid>
   )
}

export default CategoryBar
