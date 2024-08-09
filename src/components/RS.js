import React from 'react'
import {Stack,Typography} from '@mui/material'
const RS = (props) => {
  return (
    <Stack direction='row' spacing={2}  alignItems="center">
    <img src={props.src} style={{width:'20px',height:'20px',marginTop:'12px'}}/> 
    <Typography style={{fontWeight:'bold',fontFamily:'Montserrat',color:'#fff' ,marginTop:'15px'}}>{props.children}</Typography>
    </Stack>
  )
}

export default RS
