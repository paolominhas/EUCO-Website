// src/pages/EducationHub.js
import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/Section';
import Header from '../../components/Header'; // The Education pages manage their own Header

const hubLinks = [
  { title: 'Composers', description: 'Explore the lives and works of key composers.', path: '/education/composers', icon: '🎼' },
  { title: 'Programme Notes', description: 'Read our notes from past concerts to learn more about the repertoire.', path: '/education/programme-notes', icon: '🗒️' },
  { title: 'Learn About the Chamber Orchestra', description: 'Discover the history and structure of a chamber orchestra.', path: '/education/learn', icon: '🎻' },
  { title: 'Articles', description: 'In-depth explorations of specific pieces and musical topics.', path: '/education/articles', icon: '📖' },
];

const EducationHub = () => {
  return (
    <>
      <title>Education Hub | EUCO</title>
      <meta name="description" content="Explore EUCO's educational resources, including a composer database, programme notes, articles, and information about the chamber orchestra." />
      <Header />
      <main>
        <Section title="Education Hub">
          <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-16">
            Welcome to our resource hub. Whether you're a seasoned musician, a curious concert-goer, or a new student, we invite you to explore the rich world of chamber music with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {hubLinks.map(link => (
              <Link to={link.path} key={link.title} className="group aspect-video bg-gray-800 rounded-lg p-8 flex flex-col justify-center items-center text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-rose-500/20">
                <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">{link.icon}</div>
                <h3 className="text-3xl font-bold text-rose-400 mb-2">{link.title}</h3>
                <p className="text-gray-400">{link.description}</p>
              </Link>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
};

export default EducationHub;