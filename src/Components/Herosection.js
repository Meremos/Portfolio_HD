import React from 'react';
import { Link } from 'react-router-dom';

export default function Herosection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="welcome-text">
            <h2 className="welcome-text-h2">Welcome to my space</h2>
          </div>
          <h1>Heys! I'm David Hervé</h1>
          <p className="subtext">Senior UX/UI Designer and Product Designer</p>
          <p className="subtext">crafting digital User Experience</p>
          <Link to="/about_me" className="btn-about-me">
            About me
          </Link>
        </div>
        <div className="hero-image-container">
          <div className="hero-image">
            <img src={`${process.env.PUBLIC_URL}/img/visuel_hero_header.png`} alt="Hero Header" />
            <div className="gradient-overlay"></div>
          </div>
          <div className="image-container">
            <div className="additional-image">
              <img src={`${process.env.PUBLIC_URL}/img/Ball.png`} alt="Ball" />
            </div>
            <div className="shadow">
              <img src={`${process.env.PUBLIC_URL}/img/Ombre.png`} alt="Shadow" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="wrapper">
        <button type="button" className="scroll_down" id="scroll_down"></button>
      </div>
    </section>
  );
}
