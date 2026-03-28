import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  QuestionMarkCircleIcon, 
  ChatBubbleLeftRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import SignupForm from '../components/SignUpForm';

// You can replace this with your specific image path like '/backgrounds/contact-hero.jpg'
const HERO_IMAGE = "https://images.unsplash.com/photo-1514119977450-3a5855d858c4?q=80&w=2574&auto=format&fit=crop";

const ContactUs = () => {
  return (
    <>
      <title>Contact Us | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Get in touch with EUCO. Send us a message or find answers to FAQs." />

      <main className="min-h-screen bg-slate-950 relative overflow-hidden selection:bg-indigo-500/30 text-white">
        
        {/* ================================================================== */}
        {/* =========== 1. NEW: DIAGONAL ARTISTIC IMAGE LAYER ================ */}
        {/* ================================================================== */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* The Image Container with Diagonal Clip Path */}
          <motion.div 
             initial={{ opacity: 0, scale: 1.1 }}
             animate={{ opacity: 0.25, scale: 1 }} // Low opacity for subtle blend
             transition={{ duration: 1.5 }}
             className="absolute inset-0 bg-cover bg-center grayscale"
             style={{ 
               backgroundImage: `url(${HERO_IMAGE})`,
               // This creates the diagonal slice: Top-Left -> Top-Right -> Bottom-Right -> Left-Edge-at-60%-height
               clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 60%)"
             }}
          />
          {/* A gradient overlay to ensure text readability over the image area */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950"></div>
        </div>

        {/* --- 2. DYNAMIC BACKGROUND MESH BLOBS (Sitting behind image) --- */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <motion.div 
             animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen" 
           />
           <motion.div 
             animate={{ scale: [1, 1.1, 1], x: [0, 100, 0] }}
             transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[100px] mix-blend-screen" 
           />
        </div>

        {/* --- 3. HEADER SECTION --- */}
        <div className="relative z-10 pt-32 pb-16 px-6 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-400/30 bg-indigo-900/20 backdrop-blur-md text-indigo-300 text-sm font-bold tracking-widest uppercase mb-8 shadow-lg">
              <ChatBubbleLeftRightIcon className="w-4 h-4" /> Let's Talk
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-200 drop-shadow-lg">
              Get In Touch
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Whether you're a prospective member, a potential sponsor, or a loyal audience member, we are here to help.
            </p>
          </motion.div>
        </div>

        {/* --- 4. INTERACTIVE CARDS SECTION --- */}
        <div className="relative z-10 container mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* CARD A: DIRECT CONTACT */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Link 
                to="/contact-us/direct" 
                className="group relative block h-full bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 overflow-hidden hover:border-indigo-500/50 hover:bg-slate-900/60 transition-all duration-500 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-indigo-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                    <EnvelopeIcon className="w-8 h-8" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4">Send a Message</h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-10 flex-grow">
                    Have a specific question about auditions, concerts, or sponsorship? Reach out to our committee directly.
                  </p>
                  
                  <div className="flex items-center gap-3 text-indigo-400 font-bold uppercase tracking-wider text-sm group-hover:text-white transition-colors">
                    Write to us <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* CARD B: FAQ */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Link 
                to="/contact-us/faq" 
                className="group relative block h-full bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 overflow-hidden hover:border-fuchsia-500/50 hover:bg-slate-900/60 transition-all duration-500 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-fuchsia-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-fuchsia-600/20 group-hover:scale-110 transition-transform duration-500">
                    <QuestionMarkCircleIcon className="w-8 h-8" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4">Common Questions</h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-10 flex-grow">
                    Curious about rehearsal times, membership fees, or dress codes? Check our FAQ for instant answers.
                  </p>
                  
                  <div className="flex items-center gap-3 text-fuchsia-400 font-bold uppercase tracking-wider text-sm group-hover:text-white transition-colors">
                    Find Answers <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

          </div>
        </div>

        {/* --- 5. SIGNUP FORM INTEGRATION --- */}
        <div className="relative z-10 pb-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden shadow-2xl"
            >
               <SignupForm />
            </motion.div>
          </div>
        </div>

      </main>
    </>
  );
};

export default ContactUs;