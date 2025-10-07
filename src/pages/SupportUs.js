import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

import { ReactComponent as StringersLogo } from '../logos/stringers-logo.svg';

const SupportUs = () => {
  return (
    <>
      <title>Support Us | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Help support EUCO. Donate to our JustGiving page, or learn about our valued partners and sponsorship opportunities." />

      {/* --- Section 1: The Main "Donate" Call-to-Action --- */}
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

      {/* --- Section 2: Featured Sponsor (Stringers) --- */}
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
      
      {/* --- Section 3: Sponsorship Information --- */}
      <Section title="Become a Sponsor">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-8">
            Partnering with EUCO offers a unique opportunity to connect with a passionate and culturally engaged audience in Edinburgh. Discover how your business can support the next generation of musical talent.
          </p>
          <Link 
            to="/support-us/donate"
            className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-black transform hover:scale-105 transition-all duration-300"
          >
            View Sponsorship Tiers
          </Link>
        </div>
      </Section>
    </>
  );
};

export default SupportUs;