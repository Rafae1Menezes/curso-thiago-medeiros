import { Grid } from '@mui/material'
import { Box } from '@mui/material'
import Image from 'next/image'



const Gallery = () => {


   return (
      <>   
         <Grid container spacing="3" sx={{ flexGrow: 1, marginTop: "1px" }}>
            <Grid item md={4} sm={4} xs={6}>
               <Box>
                  <Image
                     name="64e2b391-d717-4e18-97cc-1647bf23e8fd.jfif"
                     src="/upload/64e2b391-d717-4e18-97cc-1647bf23e8fd.jfif"
                     width="100"
                     height="50"
                     alt=""
                     layout="responsive"
                       
                     priority                   
                  />
               </Box>
            </Grid>

            <Grid item md={4} sm={4} xs={6}>
               <Box>
                  <Image
                     name="99a8d374-1cac-4c89-b890-6f543553d19e.jpg"
                     src="/upload/99a8d374-1cac-4c89-b890-6f543553d19e.jpg"
                     width="100"
                     height="50"
                     alt=""
                     layout="responsive"
                                          
                  />
               </Box>
            </Grid>

            <Grid item md={4} sm={4} xs={6}>
               <Box>
                  <Image
                     name="1280x800-captain-america-mjolnir-artwork_1568053956.jpg"
                     src="/upload/1280x800-captain-america-mjolnir-artwork_1568053956.jpg"
                     width="100"
                     height="50"
                     alt=""
                     layout="responsive"
                                          
                  />
               </Box>
            </Grid>

            <Grid item md={4} sm={4} xs={6}>
               <Box>
                  <Image
                     name="55573.jpg"
                     src="/upload/55573.jpg"
                     width="100"
                     height="50"
                     alt=""
                     layout="responsive"
                                          
                  />
               </Box>
            </Grid>

            <Grid item md={4} sm={4} xs={6}>
               <Box>
                  <Image
                     name="bfdf9551-566b-4688-91aa-cc2a903b18ec.jfif"
                     src="/upload/bfdf9551-566b-4688-91aa-cc2a903b18ec.jfif"
                     width="100"
                     height="50"
                     alt=""
                     layout="responsive"
                                          
                  />
               </Box>
            </Grid>
            
         </Grid>
      </>
   )
}

export default Gallery
