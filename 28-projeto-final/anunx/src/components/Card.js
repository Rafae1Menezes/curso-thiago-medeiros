import {
   Card as CardMUI,
   CardActions,
   CardContent,
   CardMedia,
   Typography
} from '@material-ui/core'
import { CallToActionSharp } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles( () => ({
   cardMedia: {
      paddingTop: '56%'
   },
}))

const Card = ({ image, title, subtitle, actions }) => {
   const classes = useStyles()

   return (
      <CardMUI>
         <CardMedia
            image={image}
            className={classes.cardMedia}
         />
         <CardContent>
            <Typography variant="h5" component="h2">
               {title}
            </Typography>
            <Typography>
               {subtitle}
            </Typography>
         </CardContent>
         <CardActions>
         {
            CallToActionSharp
            ? actions
            : null
         }
         </CardActions>
      </CardMUI>
   )
}

export default Card
