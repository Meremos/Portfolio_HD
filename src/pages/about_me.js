import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../Components/Footer'; // Import the Footer component



export default function AboutMe() {
  return (
    <section>
      <NavLink to="/home" className="active">
        Home
      </NavLink>
      <NavLink to="/portfolio" className="active">
        Portfolio
      </NavLink>
      <NavLink to="/about_me" className="active">
        About me
      </NavLink>
      <NavLink to="/contact" className="active">
        Contact
      </NavLink>

      {/* Include the Footer component at the end of the page */}
      <Footer />
    </section>
  );
}







