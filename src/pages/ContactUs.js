import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import SignupForm from '../components/SignUpForm'; // Corrected component name if needed

const ContactUs = () => {
  return (
    <>
      <title>Contact Us | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Get in touch with EUCO. Send us a message directly or find answers to frequently asked questions about the orchestra." />

      {/* --- Section 1: Hero Section with Background Image --- */}
      <div 
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/backgrounds/contact-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white">Get In Touch</h1>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            We'd love to hear from you. Whether you're a prospective member, a potential sponsor, or a member of the audience, here's how to reach us.
          </p>
        </div>
      </div>
      
      {/* --- Section 2: Contact Options --- */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto -mt-32 relative z-10">
          
          {/* Card 1: Contact Us Directly */}
          <Link 
            to="/contact-us/direct" 
            className="group bg-gray-800 p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300 shadow-2xl"
          >
            <div className="bg-blue-600/20 text-blue-400 rounded-full h-16 w-16 flex items-center justify-center">
              {/* SVG Icon for Email */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mt-6 mb-2">Contact Us Directly</h3>
            <p className="text-gray-400">Send a message to our committee for enquiries about auditions, concerts, or sponsorship.</p>
            <p className="mt-6 font-semibold text-blue-500 group-hover:text-blue-400 transition-colors">
              Send a Message &rarr;
            </p>
          </Link>
          
          {/* Card 2: FAQ */}
          <Link 
            to="/contact-us/faq" 
            className="group bg-gray-800 p-8 rounded-lg transform hover:-translate-y-2 transition-transform duration-300 shadow-2xl"
          >
            <div className="bg-blue-600/20 text-blue-400 rounded-full h-16 w-16 flex items-center justify-center">
              {/* SVG Icon for Question Mark */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mt-6 mb-2">FAQ</h3>
            <p className="text-gray-400">Find answers to the most common questions about rehearsals, fees, and social events.</p>
            <p className="mt-6 font-semibold text-blue-500 group-hover:text-blue-400 transition-colors">
              View Questions &rarr;
            </p>
          </Link>
          
        </div>
      </Section>

      <SignupForm />
    </>
  );
};

export default ContactUs;