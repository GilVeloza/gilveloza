# gilveloza-web

Personal website for Gil Veloza - Founder, Builder, and Indie Maker.

## Features

- ✅ **Multi-language support** (English, Spanish, Portuguese)
- ✅ **Dark/Light mode** with persistent preference
- ✅ **Fully responsive** mobile-first design
- ✅ **Smooth animations** powered by Framer Motion
- ✅ **Featured project showcase** (Moora iOS app)
- ✅ **SEO optimized**
- ✅ **Fast loading** with Next.js 14

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Name and branding**: Search for "Gil Veloza" and "GV" throughout the codebase and replace with your name/initials.

2. **Social links**: Update the URLs in [components/Contact.tsx](components/Contact.tsx):
   - Instagram
   - Twitter/X
   - LinkedIn
   - Email

3. **Profile photo**: Replace the avatar placeholder in [components/Hero.tsx](components/Hero.tsx) with your photo.

4. **Translations**: Modify content in [lib/translations.ts](lib/translations.ts) for each language.

### Add New Projects

Edit [components/Projects.tsx](components/Projects.tsx) to add more projects in the upcoming projects section.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This project can be easily deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any static hosting service

## License

© 2026 Gil Veloza. All rights reserved.
