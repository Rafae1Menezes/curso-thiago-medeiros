import { CardContent } from '@mui/material/'
import { Typography } from '@mui/material/'
import { CardMedia } from '@mui/material/'
import { Card as CardMui } from '@mui/material/'
import { CardActions } from '@mui/material'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import Link from './Link'

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


const Card = ({  id, image, title, price, actions = false, handleClickOpenModal, handleClickEdit }) => {
   const height = actions ? 320 : 300

   

   return (
      <CardMui sx={{ width: '100%', height: height, position: 'relative' }}>
         <Link href={`/categoria/produto/${id}`} noLinkStyle>
            <CardMedia
               component="img"
               height="180"
               image={image}
               alt="green iguana"
            />
            <CardContent>
               <Title>{title}</Title>
               <Price>R$ {price}</Price>
            </CardContent>
         </Link>
         {actions ? (
            <CardActions
               sx={{ paddingTop: 0, bottom: 0, position: 'absolute' }}
            >
               <Button size="small" color="secondary" onClick={()=>handleClickEdit(id)}>Editar</Button>
               <Button size="small" color="secondary" onClick={handleClickOpenModal}>Deletar</Button>
            </CardActions>
         ) : null}
      </CardMui>
   )
}

export default Card
