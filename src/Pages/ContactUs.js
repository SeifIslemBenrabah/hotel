import React from 'react'
import {Box , Typography, Stack,TextField,Button} from '@mui/material'
import Buttom from '../components/Buttom'
function ContactUs() {
  return (
    <Box>
    <Box className="bg-cyan-900 flex flex-col justify-center items-center" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '50%',
      zIndex: -1}}>
      <Typography mt={10} style={{fontFamily: "Montserrat", fontSize:"35px",color: "#FFFFFF", fontWeight: "bold"}}>CONTACT-US</Typography>
    </Box>
    <Stack mt={34} direction='column' ml={30}>
    <Typography  style={{fontWeight:'bold',fontFamily:'Rosarivo'}} variant='h4'>WE ARE HERE FOR YOU</Typography>
    <Typography variant='body1'  style={{fontWeight:'normal',fontFamily:'Montserrat'}}>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests,<br/>
please forward it to our support desk and we will get back to you as soon as possible.</Typography>
    <Stack direction='row' mt={7}>
      <Stack direction='column'>
        <Typography variant='body1'  style={{fontWeight:'normal',fontFamily:'Montserrat'}}>497 Evergreen Rd. Roseville, <br/>
CA 95673</Typography>
        <Typography variant='body1'  style={{fontWeight:'normal',fontFamily:'Montserrat'}}>View map</Typography>
        <Typography variant='body1'  style={{fontWeight:'normal',fontFamily:'Montserrat'}}>Phone: +44 345 678 903<br/>
Email: luxury_hotels@gmail.com</Typography>
      </Stack>
      <form style={{display:'flex' , flexDirection:'column', marginLeft:'250px', width:'300px'}} >
        <TextField  label="Name" variant="standard"></TextField>
        <TextField label="E-mail" variant="standard" ></TextField>
        <TextField label="Message"
          multiline
          rows={6}>
        </TextField>
        <Button></Button>
      </form>
    </Stack>
    </Stack>
    <Buttom left='/' right='/Rooms'/>
    </Box>
  )
}

export default ContactUs
