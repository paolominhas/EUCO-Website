import React from 'react';
import { ReactComponent as OrchestraLogo } from '../logos/euco-logo.svg';

/**
 * The main hero section for the homepage.
 * It displays a full-screen background image with a title and tagline.
 * @param {object} props - The component's properties.
 * @param {number} props.opacity - The opacity value (from 0 to 1) controlled by the parent's scroll position.
 */

const HomeSection = ({ opacity }) => {
  return (
    <div 
      className="h-screen sticky top-0 -z-10 transition-opacity duration-1000 ease-in-out" 
      style={{ opacity }}
    >
      <div className="relative h-full flex items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Background Image and Overlay */}
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/backgrounds/hero-photo.jpg)`}}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* --- CORRECTED LOGO --- */}
        {/* The wrapper div is removed, and all classes are now directly on the logo component. */}
        <OrchestraLogo 
            className="
                absolute top+1/2 left+1/2
                -translate-x-1/2 -translate-y-1/2
                w-[550px] h-[550px] md:w-[700px] md:h-[700px]
                opacity-30 z-0
                euco-logo-pink
                logo-background-animation
            "
        />

        {/* The main text content with a higher z-index */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Experience <span className="text-rose-400">Chamber</span> Orchestra
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            Edinburgh's fully auditioned student-led ensemble dedicated to performing chamber music at the highest level - join us for our 2025/26 season!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;