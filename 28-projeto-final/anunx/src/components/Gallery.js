import { Grid } from '@mui/material'
import { Box as BoxMui } from '@mui/system'
import Image from 'next/image'
import { useState } from 'react'
import { styled } from '@mui/material/styles'

const Box = styled(BoxMui)({
   '&:hover': {
      cursor: 'pointer'
    }
})

const Gallery = ({ images }) => {
   const [imgActive, setImgActive] = useState("/uploads/"+images[0].name)

   const onCLickThumb = (e) => {
      setImgActive('/uploads/'+e.target.name)
   }

   
 
   
   return (
      <>
         <Image
            src={imgActive}
            width="100"
            height="50"
            alt=""
            layout="responsive"
            objectFit="cover"
            priority

         />
         
         <Grid container spacing="3" sx={{ flexGrow: 1, marginTop: "1px" }}>
            {
               images.map(((image) => {
                  return (
                  <Grid key={image._id} item md={3} sm={4} xs={6}>
                     <Box>
                        <Image
                           name={image.name}
                           src={`/uploads/${image.name}`}
                           width="100"
                           height="50"
                           alt=""
                           layout="responsive"
                           onClick={(e)=>onCLickThumb(e)}  
                           objectFit="cover"
                           priority                   
                        />
                     </Box>
                  </Grid>
               )}))
            }            
         </Grid>
      </>
   )
}

export default Gallery
