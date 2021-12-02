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

const Description = styled(Typography)(({ theme }) => ({
   ...theme.typography.body2,
   color: theme.palette.text.secondary,
   lineHeight: '22px',
   maxHeight: '60px',
   overflow: 'hidden',
}))

const Card = ({ image, title, price, description }) => {
   const auth = false
   const height = auth ? 400 : 370

   return (
      <CardMui sx={{ width: '100%', height: height, position: 'relative' }}>
         <Link href="/categoria/produto/123456" noLinkStyle>
            <CardMedia
               component="img"
               height="180"
               image="https://i.picsum.photos/id/649/200/200.jpg?hmac=tj148mYv7Me5ctSyCePc_TNjma4W3n3RwnqJcIogLoI"
               alt="green iguana"
            />
            <CardContent>
               <Title>{title}</Title>
               <Price>R$ {price}</Price>
               <Description>{description}</Description>
            </CardContent>
         </Link>
         {auth ? (
            <CardActions
               sx={{ paddingTop: 0, bottom: 0, position: 'absolute' }}
            >
               <Button size="small">Editar</Button>
               <Button size="small">Deletar</Button>
            </CardActions>
         ) : null}
      </CardMui>
   )
}

export default Card
