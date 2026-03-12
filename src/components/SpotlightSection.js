import React from 'react';
import { featuredArtist } from '../data/featuredArtistData';

const SpotlightSection = () => {
  return (
    <div className="bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="md:flex items-center">
          <div className="md:w-1/2">
            <img 
              src={featuredArtist.image} 
              alt={featuredArtist.name} 
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-2xl"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12 text-center md:text-left">
            <h3 className="text-sm uppercase font-semibold text-blue-400">{featuredArtist.role}</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{featuredArtist.name}</h2>
            <p className="text-gray-300 text-lg mt-4">{featuredArtist.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotlightSection;