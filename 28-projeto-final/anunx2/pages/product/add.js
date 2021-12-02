import {
   Typography,
   Grid,
   TextField,
   Stack,
   InputLabel,
   Select,
   MenuItem,
   Button,
} from '@mui/material'
import Upload from '../../src/components/Upload'
import { useState } from 'react'
import { FormControl } from '@mui/material'
import Paper from '../../src/components/Paper'
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Add = () => {
   const [category, setCategory] = useState('')

   const handleChange = event => {
      setCategory(event.target.value)
   }

   return (
      <>
         <Paper variant="outlined" align="center">
            <Typography variant="h4" gutterBottom align="center">
               Cadastro do Produto
            </Typography>
            <br />
            <Grid container spacing="0" sx={{ flexGrow: 1 }}>
               <Grid item md={7} sm={7} xs={12}>
                  <Stack spacing={2}>
                     <TextField
                        required
                        id="name"
                        name="name"
                        label="Nome do Prouto"
                        fullWidth
                        variant="standard"
                     />
                     <TextField
                        required
                        id="price"
                        name="price"
                        label="Preço"
                        type="number"
                        fullWidth
                        variant="standard"
                     />

                     <FormControl variant="standard" fullWidth>
                        <InputLabel id="category-label">Categoria *</InputLabel>
                        <Select
                           required
                           labelId="category-label"
                           id="category"
                           value={category}
                           onChange={handleChange}
                           label="category"
                        >
                           <MenuItem value={10}>Ten</MenuItem>
                           <MenuItem value={20}>Twenty</MenuItem>
                           <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                     </FormControl>

                     <TextField
                        required
                        id="description"
                        name="description"
                        label="Descição"
                        type="number"
                        fullWidth
                        multiline
                        rows={6}
                        variant="standard"
                     />
                  </Stack>
               </Grid>
               <Grid item md={0.4} sm={0.2} xs={1}>
                  <br />
               </Grid>
               <Grid item md={4.6} sm={4.8} xs={12}>
                  <Typography component="div" variant="body1" sx={{borderBottom: '1px solid #888', marginBottom: "10px"}} color="text.secondary">
                     Fotos *
                  </Typography>
                  <Upload />
                  

               </Grid>
            </Grid>
            <br /><br />
            <Stack direction="row" spacing={1} maxWidth="500px">
               <Button variant="contained" fullWidth>
                  Cancelar
               </Button>
               <Button variant="contained" fullWidth>
                  Cadastrar
               </Button>
            </Stack>
         </Paper>
      </>
   )
}

export default Add
