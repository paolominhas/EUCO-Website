import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const SignupForm = () => {
  // State for the form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // State for the submission status
  const [submitStatus, setSubmitStatus] = useState({ status: null, message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus({ status: 'sending', message: 'Sending...' });

    // --- KEY CHANGE IS HERE ---
    // 1. Create the object that will be sent to your template.
    const templateParams = {
      name: name,
      email: email,
      // 2. Programmatically set the message content.
      message: `New mailing list subscriber. Please add this person to your contacts on the mailchimp list: \n\nName: ${name}\nEmail: ${email}. [This message means this person has clicked on the manual link to join our mailing list on the website but because I do not want to pay for anything - or have mailchimp branding on the site this is the slightly long winded way of doing it. You will need to copy and paste the email and name into your mailchimp audience manually. If you want to pay for a mailchimp plan you can set up a direct integration with mailchimp instead.]`,
    };

    // Use the SAME Service ID, Template ID, and Public Key as your contact form
    emailjs.send(
      'service_jpoqz8q',      // <-- Your existing Service ID
      'template_0xu8hte', // <-- Your existing Contact Form Template ID
      templateParams,           // <-- Send our newly created params object
      'b4XIchSp18Pf0ICs9'       // <-- Your existing Public Key
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus({ status: 'success', message: 'Subscribed! Thank you.' });
      setName(''); // Clear the form
      setEmail('');// Clear the form
    }).catch((err) => {
      console.error('FAILED...', err);
      setSubmitStatus({ status: 'error', message: 'Failed to subscribe. Please try again.' });
    });
  };

  return (
    <div className="bg-gray-800 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white">Join Our Mailing List</h2>
        <p className="text-gray-300 mt-2">Get updates on concerts, tickets, and special events.</p>
        
        <form onSubmit={handleSubmit} className="mt-4 max-w-lg mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full md:w-auto px-4 py-2 text-gray-800 bg-gray-100 rounded-md"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-auto px-4 py-2 text-gray-800 bg-gray-100 rounded-md"
            />
            <button 
              type="submit" 
              disabled={submitStatus.status === 'sending'}
              className="w-full md:w-auto px-6 py-2 bg-blue-600 text-black font-bold rounded-md hover:bg-blue-500 transition-colors disabled:bg-gray-500"
            >
              Subscribe
            </button>
          </div>
          {submitStatus.status === 'success' && <p className="text-green-400 mt-2">{submitStatus.message}</p>}
          {submitStatus.status === 'error' && <p className="text-red-400 mt-2">{submitStatus.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;