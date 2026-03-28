import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CalendarDaysIcon, 
  MapPinIcon, 
  ClockIcon, 
  XMarkIcon,
  TicketIcon,
  ArrowRightIcon,
  ArchiveBoxIcon
} from '@heroicons/react/24/outline';
import Section from '../components/Section';
import { useGoogleSheet } from '../hooks/useGoogleSheet';

// --- CONFIG ---
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?q=80&w=2670&auto=format&fit=crop";

// --- UTILITIES ---
const getCleanImageUrl = (url) => {
  if (!url) return FALLBACK_IMAGE;
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

// --- COMPONENTS ---

// 1. MODAL (Only for Upcoming Concerts)
const ConcertModal = ({ data, onClose }) => {
  if (!data) return null;
  
  const { Title, Date: dateStr, Time, Programme, Description, Venue, City, TicketLink, ShowImage } = data;
  const cleanImage = getCleanImageUrl(ShowImage);
  const dateObj = parseConcertDate(dateStr);
  const fullDate = dateObj ? dateObj.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : dateStr;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="w-full md:w-2/5 h-48 md:h-auto relative">
          <img 
            src={cleanImage} 
            alt={Title}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent md:bg-gradient-to-r" />
        </div>

        <div className="w-full md:w-3/5 p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-violet-600 scrollbar-track-slate-800">
          <div className="flex items-center gap-2 text-violet-400 font-bold tracking-wider text-sm mb-2">
            <CalendarDaysIcon className="w-5 h-5" />
            <span>{fullDate}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{Title}</h2>
          
          <div className="flex flex-wrap gap-4 text-slate-300 text-sm mb-8">
            <div className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4 text-violet-500" /> {Time}
            </div>
            <div className="flex items-center gap-1">
              <MapPinIcon className="w-4 h-4 text-violet-500" /> {Venue}, {City}
            </div>
          </div>

          {Programme && (
            <div className="bg-slate-800/50 p-4 rounded-xl border-l-4 border-violet-500 mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Programme</h4>
              <p className="text-slate-200 italic font-medium leading-relaxed whitespace-pre-line">{Programme}</p>
            </div>
          )}

          <div className="prose prose-invert prose-sm mb-8 text-slate-300 leading-relaxed">
            <p>{Description}</p>
          </div>

          {TicketLink && (
            <div className="mt-auto pt-6 border-t border-slate-700">
               <a 
                href={TicketLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-violet-900/20 transform transition-all hover:-translate-y-1"
               >
                 <TicketIcon className="w-6 h-6" />
                 Book Tickets Now
               </a>
               <p className="text-center text-xs text-slate-500 mt-2">Directed to our secure ticket partner</p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// 2. CONCERT CARD (Handles both Upcoming & Past logic)
const ConcertCard = ({ data, onClick, isPast }) => {
  const { Title, Date: dateStr, Venue, ShowImage } = data;
  const cleanImage = getCleanImageUrl(ShowImage);
  const dateObj = parseConcertDate(dateStr);
  const month = dateObj ? dateObj.toLocaleString('default', { month: 'short' }).toUpperCase() : "";
  const day = dateObj ? dateObj.getDate() : "";

  // Common inner content for the card
  const CardContent = () => (
    <>
      {/* Background Image */}
      <img 
        src={cleanImage} 
        alt={Title} 
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isPast ? 'grayscale opacity-50' : ''}`}
        onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90" />

      {/* Date Badge */}
      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 text-center min-w-[3.5rem] shadow-lg">
        <div className="text-xs font-bold text-violet-200">{month}</div>
        <div className="text-xl font-bold text-white">{day}</div>
      </div>

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-bold text-white mb-1 line-clamp-2 leading-tight group-hover:text-violet-300 transition-colors">
          {Title}
        </h3>
        <div className="flex items-center gap-1 text-slate-300 text-sm mb-4">
          <MapPinIcon className="w-4 h-4" />
          <span className="truncate">{Venue}</span>
        </div>
        
        {/* Dynamic Hover Button Text */}
        <div className="flex items-center gap-2 text-sm font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
           {isPast ? (
             // PAST TEXT
             <div className="flex items-center gap-2 text-slate-300">
                <ArchiveBoxIcon className="w-4 h-4" />
                <span>Read More in Archive</span>
             </div>
           ) : (
             // UPCOMING TEXT
             <div className="flex items-center gap-2 text-violet-400">
                <span>Read More & Book</span>
                <ArrowRightIcon className="w-4 h-4" />
             </div>
           )}
        </div>
      </div>
    </>
  );

  const cardClasses = `group relative h-[400px] w-full rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-slate-800`;

  // LOGIC SWITCH:
  // If Past: Wrap in Link to /concerts/past
  // If Upcoming: Wrap in div with onClick (to open modal)
  
  if (isPast) {
    return (
      <Link 
        to="/concerts/past" 
        className={cardClasses}
        // Optional: Pass the concert data to the next page if you want to auto-open it there
        state={{ concert: data }}
      >
        <CardContent />
      </Link>
    );
  }

  return (
    <motion.div
      layoutId={`card-${Title}`}
      onClick={() => onClick(data)}
      whileHover={{ y: -8 }}
      className={cardClasses}
    >
      <CardContent />
    </motion.div>
  );
};

// --- MAIN PAGE ---
const Concerts = () => {
  const { data: sheetData, loading } = useGoogleSheet();
  const [selectedConcert, setSelectedConcert] = useState(null);

  const { upcoming, past } = useMemo(() => {
    if (!sheetData || sheetData.length === 0) return { upcoming: [], past: [] };

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingList = [];
    const pastList = [];

    sheetData.forEach((concert) => {
      const concertDate = parseConcertDate(concert.Date);
      if (!concertDate) return; 

      if (concertDate >= today) {
        upcomingList.push({ ...concert, _dateObj: concertDate });
      } else {
        pastList.push({ ...concert, _dateObj: concertDate });
      }
    });

    upcomingList.sort((a, b) => a._dateObj - b._dateObj);
    pastList.sort((a, b) => b._dateObj - a._dateObj);

    return { upcoming: upcomingList, past: pastList };
  }, [sheetData]);

  return (
    <>
      <title>Concerts | Edinburgh University Chamber Orchestra</title>
      
      <main className="min-h-screen bg-slate-950 text-slate-100 pb-20">
        <Section title="Our Concerts">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-lg text-slate-400">
              See our upcoming and past concerts. Buy tickets here, from us.
            </p>
          </div>

          {loading && (
             <div className="flex justify-center py-32">
               <div className="w-12 h-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
             </div>
          )}

          {/* UPCOMING */}
          {!loading && upcoming.length > 0 && (
            <div className="max-w-7xl mx-auto mb-20">
              <h2 className="text-2xl font-bold text-white mb-8 pl-4 border-l-4 border-violet-500">Upcoming Season</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcoming.map((concert, index) => (
                  <ConcertCard 
                    key={index} 
                    data={concert} 
                    onClick={setSelectedConcert} // Opens Modal
                  />
                ))}
              </div>
            </div>
          )}

          {/* PAST */}
          {!loading && past.length > 0 && (
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-500 mb-8 pl-4 border-l-4 border-slate-700">Concert Archive</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {past.map((concert, index) => (
                  <ConcertCard 
                    key={index} 
                    data={concert} 
                    isPast={true} // Triggers Link Mode
                  />
                ))}
              </div>
            </div>
          )}

        </Section>
      </main>

      {/* MODAL OVERLAY (Only triggered by upcoming concerts) */}
      <AnimatePresence>
        {selectedConcert && (
          <ConcertModal 
            data={selectedConcert} 
            onClose={() => setSelectedConcert(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Concerts;