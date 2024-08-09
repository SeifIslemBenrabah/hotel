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
    <Stack mt={34} direction='column' alignItems="center" >
    <Typography  style={{fontWeight:'bold',fontFamily:'Rosarivo'}} sx={{fontSize: { xs: '24px', sm: '28px', md: '34px', lg: '40px' },}}>WE ARE HERE FOR YOU</Typography>
    <Typography  sx={{ 
    fontSize: { xs: '14px', sm: '14px', md: '18px' }, // Responsive font size
    textAlign:'center',
    mt:{xs:4,md:7}
  }}  style={{fontWeight:'normal',fontFamily:'Montserrat'}}>At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests,<br/>
please forward it to our support desk and we will get back to you as soon as possible.</Typography>
    <Stack direction='row' mt={7} alignItems="center">
      <Stack direction='column' sx={{display:{xs:'none',md:'none',lg:'block'}}}>
        <Typography variant='body1'  style={{fontWeight:'normal',fontFamily:'Montserrat'}}>
        <a 
          href="https://www.google.com/maps/place/Constantine/@35.9879968,3.8121676,10z/data=!4m6!3m5!1s0x12f17717c4785627:0x25fb307fd08801a!8m2!3d36.3570052!4d6.6390282!16zL20vMDJkNF9x?entry=ttu" 
          target="_blank" 
        >
          497 Evergreen Rd. Roseville, <br/>CA 95673
          </a>
          </Typography>
        <Typography variant='body1'  style={{fontWeight:'normal',fontFamily:'Montserrat'}}>
        <a 
          href="https://www.google.com/maps/place/Constantine/@35.9879968,3.8121676,10z/data=!4m6!3m5!1s0x12f17717c4785627:0x25fb307fd08801a!8m2!3d36.3570052!4d6.6390282!16zL20vMDJkNF9x?entry=ttu" 
          target="_blank" 
        >
          View map
        </a>
        </Typography>
        <Typography variant='body1'  style={{fontWeight:'normal',fontFamily:'Montserrat'}}>Phone: +44 345 678 903</Typography>
        <Typography variant='body1'  style={{fontWeight:'normal',fontFamily:'Montserrat'}}>
        <a 
          href="mailto:luxury_hotels@gmail.com" 
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
        Email: luxury_hotels@gmail.com
        </a>
        </Typography>
      </Stack>
      <Box sx={{ml:{lg:'250px',xs:'0px'}}}>
      <form style={{display:'flex' , flexDirection:'column', width:'300px'}} >
      <Stack spacing={1} justifyItems="center">
        <TextField  label="Name" variant="standard"/>
        <TextField label="E-mail" variant="standard" />
        <TextField label="Message"
          multiline
          rows={6}/>
        <Button></Button>
        </Stack>
      </form> 
      </Box>
    </Stack>
    </Stack>
    <Buttom left='/' right='/Rooms'/>
    </Box>
  )
}

export default ContactUs
