import { Grid } from '@mui/material'
import { Box, styled } from '@mui/material'
import Image from 'next/image'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Uploader from './Uploader'

const Foto = styled('div')({
   position: 'relative',

   '&:hover div': {
      cursor: 'pointer',
      display: 'flex'
   },   

   div: {
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      color: 'white'
      }
})

const Uploads = () => {
   return (
      <>  
         <Grid container spacing="3" sx={{ flexGrow: 1, marginTop: '1px' }}>
            <Grid item md={4} sm={4} xs={6}>
               <Foto>
                  <Image
                     name="capitao-america-painel-em-lona-1-50x1m-temas-infantil.jpg"
                     src="/upload/capitao-america-painel-em-lona-1-50x1m-temas-infantil.jpg"
                     width="100"
                     height="50"
                     alt=""
                     layout="responsive"
                     priority
                  />
                   <div><DeleteForeverIcon /></div>
               </Foto>
            </Grid>

            <Grid item md={4} sm={4} xs={6}>
               <Foto>
                  <Image
                     name="64e2b391-d717-4e18-97cc-1647bf23e8fd.jfif"
                     src="/upload/64e2b391-d717-4e18-97cc-1647bf23e8fd.jfif"
                     width="100"
                     height="50"
                     alt=""
                     layout="responsive"
                     priority
                  />
                   <div><DeleteForeverIcon /></div>
               </Foto>
            </Grid>
            <Grid item md={4} sm={4} xs={6}>
               <Foto>
                  <Image
                     name="1280x800-captain-america-mjolnir-artwork_1568053956.jpg"
                     src="/upload/1280x800-captain-america-mjolnir-artwork_1568053956.jpg"
                     width="100"
                     height="50"
                     alt=""
                     layout="responsive"
                     priority
                  />
                   <div><DeleteForeverIcon /></div>
               </Foto>
            </Grid>
            <Grid item md={4} sm={4} xs={6}>
               <Foto>
                  <Image
                     name="55573.jpg"
                     src="/upload/55573.jpg"
                     width="100"
                     height="50"
                     alt=""
                     layout="responsive"
                     priority
                  />
                   <div><DeleteForeverIcon /></div>
               </Foto>
            </Grid>
            <Grid item md={4} sm={4} xs={6}>
               <Foto>
                  <Image
                     name="bfdf9551-566b-4688-91aa-cc2a903b18ec.jfif"
                     src="/upload/bfdf9551-566b-4688-91aa-cc2a903b18ec.jfif"
                     width="100"
                     height="50"
                     alt=""
                     layout="responsive"
                     priority
                  />
                   <div><DeleteForeverIcon sx={{width:'100%'}} /></div>
               </Foto>
            </Grid>

            <Grid item md={4} sm={4} xs={6}>
               
                  <Uploader />
               
            </Grid>
         </Grid>
      </>
   )
}

export default Uploads
