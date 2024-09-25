import React from 'react';
import Favorites from './favorites';
import NewsCards from './newsCards';
import NewTabPage from './newTab';
import { Typography } from '@mui/material';
import './App.css';
import data from '../src/models/data.json';
import { ArticleValues } from "./models/apimodel";

const notif:ArticleValues[] = data;


function App() {
  return (
    <div className="App">
      <Typography align="center" sx={{ textAlign: 'center', fontFamily: 'Libre Baskerville', fontSize: '40px', marginTop:'20px', color:'#FDCC03'}}variant="body1">
        Top Recommended Articles
      </Typography>
      <Favorites></Favorites>
      
      {notif.map((item) => (
                <NewsCards
                    article = {item}
                />
            ))}
    </div>
  );
}

export default App;
