import React from 'react';
import ExContain from './components/gridLayout/grid';
import './App.css'; // Make sure to import the CSS file
import SideNav from './components/navigation/sideNav';

function App() {
  return (
    <ExContain>
      <SideNav></SideNav>
    </ExContain>
  );
}

export default App;
