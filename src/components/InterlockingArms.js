import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import the SVG as a React component
import { ReactComponent as ArmsSVG } from '../logos/community.svg';

const InterlockingArms = () => {
  // A ref to the container element we want to track the scroll position of
  const targetRef = useRef(null);

  // useScroll hook tracks scroll progress within the target element
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"] // Start tracking when bottom of element hits top of screen
  });

  // useTransform maps the scroll progress (0 to 1) to the SVG pathLength (0 to 1)
  // This creates the "drawing" effect
  const pathLength = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    // This div is the scroll target we are tracking
    <div ref={targetRef} className="h-96 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-blue-500"
      >
        <ArmsSVG style={{ width: 500, height: 500, strokeDasharray: "0 1", strokeDashoffset: pathLength }} />
      </motion.div>
    </div>
  );
};

export default InterlockingArms;