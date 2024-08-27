import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Components/Navbar';
import BackButton from './Components/BackButton';

import Home from './pages/home';
import AboutMe from './pages/about_me';
import DigitalStrom from './pages/digitalStrom';
import ESmart from './pages/eSmart';
import PetHealthData from './pages/petHealthData';

import './Styles_css/App.css';
import './Styles_css/Nav.css';
import './Styles_css/Hero.css';

function App() {
  const location = useLocation();

  return (
    <div className="essai">
      <Navbar />
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<PageFade><Home /></PageFade>} />
          <Route path="/about_me" element={<PageFade><AboutMe /></PageFade>} />
          <Route path="/digital_strom" element={<PageFade><DigitalStrom /></PageFade>} />
          <Route path="/esmart" element={<PageFade><ESmart /></PageFade>} />
          <Route path="/pet_health_data" element={<PageFade><PetHealthData /></PageFade>} />
        </Routes>
      </AnimatePresence>
      {location.pathname !== '/home' && <BackButton />}
    </div>
  );
}

const PageFade = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default App;
