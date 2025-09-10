import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import ParallaxSection from '../components/ParallaxSection';

const Donate = () => {
  return (
    <>
      <title>Support Us | Sponsor the Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Support student music in Edinburgh. Learn about sponsorship opportunities with EUCO and help us continue our tradition of high-quality performances." />

      <Section title="Support Our Music">
        <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed space-y-6">
          <p>
            As a student-run organization, EUCO is constantly evolving. Each year, we seek new collaborations and welcome the support of local businesses and individuals who share our passion for music.
          </p>
          <p>
            Sponsorship can take many forms, from providing raffle prizes for our events to supporting a specific concert. In return, we can offer your brand exposure to a large audience of students and music lovers across Edinburgh.
          </p>
          <Link to="/contact-us/direct" className="mt-8 inline-block px-8 py-3 bg-rose-600 text-black font-bold rounded-full hover:bg-rose-500 transform hover:scale-105 transition-all duration-300">
            Contact Us About Sponsorship
          </Link>
        </div>
      </Section>

      <ParallaxSection imgUrl="/backgrounds/support-parallax.jpg" title="How Your Support Helps">
        <ul className="list-disc list-inside space-y-4 text-left text-xl">
          <li>
            <strong>Community:</strong> Your support helps us provide free musical outreach performances in local community venues, such as care homes and schools.
          </li>
          <li>
            <strong>Music:</strong> You contribute to a vibrant music scene in Edinburgh and help us maintain our commitment to affordable, high-quality concerts.
          </li>
          <li>
            <strong>Scope:</strong> Financial support allows us to hire larger venues, perform more ambitious repertoire, and reach a wider audience.
          </li>
        </ul>
      </ParallaxSection>
    </>
  );
};

export default Donate;