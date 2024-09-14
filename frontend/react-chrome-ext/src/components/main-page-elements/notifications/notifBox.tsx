import spiderman from '../notifications/spiderman.png';
import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ArticleValues } from "../../../models/apimodel";
import '../../../styling/styles.css';




const NotifBox: React.FC<{article: ArticleValues}> = ({article}) => {
  const{media_name, media_img} = article;

    return (
        <Card sx={{ display: 'flex' }} className="cardVal">
          <CardMedia 
          component="img"
          sx={{ width: 58, margin:2}}
          image={media_img}
          alt="Live from space album cover"
        />
        <Box textAlign='center' sx={{ display: 'flex', flexDirection: 'column' }} className="innerbox">
          <CardContent sx={{ flex: '1 0 auto' }}>

            <Typography align="left" variant="subtitle2" gutterBottom>
             { media_name }
            </Typography>
            
          </CardContent>
        </Box>
      </Card>



    )
    console.log(spiderman);
};

export default NotifBox;