import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import InterlockingArms from '../components/InterlockingArms'; // Import the new animation

const Outreach = () => {
  // --- SEO DATA ---
  const orchestraName = "Edinburgh University Chamber Orchestra";
  const pageUrl = "https://www.eu-co.co.uk/outreach"; // IMPORTANT: Replace with your actual domain
  const socialImage = `${pageUrl}/images/community.jpg`; // A dedicated social sharing image

  // --- STRUCTURED DATA 🤝 ---
  // The `Service` schema describes your outreach program to search engines,
  // highlighting that it's a free service offered in Edinburgh.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Community Outreach | ${orchestraName}`,
    "url": pageUrl,
    "mainEntity": {
      "@type": "Service",
      "serviceType": "Community Music Outreach",
      "name": "EUCO Community Outreach Programme",
      "description": "Our talented members form smaller ensembles to bring free, live classical music performances to schools, care homes, and community centres across Edinburgh.",
      "provider": {
        "@type": "MusicGroup",
        "name": orchestraName
      },
      "areaServed": {
        "@type": "Place",
        "name": "Edinburgh"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "GBP"
      }
    }
  };

  return (
    <>
      {/* ================================================================== */}
      {/* ======================= SEO & METADATA ========================= */}
      {/* ================================================================== */}

      <title>Community Outreach | {orchestraName}</title>
      <meta name="description" content="Discover EUCO's community outreach programme in Edinburgh. We perform in schools, care homes, and community centres to make classical music accessible to all." />
      <link rel="canonical" href={pageUrl} />
      
      {/* --- Open Graph (for social media sharing) --- */}
      <meta property="og:title" content={`Community Outreach | ${orchestraName}`} />
      <meta property="og:description" content="Learn how we bring the joy of live classical music to schools, care homes, and community centres across Edinburgh." />
      <meta property="og:image" content={socialImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />

      {/* --- Structured Data Script --- */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* ================================================================== */}
      {/* ====================== PAGE CONTENT ============================ */}
      {/* ================================================================== */}
      <main>
        {/* --- Section 1: Hero Section --- */}
        <div 
          className="relative h-[50vh] flex items-center justify-center text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/community.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative z-10 p-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              Music for Everyone
            </h1>
            <p className="text-xl text-gray-200 mt-4">Bringing the joy of live classical music beyond the concert hall.</p>
          </div>
        </div>

        {/* --- Section 2: "What We Do" Text --- */}
        <Section>
          <div className="max-w-3xl mx-auto text-center text-lg text-gray-300 leading-relaxed">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">What We Do</h2>
            <p>
              At the Edinburgh University Chamber Orchestra, we believe in the power of music to connect and uplift communities. Throughout the year, our talented members form smaller ensembles to bring live music to schools, care homes, and community centres across the city.
            </p>
          </div>
        </Section>

        {/* --- Section 3: Interlocking Arms Animation --- */}
        <InterlockingArms />

        {/* --- Section 4: "Arrange a Visit" Call-to-Action --- */}
        <Section>
          <div className="max-w-3xl mx-auto text-center text-lg text-gray-300 leading-relaxed">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Arrange a Visit</h2>
            <p>
              Our outreach performances are a wonderful way to introduce young people to the instruments of the orchestra or to provide a joyful musical experience for residents in care. These events are offered for free as part of our commitment to the community.
            </p>
            <p className="mt-4">
              If you are a teacher, activities coordinator, or community leader in Edinburgh and would be interested in having one of our ensembles perform for your group, we would be delighted to hear from you.
            </p>
            <div className="text-center mt-8">
              <Link to="/contact-us/direct" className="px-8 py-3 bg-blue-600 text-black font-bold rounded-full hover:bg-blue-500 transform hover:scale-105 transition-all duration-300">
                Get in Touch
              </Link>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default Outreach;