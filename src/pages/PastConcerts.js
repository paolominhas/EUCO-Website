import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CalendarDaysIcon, 
  MapPinIcon, 
  XMarkIcon, 
  ArchiveBoxIcon,
  MusicalNoteIcon
} from '@heroicons/react/24/outline';
import Section from '../components/Section';
import { useGoogleSheet } from '../hooks/useGoogleSheet';

// --- CONFIGURATION ---
// This is the image that will show if the spreadsheet cell is empty
const FALLBACK_IMAGE = "https://eu-co.co.uk/backgrounds/members-photo.jpg";

// --- UTILITIES ---
const getCleanImageUrl = (url) => {
  // 1. If the cell is empty, undefined, or just whitespace, return fallback immediately
  if (!url || url.trim() === '') return FALLBACK_IMAGE;

  try {
    // 2. Fix Google Drive Links automatically
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

// --- MODAL COMPONENT ---
const PastConcertModal = ({ data, onClose }) => {
  if (!data) return null;
  
  const { Title, Date: dateStr, Programme, Description, Venue, ShowImage } = data;
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

        <div className="w-full md:w-2/5 h-48 md:h-auto relative bg-slate-800">
          <img 
            src={cleanImage} 
            alt={Title}
            className="w-full h-full object-cover grayscale"
            onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
          />
        </div>

        <div className="w-full md:w-3/5 p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
          <div className="flex items-center gap-2 text-slate-400 font-bold tracking-wider text-sm mb-2">
            <ArchiveBoxIcon className="w-5 h-5" />
            <span>ARCHIVED EVENT</span>
          </div>

          <h2 className="text-3xl font-bold text-white mb-2">{Title}</h2>
          <div className="text-violet-400 font-medium mb-6 flex items-center gap-2">
            <CalendarDaysIcon className="w-5 h-5" />
            {fullDate}
          </div>

          {programmeList.length > 0 && (
            <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700 mb-6">
              <h4 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase mb-3">
                <MusicalNoteIcon className="w-4 h-4" /> Repertoire Performed
              </h4>
              <ul className="space-y-2">
                {programmeList.map((piece, idx) => (
                  <li key={idx} className="text-slate-200 text-sm italic border-b border-slate-700/50 last:border-0 pb-1 last:pb-0">
                    {piece}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="prose prose-invert prose-sm text-slate-300 leading-relaxed">
            <p>{Description}</p>
          </div>
          
          <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <MapPinIcon className="w-4 h-4" />
            This concert was performed at {Venue}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// --- CARD COMPONENT ---
const PastConcertCard = ({ data, onClick }) => {
  const { Title, Date: dateStr, Venue, ShowImage, Programme } = data;
  
  // Use utility to decide image (User provided vs Fallback)
  const cleanImage = getCleanImageUrl(ShowImage);
  
  const dateObj = parseConcertDate(dateStr);
  const year = dateObj ? dateObj.getFullYear() : "";
  const fullDate = dateObj ? dateObj.toLocaleDateString('en-GB', { month: 'long', day: 'numeric' }) : dateStr;
  
  const programmePreview = Programme 
    ? Programme.split(',').slice(0, 2).join(', ') + (Programme.split(',').length > 2 ? '...' : '')
    : '';

  return (
    <motion.div
      onClick={() => onClick(data)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden cursor-pointer hover:border-violet-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="h-48 overflow-hidden relative bg-slate-800">
        <img 
          src={cleanImage} 
          alt={Title} 
          className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
        />
        <div className="absolute top-0 right-0 bg-slate-900/80 backdrop-blur px-3 py-1 m-2 rounded text-xs font-bold text-white border border-slate-700">
          {year}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="text-violet-400 text-sm font-medium mb-1">{fullDate}</div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">{Title}</h3>
        
        {programmePreview && (
          <p className="text-slate-400 text-sm line-clamp-2 mb-4 italic">
            "{programmePreview}"
          </p>
        )}

        <div className="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
           <span className="flex items-center gap-1"><MapPinIcon className="w-3 h-3"/> {Venue}</span>
           <span className="group-hover:text-white transition-colors">View Details &rarr;</span>
        </div>
      </div>
    </motion.div>
  );
};

// --- MAIN PAGE ---
const PastConcerts = () => {
  const { data: sheetData, loading } = useGoogleSheet();
  const [selectedConcert, setSelectedConcert] = useState(null);

  const pastConcerts = useMemo(() => {
    if (!sheetData || sheetData.length === 0) return [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const list = [];
    sheetData.forEach((concert) => {
      const concertDate = parseConcertDate(concert.Date);
      if (!concertDate) return; 
      if (concertDate < today) {
        list.push({ ...concert, _dateObj: concertDate });
      }
    });

    list.sort((a, b) => b._dateObj - a._dateObj);
    return list;
  }, [sheetData]);

  return (
    <>
      <title>Past Concerts | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Explore the rich history of performances by EUCO." />

      <main className="min-h-screen bg-slate-950 text-slate-100">
        <Section title="Concert Archive">
          <div className="max-w-3xl mx-auto text-center text-slate-400 text-lg mb-16">
            <p>
              Explore our history of performances. Click on any concert to view the full programme, details, and venue information.
            </p>
          </div>
          
          {loading ? (
             <div className="flex justify-center py-20">
               <div className="w-10 h-10 border-4 border-slate-600 border-t-slate-300 rounded-full animate-spin" />
             </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              {pastConcerts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pastConcerts.map((concert, index) => (
                    <PastConcertCard 
                      key={index} 
                      data={concert}
                      onClick={setSelectedConcert}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-slate-900 rounded-xl border border-dashed border-slate-800">
                  <p className="text-slate-500">No archive data found.</p>
                </div>
              )}
            </div>
          )}
        </Section>
      </main>

      <AnimatePresence>
        {selectedConcert && (
          <PastConcertModal 
            data={selectedConcert} 
            onClose={() => setSelectedConcert(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PastConcerts;