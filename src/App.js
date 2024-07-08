// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

import Home from './pages/home'; // Use the correct filename with a small "h"
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import AboutMe from './pages/about_me';
import UseCases from './pages/use_cases';

import './Styles_css/App.css';
import './Styles_css/Nav.css';
import './Styles_css/Hero.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/use_cases" element={<UseCases />} />
      </Routes>
    </div>
  );
}

export default App;