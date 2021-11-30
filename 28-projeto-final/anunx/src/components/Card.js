import {
   Card as CardMUI,
   CardActions,
   CardContent,
   CardMedia,
   Typography,
} from '@material-ui/core'
import { CallToActionSharp } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import MyLink from './MyLink'
import slugify from 'slugify'

const useStyles = makeStyles(() => ({
   cardMedia: {
      paddingTop: '56%',
   },
}))

const Card = ({ image, title, subtitle, actions, id, category }) => {
   const classes = useStyles()


   console.log(category)

   const categorySlug  = slugify(category).toLowerCase()
   const titleSlug = slugify(title).toLowerCase()

   return (
      <CardMUI>
         <MyLink href={`/${categorySlug}/${titleSlug }/${id}`}>
            <CardMedia image={image} className={classes.cardMedia} />
            <CardContent>
               <Typography variant="h5" component="h2">
                  {title}
               </Typography>
               <Typography>{subtitle}</Typography>
            </CardContent>
         </MyLink>
         <CardActions>{CallToActionSharp ? actions : null}</CardActions>
      </CardMUI>
   )
}

export default Card
