import React from 'react';
import Section from '../components/Section';

const Opera = () => {
  return (
    <>
      <title>Opera Collaboration with ESO | EUCO</title>
      <meta name="description" content="Learn about the Edinburgh University Chamber Orchestra's annual collaboration as the resident orchestra for the Edinburgh Studio Opera (ESO)." />

      <div className="relative overflow-hidden bg-black">
        {/* Background Video */}
        <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source src={`${process.env.PUBLIC_URL}/videos/opera-background.webm`} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        <div className="relative z-10">
          <Section title="Opera: A Theatrical Collaboration">
            <div className="max-w-4xl mx-auto text-center text-gray-100 text-lg leading-relaxed space-y-6 bg-black/70 backdrop-blur-sm p-8 rounded-lg">
              <p>Each year, the Edinburgh University Chamber Orchestra is proud to be the resident orchestra for Edinburgh Studio Opera, the city's leading student-run opera company. This collaboration is a highlight of our season, bringing full-scale opera productions to the stage.</p>
              <p>Working with talented vocalists, a professional artistic team, and our dedicated musicians, we explore the rich and dramatic world of the opera repertoire. Our most recent production was Massenet's 'Cendrillon' at the Pleasance Theatre.</p>
              
              <div className="flex justify-center items-center my-8">
                <a href="https://edinburghstudioopera.org/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105">
                  <img src={`${process.env.PUBLIC_URL}/backgrounds/ESO.jpg`} alt="Edinburgh Studio Opera Logo" className="h-24 rounded-lg shadow-lg" />
                </a>
              </div>
              
              <p>We are thrilled to continue this partnership and look forward to our next production in Spring 2026.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <img src={`${process.env.PUBLIC_URL}/backgrounds/opera-snippet-1.jpg`} alt="Opera performance snippet" className="rounded-lg shadow-xl w-full h-full object-cover"/>
                <img src={`${process.env.PUBLIC_URL}/backgrounds/opera-snippet-2.jpg`} alt="Orchestra in the opera pit" className="rounded-lg shadow-xl w-full h-full object-cover"/>
              </div>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
};

export default Opera;