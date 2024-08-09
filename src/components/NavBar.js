import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Logo from '../Assets/image/Logo.png';

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component="a" href="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component="a" href="/Facilities">
          <ListItemText primary="Facilities" />
        </ListItem>
        <ListItem button component="a" href="/Rooms">
          <ListItemText primary="Rooms" />
        </ListItem>
        <ListItem button component="a" href="/ContactUs">
          <ListItemText primary="Contact-us" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          width: '100%',
          px:{ lg:10,xs:18},
          position: 'relative',
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            display: { xs: 'block', sm: 'none' },
            position: { xs: 'absolute', sm: 'static' },
            left: 0,
            zIndex: 1,
            color: 'white',
          }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            flexGrow: 1,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <img
            src={Logo}
            alt="logo"
            className="logo"
          />
        </Box>
        <Stack
          direction="row"
          gap={{ xs: '20px', sm: '40px' }}
          fontSize={{ xs: '18px', sm: '24px' }}
          alignItems="flex-start"
          sx={{
            display: { xs: 'none', sm: 'flex' },
            marginLeft: 'auto',
          }}
        >
          <a
            href="/"
            style={{
              textDecoration: 'none',
              fontFamily: 'Montserrat',
              fontSize: '22px',
              color: '#FFFFFF',
              fontWeight: 'normal',
            }}
          >
            Home
          </a>
          <a
            href="/Facilities"
            style={{
              textDecoration: 'none',
              fontFamily: 'Montserrat',
              fontSize: '22px',
              color: '#FFFFFF',
              fontWeight: 'normal',
            }}
          >
            Facilities
          </a>
          <a
            href="/Rooms"
            style={{
              textDecoration: 'none',
              fontFamily: 'Montserrat',
              fontSize: '22px',
              color: '#FFFFFF',
              fontWeight: 'normal',
            }}
          >
            Rooms
          </a>
          <a
            href="/ContactUs"
            style={{
              textDecoration: 'none',
              fontFamily: 'Montserrat',
              fontSize: '22px',
              color: '#FFFFFF',
              fontWeight: 'normal',
            }}
          >
            Contact-us
          </a>
        </Stack>
      </Stack>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
}

export default NavBar;
