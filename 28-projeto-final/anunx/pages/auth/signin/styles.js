import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
   container: {
      paddingBottom: theme.spacing(3),
   },
   boxContainer: {
      paddingBottom: theme.spacing(3),
   },
   box: {
      backgroundColor: theme.palette.background.white,
      padding: theme.spacing(3),
   },
   inputLabel: {
      fontWeight: 400,
      color: theme.palette.primary.main,
   },
   loading: {
      display: 'block',
      margin: '0 auto',
   },
   orSeparator: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e8e8e8',
      width: '100%',
      height: 1,
      margin: theme.spacing(7, 0, 4),

      '& span': {
         backgroundColor: 'white',
         padding: '0 30px',
      }
   }
}))

export default useStyles