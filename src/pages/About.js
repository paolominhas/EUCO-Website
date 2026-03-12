import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import for animations
import Section from '../components/Section';
import { ReactComponent as StringersLogo } from '../logos/stringers-logo.svg';

// --- SVG Icons (replaces emojis) ---
// Defining icons as components for a cleaner look
const StoryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14h2v6h-2zm0 8h2v2h-2z"/></svg>;
const AuditionsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>;
const ConductorsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>;
const OperaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M18 4v12.79l-2.5-1.25-2.5 1.25V4h5m2-2H9v16l5-2.5 5 2.5V2zM2 6v14h14v-2H4V6H2z"/></svg>;
const CompetitionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.27l-6.18 3.73L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>;


// Updated data structure to use the icon components
const aboutLinks = [
  {
    icon: <StoryIcon />,
    title: 'Our Story',
    description: 'Discover our rich history, from our founding in 1983 to our tours and collaborations.',
    path: '/about/our-story',
  },
  {
    icon: <AuditionsIcon />,
    title: 'Auditions',
    description: 'Find all the information you need to join the orchestra for the 2025/26 season.',
    path: '/auditions',
  },
  {
    icon: <ConductorsIcon />,
    title: 'Conductors',
    description: 'Meet the professional conductors and guest artists who have led our orchestra.',
    path: '/about/conductors',
  },
  {
    icon: <OperaIcon />,
    title: 'Opera',
    description: 'Learn about our annual collaboration as the resident orchestra for Edinburgh Studio Opera.',
    path: '/about/opera',
  },
  {
    icon: <CompetitionIcon />,
    title: 'Concerto Competition',
    description: 'Explore our prestigious competition for the university\'s finest student soloists.',
    path: '/about/concerto-competition',
  },
];

const About = () => {
  // Animation variants for the grid container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // This will make the cards animate in one by one
      },
    },
  };

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const pageUrl = "https://www.eu-co.co.uk/about"; // Use your actual domain
  const orchestraName = "Edinburgh University Chamber Orchestra";
  const socialImage = "https://www.eu-co.co.uk/images/PhillipClose.jpg";


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": orchestraName,
    "url": "https://www.eu-co.co.uk/",
    "sameAs": [
      "https://www.facebook.com/EdinburghUniversityChamberOrchestra",
      "https://www.instagram.com/edunichamberorchestra",
      "https://x.com/EUCOmusic",
      "https://www.youtube.com/@edinburghuniversitychamber9979"
    ],
    "description": "The Edinburgh University Chamber Orchestra is one of Scotland's premier student-led ensembles, dedicated to performing chamber music at the highest level since 1983.",
    "foundingDate": "1983",
    "location": {
      "@type": "Place",
      "name": "Edinburgh, Scotland"
    }
  };



  return (
    <>
      {/* --- SEO METADATA --- */}
      <title>About Us | {orchestraName}</title>
      <meta name="description" content="Learn all about EUCO. Discover our history, find out how to audition, meet our conductors, and explore our major collaborations." />
      <link rel="canonical" href={pageUrl} />
      
      {/* --- Open Graph (for social media) --- */}
      <meta property="og:title" content={`About Us | ${orchestraName}`} />
      <meta property="og:description" content="Discover the history, people, and collaborations that define one of Scotland's premier student-led ensembles." />
      <meta property="og:image" content={socialImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />

      {/* --- Structured Data Script --- */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* --- Hero Section --- */}
      <div 
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/PhillipClose.jpg')" }} // Add a suitable background image
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">About The Orchestra</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            The Edinburgh University Chamber Orchestra is one of Scotland's premier student-led ensembles. We are a community of passionate musicians dedicated to performing chamber music at the highest level.
          </p>
        </div>
      </div>

      <Section>
        {/* The animated grid of navigation cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {aboutLinks.map((link) => (
            <motion.div key={link.title} variants={cardVariants}>
              <Link 
                to={link.path} 
                className="group bg-gray-800 p-8 rounded-lg h-full flex flex-col transform hover:-translate-y-2 transition-transform duration-300 shadow-2xl"
              >
                <div className="bg-blue-600/20 text-blue-400 rounded-full h-16 w-16 flex items-center justify-center">
                  {link.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mt-6 mb-2">{link.title}</h3>
                <p className="text-gray-400 flex-grow">{link.description}</p>
                 <p className="mt-6 font-semibold text-blue-500 group-hover:text-blue-400 transition-colors">
                  Learn More &rarr;
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* --- Section 2: Featured Sponsor (Stringers) --- */}
      <Section>
      <div className="bg-gray-100">
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-gray-800">
            <h3 className="text-sm uppercase font-semibold text-blue-600">Our Valued Partner</h3>
            
            {/* 1. WRAPPED: The logo is now wrapped in an <a> tag */}
            <a href="https://stringersedinburgh.com" target="_blank" rel="noopener noreferrer">
              {/* 2. STYLED: Added classes for default color, hover color, and a smooth transition */}
              <StringersLogo className="w-auto h-16 mt-2 text-gray-800 hover:text-blue-600 transition-colors duration-300" />
            </a>
            
            <p className="text-lg mt-4 leading-relaxed">
              We are incredibly proud to be partnered with Stringers, Edinburgh's leading specialist violin, viola, and cello shop. Their support is invaluable to our musicians and our mission.
            </p>
            <Link 
              to="/support-us/sponsors"
              className="mt-6 inline-block font-bold text-blue-600 hover:text-blue-800 transition-colors"
            >
              Learn more about our partners &rarr;
            </Link>
          </div>
          {/* Diagonally Cropped Image */}
          <div 
            className="h-96 bg-cover bg-center rounded-lg shadow-2xl"
            style={{ 
              backgroundImage: "url('/backgrounds/stringers-shop.jpg')",
              clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)' 
            }}
          >
          </div>
        </div>
      </div>
      </Section>  
    </>
  );
};

export default About;