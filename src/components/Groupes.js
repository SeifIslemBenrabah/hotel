import React from 'react'
import Groupe from './Groupe'
import Gym from '../Assets/image/Gym.png'
import PoolsideBars from '../Assets/image/PoolsideBars.png'
import {Stack , Typography ,Box } from '@mui/material'
import RESTAURANT from '../Assets/image/RESTAURANT.png'
import SwimmingPool from '../Assets/image/SwimmingPool.png'
function Groupes() {
  return (
    <Box>
      <Typography sx={{fontWeight:'bold',fontFamily:'Rosarivo',color: { xs: 'white', sm: 'black' },textAlign:'center',mb:{xs:'80px',sm:'0px'}}} fontSize="40px" fontWeight="600" mt={7}>
      FACILITIES
   </Typography>
    <Typography style={{fontWeight:'normal',fontFamily:'Montserrat',textAlign:'center'}} mb={5} variant='h6'>
    We want your stay at our lush hotel to be truly unforgettable. That is why we give special attention to all of your needs so<br/> 
that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure<br/>
and our modern luxury resort facilities will help you enjoy the best of all. 
   </Typography>
    <Stack spacing={5} direction='column'>
    <Groupe pic={Gym}>THE GYM</Groupe>
    <Groupe pic={PoolsideBars}>THE POOL SIDE BARS</Groupe>
    <Groupe pic={SwimmingPool}>SWIMMING POOL</Groupe>
    <Groupe pic={RESTAURANT}>RESTAURANT</Groupe>
    </Stack>
    </Box>
  )
}

export default Groupes
