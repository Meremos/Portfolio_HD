import React, { useRef } from 'react';
import Herosection from '../Components/Herosection';
import Homecontent from '../Components/Homecontent';
import Footer from '../Components/Footer'; // Import the Footer component
import { useScroll } from 'framer-motion';


export default function Home() {
  const targetRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
    offset: [0, 0],
  });

  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <Herosection />
        </div>
      </section>

      <div ref={targetRef} className="home-content">
        {/* Animated Div for Block 1 */}
        <Homecontent blockNumber={1} scrollY={scrollY} />

        {/* Animated Div for Block 2 */}
        <Homecontent blockNumber={2} scrollY={scrollY} />

        {/* Animated Div for Block 3 */}
        <Homecontent blockNumber={3} scrollY={scrollY} />

        {/* Animated Div for Block 4 */}
        <Homecontent blockNumber={4} scrollY={scrollY} />
      </div>

      {/* Include the Footer component at the end of the page */}
      <Footer />
    </div>
  );
}
