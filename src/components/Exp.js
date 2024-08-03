import React from 'react'
import { Stack ,Button} from '@mui/material'
const Exp = (props) => {
  return (
         <Stack spacing={5} direction='row' sx={{ display:'flex', alignSelf:'center' ,alignContent:'center'}}>
     <Stack direction='column' style={{ borderLeft:'solid 2px #000',paddingLeft:'15px', borderLeftWidth:'2px'}}>
     {props.children}
      <Button variant="contained" style={{background:'#E0B973', fontFamily:'Montserrat', width:'200px' }} href='/ContactUS'>Explore</Button>
      </Stack>
      <Stack style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
     <img src={props.src} style={{height: props.height ,width: props.width }} alt='Room' />
     </Stack>
   </Stack>
  )
}

export default Exp
