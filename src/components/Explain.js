import React from 'react'
import {Box ,Typography,Button ,Stack} from '@mui/material'
import View from '../Assets/image/View.png'
import Room from '../Assets/image/Room.png'
import Exp from './Exp'
function Explain() {
  return (
   <Box>
   <Typography style={{fontWeight:'normal',fontFamily:'Montserrat',display:'flex',justifyContent:'center'}} fontSize="28px" fontWeight="600" mb={5}>
   All our room types are including complementary breakfast
   </Typography>
   <Stack direction='column' spacing={5}>
   <Exp src={Room} height='378px' width='566px'>
    <Box>
   <Typography style={{fontFamily:'Rosarivo' ,fontSize:'40px'}} mt={8}>
   Luxury redefined
      </Typography>
      <Typography variant='h6' style={{fontFamily:'Montserrat'}} mb={5}>
      Our rooms are designed to transport <br/>
you into an environment made for leisure.  <br/>
Take your mind off the day-to-day of home  <br/>    
life and find a private paradise for yourself.
      </Typography>
      </Box>
   </Exp>
   <Exp src={View} height='318px' width='570px'>
   <Box>
   <Typography style={{fontFamily:'Rosarivo' ,fontSize:'40px'}} mt={8}>
   Leave your worries in <br/>
the sand
      </Typography>
      <Typography variant='h6' style={{fontFamily:'Montserrat'}} mb={2}>
      We love life at the beach. Being close<br/>
to the ocean with access to endless sandy<br/>
beach ensures a relaxed state of mind. It <br/>
seems like time stands still watching the <br/>
ocean. 
      </Typography>
      </Box>
   </Exp>
   </Stack>
   </Box>
  )
}

export default Explain
