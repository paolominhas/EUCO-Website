import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { upcomingConcertsData, chamberConcertsData } from '../data/concerts.js';

const UpcomingConcerts = () => {
  // --- Original Data Handling ---
  const featuredConcert = upcomingConcertsData[0];
  const otherOrchestraConcerts = upcomingConcertsData.slice(1);
  const allConcerts = [...upcomingConcertsData, ...chamberConcertsData];

  // --- Original Animation Variants ---
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // --- Original Reusable Button Component ---
  const TicketButton = ({ concert }) => {
    const baseClasses = "w-full md:w-auto inline-flex items-center justify-center font-semibold rounded-md transition-colors";
    
    if (concert.tickets) {
      return (
        <a 
          href="https://buytickets.at/euco" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${baseClasses} px-6 py-3 bg-blue-600 text-black hover:bg-blue-500`}
        >
          Buy Tickets
        </a>
      );
    }
    return (
      <div 
        className={`${baseClasses} px-6 py-3 bg-gray-600 text-gray-400 cursor-not-allowed`}
      >
        Tickets Coming Soon
      </div>
    );
  };

  // --- SEO DATA ---
  const orchestraName = "Edinburgh University Chamber Orchestra";
  const pageUrl = "https://www.eu-co.co.uk/concerts/upcoming"; // IMPORTANT: Replace with your actual domain
  const socialImage = `${pageUrl}/images/PhillipClose.jpg`;

  // --- STRUCTURED DATA 🎶 ---
  // This creates a `MusicEvent` schema for EACH concert, which is highly effective for SEO.
  // Your `concerts.js` data should include an `isoDate` (e.g., "2025-10-22T19:30:00+01:00")
  // and a `description` for each concert for this to work best.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Upcoming Concerts | ${orchestraName}`,
    "url": pageUrl,
    "mainEntity": allConcerts.map(concert => ({
      "@type": "MusicEvent",
      "name": concert.title || `${concert.program[0].split('–')[0]} at ${concert.venue}`,
      "startDate": concert.isoDate, // Example: "2025-10-22T19:30:00+01:00"
      "location": {
        "@type": "Place",
        "name": concert.venue,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Edinburgh",
          "addressCountry": "GB"
        }
      },
      "performer": {
        "@type": "MusicGroup",
        "name": orchestraName
      },
      "description": concert.description || `An evening of classical music featuring works by ${concert.program[0].split('–')[1]}.`,
      "image": concert.image,
      "offers": {
        "@type": "Offer",
        "url": "https://buytickets.at/euco",
        "price": "15", // You can make this dynamic from your data
        "priceCurrency": "GBP",
        "availability": concert.tickets ? "https://schema.org/InStock" : "https://schema.org/SoldOut"
      }
    }))
  };

  return (
    <>
      {/* ================================================================== */}
      {/* ======================= SEO & METADATA ========================= */}
      {/* ================================================================== */}

      <title>Upcoming Concerts (2025-26) | {orchestraName}</title>
      <meta name="description" content="View the schedule for EUCO's 2025-2026 concert season. Find information on upcoming performances, venues, and ticket links for events in Edinburgh." />
      <link rel="canonical" href={pageUrl} />
      
      <meta property="og:title" content={`Upcoming Concerts | ${orchestraName}`} />
      <meta property="og:description" content="View the schedule for EUCO's 2025-2026 concert season in Edinburgh." />
      <meta property="og:image" content={socialImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />

      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* ================================================================== */}
      {/* ====================== PAGE CONTENT ============================ */}
      {/* ================================================================== */}
      <main>
        <Section title="2025-2026 Season">

          {/* --- Featured Orchestra Concert --- */}
          <div className="max-w-6xl mx-auto mb-16">
            <motion.div 
              className="relative rounded-lg overflow-hidden shadow-2xl text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <img 
                src={featuredConcert.image} 
                alt={`Featured student musicians for the upcoming concert: ${featuredConcert.title}`} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              <div className="relative p-8 md:p-12">
                <p className="text-sm uppercase font-semibold text-blue-400">Next Performance</p>
                <h2 className="text-3xl md:text-5xl font-extrabold mt-2">{featuredConcert.title} - {featuredConcert.venue}</h2>
                <p className="font-semibold text-xl mt-2">{featuredConcert.date} - {featuredConcert.time}</p>
                <div className="mt-6 border-l-4 border-blue-500 pl-4">
                  {featuredConcert.program.map(p => <p key={p}>{p}</p>)}
                </div>
                <div className="mt-8">
                  <TicketButton concert={featuredConcert} />
                </div>
                <p className="font-semibold text-xl mt-2">{featuredConcert.programmeNotes}</p>
              </div>
            </motion.div>
          </div>

          {/* --- Introductory Text Section --- */}
          <div className="max-w-4xl mx-auto text-center text-lg text-gray-300 leading-relaxed mb-20">
            <p>
              Welcome to the new season! We are thrilled to present a series of concerts that celebrate both timeless masterpieces and bold new works. Join our talented student musicians for an unforgettable year of music-making in the heart of Edinburgh.
            </p>
          </div>

          {/* --- Other Orchestra Concerts --- */}
          {otherOrchestraConcerts.length > 0 && (
            <div className="max-w-6xl mx-auto mb-20">
              <h3 className="text-3xl font-bold text-center text-white mb-12">Also This Season</h3>
              <div className="space-y-8">
                {otherOrchestraConcerts.map((concert) => (
                  <motion.div 
                    key={concert.date} 
                    className="bg-gray-800 rounded-lg shadow-lg md:flex items-center overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={cardVariants}
                  >
                    <div className="p-8 flex-1">
                      <p className="font-bold text-xl text-white">{concert.venue}</p>
                      <p className="text-blue-400 font-semibold">{concert.date} - {concert.time}</p>
                      <ul className="text-gray-300 mt-4 space-y-1">
                        {concert.program.map(p => <li key={p}>&ndash; {p}</li>)}
                      </ul>
                    </div>
                    <div className="flex items-center justify-center p-4 md:p-8">
                      <TicketButton concert={concert} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* --- Chamber Music Section --- */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-white mb-12">Chamber Music Series</h3>
            <div className="space-y-8">
              {chamberConcertsData.map((concert) => (
                <motion.div 
                  key={concert.date} 
                  className="bg-gray-800 rounded-lg shadow-lg md:flex items-center overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={cardVariants}
                >
                  <div className="p-8 flex-1">
                    <p className="font-bold text-xl text-white">{concert.venue}</p>
                    <p className="text-blue-400 font-semibold">{concert.date} - {concert.time}</p>
                    <ul className="text-gray-300 mt-4 space-y-1">
                      {concert.program.map(p => <li key={p}>&ndash; {p}</li>)}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center p-4 md:p-8">
                    <TicketButton concert={concert} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};

export default UpcomingConcerts;