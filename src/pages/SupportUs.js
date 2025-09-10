import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const supportLinks = [
  {
    icon: '🌟',
    title: 'Our Partners',
    description: 'See the wonderful organizations and societies that support our orchestra and its mission.',
    path: '/support-us/sponsors',
  },
  {
    icon: '💖',
    title: 'Sponsorship',
    description: 'Learn how you or your business can support student music in Edinburgh by sponsoring EUCO.',
    path: '/support-us/donate',
  },
];

const SupportUs = () => {
  return (
    <>
      <title>Support Us | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Help support EUCO. Learn about sponsorship opportunities or see our current list of valued partners." />

      <Section title="Support Us">
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-16">
          As a student-run society, we rely on the generous support of our partners and community to fund our ambitious seasons. Here's how you can get involved.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {supportLinks.map((link) => (
            <Link key={link.title} to={link.path} className="bg-gray-800 p-8 rounded-lg transform hover:scale-105 hover:bg-gray-700 transition-all duration-300 shadow-lg">
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

export default SupportUs;