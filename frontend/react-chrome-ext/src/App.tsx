// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import ExContain from './components/gridLayout/grid';
import SideNav from './components/navigation/sideNav';
import Profile from './components/main-page-elements/profile/profile';
import Notifications from './components/main-page-elements/notifications/notifs';
import Options from './components/main-page-elements/options/options';
import NewTabPage from './components/newTab/newTabPage';
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
            <Route path="/new-tab" element={<NewTabPage />} /> 
            {/* Redirect default route to notifications */}
            <Route path="/" element={<Navigate to="/notifications" replace />} />
          </Routes>
        </div>
      </ExContain>
    </BrowserRouter>
  );
}

export default App;
