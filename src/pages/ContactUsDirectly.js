import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Section from '../components/Section';
import { ReactComponent as InstaIcon } from '../logos/insta.svg';
import SignupForm from '../components/SignUpForm';

const ContactUsDirectly = () => {
  // --- Original State Management for the Form ---
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // --- Original Event Handlers ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS integrated emails here with a unique service ID, template ID and public key.
    emailjs.send(
      'service_jpoqz8q', 
      'template_0xu8hte', 
      formValues, 
      'b4XIchSp18Pf0ICs9'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormValues({ name: '', email: '', message: '' }); // Clear the form
    }).catch((err) => {
      console.error('FAILED...', err);
      setSubmitStatus('error');
      setIsSubmitting(false);
    });
  };

  // --- SEO DATA ---
  const orchestraName = "Edinburgh University Chamber Orchestra";
  const pageUrl = "https://www.eu-co.co.uk/contact-us/direct"; // IMPORTANT: Replace with your actual domain
  const socialImage = `${pageUrl}/images/contact-Bruch.jpg`; // A dedicated social sharing image

  // --- STRUCTURED DATA 📞 ---
  // This schema identifies the page's purpose and provides machine-readable
  // contact info for the orchestra.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": `Contact Us | ${orchestraName}`,
    "url": pageUrl,
    "mainEntity": {
      "@type": "MusicGroup",
      "name": orchestraName,
      "url": "https://www.eu-co.co.uk",
      "sameAs": [
        "https://www.facebook.com/EdinburghUniversityChamberOrchestra",
        "https://www.instagram.com/edunichamberorchestra",
        "https://x.com/EUCOmusic",
        "https://www.youtube.com/@edinburghuniversitychamber9979"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "General Enquiry",
        "url": pageUrl // The form on this page is the contact method
      }
    }
  };

  return (
    <>
      {/* ================================================================== */}
      {/* ======================= SEO & METADATA ========================= */}
      {/* ================================================================== */}
      
      <title>Contact Us | {orchestraName}</title>
      <meta name="description" content="Get in touch with the EUCO committee. Ask questions about concerts, sponsorship, or auditions. Find our email and social media links." />
      <link rel="canonical" href={pageUrl} />
      
      {/* --- Open Graph (for social media sharing) --- */}
      <meta property="og:title" content={`Contact Us | ${orchestraName}`} />
      <meta property="og:description" content="Have a question? Send us a message directly through our contact form." />
      <meta property="og:image" content={socialImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />

      {/* --- Structured Data Script --- */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* ================================================================== */}
      {/* ====================== PAGE CONTENT ============================ */}
      {/* ================================================================== */}
      <main>
        <Section title="Contact Us">
          <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-12">
            Have a question about a concert, interested in sponsorship, or just want to say hello? We'd love to hear from you.
          </p>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-gray-800 p-8 rounded-lg shadow-2xl">
            
            {/* Left Column: Direct Links */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-3">Get in Touch Directly</h3>
                <p className="text-gray-400">For general enquiries, please don't hesitate to reach out to our committee.</p>
                <a href="https://www.instagram.com/direct/t/103973561196787/" className="inline-flex items-center mt-4 text-lg text-white hover:text-blue-500 transition-colors">
                  <InstaIcon className="w-6 h-6 mr-3" />
                  Message us on Instagram
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-400 mb-3">Quickest Response</h3>
                <p className="text-gray-400">The best way to get a response for social or general queries is via Instagram.</p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formValues.name} 
                  onChange={handleInputChange} 
                  placeholder="Enter your full name"
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formValues.email} 
                  onChange={handleInputChange} 
                  placeholder="Enter your email address"
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required 
                  value={formValues.message} 
                  onChange={handleInputChange} 
                  placeholder="Type your message here"
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-blue-600 text-black font-bold rounded-md hover:bg-blue-500 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {submitStatus === 'success' && <p className="text-green-400 text-center">Message sent successfully! Thank you.</p>}
              {submitStatus === 'error' && <p className="text-red-400 text-center">Failed to send message. Please try again or message us on Instagram.</p>}
            </form>
          </div>
        </Section>
        <SignupForm />
      </main>
    </>
  );
};

export default ContactUsDirectly;