import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // 1. Import the new Link component
import { motion } from 'framer-motion';
import Header from '../../components/Header';

const hubSections = [
  { id: 'composers', title: 'Composers', description: 'Explore the lives and works of key composers.', path: '/education/composers' },
  { id: 'programme-notes', title: 'Programme Notes', description: 'Read our notes from past concerts to learn more about the repertoire.', path: '/education/programme-notes' },
  { id: 'learn', title: 'The Chamber Orchestra', description: 'Discover the history and structure of a chamber orchestra.', path: '/education/learn' },
  { id: 'articles', title: 'Articles', description: 'In-depth explorations of specific pieces and musical topics.', path: '/education/articles' },
];

const EducationHub = () => {
  const sectionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <title>Education Hub | EUCO</title>
      <meta name="description" content="Explore EUCO's educational resources, including a composer database, programme notes, articles, and information about the chamber orchestra." />
      <Header />
      
      <div className="container mx-auto px-6 pb-20 pt-28 md:pt-32 md:grid md:grid-cols-3 md:gap-16">
        
        <aside className="md:col-span-1 md:sticky md:top-32 h-full mb-12 md:mb-0">
          <h1 className="text-4xl font-bold text-white">Education Hub</h1>
          <p className="mt-4 text-gray-400">
            An ever-growing collection of resources about the music we love. 
            We'd love your feedback—please <RouterLink to="/contact-us/direct" className="text-blue-400 underline hover:text-blue-300">get in touch</RouterLink> with any ideas.
          </p>
          <nav className="mt-8">
            <ul className="space-y-4">
              {hubSections.map(section => (
                <li key={section.id}>
                  {/* 2. Replace <a> tags with the new ScrollLink component */}
                  <ScrollLink
                    to={section.id} // This targets the section with the matching name/id
                    spy={true}
                    smooth={true}
                    offset={-150} // Adjust this offset to account for your sticky header
                    duration={500}
                    className="text-lg text-gray-300 hover:text-blue-400 transition-colors font-semibold cursor-pointer"
                  >
                    {section.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="md:col-span-2 space-y-24">
          {hubSections.map(section => (
            // 3. The `id` here is what the ScrollLink targets
            <motion.div 
              key={section.id} 
              id={section.id} 
              className="p-8 rounded-lg bg-gray-800 shadow-2xl"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-blue-400">{section.title}</h2>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">{section.description}</p>
              <RouterLink to={section.path} className="mt-6 inline-block font-bold text-white bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-500 transition-colors">
                Explore &rarr;
              </RouterLink>
            </motion.div>
          ))}
        </main>
      </div>
    </>
  );
};

export default EducationHub;