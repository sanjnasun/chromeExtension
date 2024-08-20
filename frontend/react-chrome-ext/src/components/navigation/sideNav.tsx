// sideNav.js
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import '../../styling/styles.css';

const SideNav = () => {
  return (
    <Box sx={{ width: '130px', height: '100%', borderRight: '1px solid rgba(0, 0, 0, 0.12)' }} className='side-nav'>
      <IconButton>
        <MenuIcon />
      </IconButton>  
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to='/profile'>
            <ListItemText primary='Profile' className="names" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to='/notifications'>
            <ListItemText primary='Notifications' className="names" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to='/options'>
            <ListItemText primary='Options' className="names" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );
};

export default SideNav;
