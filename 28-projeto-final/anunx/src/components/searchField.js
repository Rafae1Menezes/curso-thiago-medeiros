import { IconButton, InputBase, Paper, makeStyles } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/search'
import { useState } from 'react'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
   searchBox: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(0, 2),
      margin: theme.spacing(3, 0, 6),
   }
}))

const SearchField = () => {
   const classes = useStyles()
   const [search, setSearch] = useState()
   const router = useRouter()

   const handleSubmitSearch = () => {
      router.push({
         pathname: `/search/${search}`,
      })
   }

   return (
      <Paper className={classes.searchBox}>
         <InputBase
            onChange={e => setSearch(e.target.value)}
            onKeyPress={e => (e.key === 'Enter' ? handleSubmitSearch() : null)}
            placeholder="Ex.: iPhone 12 com garantia"
            fullWidth
         />
         <IconButton onClick={handleSubmitSearch}>
            <SearchIcon />
         </IconButton>
      </Paper>
   )
}

export default SearchField
