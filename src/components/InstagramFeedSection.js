import React from 'react';

// In a real application, this data might come from an API.
// For now, we define it here or import it from a central data file.
const instagramPostsData = [
  { id: 1, imgUrl: `${process.env.PUBLIC_URL}/backgrounds/PresidentPost.png`, caption: 'Meet our new president, Srishti!', postUrl: 'https://www.instagram.com/p/C3_aBcDEfGH/' },
  { id: 2, imgUrl: `${process.env.PUBLIC_URL}/backgrounds/LastConcert.png`, caption: 'A look back at our last concert in Reid Concert Hall.', postUrl: 'https://www.instagram.com/p/C3_aBcDEfGH/' },
  { id: 3, imgUrl: `${process.env.PUBLIC_URL}/backgrounds/Opera.png`, caption: 'Another year of opera complete with ESO! Bravo!', postUrl: 'https://www.instagram.com/p/C3_aBcDEfGH/' },
];

/**
 * A component to display a grid of Instagram posts.
 */
const InstagramFeedSection = () => {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-semibold text-center text-white mb-8 border-b-2 border-rose-600/30 pb-2 max-w-md mx-auto">
        Follow Our Journey
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        
        {/* We map over the data array to create a post for each item */}
        {instagramPostsData.map(post => (
          <a 
            href={post.postUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            key={post.id} 
            className="group relative aspect-square block bg-gray-800 rounded-lg overflow-hidden"
          >
            <img 
              src={post.imgUrl} 
              alt="Instagram Post" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
            />
            {/* This div is the dark overlay that appears on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center p-4">
              <p className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {post.caption}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeedSection;