import { IconButton, InputBase, Paper as PaperMui, makeStyles } from '@mui/material/'
import SearchIcon from '@mui/icons-material/search'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { styled } from '@mui/material/styles'

const Paper= styled(PaperMui)(({ theme }) => ({

      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(0, 2),
      marginRight: theme.spacing(2),

}))

const SearchField = ({ sx }) => {

   const [search, setSearch] = useState()
   const router = useRouter()

   const handleSubmitSearch = () => {
      router.push({
         pathname: `/search/${search}`,
      })
   }

   return (
      <Paper sx={sx} lg={0} md={0} sm={0} xs={0} >
         <InputBase
            onChange={e => setSearch(e.target.value)}
            onKeyPress={e => (e.key === 'Enter' ? handleSubmitSearch() : null)}
            placeholder="Busque aqui o seu produto"
            fullWidth
         />
         <IconButton onClick={handleSubmitSearch}>
            <SearchIcon />
         </IconButton>
      </Paper>
   )
}

export default SearchField
