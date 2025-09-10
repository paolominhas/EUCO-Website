import React, { useState, useEffect, useRef } from 'react';
import Section from '../../components/Section';
import Header from '../../components/Header';
import ScrollingImage from '../../components/ScrollingImage';

// Data for our animated instrument layers
// The order here is the order of reveal (bottom to top)
const instruments = [
  { name: 'Flute', zIndex: 1, img: 'https://placehold.co/300x200/1a1a1a/eab308?text=Flute' },
  { name: 'Viola', zIndex: 4, img: 'https://placehold.co/300x200/1a1a1a/eab308?text=Viola' },
  { name: 'Clarinet', zIndex: 2, img: 'https://placehold.co/300x200/1a1a1a/eab308?text=Clarinet' },
  { name: 'Oboe', zIndex: 1, img: 'https://placehold.co/300x200/1a1a1a/eab308?text=Oboe' },
  { name: 'Bassoon', zIndex: 1, img: 'https://placehold.co/300x200/1a1a1a/eab308?text=Bassoon' },
  { name: 'Violin', zIndex: 3, img: 'https://placehold.co/300x200/1a1a1a/eab308?text=Violin' },
  { name: 'French Horn', zIndex: 1, img: 'https://placehold.co/300x200/1a1a1a/eab308?text=French Horn' },
  { name: 'Double Bass', zIndex: 4, img: 'https://placehold.co/300x200/1a1a1a/eab308?text=Double Bass' },
  { name: 'Cello', zIndex: 5, img: 'https://placehold.co/300x200/1a1a1a/eab308?text=Cello' },
  { name: 'Timpani', zIndex: 5, img: 'https://placehold.co/300x200/1a1a1a/eab308?text=Timpani' },
  { name: 'Trombone', zIndex: 5, img: 'https://placehold.co/300x200/1a1a1a/eab308?text=Trombone' },
  { name: 'Harp', zIndex: 5, img: 'https://placehold.co/300x200/1a1a1a/eab308?text=Harp' },
  { name: 'Trumpet', zIndex: 5, img: 'https://placehold.co/300x200/1a1a1a/eab308?text=Trumpet' },
  { name: 'Chamber Orchestra', zIndex: 5, img: 'https://placehold.co/300x200/1a1a1a/eab308?text=Chamber Orchestra' },
];

const LearnPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const animationContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = animationContainerRef.current;
      if (!container) return;

      const { top, height } = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through the container
      // Progress goes from 0 (top of container hits bottom of screen) to 1 (bottom of container hits top of screen)
      const progress = 1 - ((top + height) / (viewportHeight + height));
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // A function to calculate the style for each instrument based on scroll progress
  const getInstrumentStyle = (index) => {
    const totalInstruments = instruments.length;
    // Each instrument gets its own "trigger point" to start animating
    const triggerPoint = (index) / (totalInstruments - 1) * 0.8; 

    if (scrollProgress < triggerPoint) {
      return { opacity: 1, transform: 'translate(0, 0) rotate(0deg)' };
    }

    // Calculate how far past the trigger point we are
    const animationProgress = (scrollProgress - triggerPoint) / (1 - triggerPoint);
    
    // Different animations for different instruments
    const opacity = 1 - animationProgress * 2;
    let transform = '';
    if (index % 4 === 0) { // Cello
      transform = `translateX(${-animationProgress * 150}%) rotate(${-animationProgress * 45}deg)`;
    } else if (index % 4 === 1) { // Viola
       transform = `translateX(${animationProgress * 150}%) rotate(${animationProgress * 45}deg)`;
    } else if (index % 4 === 2) { // Violin
       transform = `translateY(${-animationProgress * 150}%) scale(${1 - animationProgress})`;
    } else { // Clarinet
       transform = `translateY(${animationProgress * 150}%) scale(${1 - animationProgress})`;
    }
    
    return { opacity, transform };
  };

  return (
    <>
      <title>Learn About the Chamber Orchestra | EUCO Education Hub</title>
      <Header />
      <main>
        <Section title="What is a Chamber Orchestra?">
          <div className="max-w-4xl mx-auto text-center text-lg text-gray-300 leading-relaxed">
            <p>A chamber orchestra is a smaller orchestra, typically consisting of around 15 to 45 musicians. This smaller size allows for a more intimate and detailed performance, where each instrument's voice can be clearly heard.</p>
            <p className="mt-4">As you scroll, you'll see the layers of a typical chamber orchestra peel away.</p>
          </div>
        </Section>

        <div className="relative">
        <ScrollingImage
          imageUrl={`${process.env.PUBLIC_URL}/backgrounds/orch.jpg`}
          altText="The layout of a chamber orchestra."
          animationType="slide-out"
        />
        </div>

        {/* --- The Animation Container --- */}
        <div 
          ref={animationContainerRef} 
          className="relative h-[200vh] w-full" // This container needs a large height to allow for scrolling
        >
          <div className="sticky top-1/4 h-screen"> {/* This makes the animation stay in view */}
            {instruments.map((instrument, index) => (
              // The flute (index 0) will not get a style, so it remains.
              index > 0 && (
                <div 
                  key={instrument.name}
                  className="absolute w-full h-full flex justify-center items-center transition-transform duration-100 ease-out"
                  style={{ 
                      zIndex: instrument.zIndex,
                      ...getInstrumentStyle(index) 
                  }}
                >
                  <img src={instrument.img} alt={instrument.name} className="max-w-xs md:max-w-md rounded-lg shadow-2xl"/>
                </div>
              )
            ))}
             {/* Render the flute separately so it's always at the bottom */}
            <div className="absolute w-full h-full flex justify-center items-center" style={{ zIndex: instruments[0].zIndex }}>
                <img src={instruments[0].img} alt={instruments[0].name} className="max-w-xs md:max-w-md rounded-lg shadow-2xl"/>
            </div>
          </div>
        </div>
        {/* --- End of Animation Container --- */}
        
        <Section title="Much more to come soon...">
            <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
                <p>We are working hard to improve our website right now. Stay tuned for updates!</p>
            </div>
        </Section>

      </main>
    </>
  );
};

export default LearnPage;
