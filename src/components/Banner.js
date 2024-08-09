import React from 'react';
import { Box, Button, IconButton, Typography, Stack } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';

function Banner() {
  return (
    <Box
      sx={{
        mt: { xs: '40px', lg: '60px' }, // Responsive margin top
        mb: { xs: '20px', lg: '30px' }, // Responsive margin bottom
        ml: { xs: '10px', lg: '50px' }, // Responsive margin left
        p: { xs: '10px', lg: '20px' }, // Responsive padding
        textAlign: { xs: 'center', lg: 'left' }, // Center text on small screens
      }}
      position="relative"
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontFamily: 'Montserrat',
          fontSize: { xs: '24px',md:'50px', lg: '28px' }, // Responsive font size
          mb: { xs: 8,md:5, lg: -2 }, // Responsive margin bottom
          mt:{md:14,lg:0}
        }}
      >
        WELCOME TO
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Rosarivo',
          fontSize: { xs: '50px', md:'60px',lg: '70px' }, // Responsive font size
          fontWeight: 700,
          mb: { xs: -2, sm: -4 }, // Responsive margin bottom
        }}
      >
        LUXURY
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Rosarivo',
          fontSize: { xs: '40px', md:'30px',lg: '40px' }, // Responsive font size
          fontWeight: 700,
          mb: { xs: 8,md:14, lg: -2 }, // Responsive margin bottom
        }}
      >
        HOTELS
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '20px', lg: '20px' }, // Responsive font size
          lineHeight: { xs: '24px', lg: '28px' }, // Responsive line height
          mb: { xs: 4, md:10,lg: 4 }, // Responsive margin bottom
          fontFamily: 'Montserrat',
        }}
      >
        Book your stay and enjoy Luxury<br />redefined at the most affordable rates.
      </Typography>
      <Stack direction="column" alignItems="center">
        <Button
          variant="contained"
          startIcon={<CalendarTodayIcon />}
          sx={{
            background: '#E0B973',
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            mt: { xs: 2, lg: 3 }, // Responsive margin top
            mb: { xs: 6, lg: 3 }, // Responsive margin bottom
            width: { xs: '100%', lg: 'auto' }, // Full width button on small screens
          }}
          href="/ContactUs"
        >
          BOOK NOW
        </Button>
        <Typography
          sx={{
            fontWeight: 'normal',
            fontFamily: 'Montserrat',
            color: 'white',
            fontSize: { xs: '20px', lg: '24px' }, // Responsive font size
            fontWeight: 600,
            mb: { xs: 0, lg: -1 }, // Responsive margin bottom
          }}
        >
          Scroll
        </Typography>
        <IconButton
          sx={{
            color: 'white',
            fontSize: { xs: '24px', lg: 'inherit' }, // Responsive icon size
            mb: { xs: 3, lg: -1 }
          }}
          size="large"
          aria-label="Scroll down"
        >
          <ExpandCircleDownOutlinedIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Banner;
