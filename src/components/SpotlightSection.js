import React from 'react';
import { motion } from 'framer-motion';
import { featuredArtist } from '../data/featuredArtistData';
import { MusicalNoteIcon } from '@heroicons/react/24/outline';

const SpotlightSection = () => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      
      {/* 1. ATMOSPHERIC BACKGROUND */}
      {/* A radial gradient that mimics a spotlight on a dark stage */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-900/50 rounded-full blur-[80px]"></div>
        {/* Subtle grid texture overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* 2. IMAGE SIDE (The "Spotlight") */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-5/12 flex justify-center md:justify-end"
          >
            <div className="relative group">
              {/* Spinning outer ring (decorative) */}
              <div className="absolute inset-0 rounded-full border border-slate-700 group-hover:border-blue-500/50 transition-colors duration-700 scale-110"></div>
              
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all duration-500"></div>
              
              {/* The Image itself */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 border border-slate-600 bg-slate-900">
                <img 
                  src={featuredArtist.image} 
                  alt={featuredArtist.name} 
                  className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-slate-900 border border-slate-700 p-3 rounded-full shadow-xl">
                 <MusicalNoteIcon className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </motion.div>

          {/* 3. CONTENT SIDE */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-7/12 text-center md:text-left"
          >
            <div className="inline-block mb-4 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
              <h3 className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-blue-500">
                {featuredArtist.role}
              </h3>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight font-display">
              {featuredArtist.name}
            </h2>
            
            <div className="relative">
              {/* Big Quote Mark for style */}
              <span className="absolute -top-6 -left-4 text-6xl text-slate-800 font-serif opacity-50">“</span>
              
              <p className="relative z-10 text-slate-300 text-lg md:text-xl leading-relaxed font-light">
                {featuredArtist.bio}
              </p>
            </div>

            {/* Optional: Add a signature or 'Read More' link here if desired */}
            <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center gap-4">
              <span className="text-slate-500 text-sm uppercase tracking-widest">
                Guest Conductor 2025/26 Season
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;