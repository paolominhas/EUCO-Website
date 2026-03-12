import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ConcertGallery = ({ folderName }) => {
  // --- FIX APPLIED HERE ---
  // React Hooks must be called at the top level, before any returns or conditions.
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // This logic for finding images remains the same
  let imageUrls = [];
  try {
    const requireContext = require.context('../assets/gallery', true, /\.(png|jpe?g|svg)$/);
    const requiredImages = requireContext.keys().filter(path => 
      path.startsWith(`./${folderName}/`)
    );
    imageUrls = requiredImages.map(path => requireContext(path));
  } catch (error) {
    console.error(`Could not find gallery folder: ${folderName}`, error);
    // This early return is why the hooks must be called before it.
    return null;
  }

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  const slides = imageUrls.map(src => ({ src }));

  if (imageUrls.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Gallery</h3>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {imageUrls.map((src, index) => (
          <div key={src}>
            <img 
              src={src} 
              alt={`Concert gallery - item ${index + 1}`} 
              className="rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
            />
          </div>
        ))}
      </Masonry>
      
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        on={{ view: ({ index }) => setLightboxIndex(index) }}
      />
    </div>
  );
};

export default ConcertGallery;