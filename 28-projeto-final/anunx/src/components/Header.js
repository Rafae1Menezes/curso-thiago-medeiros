import Link from 'next/link'
import {
   makeStyles,
   AppBar,
   Toolbar,
   Typography,
   Button,
   IconButton,
   Container,
   Avatar,
   Menu,
   MenuItem,
   Divider,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import { AccountCircle } from '@material-ui/icons'
import { useState } from 'react'

const useStyles = makeStyles(theme => ({
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
   },
   userName: {
      marginLeft: 6
   },
   devider: {
      margin: '8px 0'
   },
}))

export default function ButtonAppBar() {   
   const classes = useStyles()
   const [anchorUserMenu, setAnchorUserMenu] = useState(false)

   const openUserMenu = Boolean(anchorUserMenu) 

   return (
      <>
         <AppBar position="static" elevation={3}>
            <Container maxWidth="lg">
               <Toolbar>
                  <Link href="/" passHref>                  
                     <Typography variant="h6" className={classes.title}>
                        AnuX
                     </Typography>
                  </Link>
                  <Link href="/user/publish" passHref>
                     <Button color="inherit" variant="outlined">
                        Anunciar e Vender
                     </Button>
                  </Link>
                  <IconButton color="secondary" onClick={(e) => { setAnchorUserMenu(e.currentTarget)}}>
                     {
                        true === true
                        ? <Avatar src="" />
                        : <AccountCircle />
                     }

                     <Typography variant="subtitle2" color="secondary" className={classes.userName}>
                        Rafael Menezes
                     </Typography>
                  </IconButton>

                  <Menu 
                     anchorEl={anchorUserMenu}
                     open={openUserMenu}
                     onClose={() => setAnchorUserMenu(null)}
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                     }}
                  >
                     <Link href="/user/dashboard" passHref>
                        <MenuItem>Meus anúncios</MenuItem>
                     </Link>
                     <Link href="/user/publish" passHref>
                        <MenuItem>Pùblicar novo anúncio</MenuItem>
                     </Link>
                     <Divider className={classes.devider} />
                     <Link href="/user/dashboard" passHref>
                        <MenuItem>Sair</MenuItem>
                     </Link>
                  </Menu>

               </Toolbar>
            </Container>
         </AppBar>
      </>
   )
}
