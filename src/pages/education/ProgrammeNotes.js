import React from 'react';
import Section from '../../components/Section';
import Header from '../../components/Header';
import { programmeNotes } from '../../data/educationData'; // Import the data

const ProgrammeNotesPage = () => {
  return (
    <>
      <title>Programme Notes | EUCO Education Hub</title>
      <meta name="description" content="An archive of programme notes from past Edinburgh University Chamber Orchestra concerts, exploring the history and context of our repertoire." />
      <Header />
      <main>
        <Section title="Programme Notes Archive">
          <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-16">
            Delve deeper into the music from our past performances. Here you'll find a growing collection of notes written by our members and conductors, offering insights into the works we love.
          </p>
          <div className="max-w-4xl mx-auto space-y-8">
            {/* We map over the data to create a block for each note */}
            {programmeNotes.map((note) => (
              // NOTE: This is a <div> now. If you ever want each note to have its own page,
              // you would change this to a <Link to={note.path}> component.
              <div key={note.id} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-rose-400">{note.title}</h2>
                <p className="text-gray-400 my-2">From the concert on {note.date}</p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  {note.excerpt}
                </p>
                {/* You could add the full text of the note here if you wanted */}
              </div>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
};

export default ProgrammeNotesPage;