import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component for navigation

/**
 * A specialized teaser component for the homepage.
 * It encourages users to view the upcoming concert schedule.
 */
const UpcomingConcertsTeaserSection = () => {
  return (
    // The main container has a slightly lighter dark background to contrast with the block above it.
    <div className="bg-gray-800 relative z-20 py-20">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Join Us For Our Next Performance
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-8">
          Experience it live. Our upcoming concerts explore transfixing works from 
          Prokofiev to Brahms, performed in beautiful venues across Edinburgh.
        </p>

        {/* IMPORTANT CHANGE:
          This was a <button> and now it is a <Link>.
          The 'to' prop navigates to the main performances page.
          The styling makes it a high-visibility call-to-action.
        */}
        <Link 
          to="/concerts/performances"
          className="mt-8 px-8 py-3 bg-rose-600 text-black font-bold rounded-full hover:bg-rose-500 transform hover:scale-105 transition-all duration-300"
        >
          View Upcoming Concerts
        </Link>

      </div>
    </div>
  );
};

export default UpcomingConcertsTeaserSection;