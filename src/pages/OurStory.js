import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MusicalNoteIcon, 
  UserGroupIcon, 
  SparklesIcon, 
  GlobeEuropeAfricaIcon 
} from '@heroicons/react/24/outline';
import InstagramFeedSection from '../components/InstagramFeedSection';
import Timeline from '../components/Timeline';

// --- IMAGES (You can replace these Unsplash links with your local process.env images) ---
const IMAGES = {
  hero: "https://www.eu-co.co.uk/backgrounds/history1.jpg", // A peaceful wide shot of a hall
  founding: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Exterieur_van_universiteitsgebouwen_in_Edinburgh_University_Buildings%2C_Edinburgh.%2C_RP-F-F00877-K.jpg/250px-Exterieur_van_universiteitsgebouwen_in_Edinburgh_University_Buildings%2C_Edinburgh.%2C_RP-F-F00877-K.jpg", // Vintage sheet music or old hall
  ensemble: "https://www.eu-co.co.uk/backgrounds/opera-snippet-1.jpg", // Close up of instruments
  social: "https://www.eu-co.co.uk/backgrounds/contact-hero.jpg", // People gathering/toasting
  touring: "https://offloadmedia.feverup.com/secret-edinburgh.com/wp-content/uploads/2023/04/07132358/mike-newbry-xccv7VJKEf8-unsplash-1.jpg" // European landscape or travel
};

// --- COMPONENT: HERO SECTION ---
const StoryHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]); // Parallax effect
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Fade out

  return (
    <div className="relative h-[85vh] overflow-hidden flex items-center justify-center bg-black">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={IMAGES.hero} 
          alt="EUCO Performance" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-slate-950" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white/80 text-sm font-light tracking-widest uppercase mb-6"
        >
          <SparklesIcon className="w-4 h-4" /> Est. 1983
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-thin text-white tracking-wide mb-6 font-display"
        >
          Our Story
        </motion.h1>
        
        <motion.div 
          initial={{ scaleX: 0 }} 
          animate={{ scaleX: 1 }} 
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-px w-32 bg-white/50 mx-auto mb-6" 
        />

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl text-slate-300 font-light italic"
        >
          "Distinct from the university’s music society, EUCO has established itself as one of Scotland's leading amateur orchestras."
        </motion.p>
      </motion.div>
    </div>
  );
};

// --- COMPONENT: STORY BLOCK (Alternating Text/Image) ---
const StoryBlock = ({ title, text, image, icon: Icon, align = "left" }) => {
  return (
    <div className="py-24 md:py-32 container mx-auto px-6">
      <div className={`flex flex-col md:flex-row items-center gap-16 ${align === "right" ? "md:flex-row-reverse" : ""}`}>
        
        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700">
               <Icon className="w-6 h-6 text-indigo-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          </div>
          
          <div className="text-slate-400 text-lg leading-relaxed space-y-6 font-light">
            {text.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
             <div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
             <img 
               src={image} 
               alt={title} 
               className="w-full h-[500px] object-cover transition-transform duration-[1.5s] group-hover:scale-110"
             />
             {/* Decorative Border */}
             <div className="absolute inset-0 border border-white/10 rounded-[2rem] z-20 pointer-events-none"></div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

// --- COMPONENT: TOURING PARALLAX ---
const TouringSection = () => {
  return (
    <div className="relative py-32 overflow-hidden flex items-center justify-center my-20">
      {/* Fixed Background */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.touring})` }}
      >
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <GlobeEuropeAfricaIcon className="w-16 h-16 text-emerald-400 mx-auto mb-8 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">A Tradition of Collaboration</h2>
          
          <p className="text-xl text-slate-300 leading-relaxed font-light mb-10">
            From the Highlands of Scotland to the historic halls of Prague and Florence, we have shared our music across Europe.
            Our collaborations with Glasgow University's Kelvin Ensemble have produced spectacular performances of 
            Stravinsky, Mahler, and Rachmaninov. We have collaborated with European orchestras such as the Roma Tre Orchestra, and
            are looking forward to more international collaboration, and touring.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-semibold text-slate-400 uppercase tracking-widest">
            <span>Rome</span>
            <span>Leiden</span>
            <span>Scottish Isles</span>
            <span>Budapest</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};


const OurStory = () => {
  return (
    <>
      <title>Our Story | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Discover the history, people, and traditions of EUCO." />

      <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-indigo-500/30">
        
        {/* 1. HERO */}
        <StoryHero />

        {/* 2. THE BEGINNING */}
        <StoryBlock 
          title="The Beginning" 
          icon={MusicalNoteIcon}
          image={IMAGES.founding}
          align="left"
          text={[
            "Edinburgh University Chamber Orchestra was founded by a group of enthusiastic students in the summer of 1983. Distinct from the university’s music society, EUCO has established itself as one of Scotland's leading amateur orchestras.",
            "Over the decades, we have had the privilege of performing under many of Scotland's finest composers and conductors including James Lowe, Garry Walker, Edward Harper, Peter Nelson, and Philip Higham."
          ]}
        />

        {/* 3. THE ENSEMBLE */}
        <StoryBlock 
          title="The Ensemble" 
          icon={UserGroupIcon}
          image={IMAGES.ensemble}
          align="right"
          text={[
            "The orchestra currently consists of nearly forty members from all over the university, and all over the world. We rehearse weekly and typically perform two main concerts a year, working with a different professional conductor each semester.",
            "Beyond the main stage, we collaborate with Edinburgh Studio Opera annually and host the prestigious Edinburgh University Concerto Competition. Our members also find joy in smaller chamber groups and community outreach projects."
          ]}
        />

        {/* 4. TOURING & COLLABORATION (Parallax Break) */}
        <TouringSection />

        {/* 5. COMMUNITY */}
        <StoryBlock 
          title="More Than Music" 
          icon={SparklesIcon}
          image={IMAGES.social}
          align="left"
          text={[
            "We have socials every few weeks which always make for memorable moments – but what really brings us together is the biscuits we eat in the rehearsal breaks.",
            "We are a tight-knit family that celebrates together at the annual music ball and our very own yearly ceilidh. It is this spirit of friendship that makes our music truly special."
          ]}
        />

        {/* 6. TIMELINE & INSTAGRAM */}
        <div className="relative z-10 bg-slate-950 pt-20 border-t border-slate-900">
           <div className="container mx-auto px-6 text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Through the Years</h2>
              <p className="text-slate-400">A look back at our recent milestones.</p>
           </div>
           <Timeline />
           
           <div className="py-20">
             <InstagramFeedSection />
           </div>
        </div>

      </main>
    </>
  );
};

export default OurStory;