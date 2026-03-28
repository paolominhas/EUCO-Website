import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  GlobeAltIcon, 
  HeartIcon, 
  AcademicCapIcon, 
  UserGroupIcon, 
  StarIcon,
  TicketIcon,
  MusicalNoteIcon,
  HandThumbUpIcon
} from '@heroicons/react/24/outline';
import { useGoogleSheet } from '../hooks/useGoogleSheet';

// --- CONFIG ---
const PARTNERS_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS_ZGAlSzhm9wryY9FijW82vIfUZFut2mm5_RXI0pqij2prHArPvfAr4lEhegQhATCb35mNNw1a4Sst/pub?gid=1532882504&single=true&output=csv";
const FALLBACK_LOGO = "https://www.eu-co.co.uk/images/philip.jpg";

// --- EDINBURGH ARTISTIC BACKGROUNDS ---
const BG_IMAGES = {
  sponsors: "https://adventurebrits.co.uk/wp-content/uploads/2025/09/Edinburgh-Castle-autumn.jpg", // Edinburgh Castle / City
  musicCommunity: "https://www.thescottishsun.co.uk/wp-content/uploads/sites/2/2025/08/m81a9653-JS1017521412.jpg?strip=all&w=960", // Victoria Street / Colorful
  raffle: "https://practicalwanderlust.com/wp-content/uploads/edinburgh-in-the-winter-14.jpg", // Abstract / Texture
  university: "https://offloadmedia.feverup.com/secret-edinburgh.com/wp-content/uploads/2024/04/09143158/shutterstock_1719971248-1-1024x792.jpg", // Old College
  collaboration: "https://offloadmedia.feverup.com/secret-edinburgh.com/wp-content/uploads/2023/04/07132358/mike-newbry-xccv7VJKEf8-unsplash-1.jpg" // The Meadows / Greenery
};

// --- UTILITIES ---
const getCleanImageUrl = (url) => {
  if (!url || url.trim() === '') return FALLBACK_LOGO;
  try {
    if (url.includes('drive.google.com')) {
      const idMatch = url.match(/\/d\/(.*?)\//);
      const id = idMatch ? idMatch[1] : null;
      if (id) return `https://drive.google.com/uc?export=view&id=${id}`;
    }
    return url;
  } catch (e) {
    return FALLBACK_LOGO;
  }
};

// --- COMPONENT: ARTISTIC BACKGROUND SECTION ---
const ArtisticSection = ({ image, title, icon: Icon, children, color }) => {
  return (
    <div className="relative py-24 md:py-32 overflow-hidden">
      
      {/* Parallax Background Layer */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 10 }}
          className="w-full h-full"
        >
          <img 
            src={image} 
            alt="" 
            // FIX 1: Increased opacity from 30 to 50 so it shines through
            className="w-full h-full object-cover grayscale opacity-50" 
          />
        </motion.div>
        
        {/* FIX 2: Lighter Gradient Overlay 
            - 'from-slate-950' (Solid at top to blend with previous section)
            - 'via-slate-950/60' (Semi-transparent in middle so image shows)
            - 'to-slate-950' (Solid at bottom to blend with next section)
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/60 to-slate-950"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className={`inline-flex items-center justify-center p-4 rounded-2xl mb-6 bg-slate-900/80 border border-slate-700 shadow-2xl backdrop-blur-md`}
           >
             <Icon className={`w-8 h-8 ${color}`} />
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-xl"
           >
             {title}
           </motion.h2>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: PARTNER CARD (Redesigned) ---
const PartnerCard = ({ data, index }) => {
  const { Name, Logo, Description, Link: WebLink } = data;
  const cleanLogo = getCleanImageUrl(Logo);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }} 
      className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-600 transition-all duration-300 group flex flex-col md:flex-row shadow-2xl"
    >
      {/* Logo Area - Full Bleed / No Padding Box */}
      <div className={`w-full md:w-5/12 relative h-64 md:h-auto bg-white flex items-center justify-center overflow-hidden ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
        <div className="absolute inset-0 bg-slate-100"></div>
        <img 
          src={cleanLogo} 
          alt={`${Name} logo`} 
          className="relative z-10 w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
          onError={(e) => { e.target.src = FALLBACK_LOGO; }}
        />
        {/* Subtle inner shadow on the image container */}
        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none"></div>
      </div>

      {/* Content Area */}
      <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center text-center md:text-left">
        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">{Name}</h3>
        <p className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
          {Description}
        </p>
        
        {WebLink && (
          <a 
            href={WebLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="self-center md:self-start inline-flex items-center gap-2 text-blue-400 font-bold hover:text-white transition-colors uppercase tracking-wider text-sm border-b-2 border-transparent hover:border-blue-400 pb-1"
          >
            <GlobeAltIcon className="w-5 h-5" />
            Visit Website
          </a>
        )}
      </div>
    </motion.div>
  );
};

// --- COMPONENT: MAIN SPONSOR (Hero) ---
const MainSponsorHero = ({ data }) => {
  const { Name, Logo, Description, Link: WebLink } = data;
  const cleanLogo = getCleanImageUrl(Logo);

  return (
    <div className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Golden Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2.5rem] p-8 md:p-16 border border-yellow-500/30 shadow-[0_0_60px_-15px_rgba(234,179,8,0.2)] overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Big Logo Card */}
            <div className="w-full lg:w-5/12">
               <div className="bg-white rounded-3xl p-8 shadow-2xl h-[300px] flex items-center justify-center transform rotate-1 hover:rotate-0 transition-transform duration-500 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                  <img 
                    src={cleanLogo} 
                    alt={Name} 
                    className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform"
                    onError={(e) => { e.target.src = FALLBACK_LOGO; }}
                  />
               </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-7/12 text-center lg:text-left">
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="inline-block px-4 py-1.5 mb-8 text-sm font-bold tracking-[0.2em] text-yellow-400 uppercase bg-yellow-950/30 rounded-full border border-yellow-700/50"
               >
                 Principal Partner
               </motion.div>
               <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">{Name}</h2>
               <p className="text-xl text-slate-300 leading-relaxed mb-10 font-light">
                 {Description}
               </p>
               {WebLink && (
                 <a 
                   href={WebLink} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="inline-flex items-center gap-2 px-10 py-5 bg-white text-slate-900 font-bold rounded-full hover:bg-yellow-400 transition-colors shadow-xl text-lg"
                 >
                   Visit {Name} <GlobeAltIcon className="w-6 h-6" />
                 </a>
               )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- COMPONENT: INDIVIDUALS (Name Cloud) ---
const IndividualsSection = ({ data }) => {
  const title = data.Logo || "Thank You";
  const namesString = data.Description || "";
  const names = namesString.split(',').map(n => n.trim()).filter(n => n !== "");

  return (
    <div className="py-32 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <HandThumbUpIcon className="w-16 h-16 text-pink-500 mx-auto mb-8 animate-bounce-slow" />
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">{title}</h2>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {names.map((name, idx) => (
              <motion.span 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.02 }} 
                className="text-slate-400 text-xl md:text-2xl font-light hover:text-white hover:scale-110 transition-all duration-300 cursor-default"
              >
                {name}
              </motion.span>
            ))}
          </div>
          
          <div className="mt-20 flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500"></div>
            <StarIcon className="w-6 h-6 text-pink-500" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-pink-500"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// --- MAIN PAGE ---
const OurPartners = () => {
  const { data: sheetData, loading } = useGoogleSheet(PARTNERS_SHEET_URL);

  const sortedData = useMemo(() => {
    if (!sheetData || sheetData.length === 0) {
      return { 
        mainSponsor: [], sponsors: [], musicCommunity: [], 
        raffle: [], university: [], collaboration: [], individuals: [] 
      };
    }

    const categories = {
      mainSponsor: [],
      sponsors: [],
      musicCommunity: [],
      raffle: [],
      university: [],
      collaboration: [],
      individuals: []
    };

    sheetData.forEach(item => {
      const isCurrent = item.Current && item.Current.trim().toLowerCase() === 'yes';
      if (!isCurrent) return;

      const cat = item.Category ? item.Category.trim().toLowerCase() : '';

      if (cat === 'main sponsor') categories.mainSponsor.push(item);
      else if (cat === 'sponsor') categories.sponsors.push(item);
      else if (cat === 'music community') categories.musicCommunity.push(item);
      else if (cat === 'raffle') categories.raffle.push(item);
      else if (cat === 'university') categories.university.push(item);
      else if (cat === 'collaboration') categories.collaboration.push(item);
      else if (cat === 'individuals') categories.individuals.push(item);
    });

    return categories;
  }, [sheetData]);

  const { mainSponsor, sponsors, musicCommunity, raffle, university, collaboration, individuals } = sortedData;

  return (
    <>
      <title>Our Partners | EUCO</title>
      <meta name="description" content="Grateful for the support of our sponsors, university partners, and friends." />

      {/* --- HERO / DONATION SECTION --- */}
      <div className="relative w-full h-[65vh] min-h-[500px] bg-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <img src="/pictures/support-hero.jpg" alt="Support Us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold uppercase tracking-widest text-sm mb-6 backdrop-blur-md">
            <HeartIcon className="w-4 h-4" /> Support Student Music
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-black text-white mb-6 drop-shadow-2xl">
            Make Music Happen
          </motion.h1>
          <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} href="https://www.justgiving.com/crowdfunding/euco-outreach" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105">
            Donate Now
          </motion.a>
        </div>
      </div>

      <main className="bg-slate-950 min-h-screen">
        {loading && (
           <div className="flex justify-center py-32">
             <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
           </div>
        )}

        {!loading && (
          <>
            {/* 1. MAIN SPONSOR (No Label Header) */}
            {mainSponsor.map((item, idx) => (
              <MainSponsorHero key={idx} data={item} />
            ))}

            {/* 2. SPONSORS */}
            {sponsors.length > 0 && (
              <ArtisticSection title="Our Sponsors" icon={StarIcon} color="text-yellow-400" image={BG_IMAGES.sponsors}>
                {sponsors.map((item, idx) => <PartnerCard key={idx} data={item} index={idx} />)}
              </ArtisticSection>
            )}

            {/* 3. MUSIC COMMUNITY */}
            {musicCommunity.length > 0 && (
              // FIX: Ensure image points to BG_IMAGES.musicCommunity
              <ArtisticSection title="Music Community" icon={UserGroupIcon} color="text-green-400" image={BG_IMAGES.musicCommunity}>
                {musicCommunity.map((item, idx) => <PartnerCard key={idx} data={item} index={idx} />)}
              </ArtisticSection>
            )}

            {/* 4. RAFFLE */}
            {raffle.length > 0 && (
              <ArtisticSection title="Raffle Partners" icon={TicketIcon} color="text-pink-400" image={BG_IMAGES.raffle}>
                {raffle.map((item, idx) => <PartnerCard key={idx} data={item} index={idx} />)}
              </ArtisticSection>
            )}

            {/* 5. UNIVERSITY */}
            {university.length > 0 && (
              <ArtisticSection title="University Partners" icon={AcademicCapIcon} color="text-purple-400" image={BG_IMAGES.university}>
                {university.map((item, idx) => <PartnerCard key={idx} data={item} index={idx} />)}
              </ArtisticSection>
            )}

            {/* 6. COLLABORATION */}
            {collaboration.length > 0 && (
              <ArtisticSection title="Artistic Collaborations" icon={MusicalNoteIcon} color="text-blue-400" image={BG_IMAGES.collaboration}>
                {collaboration.map((item, idx) => <PartnerCard key={idx} data={item} index={idx} />)}
              </ArtisticSection>
            )}

            {/* 7. INDIVIDUALS */}
            {individuals.map((item, idx) => (
               <IndividualsSection key={idx} data={item} />
            ))}
          </>
        )}
      </main>
    </>
  );
};

export default OurPartners;