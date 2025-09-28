// Authentication form (classic style)
import React, { useState, useRef } from 'react';

const AuthFormClassicReact: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // Simulate auth
    setTimeout(() => {
      setLoading(false);
      setError(null);
      alert('Authenticated!');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 font-serif">
      <form onSubmit={handleSubmit} className="bg-white border border-gray-300 rounded-lg shadow-lg p-10 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{mode === 'login' ? 'Sign In' : 'Sign Up'}</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
          <input ref={emailRef} id="email" type="email" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2 font-medium">Password</label>
          <input ref={passwordRef} id="password" type="password" required className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
        </div>
        {error && <div className="mb-4 text-red-600 text-sm text-center">{error}</div>}
        <button type="submit" className="w-full py-2 px-4 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition-colors" disabled={loading}>
          {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Sign Up'}
        </button>
        <div className="mt-6 text-center">
          <button type="button" className="text-blue-700 hover:underline text-sm" onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>
            {mode === 'login' ? 'Create an account' : 'Already have an account? Sign in'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthFormClassicReact;
