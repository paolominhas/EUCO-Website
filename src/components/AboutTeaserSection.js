import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, UserGroupIcon, BookOpenIcon } from '@heroicons/react/24/outline';

// A high-quality image of an orchestra/instruments (Black & White works best here)
const BG_IMAGE = "https://images.unsplash.com/photo-1465847899078-b29dedca9424?q=80&w=2670&auto=format&fit=crop";

const AboutTeaserSection = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden flex items-center justify-center bg-black">
      
      {/* 1. DYNAMIC BACKGROUND (Slow Zoom Effect) */}
      <motion.div 
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={BG_IMAGE} 
          alt="Orchestra Texture" 
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>

      {/* 2. GRADIENT OVERLAY (To blend with sections above/below) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-slate-900/60 to-black" />

      {/* 3. CONTENT CONTAINER */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-md"
        >
          <BookOpenIcon className="w-4 h-4" /> Est. 1983
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight drop-shadow-2xl"
        >
          40 Years of <br className="md:hidden"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Musical Excellence
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed mb-10"
        >
          Edinburgh University Chamber Orchestra brings together the most talented student musicians to perform a wide range of music at the highest level.
        </motion.p>

        {/* Buttons / Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          {/* Main CTA */}
          <Link 
            to="/about/our-story"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-full overflow-hidden transition-all hover:bg-blue-50 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.5)]"
          >
            <span className="relative z-10">Discover Our Story</span>
            <ArrowRightIcon className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary Link (Optional, e.g., to Committee) */}
          <Link 
            to="/about/auditions"
            className="inline-flex items-center gap-2 px-8 py-4 text-slate-300 font-semibold hover:text-white transition-colors border-b border-transparent hover:border-blue-500"
          >
            <UserGroupIcon className="w-5 h-5" />
            Join us
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutTeaserSection;