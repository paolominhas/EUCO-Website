import React from 'react';
import Section from '../components/Section';
import { upcomingConcertsData, pastConcertsData } from '../data/concerts.js';

const Performances = () => {
  return (
    <>
        <title>Concerts & Performances | Edinburgh University Chamber Orchestra</title>
        <meta name="description" content="View the schedule for EUCO's 2025-2026 concert season. Find information on upcoming performances, venues, and ticket links for events in Edinburgh." />

      <Section title="Performances">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* Upcoming Concerts Column */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-white mb-8">Upcoming</h3>
            <div className="space-y-6">
              {upcomingConcertsData.map(concert => (
                <div key={concert.date} className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-rose-600">
                  <p className="font-bold text-lg">{concert.date} - {concert.time}</p>
                  <p className="text-rose-400">{concert.venue}</p>
                  <ul className="list-disc list-inside text-gray-300 mt-2 pl-2">
                    {concert.program.map(p => <li key={p}>{p}</li>)}
                  </ul>
                  {/* This is an EXTERNAL link, so we use a standard <a> tag, not a <Link> */}
                  {concert.tickets && (
                    <a 
                      href="https://www.eusa.ed.ac.uk/activities/societies/society/euco/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center mt-4 px-4 py-2 bg-rose-600 text-black font-semibold rounded-md hover:bg-rose-500 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5,13.5h-1v-2h1V13.5z M13.5,13.5h-1v-2h1V13.5z M11.5,13.5h-1v-2h1V13.5z M9.5,13.5h-1v-2h1V13.5z M7.5,13.5h-1v-2h1V13.5z M5.5,13.5h-1v-2h1V13.5z M20,6v14H4V6H20 M21,4H3C2.4,4,2,4.4,2,5v16c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1V5C22,4.4,21.6,4,21,4z M17,2H7C6.4,2,6,2.4,6,3v1h11V3C18,2.4,17.6,2,17,2z"></path></svg>
                      Buy Tickets
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Past Performances Column */}
          <div>
            <h3 className="text-2xl font-semibold text-center text-white mb-8">Past Performances</h3>
            <div className="space-y-6">
              {pastConcertsData.map(concert => (
                <div key={concert.date} className="bg-gray-800 p-6 rounded-lg shadow-lg opacity-70">
                  <p className="font-bold text-lg">{concert.date}</p>
                  <p className="text-gray-400">{concert.venue}</p>
                  <p className="text-gray-400 mt-2">{concert.program.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Section>
    </>
  );
};

export default Performances;