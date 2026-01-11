'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const languageNames = {
    en: 'English',
    es: 'Español',
    pt: 'Português',
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © {currentYear} Gil Veloza. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
