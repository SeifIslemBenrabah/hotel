import React from 'react';
import { Stack, Typography, Button, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import F from '../Assets/icon/F.svg';
import T from '../Assets/icon/T.svg';
import I from '../Assets/icon/I.svg';
import RS from './RS';

const Buttom = (props) => {
  return (
    <Stack mt={8} direction="column" spacing={5} alignItems="center">
      <Typography variant="h4" style={{ fontWeight: 'bold', fontFamily: 'Rosarivo' }}>
        Testimonials
      </Typography>
      <Typography variant="h6" textAlign='center'>
        "Calm, Serene, Retro – What a way to relax and enjoy"
      </Typography>
      <Typography>
        Mr. and Mrs. Baxter, UK
      </Typography>
      <Stack direction="row" spacing={5} style={{ marginTop: '20px' }}>
        <Button variant="contained" size="small" style={{ background: '#E0B973' }} href={props.right}>
          <IconButton size="small">
            <ChevronLeftIcon style={{ color: "#FFF", fontSize: '25px' }} />
          </IconButton>
        </Button>
        <Button variant="contained" size="small" style={{ background: '#E0B973' }} href={props.left}>
          <IconButton size="small">
            <ChevronRightIcon style={{ color: "#FFF", fontSize: '25px' }} />
          </IconButton>
        </Button>
      </Stack>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 3, sm: 5 }}
        style={{
          backgroundColor: '#14274A',
          width: '100%',
          marginTop: '50px',
          padding: '20px',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: 'auto'
        }}
      >
        <Stack style={{ textAlign: 'center' }}>
          <Typography variant="h5" style={{ fontWeight: 'bold', fontFamily: 'Rosarivo', color: '#fff' }}>
            LUXURY
          </Typography>
          <Typography variant="body2" style={{ fontWeight: 'bold', fontFamily: 'Rosarivo', color: '#fff' }}>
            HOTELS
          </Typography>
          <Typography
            variant="body2"
            style={{ fontWeight: 'normal', fontFamily: 'Montserrat', color: '#fff', marginTop: '15px' }}
          >
            <a
              href="https://www.google.com/maps/place/Constantine/@35.9879968,3.8121676,10z/data=!4m6!3m5!1s0x12f17717c4785627:0x25fb307fd08801a!8m2!3d36.3570052!4d6.6390282!16zL20vMDJkNF9x?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', textDecoration: 'none' }}
            >
              497 Evergreen Rd. Roseville, CA 95673
            </a><br />
            <a
              href="tel:+44 345 678 903"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              +44 345 678 903
            </a>
            <br />
            <a
              href="mailto:luxury_hotels@gmail.com"
              style={{ color: '#fff', textDecoration: 'none' }}
            >
              luxury_hotels@gmail.com
            </a>
          </Typography>
        </Stack>
        <Stack spacing={2} style={{ textAlign: 'center' }}>
          <a href="/" style={{ fontWeight: 'bold', fontFamily: 'Montserrat', color: '#fff', marginTop: '15px' }}>
            Home
          </a>
          <a href="/Facilities" style={{ fontWeight: 'bold', fontFamily: 'Montserrat', color: '#fff', marginTop: '15px' }}>
            Facilities
          </a>
          <a href="/Rooms" style={{ fontWeight: 'bold', fontFamily: 'Montserrat', color: '#fff', marginTop: '15px' }}>
            Rooms
          </a>
          <a href="/ContactUs" style={{ fontWeight: 'bold', fontFamily: 'Montserrat', color: '#fff', marginTop: '15px' }}>
            Contact-us
          </a>
        </Stack>
        <Stack spacing={2} style={{ textAlign: 'center' }}>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
            <RS src={F}>Facebook</RS>
          </a>
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <RS src={T}>Twitter</RS>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <RS src={I}>Instagram</RS>
          </a>
        </Stack>
        <Stack spacing={2} style={{ textAlign: 'center', maxWidth: '300px', width: '100%' }}>
          <Typography style={{ fontWeight: 'bold', fontFamily: 'Montserrat', color: '#fff', marginTop: '15px' }}>
            Subscribe to our newsletter
          </Typography>
          <Stack
            direction="row"
            style={{
              border: 'solid 2px #E0B973',
              marginTop: '10px',
              borderRadius: '6px',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '5px 10px'
            }}
          >
            <Typography style={{ fontWeight: 'bold', fontFamily: 'Montserrat', color: '#fff' }}>
              Email Address
            </Typography>
            <Button variant="contained" style={{ background: '#E0B973' }}>
              OK
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Buttom;
