import React from 'react';
import Footer from '../Components/Footer'; // Adjust the path according to your project structure
import '../Styles_css/digitalStrom.css'; // Adjust the path according to your project structure

export default function DigitalStrom() {
  return (
    <div className="main-content">
      <header>
        <img src={`${process.env.PUBLIC_URL}/img/headerDigitalStrom.jpg`} alt="Digital Strom Header" className="header-image" />
      </header>
      <div className="content">
        <div className="info-box">
          <p className="titleboxinfo">Enhancing UX through Comprehensive Feedback Analysis</p>
          <p className="texteboxinfo">DigitalSTROM is a Swiss-based company that specializes in smart home technology. They offer solutions for controlling and automating various aspects of home systems such as lighting, heating, security, and more. I was in charge of relaunching the mobile app for iOS and Android.</p>
          <p className="texteboxinfo">One aspect of my role involved consolidating user requirements by leveraging the network platform to gather valuable feedback.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
