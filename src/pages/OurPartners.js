import React from 'react';
import Section from '../components/Section';

// Data for sponsors/partners
const sponsorsData = [
  { name: 'Edinburgh University Students\' Association', logo: `${process.env.PUBLIC_URL}/backgrounds/EUSA.png` },
  { name: 'Edinburgh University Music Society', logo: `${process.env.PUBLIC_URL}/backgrounds/EUMS.jpg` },
  { name: 'Scottish Chamber Orchestra', logo: `${process.env.PUBLIC_URL}/backgrounds/SCO.jpg` },
  { name: 'Edinburgh Studio Opera', logo: `${process.env.PUBLIC_URL}/backgrounds/ESO.jpg` },
  { name: 'Edinburgh University String Orchestra', logo: `${process.env.PUBLIC_URL}/backgrounds/EUSO.png` },
  { name: 'Edinburgh University Singers', logo: `${process.env.PUBLIC_URL}/backgrounds/Singers.jpg` },
];

const Sponsors = () => {
  return (
    <>
      <title>Our Partners & Sponsors | EUCO</title>
      <meta name="description" content="We are grateful for the support of our partners and sponsors, including EUSA, EUMS, the Scottish Chamber Orchestra, and more." />

      <Section title="Our Partners & Sponsors">
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-12">
          We are forever grateful for the generous support of our friends and partners, who help make our music possible.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-12">
          {sponsorsData.map(sponsor => (
            <div key={sponsor.name} className="p-4 bg-gray-200 rounded-lg flex items-center justify-center w-48 h-24">
              <img src={sponsor.logo} alt={sponsor.name} className="max-h-20 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Sponsors;