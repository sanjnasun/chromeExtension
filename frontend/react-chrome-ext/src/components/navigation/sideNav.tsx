import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Box, IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';

const SideNav = () => {
    return (
       
        <Box sx={{ width: '130px', height: '100%', borderRight: '1px solid rgba(0, 0, 0, 0.12)' }}>
            <IconButton>
                <MenuIcon />
            </IconButton>  
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Notifications" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Options" />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Box>
    );
};

export default SideNav;
