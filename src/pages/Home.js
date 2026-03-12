// In src/pages/Home.js

import React, { useState, useEffect, Suspense, lazy } from 'react';
import HomeSection from '../components/HomeSection';   // This component is the main hero, so it should NOT be lazy-loaded.

// --- PERFORMANCE: LAZY LOADING ---
// These components are below the fold and will only load when the user scrolls to them.
const AboutTeaserSection = lazy(() => import('../components/AboutTeaserSection'));
const UpcomingConcertsTeaserSection = lazy(() => import('../components/UpcomingConcertsTeaserSection'));
const SpotlightSection = lazy(() => import('../components/SpotlightSection'));
const GalleryTeaser = lazy(() => import('../components/GalleryTeaser'));
const InstagramFeedSection = lazy(() => import('../components/InstagramFeedSection'));
const SignUpForm = lazy(() => import('../components/SignUpForm'));

const Home = () => {
  const [heroOpacity, setHeroOpacity] = useState(1);

  useEffect(() => {
    // Scroll event listener to adjust hero opacity
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const fadeEnd = 500;
      const opacity = Math.max(0, 1 - scrollPosition / fadeEnd);
      setHeroOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- SEO DATA ---
  const orchestraName = "Edinburgh University Chamber Orchestra"; // Chamber orchestra's name
  const homepageUrl = "https://www.eu-co.co.uk/";   // Your actual domain
  const socialImage = `${homepageUrl}images/FullOrchestra.jpg`; // A great photo for sharing
  const logoUrl = `${homepageUrl}/favicon/logo.png`; // URL to your logo

  // --- STRUCTURED DATA for Local SEO 📍---
  // This MusicGroup schema tells Google you are an orchestra based in Edinburgh.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": orchestraName,
    "url": homepageUrl,
    "logo": logoUrl,
    "areaServed": {
      "@type": "Place",
      "name": "Edinburgh"
    },
    "sameAs": [
      "https://www.facebook.com/EdinburghUniversityChamberOrchestra",
      "https://www.instagram.com/edunichamberorchestra",
      "https://x.com/EUCOmusic",
      "https://www.youtube.com/@edinburghuniversitychamber9979"
    ]
  };

  return (
    // A React Fragment (<>) is used to group the metadata and the main content.
    <>
      {/* --- METADATA (Replaces Helmet) --- */}
      <title>{`${orchestraName} | Live Classical Music in Edinburgh`}</title>
      <meta 
        name="description" 
        content={`Discover the ${orchestraName}, Edinburgh's leading student orchestra. Find upcoming concerts, book tickets, and learn more about our ambitious performances.`} 
      />
      <link rel="canonical" href={homepageUrl} />
      
      {/* --- Open Graph (for social media) --- */}
      <meta property="og:title" content={`${orchestraName} | Edinburgh`} />
      <meta property="og:description" content="Discover upcoming classical concerts from Edinburgh's leading student orchestra." />
      <meta property="og:image" content={socialImage} />
      <meta property="og:url" content={homepageUrl} />
      <meta property="og:type" content="website" />

      {/* --- Structured Data Script --- */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* --- ACTUAL PAGE CONTENT (wrapped in a <main> tag) --- */}
      <main>
        {/* The HomeSection should contain your one and only <h1> */}
        <HomeSection opacity={heroOpacity} />

        {/* --- LAZY-LOADED SECTIONS --- */}
        {/* The Suspense fallback shows a placeholder while the component code is downloaded. */}
        <Suspense fallback={<div>Loading...</div>}>
          <section><UpcomingConcertsTeaserSection /></section>
          <section><AboutTeaserSection /></section>
          <section><SpotlightSection /></section>
          <section><GalleryTeaser /></section>
          <section><InstagramFeedSection /></section>
          <section><SignUpForm /></section>
        </Suspense>

        {/* --- SEMANTIC HTML FIX: <h1> changed to <h2> --- */}
        {/* This is an important section, but not the main heading of the entire page. */}
        <section 
          className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/pictures/support-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 p-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Support Student Music
            </h2>
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
        </section>
      </main>
    </>
  );
};

export default Home;