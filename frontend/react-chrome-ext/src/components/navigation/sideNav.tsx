import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const SideNav = () => {
    return (
        <Grid container spacing={1} sx={{ backgroundColor: "purple", width: '100px', height: '100%' }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4}>
                <Paper>Profile</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper>Notifications</Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper>Profile</Paper>
            </Grid>
        </Grid>
    );
};

export default SideNav;
