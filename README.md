# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed to showcase your skills, projects, and experience in an impressive way.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- ⚡ Fast performance with Next.js
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- 🌈 Beautiful gradient effects
- 📧 Contact form
- 🚀 Easy to customize

## Sections

- **Hero**: Eye-catching introduction with social links
- **About**: Personal information and highlights
- **Skills**: Technical skills with progress bars
- **Projects**: Showcase of featured projects
- **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, and description
   - Update social media links

2. **About Section** (`components/About.tsx`):
   - Modify the about text
   - Update feature highlights

3. **Skills Section** (`components/Skills.tsx`):
   - Add/remove skills
   - Adjust skill levels (0-100)

4. **Projects Section** (`components/Projects.tsx`):
   - Add your projects
   - Update project descriptions and links

5. **Contact Section** (`components/Contact.tsx`):
   - Update contact information
   - Configure form submission (currently logs to console)

6. **Metadata** (`app/layout.tsx`):
   - Update page title and description

### Styling

- Colors can be customized in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This portfolio can be easily deployed on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform that supports Next.js

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons

## License

This project is open source and available under the MIT License.

