import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const ExContain = () => {
    return (
        <Grid container spacing={1} sx={{ backgroundColor: 'purple' }}>
            <Grid item lg={12} sx={{ textAlign: 'center' }}>
                <Paper>xs=8</Paper>
            </Grid>
        </Grid>
    );
}

export default ExContain;
