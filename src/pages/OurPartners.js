import React from 'react';
import Section from '../components/Section';

// --- Data for Partners ---
const sponsorsData = [
  { 
    name: 'Stringers Music', 
    logo: '/backgrounds/stringers-shop-2.jpg',
    description: 'Edinburgh\'s leading specialist shop for orchestral string instruments. We are incredibly grateful for their generous support of our musicians - we could not reccomend them enough!',
    url: 'https://www.stringersmusic.com/'
  },
  // Add more top-tier sponsors here
];

const universityPartnersData = [
  { 
    name: 'Edinburgh University Students\' Association', 
    logo: "/backgrounds/EUSA.jpg", 
    description: 'We are affiliated with EUSA, which can provide us with funding, rehearsal spaces, and promotional support. EUSA is a registered charity that supports student societies and activities at the University of Edinburgh.',
    url: 'https://www.eusa.ed.ac.uk/'
  },
  { 
    name: 'The University of Edinburgh', 
    logo: "/backgrounds/UoE.jpg", 
    description: 'As a university society we use the facilities and support of the University of Edinburgh to rehearse and perform.',
    url: 'https://www.ed.ac.uk'
  },
  { 
    name: 'Edinburgh University Singers', 
    logo: "/backgrounds/Singers.jpg", 
    description: 'We are collaborating with the Edinburgh University Singers in our next concert.',
    url: 'https://singers.eusa.ed.ac.uk'
  },
  { 
    name: 'Edinburgh Studio Opera', 
    logo: "/backgrounds/ESO.jpg", 
    description: 'We collaborate annually with Edinburgh Studio Opera to perform operatic works in March.',
    url: 'https://edinburghstudioopera.org'
  },
  { 
    name: 'Edinburgh University Music Society', 
    logo: "/backgrounds/EUMS.jpg", 
    description: 'We collaborate EUMS for exciting socials and this year potentially a tour! We are seperate to EUMS, and are run entirely by students - but many of us also play in their ensembles (all of which are fantastic!).',
    url: 'https://www.eums.org.uk/'
  },
  { 
    name: 'Edinburgh University String Orchestra', 
    logo: "/backgrounds/EUSO.png", 
    description: 'We collabprate on our annual scratch rehersals and some socials with the string orchestra.',
    url: 'https://www.eusa.ed.ac.uk/'
  },
];

const communityPartnersData = [
    { 
        name: 'Scottish Chamber Orchestra', 
        logo: '/backgrounds/SCOfamily.jpg', 
        description: 'Several of our conductors (most recently Philip Higham) and from this wonderful ensemble. We are grateful for their support with our raffles and musical inspiration.',
        url: 'https://www.sco.org.uk/'
    },
    { 
        name: 'Royal Scottish National Orchestra', 
        logo: "/backgrounds/RSNO.jpg", 
        description: 'We often collaborate with the RSNO with our raffle prizes. Look out for free tickets!',
        url: 'https://www.rsno.org.uk/'
    },
    { 
        name: 'Westnic Records', 
        logo: "/backgrounds/westnic.jpg", 
        description: 'This year we are collaborating with Westnic Records on our socials after rehersals and concerts.',
        url: 'https://www.westnicrecords.com'
    },
    { 
        name: 'Lighthouse Books', 
        logo: "/backgrounds/lighthouse.jpg", 
        description: 'We are very grateful for Lighthouse Books\' contribution to our raffle.',
        url: 'https://lighthousebookshop.com/'
    },
];

const OurPartners = () => {
  return (
    <>
      <title>Our Partners | EUCO</title>
      <meta name="description" content="We are grateful for the support of our partners and sponsors, including Stringers Music, EUSA, the Scottish Chamber Orchestra, and more." />
      
      {/* --- Main "Donate" Call-to-Action --- */}
      <div 
        className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/pictures/support-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 p-8">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Support Student Music
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mt-4 max-w-2xl mx-auto">
            Your generosity helps us continue our tradition of ambitious, high-quality performances.
          </p>
          <a 
            href="https://www.justgiving.com/crowdfunding/euco-outreach?utm_medium=FA&utm_source=CL"
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-8 inline-block px-12 py-4 bg-blue-600 text-black text-lg font-bold rounded-full transform hover:scale-105 transition-transform duration-300"
          >
            Donate Now
          </a>
        </div>
      </div>

      {/* --- Sponsors Section --- */}
      <Section title="Our Sponsors">
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-20">
          Our ambitious concert seasons are made possible by the generous support of our sponsors.
        </p>
        <div className="space-y-24">
          {sponsorsData.map((sponsor, index) => (
            <div key={sponsor.name} className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div className={`flex justify-center ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="max-h-48 object-contain rounded-lg shadow-2xl"/>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white">{sponsor.name}</h3>
                <p className="text-lg text-gray-300 mt-4 leading-relaxed">{sponsor.description}</p>
                <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-bold text-blue-500 hover:text-blue-400 transition-colors">
                  Visit their website &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* --- University Partners Section --- */}
      <Section title="Our University Partners">
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-20">
          We collaborate with these societies for exciting socials, concerts, and tours, fostering a vibrant student music scene.
        </p>
        <div className="space-y-24">
          {universityPartnersData.map((partner, index) => (
            <div key={partner.name} className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div className={`flex justify-center ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <img src={partner.logo} alt={`${partner.name} logo`} className="max-h-48 object-contain rounded-lg shadow-2xl"/>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white">{partner.name}</h3>
                {/* Description is now the subtitle, so we can remove this line */}
                <p className="text-lg text-gray-300 mt-4 leading-relaxed">{partner.description}</p>
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-bold text-blue-500 hover:text-blue-400 transition-colors">
                  Visit their website &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* --- Community Partners Section --- */}
      <Section title="Our Community Partners">
         <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-20">
          Our community partners generously support our mission, often by donating fantastic prizes to our concert raffles, but sometimes with scocials agreements or collaborations.
        </p>
         <div className="space-y-24">
          {communityPartnersData.map((partner, index) => (
            <div key={partner.name} className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              <div className={`flex justify-center ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <img src={partner.logo} alt={`${partner.name} logo`} className="max-h-48 object-contain rounded-lg shadow-2xl"/>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white">{partner.name}</h3>
                {/* Description is now the subtitle, so we can remove this line */}
                <p className="text-lg text-gray-300 mt-4 leading-relaxed">{partner.description}</p>
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-bold text-blue-500 hover:text-blue-400 transition-colors">
                  Visit their website &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default OurPartners;