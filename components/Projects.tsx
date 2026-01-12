'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Instagram, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 px-6 bg-black" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          {t.projects.title}
        </motion.h2>

        {/* Featured Project - Moora */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative overflow-hidden rounded-2xl bg-black p-8 md:p-12 shadow-2xl border-2 border-white">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
              <Sparkles size={16} />
              {t.projects.featured}
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-1">
                <div className="w-32 h-32 rounded-2xl bg-black flex items-center justify-center overflow-hidden -ml-10">
                  <Image 
                    src="/logos/moora-logo.png" 
                    alt="Moora Logo" 
                    width={280} 
                    height={280}
                    className="object-contain"
                    onError={(e) => {
                      // Fallback to emoji if image not found
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="text-4xl hidden">🌙</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white -ml-6">Moora</h3>
              </div>
              <p className="text-lg md:text-xl text-white/90 mb-2 font-medium">iOS App</p>
              <p className="text-white/80 mb-8 text-lg max-w-2xl leading-relaxed">
                {t.projects.moora.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.getmoora.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white"
                >
                  <ExternalLink size={20} />
                  {t.projects.buttons.website}
                </a>
                
                <a
                  href="https://www.instagram.com/getmoora.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
                  style={{
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(black, black), linear-gradient(to right, #f309e1, #a145f7, #ffd700)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box'
                  }}
                >
                  <Instagram size={20} />
                  {t.projects.buttons.instagram}
                </a>
                
                <a
                  href="https://apps.apple.com/app/moora-journal-goal-tracker/id6757311668"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  {t.projects.buttons.appStore}
                </a>
                
                <button
                  disabled
                  className="inline-flex items-center px-6 py-3 bg-gray-300 text-gray-500 rounded-lg font-semibold cursor-not-allowed opacity-60 relative"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span className="flex items-center gap-2">
                    {t.projects.buttons.playStore}
                    <span className="text-xs bg-gray-400 text-white px-2 py-0.5 rounded uppercase tracking-wide">
                      {t.projects.comingSoon}
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Upcoming Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-xl bg-black p-8 shadow-lg border-2 border-white"
          >
            <div className="absolute top-4 right-4 bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
              {t.projects.comingSoon}
            </div>
            
            <div className="flex items-center gap-1 mb-4">
              <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center overflow-hidden">
                <Image 
                  src="/logos/hochstern-logo.png" 
                  alt="Hochstern Logo" 
                  width={48} 
                  height={48}
                  className="object-contain p-2"
                  onError={(e) => {
                    // Fallback to emoji if image not found
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="text-2xl hidden">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{t.projects.upcoming.project1}</h3>
            </div>
            <p className="text-gray-400 mb-6">
              {t.projects.upcoming.project1Description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative overflow-hidden rounded-xl bg-black p-8 shadow-lg border-2 border-white"
          >
            <div className="absolute top-4 right-4 bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
              {t.projects.comingSoon}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-500 mb-4">Project Beta</h3>
            <p className="text-gray-500">
              {t.projects.upcoming.project2}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
