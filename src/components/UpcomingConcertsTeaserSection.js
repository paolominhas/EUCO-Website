import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 1. Import your concert data
import { upcomingConcertsData, chamberConcertsData } from '../data/concerts'; // Adjust the path if necessary

const allUpcomingConcerts = [...upcomingConcertsData, ...chamberConcertsData]
  .sort((a, b) => new Date(a.date) - new Date(b.date));
/**
 * A dynamic carousel section for the homepage.
 * It displays upcoming concerts with images, details, and navigation arrows.
 * Each concert card links to the main upcoming concerts page.
 */
const UpcomingConcertsTeaserSection = () => {
  // 2. Use state to keep track of the current concert slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter out any concerts that don't have an image for the carousel
  const concertsWithImages = allUpcomingConcerts.filter(concert => concert.image);

  // 3. Carousel navigation logic
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? concertsWithImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === concertsWithImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  // Get the current concert to display
  const currentConcert = concertsWithImages[currentIndex];

  return (
    // 4. Main container is now white with black text
    <div className="bg-black relative z-20 py-20">
      <div className="container mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-12">
          Upcoming Concerts
        </h2>

        <div className="relative max-w-4xl mx-auto flex items-center justify-center">
          {/* 5. Left Arrow Button */}
          <button onClick={goToPrevious} aria-label="Previous concert" className="absolute left-0 -translate-x-12 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors z-30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          {/* 6. Concert Card - Links to the upcoming concerts page */}
          {currentConcert ? (
            <Link to="/concerts/upcoming" className="group block w-full">
              <div className="overflow-hidden rounded-lg shadow-2xl bg-gray-50">
                {/* Concert Image */}
                <img src={currentConcert.image} alt={`Concert at ${currentConcert.venue}`} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                
                {/* Concert Details */}
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold text-gray-900">{currentConcert.title}</h3>
                  <p className="text-lg text-gray-600 mt-2">{currentConcert.date}</p>
                  <p className="text-lg text-gray-600">{currentConcert.time}</p>
                  <p className="text-lg text-gray-600">{currentConcert.description}</p>
                </div>
              </div>
            </Link>
          ) : (
            <p className="text-gray-600">No upcoming concerts with images to display.</p>
          )}

          {/* 7. Right Arrow Button */}
          <button onClick={goToNext} aria-label="Next concert" className="absolute right-0 translate-x-12 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors z-30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default UpcomingConcertsTeaserSection;