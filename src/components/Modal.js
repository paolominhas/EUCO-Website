import React from 'react';
import ConcertGallery from './ConcertGallery'; // 1. Import the new gallery component

const Modal = ({ concert, onClose }) => {
  if (!concert) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-gray-800 text-white rounded-lg shadow-2xl p-8 max-w-3xl w-full relative transform transition-all overflow-y-auto max-h-[90vh]"
        onClick={e => e.stopPropagation()}
      >
        <button /* ... close button ... */>
          &times;
        </button>

        <h2 className="text-3xl font-bold text-blue-400">{concert.venue}</h2>
        <p className="text-lg text-gray-400 mt-1">{concert.date}</p>
        
        <div className="mt-6 space-y-4">
          {/* ... Programme Notes and Video sections remain the same ... */}
          
          {/* 2. Conditionally render the new ConcertGallery component */}
          {concert.galleryFolder && (
            <ConcertGallery folderName={concert.galleryFolder} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;