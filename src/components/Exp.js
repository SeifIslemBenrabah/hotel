import React from 'react';
import { Stack, Button } from '@mui/material';

const Exp = (props) => {
  return (
    <Stack
      spacing={5}
      direction={{ xs: 'column', sm: 'row' }} // Stack direction changes based on screen size
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, sm: 4 }, // Responsive padding
        py: { xs: 4, sm: 6 }, // Responsive padding
        textAlign: { xs: 'center', sm: 'left' }, // Center text on small devices
      }}
    >
      <Stack
        direction="column"
        sx={{
          borderLeft: { xs: 'none', sm: 'solid 2px #000' }, // Remove border on small devices
          paddingLeft: { xs: 0, sm: '15px' }, // Adjust padding for different screen sizes
          textAlign: { xs: 'center', sm: 'left' }, // Center text on small devices
          mb: { xs: 3, sm: 0 }, // Add margin bottom on small devices
        }}
      >
        {props.children}
        <Button
          variant="contained"
          sx={{
            background: '#E0B973',
            fontFamily: 'Montserrat',
            width: { xs: '100%', sm: '200px' }, // Full width on small devices
            mt: 2, // Margin top for spacing
          }}
          href='/ContactUS'
        >
          Explore
        </Button>
      </Stack>
      <Stack
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={props.src}
          style={{
            height: 'auto', // Adjust height to maintain aspect ratio
            width: '100%', // Make image responsive
            maxWidth: props.width, // Constrain image size
          }}
          alt='Room'
        />
      </Stack>
    </Stack>
  );
};

export default Exp;
