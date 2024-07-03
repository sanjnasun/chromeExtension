import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const SideNav = () => {
    return (
        <Box sx={{ width: '100px', height: '100%'}}>
        <Grid container spacing={1} sx={{ backgroundColor: "purple", height: '100%'}}>
            <MenuIcon sx={{height: '50px', width:'100%'}}></MenuIcon>
            <Grid item xs={4}>
                <Paper>Profile</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper>Notifications</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper>Options</Paper>
            </Grid>
        </Grid>
        </Box>
    );
};

export default SideNav;
