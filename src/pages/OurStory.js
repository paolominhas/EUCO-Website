import React from 'react';

// Assuming you moved your reusable components into a 'components' folder
import Section from '../components/Section';
import ParallaxSection from '../components/ParallaxSection';
import ScrollingImage from '../components/ScrollingImage';

// It's good practice to keep data in a separate file, but for this example we'll include it here.
const instagramPostsData = [
    { id: 1, imgUrl: `${process.env.PUBLIC_URL}/backgrounds/PresidentPost.png`, caption: 'Meet our new president: Srishti', postUrl: 'https://www.instagram.com/p/DNfdztJoaUy/' },
    { id: 2, imgUrl: `${process.env.PUBLIC_URL}/backgrounds/LastConcert.png`, caption: 'Our last concert at Reid Concert Hall.', postUrl: 'https://www.instagram.com/p/DHJFRpgI8lX/' },
    { id: 3, imgUrl: `${process.env.PUBLIC_URL}/backgrounds/Opera.png`, caption: 'Another year of opera complete with ESO and Kristine Donnan!', postUrl: 'https://www.instagram.com/p/DG8hsJDC5US/?img_index=1' },
];


const OurStory = () => {
  return (
    <>
      {/* This Helmet component manages the page's head tags for SEO */}
        <title>Our Story | A History of the Edinburgh University Chamber Orchestra</title>
        <meta 
          name="description" 
          content="Explore the rich history of EUCO, from our founding in 1983 to our European tours, collaborations with professional conductors, and memorable performances in Edinburgh." 
        />

      {/* This is the exact same JSX from your original OurStorySection component */}
      <div className="relative">
        <ScrollingImage
          imageUrl={`${process.env.PUBLIC_URL}/backgrounds/members-photo.jpg`}
          altText="The Edinburgh University Chamber Orchestra performing in a historic hall"
          animationType="slide-out"
        />
        <div className="relative z-20 bg-gray-900 pt-1">
          <Section title="Our Story">
            <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed space-y-6 bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg">
                <p>Edinburgh University Chamber Orchestra was founded by a group of enthusiastic students in the summer of 1983. Distinct from the university’s music society, EUCO has established itself as one of Scotland's leading amateur orchestras. It has performed under many of Scotland's fine composers and conductors including James Lowe, Garry Walker, Edward Harper, Peter Nelson, David Watkins, Will Conway and Peter Higham.</p>
                <p>The orchestra currently consists of nearly forty members from all over the university, and all over the world. We have weekly rehearsals in the evening and typically perform two main concerts a year. The orchestra works with a different professional conductor each term and with the Edinburgh Studio Opera on an opera production once a year, as well as the Edinburgh University Concerto Competition. There are also opportunities to play smaller works in chamber groups, at concerts across Edinburgh, as well as community work, we will do. We host masterclasses from world class professional musicians. </p>
                <p>We have socials every few weeks which always make for memorable moments – but what really brings us together is the biscuits we eat in the rehearsal breaks. We also are part of the music ball and have a yearly ceilidh.</p>
                <p>Auditions take place in September – and every seat in the orchestra requires reauditioning yearly. Check our social media and the website for more details about these before the beginning of the semester. Our annual scratch rehearsal with EUSO is on Wednesday 10th September at 4:30 PM in the Reid Concert Hall - a perfect chance to meet us!</p>
            </div>
          </Section>
          <ScrollingImage
            imageUrl={`${process.env.PUBLIC_URL}/backgrounds/history1.jpg`}
            altText="A historical photo of the orchestra from around 2013."
            animationType="slide-in-out"
          />
          <ParallaxSection imgUrl="/backgrounds/history-parallax.jpg" title="A Tradition of Collaboration & Touring">
            <p>In the past, the orchestra has joined forces with Glasgow University's Kelvin Ensemble, performing together in both Glasgow and Edinburgh. This has been an extremely successful venture, with works such as Stravinsky's Rite of Spring, Mahler's 5th Symphony, Rachmaninov's 2nd Symphony, Shostakovich's 5th Symphony, Debussy's La Mer and Berlioz Symphony Fantastique. It also seems for a period the orchestra went on tour every other summer – both things we are eager to bring back. The orchestra has toured much of Europe including Spain, Amsterdam, Florence, the Loire Valley, Cornwall, the Highlands of Scotland, Ireland, Orkney, Prague, Salzburg, and Belgium. We have also performed on many occasions as part of the Festival of British Youth Orchestras in the Edinburgh Festival Fringe.</p>
          </ParallaxSection>
        </div>
      </div>
    </>
  );
};

export default OurStory;
