// LandingPageClassicReact: Elegant, robust, classic landing page
import React from 'react';

const features = [
  { title: 'Timeless Design', desc: 'A classic look that never goes out of style.' },
  { title: 'Robust Security', desc: 'Built with best practices for reliability.' },
  { title: 'Easy Integration', desc: 'Works with any modern stack.' },
  { title: 'Responsive Layout', desc: 'Looks great on all devices.' },
];

const LandingPageClassicReact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 font-serif flex flex-col">
      <header className="px-8 py-6 bg-white border-b border-gray-300 shadow flex items-center justify-between">
        <span className="text-2xl font-bold text-blue-800">ClassicBrand</span>
        <nav className="flex gap-6 text-lg">
          <a href="#features" className="hover:text-blue-700 transition-colors">Features</a>
          <a href="#about" className="hover:text-blue-700 transition-colors">About</a>
          <a href="#contact" className="hover:text-blue-700 transition-colors">Contact</a>
        </nav>
      </header>
      <section className="flex-1 flex flex-col md:flex-row items-center justify-between px-8 py-20 gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Welcome to ClassicBrand</h1>
          <p className="text-xl text-gray-700 max-w-xl mb-6">Elegant, robust, and timeless web solutions for your business.</p>
          <a href="#contact" className="inline-block px-8 py-3 rounded-xl font-semibold text-lg bg-blue-700 text-white shadow hover:bg-blue-800 transition-colors">Get Started</a>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Classic office" className="rounded-3xl shadow-2xl w-full max-w-md border-4 border-blue-200" loading="lazy" />
        </div>
      </section>
      <section id="features" className="py-16 px-8 bg-white border-t border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2 text-blue-700">{f.title}</h3>
              <p className="text-gray-600 text-center">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="py-8 px-8 text-center text-gray-500 text-sm bg-white border-t border-gray-200 mt-8">
        &copy; {new Date().getFullYear()} ClassicBrand. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPageClassicReact;
