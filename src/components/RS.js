import React from 'react'
import {Stack,Typography} from '@mui/material'
const RS = (props) => {
  return (
    <Stack direction='row' spacing={2} style={{display:'flex' ,alignSelf:'center',alignItems:'center'}}>
    <img src={props.src} style={{width:'25px',height:'30px'}}/> 
    <Typography style={{fontWeight:'bold',fontFamily:'Montserrat',color:'#fff' ,marginTop:'15px'}}>{props.children}</Typography>
    </Stack>
  )
}

export default RS
