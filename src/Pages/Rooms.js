import React from 'react'
import {Box} from '@mui/material'
import Page3 from '../Assets/image/Page3.png'
import Banner from '../components/Banner'
import Buttom from '../components/Buttom'
function Rooms() {
  return (
   <Box>
    <img src={Page3} alt='Rooms' style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1
    }}/>
    <Banner/>
    <Buttom left='/ContactUS' right='/Facilities'/>
   </Box>
  )
}

export default Rooms
