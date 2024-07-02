import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavUnderline from './NavUnderline';

export default function Navbar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  // Function to handle link clicks and update the activePath
  const handleLinkClick = (path) => {
    // console.log('handleLinkClick called with path:', path);
    setActivePath(path);
  };

  console.log('handleLinkClick function:', handleLinkClick); // Add this console log to check the function

  return (
    <nav className="nav">
      <a href="/" className="site-title">
        DAVID HERVE
      </a>
      <ul>
        <li>
          <Link to="/home" onClick={(e) => handleLinkClick('/home')} className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about_me" onClick={(e) => handleLinkClick('/about_me')} className={`nav-link ${location.pathname === '/about_me' ? 'active' : ''}`}>
            About Me
          </Link>
        </li>
      </ul>
      <NavUnderline onLinkClick={handleLinkClick} />
    </nav>
  );
}
