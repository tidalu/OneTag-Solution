# OneTag Smart Solutions

A modern, minimalist website for OneTag Smart Solutions - smart retail price tag technology.

## Features

- **Video Hero Section**: Autoplay background video that transitions to static hero after 6 seconds
- **Multi-language Support**: English, Uzbek (O'zbek), and Russian (Русский)
- **Light/Dark Mode**: Smooth theme switching with animated transitions
- **Glassmorphism Design**: DiaBrowser-inspired aesthetic with glass panels and soft gradients
- **Framer Motion Animations**: Smooth transitions and hover effects throughout
- **Responsive Design**: Optimized for mobile and desktop

## Getting Started

### Replace the Hero Video

The placeholder video is located at `public/hero-video.mp4`. Replace it with your actual retail store video:

1. Record or obtain a video showcasing smart price tags in retail stores
2. Recommended specs:
   - Format: MP4 (H.264 codec)
   - Resolution: 1920x1080 or higher
   - Duration: 5-10 seconds (will loop)
   - File size: Under 5MB for optimal loading
3. Replace `public/hero-video.mp4` with your video file

### Customizing Translations

Edit the translation files in `public/locales/`:
- `en.json` - English
- `uz.json` - Uzbek
- `ru.json` - Russian

### Theme Customization

Modify colors and styles in `app/globals.css`:
- Light mode colors in `:root`
- Dark mode colors in `.dark`
- Glassmorphism effects in `.glass` classes

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (with Cyrillic support)

## Deployment

Deploy to Vercel with one click or push to GitHub and connect your repository.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Note: Video autoplay requires muted playback and may not work on all mobile browsers in low-power mode.
