'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const socials = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/gilveloza',
      color: 'hover:text-pink-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/gilveloza/',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:gilveloza@gmail.com',
      color: 'hover:text-red-500',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-black" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          {t.contact.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className={`p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 ${social.color} transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl`}
              aria-label={social.name}
            >
              <social.icon size={28} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
