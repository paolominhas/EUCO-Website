import React from 'react';
import Section from '../components/Section';

// Data for the conductors. This can be moved to a central data file later.
const conductorsData = [
  { name: 'Philip Higham', role: 'Guest Conductor', img: `${process.env.PUBLIC_URL}/conductors/philip.jpeg`, url: 'https://www.sco.org.uk/profile/philip-higham' },
  { name: 'William Conway', role: 'Conductor', img: `${process.env.PUBLIC_URL}/conductors/will.jpeg`, url: 'https://www.william-conway.com' },
  { name: 'Tim Espin', role: 'Guest Conductor', img: `${process.env.PUBLIC_URL}/conductors/tim.jpg`, url: 'https://auroraensembleedinburgh.com/our-conductor/' },
  { name: 'Kristine Donnan', role: 'Opera Conductor', img: `${process.env.PUBLIC_URL}/conductors/kristine.jpg`, url: 'https://kristinedonnan.com' },
  { name: 'Gerard Doherty', role: 'Guest Conductor', img: `${process.env.PUBLIC_URL}/conductors/gerry.jpg`, url: 'https://sites.google.com/site/glasgowsinfonia/conductor' },
  { name: 'Peter Evans', role: 'Guest Conductor', img: `${process.env.PUBLIC_URL}/conductors/peter.jpg`, url: 'https://meadowsorchestra.org.uk/programme/peter-evans/' },
  { name: 'Richard Lewis', role: 'Guest Conductor', img: `${process.env.PUBLIC_URL}/conductors/richardlewis.jpg`, url: 'https://www.richardjlewis.org' },
  { name: 'David Watkins', role: 'Guest Conductor', img: `${process.env.PUBLIC_URL}/conductors/davidwatkins.jpg`, url: 'https://www.sco.org.uk/news/in-memory-of-david-watkin' },
];

const Conductors = () => {
  return (
    <>
      {/* SEO Tags using the built-in React 19 method */}
      <title>Conductors & Guest Artists | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Meet the professional conductors and guest artists who have led the EUCO. Learn about our collaborations with leading figures in Scottish classical music." />

      <Section title="Conductors & Guest Artists">
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-12">
          We are proud to have worked with these incredible musicians and conductors.
        </p>
        <div className="flex justify-center flex-wrap gap-12">
          {conductorsData.map(person => (
            <a 
              key={person.name} 
              href={person.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-gray-800 rounded-lg p-6 text-center shadow-lg w-64">
                <img src={person.img} alt={person.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700 object-cover" />
                <h4 className="font-bold text-xl text-rose-400">{person.name}</h4>
                <p className="text-gray-400">{person.role}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Conductors;