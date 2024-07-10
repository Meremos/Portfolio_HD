// App.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Home from './pages/home'; // Ensure the correct path
import AboutMe from './pages/about_me';

import './Styles_css/App.css';
import './Styles_css/Nav.css';
import './Styles_css/Hero.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about_me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
