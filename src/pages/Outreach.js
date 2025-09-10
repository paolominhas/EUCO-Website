import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import ParallaxSection from '../components/ParallaxSection'; // Using a parallax for visual appeal

const Outreach = () => {
  return (
    <>
      <title>Community Outreach | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Discover EUCO's community outreach programme in Edinburgh. We perform in schools, care homes, and community centres to make classical music accessible to all." />

      <Section title="Community Outreach">
        <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed space-y-6">
          <p>
            At the Edinburgh University Chamber Orchestra, we believe in the power of music to connect and uplift communities.
          </p>
          <p>
            Throughout the year, our talented members form smaller ensembles to bring live music beyond the concert hall.
          </p>
        </div>
      </Section>

      <ParallaxSection 
        imgUrl="/backgrounds/outreach-parallax.jpg" // You'll want to add a suitable image here
        title="Arrange a Visit"
      >
        <p>
          Our outreach performances are a wonderful way to introduce young people to the instruments of the orchestra or to provide a joyful musical experience for residents in care. These events are offered for free as part of our commitment to the community.
        </p>
        <p className="mt-4">
          If you are a teacher, activities coordinator, or community leader in Edinburgh and would be interested in having one of our ensembles perform for your group, we would be delighted to hear from you.
        </p>
        <div className="text-center mt-8">
          <Link to="/contact-us/direct" className="mt-8 inline-block px-8 py-3 bg-rose-600 text-black font-bold rounded-full hover:bg-rose-500 transform hover:scale-105 transition-all duration-300">
            Get in Touch
          </Link>
        </div>
      </ParallaxSection>
    </>
  );
};

export default Outreach;