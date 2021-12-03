import { Toolbar, Menu, MenuItem, Divider, ListItemIcon } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Link from './Link'
import SearchField from './SearchField'
import Avatar from '@mui/material/Avatar'
import { useState } from 'react'

import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import PersonIcon from '@mui/icons-material/Person'

const Header = () => {
   const auth = false
   const [anchorEl, setAnchorEl] = useState(null)
   const open = Boolean(anchorEl)
   const handleClick = event => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <>
         <AppBar position="static" spacing="3">
            <Container maxWidth="lg">
               <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 5 }}>
                     <Link href="/" noLinkStyle>
                        AnunX
                     </Link>
                  </Typography>

                  <Box
                     sm={0}
                     display={{ xs: 'none', sm: 'none', md: 'block' }}
                     sx={{ flexGrow: 3 }}
                  >
                     <SearchField />
                  </Box>

                  {auth ? (
                     <>
                        <Link href="/product/add" noLinkStyle>
                           <Button color="inherit" variant="outlined">
                              Anunciar e Vender
                           </Button>
                        </Link>
                        <Avatar
                           sx={{
                              marginLeft: '10px',
                              '&:hover': {
                                 cursor: 'pointer',
                              },
                           }}
                           onClick={handleClick}
                        />
                     </>
                  ) : (
                     <>
                        <Link href="/auth/signin" noLinkStyle>
                           <Button
                              color="inherit"
                              variant="outlined"
                              sx={{ marginRight: '15px' }}
                           >
                              SingIn
                           </Button>
                        </Link>
                        <Link href="/auth/signup" noLinkStyle>
                           <Button color="inherit" variant="outlined">
                              SingUp
                           </Button>
                        </Link>
                     </>
                  )}

                  <Menu
                     anchorEl={anchorEl}
                     open={open}
                     onClose={handleClose}
                     onClick={handleClose}
                     PaperProps={{
                        elevation: 0,
                        sx: {
                           overflow: 'visible',
                           filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                           mt: 1.5,
                           '& .MuiAvatar-root': {
                              width: 32,
                              height: 32,
                              ml: -0.5,
                              mr: 1,
                           },
                           '&:before': {
                              content: '""',
                              display: 'block',
                              position: 'absolute',
                              top: 0,
                              right: 14,
                              width: 10,
                              height: 10,
                              bgcolor: 'background.paper',
                              transform: 'translateY(-50%) rotate(45deg)',
                              zIndex: 0,
                           },
                        },
                     }}
                     transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                     anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                     <MenuItem>
                        <ListItemIcon>
                           <PersonIcon fontSize="small" />
                        </ListItemIcon>
                        Perfil
                     </MenuItem>
                     <Divider />
                     <Link href="/user/dashboard" noLinkStyle>
                        <MenuItem>Anúncios</MenuItem>
                     </Link>
                     <MenuItem>Minhas Compras</MenuItem>
                     <MenuItem>Minhas Vendas</MenuItem>
                     <Divider />
                     <Link href="/" noLinkStyle>
                        <MenuItem>
                           <ListItemIcon>
                              <ExitToAppIcon fontSize="small" />
                           </ListItemIcon>
                           Sair
                        </MenuItem>
                     </Link>
                  </Menu>
               </Toolbar>
            </Container>
         </AppBar>
         <Container maxWidth="lg">
            <Box
               display={{ xs: 'block', sm: 'block', md: 'none' }}
               sx={{ flexGrow: 1, marginTop: '20px' }}
            >
               <SearchField />
            </Box>
         </Container>
      </>
   )
}

export default Header
