import { makeStyles } from '@material-ui/styles'
import Link from 'next/link'

const useStyles = makeStyles({
   link:{
      textDecoration: 'none',
      color: 'inherit'
   }
})

const MyLink = ({ children, href }) => {
   const classes = useStyles()

   return (
      <Link href={href} passHref>
         <a className={classes.link}>
            
            {children}
            
         </a>
      </Link>
   )
}

export default MyLink
