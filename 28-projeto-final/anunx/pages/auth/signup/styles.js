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
   }
}))

export default useStyles