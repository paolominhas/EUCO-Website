import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ event, index }) => {
  // Alternate alignment for items
  const isOdd = index % 2 !== 0;

  // Animation variants for Framer Motion
  const variants = {
    hidden: { opacity: 0, x: isOdd ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      className="relative"
      initial="hidden"
      whileInView="visible" // Triggers animation when component is in view
      viewport={{ once: true, amount: 0.5 }} // Animation runs once
      variants={variants}
    >
      {/* The circle on the timeline */}
      <div className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-800 ${isOdd ? 'right-[-12px]' : 'left-[-12px]'}`}></div>
      
      {/* The content card */}
      <div className={`p-6 bg-gray-800 rounded-lg shadow-lg ${isOdd ? 'ml-auto text-left' : 'mr-auto text-right'} w-5/12`}>
        <p className="text-xl font-bold text-blue-400">{event.year}</p>
        <h3 className="text-2xl font-semibold text-white mt-1">{event.title}</h3>
        <p className="text-gray-300 mt-2">{event.description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;