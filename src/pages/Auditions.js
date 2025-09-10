import React from 'react';
import Section from '../components/Section';

const Auditions = () => {
  return (
    <>
        <title>Orchestra Auditions | Edinburgh University Chamber Orchestra</title>
        <meta 
          name="description" 
          content="Information for the 2025/26 season auditions for the Edinburgh University Chamber Orchestra (EUCO). Find dates, times, location, and what to prepare." 
        />

      <Section title="Auditions for the 2025/26 Season">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Information */}
          <div className="text-gray-300 leading-relaxed space-y-4">
            <h3 className="text-2xl font-semibold text-white mb-4">Join the Orchestra</h3>
            <p>
              Auditions for all sections (violin, viola, cello, double bass, winds, brass, and percussion) will be held at the beginning of the academic year. We cannot wait to meet all the dedicated and passionate musicians auditioning for EUCO.
            </p>
            
            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-rose-600 space-y-3 mt-6">
              <div>
                <p className="font-bold text-lg text-white">Date:</p>
                <p>Saturday & Sunday, 20th/21st September 2025</p>
              </div>
              <div>
                <p className="font-bold text-lg text-white">Time:</p>
                <p>9:00 AM - 5:00 PM (Sign-up for a specific slot below)</p>
              </div>
              <div>
                <p className="font-bold text-lg text-white">Location:</p>
                <p>Allison House, Nicolson Square, Edinburgh</p>
              </div>
            </div>
            
            <h4 className="text-xl font-semibold text-white pt-6">What to Prepare:</h4>
            <p>
              Please prepare one short (under 5 minutes), unaccompanied piece of your own choice that best demonstrates your technical ability and musicality. You may also be asked to perform a short sight-reading excerpt.
            </p>

            {/* NOTE: When your sign-up form (e.g., Google Form) is ready,
                this <button> should become an <a> tag like this:
                <a href="YOUR_SIGNUP_LINK" target="_blank" rel="noopener noreferrer" className="...">
                  Sign Up for an Audition Slot
                </a>
            */}
            <button 
              disabled 
              className="mt-6 px-6 py-3 bg-rose-600 text-black font-bold rounded-full hover:bg-rose-500 transform transition-all duration-300 opacity-60 cursor-not-allowed"
            >
              Sign-up Link Coming Soon
            </button>
          </div>

          {/* Right Column: Map */}
          <div className="w-full h-80 md:h-full rounded-lg overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.331221714576!2d-3.188448684069872!3d55.94523598060521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c78075a34065%3A0x72a4a75476de0b8!2sAlison%20House!5e0!3m2!1sen!2suk!4v1662633000000" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Location of Allison House, Edinburgh"
            ></iframe>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Auditions;