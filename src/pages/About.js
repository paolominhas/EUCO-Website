import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

// We can define the content for our navigation cards in an array of objects
const aboutLinks = [
  {
    icon: '📜',
    title: 'Our Story',
    description: 'Discover our rich history, from our founding in 1983 to our tours and collaborations.',
    path: '/about/our-story',
  },
  {
    icon: '🎶',
    title: 'Auditions',
    description: 'Find all the information you need to join the orchestra for the 2025/26 season.',
    path: '/auditions',
  },
  {
    icon: '🤵',
    title: 'Conductors',
    description: 'Meet the professional conductors and guest artists who have led our orchestra.',
    path: '/about/conductors',
  },
  {
    icon: '🎭',
    title: 'Opera',
    description: 'Learn about our annual collaboration as the resident orchestra for Edinburgh Studio Opera.',
    path: '/about/opera',
  },
  {
    icon: '🏆',
    title: 'Concerto Competition',
    description: 'Explore our prestigious competition for the university\'s finest student soloists.',
    path: '/about/concerto-competition',
  },
];


const About = () => {
  return (
    <>
      <title>About Us | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Learn all about EUCO. Discover our history, find out how to audition, meet our conductors, and explore our major collaborations." />

      <Section title="About The Orchestra">
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-16">
          The Edinburgh University Chamber Orchestra is one of Scotland's premier student-led ensembles. We are a community of passionate musicians dedicated to performing chamber music at the highest level. Explore the sections below to learn more about who we are and what we do.
        </p>

        {/* This grid will display our navigation cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {aboutLinks.map((link) => (
            <Link 
              to={link.path} 
              key={link.title} 
              className="bg-gray-800 p-8 rounded-lg transform hover:scale-105 hover:bg-gray-700 transition-all duration-300 shadow-lg"
            >
              <div className="text-4xl mb-4">{link.icon}</div>
              <h3 className="text-2xl font-bold text-rose-400 mb-2">{link.title}</h3>
              <p className="text-gray-400">{link.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
};

export default About;