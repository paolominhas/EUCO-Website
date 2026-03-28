import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CalendarDaysIcon, 
  MapPinIcon, 
  ClockIcon, 
  TicketIcon,
  MusicalNoteIcon,
  StarIcon,
  XMarkIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import Section from '../components/Section';
import { useGoogleSheet } from '../hooks/useGoogleSheet';

// --- CONFIG ---
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?q=80&w=2670&auto=format&fit=crop";

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

// --- COMPONENTS ---

// 1. MODAL (The Popup Description)
const ConcertModal = ({ data, onClose }) => {
  if (!data) return null;
  
  const { Title, Date: dateStr, Time, Programme, Description, Venue, City, TicketLink, ShowImage } = data;
  const cleanImage = getCleanImageUrl(ShowImage);
  const dateObj = parseConcertDate(dateStr);
  const fullDate = dateObj ? dateObj.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : dateStr;
  const programmeList = Programme ? Programme.split(',').map(item => item.trim()) : [];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-2/5 h-48 md:h-auto relative">
          <img 
            src={cleanImage} 
            alt={Title}
            className="w-full h-full object-cover"
            onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent md:bg-gradient-to-r" />
        </div>

        {/* Content Side */}
        <div className="w-full md:w-3/5 p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-slate-800">
          <div className="flex items-center gap-2 text-blue-400 font-bold tracking-wider text-sm mb-2">
            <CalendarDaysIcon className="w-5 h-5" />
            <span>{fullDate}</span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-4 leading-tight">{Title}</h2>
          
          <div className="flex flex-wrap gap-4 text-slate-300 text-sm mb-6">
            <div className="flex items-center gap-1">
              <ClockIcon className="w-4 h-4 text-blue-500" /> {Time}
            </div>
            <div className="flex items-center gap-1">
              <MapPinIcon className="w-4 h-4 text-blue-500" /> {Venue}, {City}
            </div>
          </div>

          {programmeList.length > 0 && (
            <div className="bg-slate-800/50 p-4 rounded-xl border-l-4 border-blue-500 mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Programme</h4>
              <ul className="space-y-1">
                {programmeList.map((item, i) => (
                  <li key={i} className="text-slate-200 italic font-medium">{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="prose prose-invert prose-sm mb-8 text-slate-300 leading-relaxed">
            <p>{Description}</p>
          </div>

          {TicketLink ? (
            <div className="mt-auto pt-6 border-t border-slate-700">
               <a 
                href={TicketLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-xl shadow-lg transform transition-all hover:-translate-y-1"
               >
                 <TicketIcon className="w-6 h-6" />
                 Book Tickets Now
               </a>
            </div>
          ) : (
            <div className="mt-auto pt-6 border-t border-slate-700 text-center text-slate-500 italic">
              Tickets available soon.
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// 2. TICKET BUTTON (Direct Link)
const TicketButton = ({ link }) => {
  if (link) {
    return (
      <motion.a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()} // Stop clicking button from opening modal
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full shadow-lg shadow-blue-900/30 transition-all text-sm md:text-base"
      >
        <TicketIcon className="w-5 h-5" />
        Tickets
      </motion.a>
    );
  }
  return (
    <div className="inline-flex items-center gap-2 px-6 py-2 bg-slate-700 text-slate-400 font-semibold rounded-full cursor-not-allowed text-sm">
      <ClockIcon className="w-5 h-5" />
      Soon
    </div>
  );
};

// 3. HERO CONCERT
const HeroConcert = ({ concert, onOpen }) => {
  const { Title, Date: dateStr, Time, Venue, Programme, ShowImage, TicketLink } = concert;
  const image = getCleanImageUrl(ShowImage);
  const dateObj = parseConcertDate(dateStr);
  const displayDate = dateObj ? dateObj.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : dateStr;
  const programmeList = Programme ? Programme.split(',').map(s => s.trim()) : [];

  return (
    <motion.div 
      onClick={() => onOpen(concert)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden rounded-3xl shadow-2xl mb-24 group cursor-pointer"
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={Title} 
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/30" />
      </div>

      <div className="relative z-10 p-8 md:p-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
          <StarIcon className="w-4 h-4" /> Next Performance
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight drop-shadow-2xl">
          {Title}
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl text-slate-200 mb-8 font-light">
          <span className="flex items-center gap-2"><CalendarDaysIcon className="w-6 h-6 text-blue-400"/> {displayDate}</span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="flex items-center gap-2"><ClockIcon className="w-6 h-6 text-blue-400"/> {Time}</span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="flex items-center gap-2"><MapPinIcon className="w-6 h-6 text-blue-400"/> {Venue}</span>
        </div>

        {programmeList.length > 0 && (
          <div className="mb-10 max-w-2xl bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10 group-hover:bg-black/40 transition-colors">
             <ul className="space-y-2">
                {programmeList.slice(0, 3).map((item, i) => (
                  <li key={i} className="text-slate-300 italic font-medium">
                    {item}
                  </li>
                ))}
             </ul>
             <div className="mt-4 text-sm text-blue-300 font-bold flex justify-center items-center gap-1">
                <InformationCircleIcon className="w-4 h-4" /> Click for full details
             </div>
          </div>
        )}

        <div className="flex gap-4">
          <TicketButton link={TicketLink} />
          {/* Helper button for clarity */}
          <button className="px-6 py-2 rounded-full border border-slate-600 hover:bg-slate-800 text-slate-300 font-semibold transition-colors">
            Read More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// 4. STANDARD CONCERT ROW
const ConcertRow = ({ concert, onOpen }) => {
  const { Title, Date: dateStr, Time, Venue, Programme, TicketLink } = concert;
  const dateObj = parseConcertDate(dateStr);
  const displayDate = dateObj ? dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : dateStr;
  const displayYear = dateObj ? dateObj.getFullYear() : '';
  const programmeList = Programme ? Programme.split(',').map(s => s.trim()) : [];

  return (
    <motion.div 
      onClick={() => onOpen(concert)}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="group bg-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 hover:bg-slate-800/80 cursor-pointer transition-all flex flex-col md:flex-row gap-8 items-start md:items-center"
    >
      <div className="flex-shrink-0 flex md:flex-col items-center justify-center gap-2 md:gap-0 bg-slate-800 group-hover:bg-slate-700 transition-colors rounded-xl p-4 min-w-[100px] text-center border border-slate-700">
        <span className="text-2xl md:text-3xl font-bold text-white block">{displayDate.split(' ')[0]}</span>
        <span className="text-sm md:text-base text-blue-400 font-bold uppercase block">{displayDate.split(' ')[1]}</span>
        <span className="text-xs text-slate-500 block">{displayYear}</span>
      </div>

      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{Title}</h3>
        <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
           <span className="flex items-center gap-1"><ClockIcon className="w-4 h-4"/> {Time}</span>
           <span className="flex items-center gap-1"><MapPinIcon className="w-4 h-4"/> {Venue}</span>
        </div>
        
        {programmeList.length > 0 && (
          <div className="text-slate-300 text-sm italic">
            <span className="text-blue-500 font-bold not-italic text-xs uppercase tracking-wide mr-2">Featuring:</span>
            {programmeList.join(' • ')}
          </div>
        )}
      </div>

      <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0 flex gap-3">
        {/* Helper text only visible on hover (desktop) */}
        <span className="hidden md:flex items-center text-sm text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity mr-2">
           Read More &rarr;
        </span>
        <TicketButton link={TicketLink} />
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE ---
const UpcomingConcerts = () => {
  const { data: sheetData, loading } = useGoogleSheet();
  const [selectedConcert, setSelectedConcert] = useState(null);

  // --- LOGIC: Sort & Categorize ---
  const { heroConcert, orchestraSeason, chamberSeries } = useMemo(() => {
    if (!sheetData || sheetData.length === 0) {
      return { heroConcert: null, orchestraSeason: [], chamberSeries: [] };
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming = [];
    sheetData.forEach(concert => {
      const d = parseConcertDate(concert.Date);
      if (d && d >= today) {
        upcoming.push({ ...concert, _dateObj: d });
      }
    });

    // 1. Sort by Date Ascending (Soonest first)
    upcoming.sort((a, b) => a._dateObj - b._dateObj);

    if (upcoming.length === 0) return { heroConcert: null, orchestraSeason: [], chamberSeries: [] };

    // 2. Find the Hero (First Non-Chamber Concert)
    // We look for the first concert where the title does NOT include 'chamber' (case insensitive)
    const heroIndex = upcoming.findIndex(c => !c.Title.toLowerCase().includes('chamber'));

    let hero = null;
    let remaining = [];

    if (heroIndex !== -1) {
      // We found a main orchestra concert!
      hero = upcoming[heroIndex];
      // Remove the hero from the list so it doesn't show up twice
      remaining = upcoming.filter((_, index) => index !== heroIndex);
    } else {
      // If ALL upcoming concerts are Chamber concerts, we have no "Main" hero.
      // All concerts will just be listed in the lists below.
      hero = null;
      remaining = upcoming;
    }

    // 3. Split the remaining concerts
    const chamber = remaining.filter(c => c.Title.toLowerCase().includes('chamber'));
    const orchestra = remaining.filter(c => !c.Title.toLowerCase().includes('chamber'));

    return { heroConcert: hero, orchestraSeason: orchestra, chamberSeries: chamber };
  }, [sheetData]);

  return (
    <>
      <title>Upcoming Concerts | Edinburgh University Chamber Orchestra</title>
      
      <main className="min-h-screen bg-slate-950 text-slate-100 pb-20">
        <Section title="2025/26 Season">
          
          {loading ? (
             <div className="flex justify-center py-32">
               <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
             </div>
          ) : (
            <>
              {heroConcert && (
                <div className="max-w-7xl mx-auto">
                  <HeroConcert 
                    concert={heroConcert} 
                    onOpen={setSelectedConcert} 
                  />
                </div>
              )}

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto text-center text-lg text-slate-400 leading-relaxed mb-24"
              >
                <p>
                  EUCO's 2025/26 season has seen the orchestra explore new heights. Our upcoming concerts range from chamber music to opera, with exciting international collaborations and tours coming up soon.
                </p>
              </motion.div>

              {orchestraSeason.length > 0 && (
                <div className="max-w-5xl mx-auto mb-24">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="h-px bg-slate-800 flex-1" />
                    <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Upcoming Season</h3>
                    <div className="h-px bg-slate-800 flex-1" />
                  </div>
                  <div className="space-y-6">
                    {orchestraSeason.map((concert, idx) => (
                      <ConcertRow 
                        key={idx} 
                        concert={concert} 
                        onOpen={setSelectedConcert} 
                      />
                    ))}
                  </div>
                </div>
              )}

              {chamberSeries.length > 0 && (
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="h-px bg-slate-800 flex-1" />
                    <h3 className="text-2xl font-bold text-blue-400 uppercase tracking-widest flex items-center gap-3">
                      <MusicalNoteIcon className="w-6 h-6" /> Chamber Series
                    </h3>
                    <div className="h-px bg-slate-800 flex-1" />
                  </div>
                  <div className="space-y-6">
                    {chamberSeries.map((concert, idx) => (
                      <ConcertRow 
                        key={idx} 
                        concert={concert} 
                        onOpen={setSelectedConcert} 
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </Section>
      </main>

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

export default UpcomingConcerts;