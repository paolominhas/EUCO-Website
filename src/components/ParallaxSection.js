import React from 'react';

/**
 * Creates a section with a fixed background image for a parallax effect.
 * @param {object} props - The component's properties.
 * @param {string} props.imgUrl - The URL of the background image.
 * @param {string} props.title - The title to display within the section.
 * @param {React.ReactNode} props.children - The content (e.g., paragraphs) to render over the background.
 */
const ParallaxSection = ({ imgUrl, title, children }) => {
  return (
    // The outer div sets up the background image.
    // The key CSS properties are bg-cover, bg-center, and especially bg-fixed.
    // 'bg-fixed' sets 'background-attachment: fixed', which creates the parallax effect.
    <div 
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${imgUrl})` }}
    >
      {/* This inner div provides the dark, translucent container for the content */}
      <div className="container mx-auto bg-gray-900 bg-opacity-70 backdrop-blur-sm p-8 rounded-lg">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center text-rose-400 mb-8">
          {title}
        </h2>
        
        <div className="max-w-4xl mx-auto text-lg text-gray-200 leading-relaxed space-y-4">
          {children}
        </div>

      </div>
    </div>
  );
};

export default ParallaxSection;