import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Section from '../components/Section';

const ContactUsDirectly = () => {
  // State for the form input fields
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });
  // State to manage the submission process (e.g., to disable the button)
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State to show a success or error message
  const [submitStatus, setSubmitStatus] = useState(null);

  // Updates the formValues state whenever a user types in an input field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handles the form submission using the EmailJS library
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default browser page reload
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace with your actual EmailJS service ID, template ID, and public key
    emailjs.send(
      'service_jpoqz8q', 
      'template_0xu8hte', 
      formValues, 
      'qq5UcRTw-Bdkv4cDO'
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

  return (
    <>
      <title>Contact Us | Edinburgh University Chamber Orchestra</title>
      <meta name="description" content="Get in touch with the EUCO committee. Ask questions about concerts, sponsorship, or auditions. Find our email and social media links." />

      <Section title="Contact Us">
        <p className="text-center max-w-3xl mx-auto text-lg text-gray-300 mb-12">
          Have a question about a concert, interested in sponsorship, or just want to say hello? We'd love to hear from you.
        </p>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-gray-800 p-8 rounded-lg shadow-2xl">
          
          {/* Left Column: Direct Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-rose-400 mb-3">Get in Touch Directly</h3>
              <p className="text-gray-400">For general enquiries, please don't hesitate to reach out to our committee.</p>
              <a href="mailto:euco.orchestra@gmail.com" className="inline-flex items-center mt-4 text-lg text-white hover:text-rose-500 transition-colors">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                euco.orchestra@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-rose-400 mb-3">Direct Message Us</h3>
              <p className="text-gray-400">The quickest way to get a response for social queries.</p>
              {/* Social links are external, so they are standard <a> tags */}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input type="text" id="name" name="name" required value={formValues.name} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-rose-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input type="email" id="email" name="email" required value={formValues.email} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-rose-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea id="message" name="message" rows="5" required value={formValues.message} onChange={handleInputChange} className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-rose-500"></textarea>
            </div>
            <div>
              <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-rose-600 text-black font-bold rounded-md hover:bg-rose-500 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {submitStatus === 'success' && <p className="text-green-400 text-center">Message sent successfully! Thank you.</p>}
            {submitStatus === 'error' && <p className="text-red-400 text-center">Failed to send message. Please try again or email us directly.</p>}
          </form>
        </div>
      </Section>
    </>
  );
};

export default ContactUsDirectly;