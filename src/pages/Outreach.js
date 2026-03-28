import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HeartIcon, MusicalNoteIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import InterlockingArms from '../components/InterlockingArms'; 

const Outreach = () => {
  // --- PARALLAX ANIMATION HOOKS ---
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]); // Moves image down slower than scroll
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Fades text out on scroll

  // --- SEO DATA (Preserved) ---
  const orchestraName = "Edinburgh University Chamber Orchestra";
  const pageUrl = "https://www.eu-co.co.uk/outreach";
  const socialImage = `${pageUrl}/images/community.jpg`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Community Outreach | Edinburgh University Chamber Orchestra`,
    "url": pageUrl,
    "mainEntity": {
      "@type": "Service",
      "serviceType": "Community Music Outreach",
      "name": "EUCO Community Outreach Programme",
      "description": "Our talented members form smaller ensembles to bring free, live classical music performances to schools, care homes, and community centres across Edinburgh.",
      "provider": { "@type": "MusicGroup", "name": orchestraName },
      "areaServed": { "@type": "Place", "name": "Edinburgh" },
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "GBP" }
    }
  };

  return (
    <>
      {/* ======================= SEO & METADATA ========================= */}
      <title>Community Outreach | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Discover EUCO's community outreach programme in Edinburgh. We perform in schools, care homes, and community centres to make classical music accessible to all." />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:title" content={`Community Outreach | Edinburgh University Chamber Orchestra`} />
      <meta property="og:description" content="Learn how we bring the joy of live classical music to schools, care homes, and community centres across Edinburgh." />
      <meta property="og:image" content={socialImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      {/* ====================== PAGE CONTENT ============================ */}
      <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500/30">
        
        {/* --- 1. DRAMATIC HERO SECTION --- */}
        <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
          {/* Parallax Background Image */}
          <motion.div 
            style={{ y }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="/images/community.jpg" 
              alt="EUCO Outreach" 
              className="w-full h-full object-cover opacity-70"
            />
            {/* Gradient Overlay for Text Readability & Mood */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-slate-950"></div>
          </motion.div>

          {/* Hero Text */}
          <motion.div 
            style={{ opacity }}
            className="relative z-10 text-center px-6 max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/20 backdrop-blur-md text-blue-300 text-sm font-bold tracking-widest uppercase mb-6"
            >
              <HeartIcon className="w-4 h-4" /> Our Community
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 drop-shadow-2xl"
            >
              Music for Everyone
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md"
            >
              Bringing the joy of live classical music beyond the concert hall.
            </motion.p>
          </motion.div>
        </div>

        {/* --- 2. "WHAT WE DO" SECTION --- */}
        <section className="relative py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-600/20 rounded-xl text-blue-400">
                  <UserGroupIcon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">What We Do</h2>
              </div>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                At the Edinburgh University Chamber Orchestra, we believe in the power of music to connect and uplift communities. Throughout the year, our talented members form smaller ensembles to bring live music to <strong className="text-blue-400">schools, care homes, and community centres</strong> across the city.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- 3. ANIMATION SECTION --- */}
        <div className="py-12 bg-slate-950 overflow-hidden">
           <InterlockingArms />
        </div>

        {/* --- 4. "ARRANGE A VISIT" CTA SECTION --- */}
        <section className="relative py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
            >
              {/* Decorative Background Icon */}
              <MusicalNoteIcon className="absolute top-0 right-0 w-64 h-64 text-slate-800/50 -translate-y-1/2 translate-x-1/3 rotate-12 pointer-events-none" />

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Arrange a Visit</h2>
              
              <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full mb-8 relative z-10"></div>

              <p className="text-lg text-slate-300 leading-relaxed mb-6 relative z-10">
                Our outreach performances are a wonderful way to introduce young people to the instruments of the orchestra or to provide a joyful musical experience for residents in care. These events are offered for <strong className="text-white">free</strong> as part of our commitment to the community.
              </p>
              
              <p className="text-lg text-slate-400 leading-relaxed mb-10 relative z-10">
                If you are a teacher, activities coordinator, or community leader in Edinburgh and would be interested in having one of our ensembles perform for your group, we would be delighted to hear from you.
              </p>

              <div className="relative z-10">
                <Link 
                  to="/contact-us/direct" 
                  className="inline-flex items-center gap-3 px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Outreach;