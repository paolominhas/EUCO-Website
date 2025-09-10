import React, { useRef, useEffect } from 'react';

/**
 * An advanced component that animates an image based on scroll position.
 * @param {object} props - The component's properties.
 * @param {string} props.imageUrl - The URL of the image to animate.
 * @param {string} props.altText - The alt text for the image.
 * @param {'slide-out' | 'slide-in-out'} props.animationType - The type of animation to perform.
 */
const ScrollingImage = ({ imageUrl, altText, animationType }) => {
  // useRef hooks allow us to get a direct reference to the DOM elements
  // without causing the component to re-render.
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  // useEffect handles the logic of adding and removing the scroll event listener.
  useEffect(() => {
    const handleScroll = () => {
      // Ensure the elements have been rendered before running the logic
      if (!imageRef.current || !containerRef.current) return;
      
      const scrollY = window.scrollY;
      const containerTop = containerRef.current.offsetTop;
      const viewportHeight = window.innerHeight;

      // --- Animation Logic for 'slide-out' type ---
      if (animationType === 'slide-out') {
        const animationDistance = 400;
        // Progress is a value from 0 to 1 based on how far we've scrolled past the component's top
        const progress = Math.max(0, Math.min(1, (scrollY - containerTop) / animationDistance));
        
        const translateX = progress * 50; // Slide 50% to the right
        const opacity = 1 - progress;     // Fade from 1 to 0

        // Apply the styles directly to the DOM element for performance
        imageRef.current.style.transform = `translateX(${translateX}%)`;
        imageRef.current.style.opacity = opacity;
      }

      // --- Animation Logic for 'slide-in-out' type ---
      if (animationType === 'slide-in-out') {
        const containerHeight = containerRef.current.offsetHeight;
        const animationStart = containerTop - viewportHeight;
        const animationEnd = containerTop + containerHeight;
        const animationDuration = animationEnd - animationStart;

        const progress = Math.max(0, Math.min(1, (scrollY - animationStart*2) / animationDuration));

        let translateX;
        // Stage 1: Slide In (first 40% of the animation)
        if (progress < 0.4) {
          const slideInProgress = progress / 0.4;
          translateX = -10 + (slideInProgress * 10); // from -100% to 0%
        } 
        // Stage 2: Hold (middle 20%)
        else if (progress < 0.6) {
          translateX = 0;
        } 
        // Stage 3: Slide Out (last 40%)
        else {
          const slideOutProgress = (progress - 0.6) / 0.4;
          translateX = slideOutProgress * 10; // from 0% to 100%
        }
        imageRef.current.style.transform = `translateX(${translateX}%)`;
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once on mount to set the initial position correctly

    // This is a cleanup function: remove the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationType]); // The effect re-runs if animationType ever changes

  if (animationType === 'slide-out') {
    return (
      <div ref={containerRef} className="h-[60vh] md:h-screen sticky top-0 -z-10">
        <img ref={imageRef} src={imageUrl} alt={altText} className="w-full h-full object-cover"/>
      </div>
    );
  }
  
  if (animationType === 'slide-in-out') {
    return (
      <div ref={containerRef} className="h-[70vh] my-24 overflow-hidden">
        <img ref={imageRef} src={imageUrl} alt={altText} className="w-full h-full object-contain" style={{ transform: 'translateX(-100%)' }}/>
      </div>
    );
  }
  
  return null;
};

export default ScrollingImage;