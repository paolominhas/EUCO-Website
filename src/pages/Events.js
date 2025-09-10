import React from 'react';
import Section from '../components/Section';

// Data for special events
const specialEventsData = [
    { 
        title: 'Annual Scratch Rehearsal with EUSO',
        date: 'Wednesday, September 10, 2025', 
        time: '4:30 PM', 
        venue: 'Reid Concert Hall',
        description: 'Join us and our friends from the Edinburgh University String Orchestra (EUSO) for our annual scratch rehearsal. A great chance to play through some fun music (Dvořák Symphony No. 8) and meet other musicians before auditions. Open to everyone!',
    },
    // Future special events can be added here
];

const Events = () => {
  return (
    <>
      <title>Special Events | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Find out about special events from EUCO, including open rehearsals, masterclasses, and our annual scratch rehearsal for students in Edinburgh." />

      <Section title="Special Events">
        <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg leading-relaxed space-y-6 mb-12">
          <p>
            Beyond our main concert series, EUCO hosts a variety of special events throughout the year, 
            including masterclasses with professional musicians, open rehearsals, and collaborative workshops.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            {specialEventsData.map(event => (
              <div key={event.title} className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-rose-600">
                <h3 className="text-xl font-bold text-white">{event.title}</h3>
                <p className="font-semibold text-lg mt-1">{event.date} - {event.time}</p>
                <p className="text-rose-400">{event.venue}</p>
                <p className="text-gray-300 mt-2">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Events;