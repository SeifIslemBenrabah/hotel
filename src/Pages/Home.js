import React from 'react'
import {Box} from '@mui/material'
import Banner from '../components/Banner'
import Bg from '../Assets/image/Bg.png'
import Explain from '../components/Explain'
import Buttom from '../components/Buttom'
import '../App.css'
const Home = () => {
  return (
    <Box>
       <img src={Bg}  style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100%', 
          zIndex: -1
        }}
        />
      <Banner/>
      <Explain/>
      <Buttom left='/Facilities' right='/ContactUS'/>
    </Box>
  )
}

export default Home
