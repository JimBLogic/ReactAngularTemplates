// LandingPageTailwindReact: NeonTech E-commerce Landing Page
// Modern, accessible, i18n-ready, analytics-ready, React + Tailwind landing page
// Features: animated hero, feature grid, testimonials, CTA, responsive, dark mode, advanced UI system

import React from 'react';
import { useHoverEffect, useClickEffect, colorSystem, animations } from './advanced-ui-system';
import { usePerformance } from '../performance-monitoring';
import { useTranslation } from 'react-i18next';

const features = [
  {
    icon: '💡',
    titleKey: 'landing.feature1',
    descKey: 'landing.feature1Desc',
  },
  {
    icon: '⚡',
    titleKey: 'landing.feature2',
    descKey: 'landing.feature2Desc',
  },
  {
    icon: '🔒',
    titleKey: 'landing.feature3',
    descKey: 'landing.feature3Desc',
  },
  {
    icon: '🌐',
    titleKey: 'landing.feature4',
    descKey: 'landing.feature4Desc',
  },
];

const testimonials = [
  {
    quoteKey: 'landing.testimonial1',
    name: 'Alex Kim',
    role: 'CTO, FutureLight',
  },
  {
    quoteKey: 'landing.testimonial2',
    name: 'Maria Lopez',
    role: 'Lead Designer, Neonify',
  },
];

const LandingPageTailwindReact: React.FC = () => {
  usePerformance('LandingPageTailwindReact');
  const { t } = useTranslation();
  const { isHovered, hoverProps } = useHoverEffect(1.03);
  const { isPressed, clickProps } = useClickEffect();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 to-blue-900 text-white font-sans flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 shadow-lg bg-slate-950/80 backdrop-blur-md sticky top-0 z-50" role="banner">
        <a href="#" aria-label="NeonTech Home" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyan-400">
          <img src="/favicon.ico" alt="NeonTech logo" className="h-10 w-10 rounded-full shadow" loading="lazy" />
          <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">NeonTech</span>
        </a>
        <nav className="flex gap-6 text-lg">
          <a href="#features" className="hover:text-cyan-300 focus:text-cyan-300 transition-colors">{t('landing.features')}</a>
          <a href="#testimonials" className="hover:text-cyan-300 focus:text-cyan-300 transition-colors">{t('landing.testimonials')}</a>
          <a href="#cta" className="hover:text-cyan-300 focus:text-cyan-300 transition-colors">{t('landing.cta')}</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between flex-1 px-8 py-20 gap-12 animate-fade-in" aria-label="Hero">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x" tabIndex={0}>
            {t('landing.heroTitle', 'Illuminate Your World with NeonTech')}
          </h1>
          <p className="text-xl text-slate-200 max-w-xl" tabIndex={0}>
            {t('landing.heroDesc', 'Next-gen smart lighting for homes, offices, and beyond. Experience the future of illumination.')}
          </p>
          <a
            href="#cta"
            className="inline-block mt-4 px-8 py-3 rounded-xl font-semibold text-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-400"
            style={{
              background: colorSystem.gradients.neon,
              transition: animations.transitions.smooth,
              transform: isHovered ? 'scale(1.03)' : isPressed ? 'scale(0.97)' : 'scale(1)',
              boxShadow: isHovered ? '0 8px 32px 0 rgba(6,182,212,0.3)' : '0 4px 16px 0 rgba(6,182,212,0.15)',
            }}
            {...hoverProps}
            {...clickProps}
          >
            {t('landing.ctaButton', 'Shop Now')}
          </a>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt={t('landing.heroImgAlt', 'Futuristic neon lighting')}
            className="rounded-3xl shadow-2xl w-full max-w-md border-4 border-cyan-400/30 animate-fade-in"
            loading="lazy"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-8 bg-slate-900/90 rounded-t-3xl shadow-inner animate-fade-in-up" aria-label="Features">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
          {t('landing.features', 'Why Choose NeonTech?')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div key={f.titleKey} className="flex flex-col items-center p-8 bg-slate-800/80 rounded-2xl shadow-lg hover:scale-105 transition-transform" tabIndex={0}>
              <span className="text-5xl mb-4" aria-hidden="true">{f.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{t(f.titleKey)}</h3>
              <p className="text-slate-300 text-center">{t(f.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-8 bg-gradient-to-br from-cyan-950 to-purple-950 animate-fade-in-up" aria-label="Testimonials">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
          {t('landing.testimonials', 'What Our Customers Say')}
        </h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {testimonials.map((tst, i) => (
            <blockquote key={i} className="flex-1 bg-slate-800/80 rounded-2xl shadow-lg p-8 text-lg text-slate-200 relative">
              <span className="absolute left-4 top-4 text-4xl text-cyan-400">“</span>
              <p className="mb-4">{t(tst.quoteKey)}</p>
              <footer className="text-slate-400 text-sm mt-2">— {tst.name}, {tst.role}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta" className="py-20 px-8 flex flex-col items-center bg-slate-900/95 animate-fade-in-up" aria-label="Call to Action">
        <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient-x">
          {t('landing.ctaTitle', 'Ready to upgrade your lighting?')}
        </h2>
        <a
          href="#"
          className="px-10 py-4 rounded-2xl font-bold text-xl shadow-xl focus:outline-none focus:ring-4 focus:ring-cyan-400"
          style={{
            background: colorSystem.gradients.neon,
            transition: animations.transitions.elastic,
            transform: isHovered ? 'scale(1.05)' : isPressed ? 'scale(0.97)' : 'scale(1)',
            boxShadow: isHovered ? '0 12px 48px 0 rgba(6,182,212,0.4)' : '0 6px 24px 0 rgba(6,182,212,0.18)',
          }}
          {...hoverProps}
          {...clickProps}
        >
          {t('landing.ctaButton', 'Shop NeonTech Now')}
        </a>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 text-center text-slate-400 text-sm bg-slate-950/80 rounded-t-3xl mt-8">
        &copy; {new Date().getFullYear()} NeonTech. {t('landing.rights', 'All rights reserved.')}
      </footer>
    </div>
  );
};

export default LandingPageTailwindReact;
