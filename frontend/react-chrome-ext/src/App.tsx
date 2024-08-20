// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExContain from './components/gridLayout/grid';
import SideNav from './components/navigation/sideNav';
import Profile from './components/main-page-elements/profile/profile';
import Notifications from './components/main-page-elements/notifications/notifs';
import Options from './components/main-page-elements/options/options';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ExContain>
        <SideNav />
        <div className="main-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/options" element={<Options />} />
          </Routes>
        </div>
      </ExContain>
    </BrowserRouter>
  );
}

export default App;
