import { CardContent } from '@mui/material/'
import { Typography } from '@mui/material/'
import { CardMedia } from '@mui/material/'
import { Card as CardMui } from '@mui/material/'
import { CardActions } from '@mui/material'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { formatCurrency } from '../utils/currency'
import Link from './Link'
import slugify from 'slugify'

const Title = styled(Typography)(({ theme }) => ({
   ...theme.typography.h6,
   color: theme.palette.text.primary,
   lineHeight: '22px',
   maxHeight: '45px',
   overflow: 'hidden',
   marginBottom: '8px',
}))

const Price = styled(Typography)(({ theme }) => ({
   ...theme.typography.body1,
   color: theme.palette.primary.main,
   marginBottom: '8px',
   fontWeight: 'bold',
}))


const Card = ({  id, image, title, price, category, actions = false, handleClickOpenModal, handleClickEdit }) => {
   const height = actions ? 320 : 300


   const categorySlug  = slugify(category).toLowerCase()
   const titleSlug = slugify(title).toLowerCase()

   return (
      <CardMui sx={{ width: '100%', height: height, position: 'relative' }}>
         <Link href={`/${categorySlug}/${titleSlug }/${id}`} noLinkStyle>
            <CardMedia
               component="img"
               height="180"
               image={image}
               alt="green iguana"
            />
            <CardContent>
               <Title>{title}</Title>
               <Price>{formatCurrency(price)}</Price>
            </CardContent>
         </Link>
         {actions ? (
            <CardActions
               sx={{ paddingTop: 0, bottom: 0, position: 'absolute' }}
            >
               <Button size="small" color="secondary" onClick={()=>handleClickEdit(id)}>Editar</Button>
               <Button size="small" color="secondary" onClick={()=>handleClickOpenModal(id)}>Deletar</Button>
            </CardActions>
         ) : null}
      </CardMui>
   )
}

export default Card
