
import { 
	Snackbar,
	Alert
} from '@material-ui/core'

const Toasty = ( { open, severity, text, onClose }) => {



   const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
         return
      }

		onClose()
   }

   return (
		<>
		<Snackbar
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
		>
			<Alert elevation={6} variant="filled" severity={severity} onClose={handleClose}>
				{text}
			</Alert>
		</Snackbar>
			
		</>
   )
}

export default Toasty


