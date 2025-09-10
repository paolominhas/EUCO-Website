import React from 'react';
import Section from '../components/Section';

const ConcertoCompetition = () => {
  return (
    <>
        <title>Concerto Competition | Edinburgh University Chamber Orchestra</title>
        <meta 
          name="description" 
          content="Learn about the annual EUCO Concerto Competition for student soloists at the University of Edinburgh. Winner performs a concerto with the orchestra." 
        />

      <Section title="Concerto Competition">
        <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed space-y-8">
          <p>
            The Edinburgh University Concerto Competition is an annual event that provides a platform 
            for exceptional student soloists to perform a concerto with a full orchestra.
          </p>
          <p>
            This prestigious competition is open to instrumentalists from across the University. 
            The winner receives the unique opportunity to perform their chosen concerto with EUCO 
            in one of our main season concerts. Past winners have gone on to pursue successful 
            careers in music.
          </p>
          <p>
            Applications for the 2025/26 competition will open in October. Further details about
            the application process and key dates will be posted here shortly.
          </p>
          <div className="mt-10">
            <button 
              disabled
              className="px-10 py-4 bg-rose-600 text-black font-bold text-xl rounded-full hover:bg-rose-500 transform transition-all duration-300 cursor-not-allowed opacity-60"
            >
              Applications Open Soon
            </button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ConcertoCompetition;