import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Contact() {
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
    </section>
  );
}

