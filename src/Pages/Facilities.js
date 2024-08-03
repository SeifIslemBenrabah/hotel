import React from 'react'
import {Box} from'@mui/material'
import Page2 from '../Assets/image/Page2.png'
import Banner from '../components/Banner' 
import Groupes from '../components/Groupes'
import Buttom from '../components/Buttom'
function Facilities() {
  return (
   <Box>
    <Box><Box>
    <img src={Page2} alt='banner'  style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
           zIndex: -1
        }}/></Box>
        <Banner/>
        </Box>
      <Groupes/>
      <Buttom left='/Rooms' right='/'/>
   </Box>
  )
}

export default Facilities
