import spiderman from '../notifications/spiderman.png';
import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const NotifBox = () => {
  //console.log(spiderman);
    return (
        <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>

          <CardMedia
          component="img"
          sx={{ width: 60 }}
          image="/spiderman.png" 
          alt="Live from space album cover"
        />
            <Typography component="div" variant="h5">
             Title
            </Typography>
            
          </CardContent>
        </Box>
        
      </Card>

    )
    console.log(spiderman);
};

export default NotifBox;