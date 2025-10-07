import React from 'react';
import { Link } from 'react-router-dom';

// Paths to images in your `public` folder
const teaserImages = [
  { src: '/images/FullOrchestra.jpg', alt: 'The orchestra performing' },
  { src: '/images/ImkeClarinet.jpg', alt: 'A clarinet player in rehearsal' },
  { src: '/images/Bruch.jpg', alt: 'Carola Borriero our soloist performing Bruch' },
  { src: '/images/Phillip.jpg', alt: 'Pillip Higham conducting Mendelssohn' },
];

const GalleryTeaser = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">Our previous seasons</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {teaserImages.map((image, index) => (
            <img 
              key={index} 
              src={image.src} 
              alt={image.alt} 
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          ))}
        </div>
        <Link 
          to="/education/articles" // Assuming you create a full gallery page
          className="mt-12 inline-block px-8 py-3 bg-blue-600 text-black font-bold rounded-full hover:bg-blue-500 transition-colors"
        >
          Listen to us
        </Link>
      </div>
    </div>
  );
};

export default GalleryTeaser;