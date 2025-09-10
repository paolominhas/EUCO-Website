import React, { useState } from 'react';
import Section from '../components/Section';

// Data for the FAQ section
const faqData = [
  { question: 'When and where are rehearsals?', answer: 'Rehearsals are held weekly on Tuesday evenings from 7:00 PM to 9:30 PM at the Reid Music Hall. We also have occasional sectional rehearsals on weekends leading up to a concert.' },
  { question: 'What is the attendance policy?', answer: 'We expect members to attend all rehearsals. We understand that academic commitments can arise, so we allow for a certain number of excused absences per term. Please communicate any potential absences with your section principal in advance.' },
  { question: 'Are there any membership fees?', answer: 'Yes, there is a small membership fee collected at the beginning of each semester. This fee helps cover costs such as music hire, venue booking, and conductor fees. Financial assistance is available if needed.' },
  { question: 'What kind of social events do you have?', answer: 'We have a vibrant social calendar! This includes post-rehearsal pub trips, a formal music ball, a yearly ceilidh, and other fun events throughout the year to help members connect and relax outside of rehearsals.' },
];

const FAQ = () => {
  // State to keep track of which FAQ item is currently open
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle an FAQ item's visibility
  const toggleFAQ = (index) => {
    // If the clicked item is already open, close it. Otherwise, open it.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <title>FAQ | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Frequently Asked Questions about joining EUCO, including rehearsal schedules, attendance policies, membership fees, and social events." />

      <Section title="Frequently Asked Questions">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-6"
                >
                  <span className="font-semibold text-lg text-white">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </span>
                </button>
                {/* The answer is conditionally rendered based on the 'openIndex' state */}
                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                  <p className="p-6 pt-0 text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default FAQ;