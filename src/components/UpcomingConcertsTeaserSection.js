import React, { useState, useEffect, useMemo, useCallback } from 'react'; // Added useCallback
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CalendarDaysIcon, 
  MapPinIcon, 
  ArrowRightIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon 
} from '@heroicons/react/24/outline';
import { useGoogleSheet } from '../hooks/useGoogleSheet';

// --- CONFIG ---
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?q=80&w=2670&auto=format&fit=crop";
const AUTOPLAY_DELAY = 6000;

// --- UTILITIES ---
const getCleanImageUrl = (url) => {
  if (!url || url.trim() === '') return FALLBACK_IMAGE;
  try {
    if (url.includes('drive.google.com')) {
      const idMatch = url.match(/\/d\/(.*?)\//);
      const id = idMatch ? idMatch[1] : null;
      if (id) return `https://drive.google.com/uc?export=view&id=${id}`;
    }
    return url;
  } catch (e) {
    return FALLBACK_IMAGE;
  }
};

const parseConcertDate = (dateString) => {
  if (!dateString) return null;
  const parsed = new Date(dateString);
  return isNaN(parsed.getTime()) ? null : parsed;
};

const UpcomingConcertsTeaserSection = () => {
  const { data: sheetData, loading } = useGoogleSheet();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); 
  const [isHovered, setIsHovered] = useState(false);

  // --- 1. FILTER & SORT DATA ---
  const upcomingConcerts = useMemo(() => {
    if (!sheetData || sheetData.length === 0) return [];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filtered = [];
    sheetData.forEach((concert) => {
      const dateObj = parseConcertDate(concert.Date);
      if (dateObj && dateObj >= today) {
        filtered.push({ ...concert, _dateObj: dateObj });
      }
    });

    filtered.sort((a, b) => a._dateObj - b._dateObj);
    return filtered;
  }, [sheetData]);

  // --- 2. CAROUSEL CONTROLS (Fixed with useCallback) ---
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === upcomingConcerts.length - 1 ? 0 : prev + 1));
  }, [upcomingConcerts.length]); // Only recreate if list length changes

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? upcomingConcerts.length - 1 : prev - 1));
  }, [upcomingConcerts.length]);

  // --- 3. AUTO-PLAY (Fixed Dependency Array) ---
  useEffect(() => {
    if (isHovered || upcomingConcerts.length <= 1) return;
    
    const timer = setTimeout(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);

    return () => clearTimeout(timer);
  }, [nextSlide, isHovered, upcomingConcerts.length, currentIndex]); 
  // Added nextSlide and currentIndex to dependencies to satisfy linter

  // --- 4. RENDER HELPERS ---
  const currentConcert = upcomingConcerts[currentIndex];
  
  const formatDate = (dateObj) => {
    if (!dateObj) return '';
    return dateObj.toLocaleDateString('en-GB', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  // --- 5. RENDER ---
  if (loading) return null;
  if (upcomingConcerts.length === 0) return null;

  const currentImage = getCleanImageUrl(currentConcert.ShowImage);

  return (
    <section className="relative bg-black py-20 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 opacity-30 transition-all duration-1000 ease-in-out">
         <div 
           className="absolute inset-0 bg-cover bg-center blur-3xl scale-110"
           style={{ backgroundImage: `url(${currentImage})` }}
         />
         <div className="absolute inset-0 bg-black/60" /> 
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Upcoming Performances</h2>
            <p className="text-slate-400">Join us for our 2025/26 Season</p>
          </div>
          <Link 
            to="/concerts/upcoming" 
            className="hidden md:flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors mt-4 md:mt-0"
          >
            View Full Schedule <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Card Area */}
          <div className="relative h-[500px] md:h-[400px] w-full bg-slate-900/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                className="absolute inset-0 flex flex-col md:flex-row"
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden group">
                  <img 
                    src={currentImage} 
                    alt={currentConcert.Title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent md:hidden" />
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-wider text-xs mb-3">
                    <CalendarDaysIcon className="w-4 h-4" />
                    {formatDate(currentConcert._dateObj)}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {currentConcert.Title}
                  </h3>

                  <div className="flex items-center gap-2 text-slate-300 mb-6 text-sm">
                    <MapPinIcon className="w-4 h-4 text-blue-500" />
                    {currentConcert.Venue}
                  </div>

                  {currentConcert.Programme && (
                    <p className="text-slate-400 text-sm line-clamp-3 mb-6 italic">
                       {currentConcert.Programme.split(',').slice(0,3).join(', ')}...
                    </p>
                  )}

                  <Link 
                    to="/concerts/upcoming"
                    className="inline-flex items-center gap-2 self-start bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-blue-400 transition-colors"
                  >
                    Ticket Info
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {upcomingConcerts.length > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-3 rounded-full bg-black/50 border border-slate-600 text-white hover:bg-blue-600 hover:border-blue-500 transition-all z-20 backdrop-blur-sm"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-3 rounded-full bg-black/50 border border-slate-600 text-white hover:bg-blue-600 hover:border-blue-500 transition-all z-20 backdrop-blur-sm"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </>
          )}
          
          {/* Dots */}
          {upcomingConcerts.length > 1 && (
             <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
               {upcomingConcerts.map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => {
                     setDirection(idx > currentIndex ? 1 : -1);
                     setCurrentIndex(idx);
                   }}
                   className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-blue-500' : 'w-2 bg-slate-600 hover:bg-slate-500'}`}
                 />
               ))}
             </div>
          )}

        </div>
        
        <div className="md:hidden mt-12 text-center">
          <Link to="/concerts/upcoming" className="text-violet-400 font-semibold underline underline-offset-4">
             View Full Schedule
          </Link>
        </div>

      </div>
    </section>
  );
};

export default UpcomingConcertsTeaserSection;