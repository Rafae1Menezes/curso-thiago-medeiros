import Link from 'next/link'
import { signOut, useSession } from 'next-auth/client'

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
      marginLeft: 8,
   },
   devider: {
      margin: '8px 0',
   },
   menu: {
      display: 'contents',
   },
   headButton: {
      marginRight: '10px',
   }
}))


export default function ButtonAppBar() {  
   const [session] = useSession()
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
                  <Link href={session ? "/user/publish" : "/auth/signin"} className={classes.headButton} passHref>
                     <Button color="inherit" variant="outlined">
                        Anunciar e Vender
                     </Button>
                  </Link>
                  
                  {
                     session
                        ? (
                           <IconButton color="secondary" onClick={(e) => { setAnchorUserMenu(e.currentTarget)}}>
                              {
                                 session.user.image
                                 ? <Avatar src={session.user.image} />
                                 : <AccountCircle />
                              }

                              <Typography variant="subtitle2" color="secondary" className={classes.userName}>
                                 {session.user.name}
                              </Typography>
                           </IconButton>
                        ) : null
                  }
                  

                  <Menu 
                     anchorEl={anchorUserMenu}
                     open={openUserMenu}
                     onClose={() => setAnchorUserMenu(null)}
                     anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                     }}
                     getContentAnchorEl={null}
                     
                  >
                     <div>
                        <Link href="/user/dashboard" passHref className={classes.menu}>
                           <MenuItem>Meus anúncios</MenuItem>
                        </Link>
                        <Link href="/user/publish" passHref className={classes.menu}>
                           <MenuItem>Pùblicar novo anúncio</MenuItem>
                        </Link>
                        <Divider className={classes.devider} />
                        <Link href="/user/dashboard" passHref className={classes.menu}>
                           <MenuItem onClick={()=> signOut({ callbackUrl: '/'})}>Sair</MenuItem>
                        </Link>
                     </div>
                  </Menu>

               </Toolbar>
            </Container>
         </AppBar>
      </>
   )
}
