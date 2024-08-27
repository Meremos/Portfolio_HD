import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import BackButton from './Components/BackButton'; // Import the BackButton

import Home from './pages/home';
import AboutMe from './pages/about_me';
import DigitalStrom from './pages/digitalStrom';
import ESmart from './pages/eSmart';
import PetHealthData from './pages/petHealthData';
// import MeineImpfungen from './pages/meineImpfungen'; // Comment out or remove this import

import './Styles_css/App.css';
import './Styles_css/Nav.css';
import './Styles_css/Hero.css';

function App() {
  const location = useLocation(); // Access the current location

  return (
    <div className="essai">
      <Navbar />
      <ScrollToTop /> {/* Keep ScrollToTop for navigation via navbar */}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<PageFade><Home /></PageFade>} />
          <Route path="/about_me" element={<PageFade><AboutMe /></PageFade>} />
          <Route path="/digital_strom" element={<PageFade><DigitalStrom /></PageFade>} />
          <Route path="/esmart" element={<PageFade><ESmart /></PageFade>} />
          <Route path="/pet_health_data" element={<PageFade><PetHealthData /></PageFade>} />
          {/* Temporarily remove or comment out the route for MeineImpfungen */}
          {/* <Route path="/meine_impfungen" element={<PageFade><MeineImpfungen /></PageFade>} /> */}
        </Routes>
      </AnimatePresence>
      {/* Conditionally render the BackButton based on the current route */}
      {location.pathname !== '/home' && <BackButton />}
    </div>
  );
}

// Create a reusable component for fade transitions
const PageFade = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}  // Start with opacity 0 (invisible)
    animate={{ opacity: 1 }}  // Animate to opacity 1 (fully visible)
    exit={{ opacity: 0 }}     // Exit with opacity 0 (fade out)
    transition={{ duration: 0.5 }} // Adjust duration as needed
  >
    {children}
  </motion.div>
);

export default App;
