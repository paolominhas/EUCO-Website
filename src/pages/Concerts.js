import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const concertLinks = [
  {
    icon: '🗓️',
    title: 'Performances',
    description: 'View our full schedule of upcoming and past concerts for the 2025/26 season.',
    path: '/concerts/performances',
  },
  {
    icon: '🎉',
    title: 'Special Events',
    description: 'Find details on one-off events like our annual scratch rehearsal, workshops, and masterclasses.',
    path: '/concerts/events',
  },
  {
    icon: '🤝',
    title: 'Outreach',
    description: 'Learn how we bring music to the wider Edinburgh community through our outreach programme.',
    path: '/concerts/outreach',
  },
];

const Concerts = () => {
  return (
    <>
      <title>Concerts & Events | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Explore EUCO's concerts, special events, and community outreach initiatives. Find our full performance schedule and learn how we engage with the community." />

      <Section title="Concerts & Events">
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-16">
          From our main season performances in Edinburgh's beautiful concert halls to our community engagement events, find all the information you need right here.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {concertLinks.map((link) => (
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

export default Concerts;