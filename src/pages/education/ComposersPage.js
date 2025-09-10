import React, { useState } from 'react';
import Section from '../../components/Section';
import Header from '../../components/Header';
import { composers } from '../../data/educationData'; // Import the data

const ComposersPage = () => {
  const [openId, setOpenId] = useState(null);

  const toggleComposer = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <title>Composers | EUCO Education Hub</title>
      <Header />
      <main>
        <Section title="Composer Database">
          <div className="max-w-4xl mx-auto space-y-4">
            {composers.sort((a, b) => {
              const lastNameA = a.name.split(' ').pop(); // Extracts the last word as the surname
              const lastNameB = b.name.split(' ').pop();
              return lastNameA.localeCompare(lastNameB);
            }).map((composer) => (
              <div key={composer.id} className="bg-gray-800 rounded-lg overflow-hidden">
                <button onClick={() => toggleComposer(composer.id)} className="w-full p-6 flex items-center space-x-6 text-left">
                  <img 
                    src={`${process.env.PUBLIC_URL}/${composer.imageUrl}`} 
                    alt={composer.name} 
                    className="w-24 h-24 rounded-full flex-shrink-0 object-cover" 
                  />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-rose-400">{composer.name}</h3>
                    <p className="text-gray-400">{composer.lifespan}</p>
                    <p className="text-gray-300 mt-2 hidden md:block">{composer.bio}</p>
                  </div>
                   <span className={`transform transition-transform duration-300 ${openId === composer.id ? 'rotate-180' : ''}`}>
                    <svg className="w-8 h-8 text-rose-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </button>
                <div className={`faq-answer ${openId === composer.id ? 'open' : ''}`}>
                  <div className="p-6 pt-0">
                    <p className="text-gray-300 mt-2 md:hidden">{composer.bio}</p>
                    <h4 className="font-bold text-white mt-4 mb-2">Key Works for Chamber Orchestra:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {composer.pieces.map(piece => <li key={piece}>{piece}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
};

export default ComposersPage;