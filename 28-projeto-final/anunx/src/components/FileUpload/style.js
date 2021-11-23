import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles( theme => ({
   mask: {},
   mainImage: {},   
   thumbsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 15
   },
   dropzone: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
      width: 200,
      height: 150,
      margin: '0 15px 15px 0',
      backgroundColor: theme.palette.background.default,
      border: '2px dashed gray'
   },
   thumb: {
      position: 'relative',
      width: 200,
      height: 150,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      margin: '0 15px 15px 0',

      '& $mainImage': {
         backgroundColor: 'blue',
         padding: '6px 10px',
         position: 'absolute',
         bottom: 0,
         left: 0,
      },

      '&:hover $mask': {
         display: 'flex'
      },

      '& $mask': {
         display: 'none',
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: 'rgba(0, 0, 0, 0.7)',
         width: '100%',
         height: '100%'
      }
   }
}))

export default useStyles