import React from 'react';
import '../Styles_css/Footer.css'; // Don't forget to create and import the Footer.css file

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-item">
        <p>David Herve</p>
        <p>Eichbühlstrasse 25</p>
        <p>8004 Zürich</p>
        <p>0763205555</p>
        <p>info@davidherve.ch</p>
        </div>
      <div className="footer-item">
      <a href="https://www.linkedin.com/in/davidh4/" target="_blank" rel="noopener noreferrer">
          <img src="/Portfolio_HD/img/icon_linkedin.svg" alt="LinkedIn Icon" />
          {/* <img src={`${process.env.PUBLIC_URL}/img/icon_linkedin.svg`} alt="LinkedIn Icon" /> */}
        </a>
        </div>
      <div className="footer-item">
      <p>Menu</p>
        <p>Home</p>
        <p>About me</p>
      </div>
    </footer>
  );
}

