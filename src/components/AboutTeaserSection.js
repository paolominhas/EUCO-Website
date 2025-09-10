import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component for navigation

/**
 * A specialized teaser component for the homepage.
 * It provides a brief intro to the orchestra and links to the full "Our Story" page.
 */
const AboutTeaserSection = () => {
  return (
    // The main container has a dark background and high z-index to sit above the sticky hero image.
    <div className="bg-gray-900 relative z-20 py-20">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-rose-400 mb-4">
          A Symphony of Student Talent
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-8">
          Founded in 1983, the Edinburgh University Chamber Orchestra brings together 
          some of the most talented and dedicated musicians from across the University.
        </p>

        {/* IMPORTANT CHANGE:
          This was previously a <button> with an onClick handler.
          It is now a <Link> component from react-router-dom.
          The 'to' prop specifies the URL to navigate to.
          The styling (className) is kept the same to make it look like the original button.
        */}
        <Link 
          to="/about/our-story"
          className="px-8 py-3 bg-transparent border-2 border-rose-600 text-rose-600 font-bold rounded-full hover:bg-rose-600 hover:text-black transform hover:scale-105 transition-all duration-300"
        >
          Discover Our Story
        </Link>
        
      </div>
    </div>
  );
};

export default AboutTeaserSection;