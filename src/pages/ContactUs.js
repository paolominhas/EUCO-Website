import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const contactLinks = [
  {
    icon: '✉️',
    title: 'Contact Us Directly',
    description: 'Send a message to our committee for enquiries about auditions, concerts, or sponsorship.',
    path: '/contact-us/direct',
  },
  {
    icon: '❓',
    title: 'FAQ',
    description: 'Find answers to the most common questions about rehearsals, fees, and social events.',
    path: '/contact-us/faq',
  },
];

const ContactUs = () => {
  return (
    <>
      <title>Contact Us | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Get in touch with EUCO. Send us a message directly or find answers to frequently asked questions about the orchestra." />

      <Section title="Get In Touch">
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-16">
          We'd love to hear from you. Whether you're a prospective member, a potential sponsor, or a member of the audience, here's how to reach us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactLinks.map((link) => (
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

export default ContactUs;