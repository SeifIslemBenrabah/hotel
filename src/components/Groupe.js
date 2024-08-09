import React from 'react';
import { Box, Typography } from '@mui/material';

function Groupe(props) {
  return (
    <Box
      className="flex flex-col justify-center items-center"
      sx={{ position: 'relative', width: '100%', height: '100%' }}
    >
      <Box
        component="img"
        src={props.pic}
        alt="banner"
        sx={{
          width: { xs: '90%', sm: '75%', md: '60%' },
          height: 'auto',
          position: 'relative',
        }}
      />
      <Typography
        sx={{
          position: 'absolute',
          color: '#14274A',
          fontWeight: 'bold',
          fontFamily: 'Montserrat',
          backgroundColor: '#FFF',
          textAlign: 'center',
          padding: { xs: '4px', md: '8px' },
          fontSize: { xs: 'h4.fontSize', sm: 'h3.fontSize', md: 'h2.fontSize' },
        }}
      >
        {props.children}
      </Typography>
    </Box>
  );
}

export default Groupe;
