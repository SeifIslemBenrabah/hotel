import React from 'react'
import {Box,Typography} from '@mui/material'

function Groupe(props) {
  return (
    <Box className="flex flex-col justify-center items-center">
        <img src={props.pic} alt='banner'  style={{
          width: '60%',
          height: '60%',
          position: 'relative'
        }}/>
        <Typography style={{ position: 'absolute', color:'#14274A',fontWeight:'bold',fontFamily:'Montserrat' ,backgroundColor:'#FFF'}} variant='h2' >{props.children}</Typography>
    </Box>
  )
}

export default Groupe
