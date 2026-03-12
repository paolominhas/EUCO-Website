import React, { useState } from 'react';
import Section from '../components/Section';
import Modal from '../components/Modal'; // 1. Import the new Modal component
import { pastConcertsData } from '../data/concerts';

const PastConcerts = () => {
  // 2. Add state to manage which concert is selected for the modal
  const [selectedConcert, setSelectedConcert] = useState(null);

  return (
    <>
      <title>Past Concerts | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Explore the rich history of performances by the Edinburgh University Chamber Orchestra." />

      <Section title="Past Concerts">
        <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed mb-12">
          <p>
            Look through our archive of recent performances. Click on a concert to see more details, photos, and recordings.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastConcertsData.map(concert => (
              // 3. Add an onClick handler to each concert card
              <div 
                key={concert.date} 
                className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col cursor-pointer hover:scale-105 hover:shadow-blue-500/20 transition-all duration-300"
                onClick={() => setSelectedConcert(concert)}
              >
                <h3 className="text-xl font-bold text-white">{concert.venue}</h3>
                <p className="font-semibold text-lg mt-1 text-gray-400">{concert.date}</p>
                
                <ul className="text-blue-400 mt-4 list-disc list-inside flex-grow">
                  {concert.program.map(piece => (
                    <li key={piece}>{piece}</li>
                  ))}
                </ul>

                {concert.image && (
                  <img src={concert.image} alt={`Concert at ${concert.venue}`} className="mt-4 rounded-lg shadow-md" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Render the Modal component */}
      {/* It will only be visible when selectedConcert is not null */}
      <Modal concert={selectedConcert} onClose={() => setSelectedConcert(null)} />
    </>
  );
};

export default PastConcerts;