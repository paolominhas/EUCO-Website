import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { ReactComponent as StringersLogo } from '../logos/stringers-logo.svg';

// --- SVG Icons (Professional Line Art Style) ---
// We apply classes directly to these to handle the coloring
const StoryIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const AuditionsIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>;
const ConductorsIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const OperaIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>;
const CompetitionIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;

// --- Data ---
const aboutLinks = [
  {
    icon: StoryIcon,
    title: 'Our Story',
    description: 'Discover our rich history, from our founding in 1983 to our tours and collaborations.',
    path: '/about/our-story',
    colorClass: 'text-blue-400' // Specific color for this card
  },
  {
    icon: AuditionsIcon,
    title: 'Auditions',
    description: 'Find all the information you need to join the orchestra for the next season.',
    path: '/auditions',
    colorClass: 'text-pink-500'
  },
  {
    icon: ConductorsIcon,
    title: 'Conductors',
    description: 'Meet the professional conductors and guest artists who have led our orchestra.',
    path: '/about/conductors',
    colorClass: 'text-blue-400'
  },
  {
    icon: OperaIcon,
    title: 'Opera',
    description: 'Learn about our annual collaboration as the resident orchestra for Edinburgh Studio Opera.',
    path: '/about/opera',
    colorClass: 'text-pink-500'
  },
  {
    icon: CompetitionIcon,
    title: 'Concerto Competition',
    description: 'Explore our prestigious competition for the university\'s finest student soloists.',
    path: '/about/concerto-competition',
    colorClass: 'text-purple-400'
  },
];

const About = () => {
  // --- SEO Data ---
  const pageUrl = "https://www.eu-co.co.uk/about";
  const socialImage = "https://www.eu-co.co.uk/images/PhillipClose.jpg";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Edinburgh University Chamber Orchestra",
    "url": "https://www.eu-co.co.uk/",
    "description": "One of Scotland's premier student-led ensembles, dedicated to performing chamber music at the highest level since 1983.",
    "foundingDate": "1983",
    "location": { "@type": "Place", "name": "Edinburgh, Scotland" }
  };

  return (
    <>
      <title>About Us | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Discover EUCO's history, auditions, conductors, and collaborations." />
      <link rel="canonical" href={pageUrl} />
      <meta property="og:image" content={socialImage} />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      {/* ================================================================== */}
      {/* ==================== 1. FIXED HERO SECTION ======================= */}
      {/* ================================================================== */}
      <div className="relative w-full h-[90vh] min-h-[600px] overflow-hidden bg-black flex items-center">
          
        {/* Layer 1: Background Gradient Image */}
        <div className="absolute inset-0 opacity-60 mix-blend-screen pointer-events-none">
          <motion.img 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 2 }}
            src="/backgrounds/ColourFade4.png"  
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Layer 2: Text Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 leading-tight pb-2 drop-shadow-2xl"
            >
              The <br /> Orchestra
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="h-1 w-24 bg-blue-500 my-8 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              <p className="text-slate-200 text-lg md:text-2xl leading-relaxed font-light drop-shadow-lg">
                We are a community of music loving students of the University of Edinburgh from all over the world. Our passion for orchestral and chamber music founded this society and has kept it going for many decades.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Layer 3: The Musician (Aligned Right) */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-0 right-0 z-20 pointer-events-none hidden md:flex h-full items-end justify-end"
        >
          <img 
            src="/backgrounds/bw-philip.webp" 
            alt="Conductor" 
            className="max-h-[85%] w-auto object-contain drop-shadow-2xl" 
          />
        </motion.div>

        {/* Layer 4: Full Width Bottom Gradient Mask */}
        {/* MOVED HERE: Now it sits outside the musician div, covering the full width */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-40 pointer-events-none"></div>
      </div>

      {/* ================================================================== */}
      {/* ==================== 2. PROFESSIONAL ICONS ===================== */}
      {/* ================================================================== */}
      <Section title="Explore EUCO" className="bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {aboutLinks.map((link) => (
              <motion.div 
                key={link.title} 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Link 
                  to={link.path} 
                  className="group relative block h-full bg-slate-900 border border-slate-800 rounded-xl p-8 transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/80"
                >
                  {/* Icon Section - Minimalist & Colored */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className={`p-3 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-slate-600 transition-colors shadow-lg`}>
                      <link.icon className={`h-8 w-8 ${link.colorClass}`} />
                    </div>
                    {/* Subtle Arrow */}
                    <span className="text-slate-600 group-hover:text-white transition-colors text-2xl">→</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {link.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed font-light text-sm md:text-base">
                    {link.description}
                  </p>
                  
                  {/* Bottom Glow Line on Hover */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 ${link.colorClass.replace('text-', 'bg-')} group-hover:w-full transition-all duration-500 ease-out`} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ================================================================== */}
      {/* ==================== 3. SPONSOR SECTION ======================== */}
      {/* ================================================================== */}
      <section className="bg-slate-950 py-24 overflow-hidden border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 relative"
            >
              <div 
                className="h-[400px] w-full bg-cover bg-center rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: "url('/backgrounds/stringers-shop.jpg')" }}
              >
                <div className="absolute inset-0 bg-blue-900/10 rounded-2xl mix-blend-overlay"></div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest text-blue-400 uppercase bg-blue-900/30 border border-blue-800 rounded-full">
                Our Valued Partner
              </div>

              <a href="https://stringersedinburgh.com" target="_blank" rel="noopener noreferrer" className="block mb-8">
                {/* Ensure your SVG has fill="currentColor" or handle colors via CSS */}
                <StringersLogo className="h-16 w-auto text-white hover:text-blue-400 transition-colors duration-300" />
              </a>
              
              <h3 className="text-3xl font-bold text-white mb-4">Supporting Excellence</h3>
              
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                We are incredibly proud to be partnered with Stringers, Edinburgh's leading specialist violin, viola, and cello shop. Their expert craftsmanship and support are invaluable to our musicians and our mission.
              </p>

              <Link 
                to="/support-us/sponsors"
                className="group inline-flex items-center gap-2 font-bold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn more about our partners 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;