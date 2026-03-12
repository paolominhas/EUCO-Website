import React from 'react';
import { timelineEvents } from '../data/timelineData';
import TimelineItem from './TimelineItem';

const Timeline = () => {
  return (
    <div className="relative container mx-auto px-6 flex flex-col space-y-8">
      {/* The vertical line */}
      <div className="absolute w-1 bg-gray-600 h-full left-1/2 -translate-x-1/2"></div>

      {/* Map over the events and render a TimelineItem for each */}
      {timelineEvents.map((event, index) => (
        <TimelineItem event={event} index={index} key={index} />
      ))}
    </div>
  );
};

export default Timeline;