import { Alert, Button, Snackbar } from '@mui/material'
import { useState } from 'react'

const Toasty = ({ open, text, severity, onClose = null }) => {
   const handleClose = (event, reason) => {
      if (reason === 'clickaway') return      

      if (onClose) onClose()
   }

   return (
      <Snackbar
         open={open}
         autoHideDuration={3000}
         onClose={handleClose}
         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
         <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: '100%' }}
            elevation={6}
            variant="filled"
         >
            {text}
         </Alert>
      </Snackbar>
   )
}

export default Toasty
