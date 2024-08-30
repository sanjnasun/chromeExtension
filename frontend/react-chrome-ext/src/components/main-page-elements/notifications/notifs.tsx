import React from 'react';
import NotifBox from './notifBox';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


const Notifications = () => {
    return (
        <div>
            <Typography sx={{ textAlign: 'center', fontFamily: 'Libre Baskerville', marginTop: "-40px", marginLeft:"90px"}} variant="h5" component="h5">
                Notifications 
            </Typography>
            <NotifBox></NotifBox>
        </div>
        
        
    );
};

export default Notifications;
