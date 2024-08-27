import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer'; // Import the Footer component
import Herosection_about from '../Components/Herosection_about'; // Import the Herosection_about component
import '../Styles_css/aboutme.css';

export default function AboutMe() {
  return (
    <div>
      {/* Hero section for the About Me page */}
      <Herosection_about />

  

      {/* Include the Footer component at the end of the page */}
      <Footer />
    </div>
  );
}
