import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavUnderline from './NavUnderline';
import '../Styles_css/Nav.css'; // Ensure your CSS file is imported

export default function Navbar() {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // User is scrolling down
        setIsVisible(false);
      } else {
        // User is scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const handleLinkClick = (path) => {
    setActivePath(path);
  };

  return (
    <nav className={`nav ${isVisible ? 'visible' : 'hidden'}`}>
      <a href="/" className="site-title">
        DAVID HERVE
      </a>
      <ul>
        <li>
          <Link to="/home" onClick={() => handleLinkClick('/home')} className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about_me" onClick={() => handleLinkClick('/about_me')} className={`nav-link ${location.pathname === '/about_me' ? 'active' : ''}`}>
            About Me
          </Link>
        </li>
      </ul>
      <NavUnderline onLinkClick={handleLinkClick} />
    </nav>
  );
}
