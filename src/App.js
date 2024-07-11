import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Home from './pages/home';
import AboutMe from './pages/about_me';
import DigitalStrom from './pages/digitalstrom'; // Ensure casing matches the file name exactly
import ESmart from './pages/eSmart';
import PetHealthData from './pages/petHealthData';
import MeineImpfungen from './pages/meineImpfungen';

import './Styles_css/App.css';
import './Styles_css/Nav.css';
import './Styles_css/Hero.css';

function App() {
  return (
    <div className="essai">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/digital_strom" element={<DigitalStrom />} />
        <Route path="/esmart" element={<ESmart />} />
        <Route path="/pet_health_data" element={<PetHealthData />} />
        <Route path="/meine_impfungen" element={<MeineImpfungen />} />
      </Routes>
    </div>
  );
}

export default App;
