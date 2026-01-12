import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Gil Veloza - Founder & Digital Product Builder',
  description: 'Startup founder and indie maker building apps and digital products that help people grow.',
  keywords: ['startup', 'founder', 'indie maker', 'apps', 'digital products', 'Moora'],
  authors: [{ name: 'Gil Veloza' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Gil Veloza - Founder & Digital Product Builder',
    description: 'Building startups, apps, and digital products that make a difference.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-black text-white transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="pt-20">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
