// Homecontent.js
import React from 'react';
import PropTypes from 'prop-types';
import { useTransform, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../Styles_css/HomeContent.css';

export default function Homecontent({ blockNumber, scrollY }) {
  const opacity = useTransform(
    scrollY,
    [(blockNumber - 0.5) * 400, (blockNumber + 0.5) * 400],
    [0, 1]
  );

  const scale = useTransform(
    scrollY,
    [(blockNumber - 0.5) * 400, (blockNumber + 0.5) * 400],
    [0.03, 1]
  );

  let topRightText, largeText, subTitle, linkTo;
  switch (blockNumber) {
    case 1:
      topRightText = 'Digital Strom';
      largeText = '.01';
      subTitle = 'Thematic Analysis';
      linkTo = '/digital_strom';
      break;
    case 2:
      topRightText = 'eSmart';
      largeText = '.02';
      subTitle = 'Make the energie tangible';
      linkTo = '/esmart';
      break;
    case 3:
      topRightText = 'Pet Health Data';
      largeText = '.03';
      subTitle = 'Design Thinking methodologie';
      linkTo = '/pet_health_data';
      break;
    case 4:
      topRightText = 'Meine Impfungen';
      largeText = '.04';
      subTitle = 'Costumer journey Map';
      linkTo = '/meine_impfungen';
      break;
    default:
      topRightText = '';
      largeText = '';
      subTitle = '';
      linkTo = '/';
  }

  return (
    <motion.div
      className="content-block"
      style={{
        opacity,
        width: 'calc(100% - 700px)',
        scale,
        transition: { ease: [0.4, 0, 0.6, 1] },
      }}
    >
      <div className="block-image-container">
        <img src={`${process.env.PUBLIC_URL}/img/visualcase${blockNumber}.jpg`} alt={`Block ${blockNumber}`} />
      </div>
      <div className="text-and-button">
        <div className="top-right-text">
          <p>{topRightText}</p>
          <p className="sub-title">{subTitle}</p>
        </div>
        <div className="bottom-left-content">
          <div className="left-content">
            <p className="large-text">{largeText}</p>
          </div>
          <div className="button-container">
            <Link to={linkTo} className="read-more-button">Read More</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

Homecontent.propTypes = {
  blockNumber: PropTypes.number.isRequired,
  scrollY: PropTypes.object.isRequired, // Assuming this is the scroll position from framer-motion
};
