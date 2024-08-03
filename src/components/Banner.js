import React from 'react'
import {Box, Button ,IconButton,Typography,Stack} from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
function Banner() {
  return (
    <Box sx={{
        mt:'60px',mb:'30px',
        ml: {sm:'50px'}
        }} position="relative" p="20px" >
        <Typography style={{fontWeight:'normal',fontFamily:'Montserrat'}} fontSize="28px" fontWeight="600" mb={-2}>
          WELCOME TO
        </Typography>
        <Typography style={{fontFamily:'Rosarivo'}}fontSize="70px" fontWeight="700" mb={-4}>
        LUXURY
        </Typography>
        <Typography style={{fontFamily:'Rosarivo'}}fontSize="40px" fontWeight="700" mb={-2}>
        HOTELS
        </Typography>
        <Typography fontSize="28px" lineHeight="35px" mb={2} style={{fontFamily:'Montserrat'}} >
        Book your stay and enjoy Luxury<br/>redefined at the most affordable rates.
        </Typography>
        <Stack >
        <div style={{display: 'flex', justifyContent: 'center'}} mt={3} mb={5}>
        <Button variant="contained" startIcon={<CalendarTodayIcon />} style={{background:'#E0B973', fontFamily:'Montserrat', fontWeight:'bold' }} href='/ContactUs'>BOOK NOW</Button> 
        </div>
       <Typography mt={2} style={{fontWeight:'normal',fontFamily:'Montserrat', display: 'flex', justifyContent: 'center'}} color="white" fontSize="24px" fontWeight="600"mb={-1}>Scroll</Typography>
        <IconButton style={{ color: 'white'}} size="large" aria-label='ExpandCircleDownOutlinedIcon'><ExpandCircleDownOutlinedIcon fontSize="inherit" /></IconButton>
      </Stack>
      </Box> 
  )
}

export default Banner
