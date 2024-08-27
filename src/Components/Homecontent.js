import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTransform, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../Styles_css/HomeContent.css';

export default function Homecontent({ blockNumber, scrollY }) {
  // State to manage hover effect
  const [isHovered, setIsHovered] = useState(false);

  // Hooks for opacity and scale based on scroll position
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

  // Content configuration based on block number
  let topRightText, largeText, subTitle, linkTo, isComingSoon;
  switch (blockNumber) {
    case 1:
      topRightText = 'Digital Strom';
      largeText = '.01';
      subTitle = 'Thematic Analysis';
      linkTo = '/digital_strom';
      isComingSoon = false;
      break;
    case 2:
      topRightText = 'eSmart';
      largeText = '.02';
      subTitle = 'Make the energy tangible';
      linkTo = '/esmart';
      isComingSoon = false;
      break;
    case 3:
      topRightText = 'Pet Health Data';
      largeText = '.03';
      subTitle = 'Design Thinking methodology';
      linkTo = '/pet_health_data';
      isComingSoon = false;
      break;
    case 4:
      topRightText = 'Meine Impfungen';
      largeText = '.04';
      subTitle = 'Customer journey Map';
      linkTo = '/meine_impfungen';
      isComingSoon = true; // Mark this block as "Coming Soon"
      break;
    default:
      topRightText = '';
      largeText = '';
      subTitle = '';
      linkTo = '/';
      isComingSoon = false;
  }

  return (
    <motion.div
      className="content-block"
      style={{
        opacity,
        scale,
        transition: { ease: [0.4, 0, 0.6, 1] },
        position: 'relative',
      }}
    >
      {/* Coming Soon Overlay */}
      {isComingSoon && (
        <div className="coming-soon-overlay">
          <p>Coming Soon</p>
        </div>
      )}

      {/* Image Container */}
      <div className="block-image-container">
        <img
          src={`${process.env.PUBLIC_URL}/img/visualcase${blockNumber}.jpg`}
          alt={`Block ${blockNumber}`}
          className={isHovered ? 'hovered' : ''}
        />
      </div>

      {/* Text and Button Section */}
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
            {isComingSoon ? (
              <button
                className="read-more-button"
                disabled
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Read More
              </button>
            ) : (
              <Link
                to={linkTo}
                className="read-more-button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Read More
              </Link>
            )}
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
