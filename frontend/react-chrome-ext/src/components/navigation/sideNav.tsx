import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Box, IconButton } from '@mui/material';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Profile from '../main-page-elements/profile/profile';
import Notifications from '../main-page-elements/notifications/notifs';
import Options from '../main-page-elements/options/options';
import ListItemText from '@mui/material/ListItemText';
import '../../styling/styles.css';

const SideNav = () => {
    return (
       
        <Box sx={{ width: '130px', height: '100%', borderRight: '1px solid rgba(0, 0, 0, 0.12)' }}>
            <IconButton>
                <MenuIcon />
            </IconButton>  
            
            <Divider />
                <BrowserRouter>
                    
                    <List>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <Link to='/profile' id="underline"><ListItemText primary='Profile'></ListItemText></Link> 
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                                <Link to='/notifications'><ListItemText primary='Notifications'></ListItemText> </Link>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton>
                            <Link to="options">
                                <ListItemText primary="Options" />
                            </Link>
                            </ListItemButton>
                        </ListItem>

                    </List>

                    <Routes>
                        <Route
                            path="/profile"
                            element={<Profile />}
                        ></Route>
                        <Route
                            path="/notifications"
                            element={<Notifications />}
                        ></Route>
                        <Route
                            path="/options"
                            element={<Options />}
                        ></Route>
                    </Routes>

                </BrowserRouter>
            <Divider />
        </Box>
    );
};

export default SideNav;
