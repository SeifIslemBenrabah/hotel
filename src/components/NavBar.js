import React from 'react'
import  Box from '@mui/material/Box'
import {Link} from '@mui/material'
import { Stack } from '@mui/system'
import Logo from '../Assets/image/Logo.png'
function NavBar() {
  return (
   <Box >
    <Stack direction="row"
    justifyContent="space-around"
    style={{ display: 'flex', alignItems: 'center' }} >
      <img src={Logo} alt="logo" style={{width:'250px' , height: '135px' ,margin: '0 20px'}}/>
    <Stack direction="row"
         gap="40px"
         fontSize="24px"
         alignItems="flex-end">
      <a href='/' style={{ textDecoration:'none' ,fontFamily: "Montserrat", fontSize:"22px",color: "#FFFFFF", borderBottom: false ? '3px solid #FFFFFF' : 'none',fontWeight: 'normal' }}>Home</a>
      <a  href='/Facilities' style={{ textDecoration:'none',fontFamily: "Montserrat",fontSize:"22px",color:"#FFFFFF",fontWeight: 'normal' }}>Facilities</a>
      <a  href='/Rooms' style={{textDecoration:'none',fontFamily: "Montserrat",fontSize:"22px",color:"#FFFFFF" ,fontWeight: 'normal'}}>Rooms</a>
      <a  href='/ContactUs' style={{textDecoration:'none',fontFamily: "Montserrat",fontSize:"22px",color:"#FFFFFF" ,fontWeight: 'normal'}}>Contact-us</a>
     </Stack>
    </Stack>
   </Box>
  )
}

export default NavBar

