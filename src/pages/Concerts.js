import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, ArchiveBoxIcon, UsersIcon } from '@heroicons/react/24/outline';
import Section from '../components/Section';
import UpcomingConcertsTeaserSection from '../components/UpcomingConcertsTeaserSection';

// --- Data for Page Links ---
const concertLinks = [
  {
    Icon: CalendarDaysIcon,
    title: 'Upcoming Concerts',
    description: 'View our schedule of upcoming concerts for the 2025/26 season.',
    path: '/concerts/upcoming',
  },
  {
    Icon: ArchiveBoxIcon,
    title: 'Past Concerts',
    description: 'Find details of our past concerts, workshops, and masterclasses.',
    path: '/concerts/past',
  },
  {
    Icon: UsersIcon,
    title: 'Outreach',
    description: 'Learn how we bring music to the wider Edinburgh community through our outreach programme.',
    path: '/concerts/outreach',
  },
];

// --- Animation Variants for Framer Motion ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Concerts = () => {
  // --- SEO DATA ---
  const orchestraName = "Edinburgh University Chamber Orchestra";
  const pageUrl = "https://www.your-orchestra.com/concerts"; // IMPORTANT: Replace with your actual domain
  const socialImage = `${pageUrl}/backgrounds/members-photo.jpg`; // A dedicated social sharing image

  // --- STRUCTURED DATA 🎟️ ---
  // The ItemList schema describes this page as a hub for concert-related information,
  // helping Google understand the structure of your site.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Concerts & Events | ${orchestraName}`,
    "url": pageUrl,
    "description": "Explore EUCO's concerts, special events, and community outreach initiatives. Find our full performance schedule and learn how we engage with the community.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Upcoming Concerts",
          "url": `${pageUrl}/upcoming`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Past Concerts",
          "url": `${pageUrl}/past`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Outreach",
          "url": `${pageUrl}/outreach`
        }
      ]
    }
  };

  return (
    <>
      {/* ================================================================== */}
      {/* ======================= SEO & METADATA ========================= */}
      {/* ================================================================== */}
      
      <title>Concerts & Events | {orchestraName}</title>
      <meta name="description" content="Explore EUCO's concerts, special events, and community outreach initiatives. Find our full performance schedule and learn how we engage with the community." />
      <link rel="canonical" href={pageUrl} />
      
      {/* --- Open Graph (for social media sharing) --- */}
      <meta property="og:title" content={`Concerts & Events | ${orchestraName}`} />
      <meta property="og:description" content="Find our full performance schedule, explore past events, and learn about our outreach programme." />
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
        <Section title="Concerts & Events">
          <UpcomingConcertsTeaserSection />

          {/* --- Main Call to Action Button --- */}
          <div className="text-center my-12">
            <motion.a
              href="https://buytickets.at/euco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-bold text-lg py-4 px-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(71, 90, 231, 1)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Buy Tickets at Our Shop
            </motion.a>
          </div>

          <motion.p 
            className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            From our main season performances in Edinburgh's beautiful concert halls to our community engagement events, find all the information you need right here.
          </motion.p>
          
          {/* --- Animated Grid of Links --- */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {concertLinks.map((link) => (
              <motion.div key={link.title} variants={cardVariants}>
                <Link
                  to={link.path}
                  className="block bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl h-full border border-slate-800 transition-colors duration-300 hover:border-violet-500"
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <link.Icon className="h-12 w-12 mb-5 text-violet-400" aria-hidden="true" />
                    <h3 className="text-2xl font-bold text-violet-400 mb-3">{link.title}</h3>
                    <p className="text-gray-400">{link.description}</p>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      </main>
    </>
  );
};

export default Concerts;