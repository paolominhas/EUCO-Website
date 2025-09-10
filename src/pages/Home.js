// In src/pages/Home.js

import React, { useState, useEffect } from 'react';
import HomeSection from '../components/HomeSection'; // Import the component
import AboutTeaserSection from '../components/AboutTeaserSection';
import UpcomingConcertsTeaserSection from '../components/UpcomingConcertsTeaserSection';

const Home = () => {
  // State for the hero section's opacity
  const [heroOpacity, setHeroOpacity] = useState(1);

  // Effect to listen for scroll events and update the opacity
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeEnd = 500; // The point at which the hero is fully faded out
      const opacity = Math.max(0, 1 - scrollPosition / fadeEnd);
      setHeroOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount to set initial state

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <>
      {/* The opacity is calculated here and passed down as a prop */}
      <HomeSection opacity={heroOpacity} />

      {/* The rest of the homepage content */}
      <AboutTeaserSection />
      <UpcomingConcertsTeaserSection />
    </>
  );
};

export default Home;