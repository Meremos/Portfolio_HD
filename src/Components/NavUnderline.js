import React, { useState } from 'react';
import '../Styles_css/NavUnderline.css';

console.log('NavUnderline component is rendering.');

export default function NavUnderline({ onLinkClick = () => {} }) {
  const [underlineStyle, setUnderlineStyle] = useState({});

  // Function to handle link click events
  const handleLinkClick = (event, path) => {
    console.log('handleLinkClick called with path:', path);
    // Calculate the width and left margin for the underline
    const linkElement = event.target;
    const width = linkElement.offsetWidth;
    const tempMarginLeft = linkElement.offsetLeft;

    setUnderlineStyle({
      width: `${width}px`,
      marginLeft: `${tempMarginLeft}px`,
    });

    // Trigger the callback function
    onLinkClick(path);
    console.log('Callback function executed');
  };

  return (
    <div className="nav-underline" style={underlineStyle}></div>
  );
}



