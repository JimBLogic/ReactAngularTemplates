// ContactFormClassicReact: Elegant, robust, classic contact form
import React, { useRef, useState } from 'react';

const ContactFormClassicReact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 font-serif">
      <form onSubmit={handleSubmit} className="bg-white border border-gray-300 rounded-lg shadow-lg p-10 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
          <input ref={nameRef} id="name" type="text" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
          <input ref={emailRef} id="email" type="email" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
          <textarea ref={messageRef} id="message" required rows={5} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        {error && <div className="mb-4 text-red-600 text-sm text-center">{error}</div>}
        {success && <div className="mb-4 text-green-700 text-sm text-center">Thank you! We'll be in touch soon.</div>}
        <button type="submit" className="w-full py-2 px-4 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition-colors" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactFormClassicReact;
