# Zonely Space - 1-Minute Mindful Breathing App

## Overview

Zonely Space is a minimalist web application designed to provide users with a 1-minute guided breathing experience for instant calm and focus. The application features a clean, modern interface with animated breathing circles and timed breathing cycles based on science-backed mindfulness techniques.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom mindfulness-themed color palette
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth breathing circle animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query for server state and React hooks for local state

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload with Vite integration in development mode

### Project Structure
```
├── client/          # Frontend React application
│   ├── src/
│   │   ├── pages/           # All site pages
│   │   │   ├── home.tsx             # Main breathing exercise page
│   │   │   ├── about.tsx            # About Zonely Space
│   │   │   ├── about-technique.tsx  # About 4-4-4-4 breathing method
│   │   │   ├── benefits.tsx         # Benefits of daily practice
│   │   │   ├── practice-guide.tsx   # How to practice anywhere
│   │   │   ├── blog.tsx             # Blog listing page
│   │   │   ├── contact.tsx          # Contact and FAQ
│   │   │   ├── privacy.tsx          # Privacy policy with AdSense compliance
│   │   │   └── terms.tsx            # Terms of service
│   │   ├── components/      # Reusable UI components
│   │   └── lib/            # Utilities and configuration
│   └── public/         # Static assets and SEO files
├── server/          # Backend Express application
├── shared/          # Shared TypeScript types and schemas
└── migrations/      # Database migration files
```

## Key Components

### Frontend Components
- **BreathingCircle**: Animated component that guides the breathing rhythm with visual and text cues
- **ZenButton**: Main interaction button to start/stop breathing sessions
- **FooterLinks**: Static footer with links to other mindfulness apps
- **UI Components**: Complete Shadcn/ui component library for consistent design

### Backend Components
- **Storage Interface**: Abstracted data layer with memory-based implementation
- **Route Registration**: Centralized API route management
- **Vite Integration**: Development server integration for hot reloading

### Breathing Logic
- **4-Phase Cycle**: Inhale (4s) → Hold (4s) → Exhale (4s) → Hold (4s)
- **60-Second Sessions**: Precisely timed 1-minute breathing experiences
- **Visual Feedback**: Synchronized circle scaling and color transitions

## Data Flow

1. **Session Initiation**: User clicks "Start 1-Minute Zen" button
2. **Timer Management**: Multiple timers coordinate breathing phases and session duration
3. **Animation Sync**: Framer Motion animations synchronized with breathing state
4. **Session Completion**: Automatic transition to completion state with visual feedback
5. **Reset Capability**: Clean state reset for subsequent sessions

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Query for state management
- **Animation**: Framer Motion for smooth transitions
- **UI Framework**: Radix UI primitives with Shadcn/ui components
- **Styling**: Tailwind CSS with utility-first approach
- **Date Handling**: date-fns for time calculations
- **Routing**: Wouter for lightweight routing

### Backend Dependencies
- **Database**: Neon serverless PostgreSQL with Drizzle ORM
- **Validation**: Zod for schema validation with Drizzle integration
- **Session Storage**: connect-pg-simple for PostgreSQL session store
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Replit Integration**: Vite plugins for Replit development environment
- **Build Tools**: Vite for frontend, esbuild for backend bundling
- **CSS Processing**: PostCSS with Tailwind CSS and Autoprefixer

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite development server with HMR
- **Database**: Environment variable-based PostgreSQL connection
- **Static Assets**: Served through Vite development middleware

### Production Build
- **Frontend**: Vite builds optimized bundle to `dist/public`
- **Backend**: esbuild creates single bundle in `dist/` directory
- **Static Serving**: Express serves built frontend assets
- **Database**: Production PostgreSQL via DATABASE_URL environment variable

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Session Storage**: PostgreSQL-backed session store
- **Build Process**: Separate frontend and backend build steps

## Changelog

```
Changelog:
- July 02, 2025: Initial setup with complete mindfulness app
- July 02, 2025: Enhanced for Google AdSense compliance
  - Removed affiliate footer links per user request
  - Added comprehensive educational content about breathing science
  - Enhanced SEO with detailed meta tags and structured data
  - Added step-by-step usage instructions
  - Improved accessibility with semantic HTML and ARIA labels
  - Added benefits section with visual indicators
  - Optimized content for high-value, original information
- July 02, 2025: Full AdSense compliance implementation
  - Created essential pages: About, Contact, Privacy Policy
  - Added sticky navigation with proper page linking
  - Expanded home page content to 1200+ words
  - Added robots.txt for search engine indexability
  - Enhanced structured data markup for SEO
  - Created comprehensive educational sections
  - Added physiological impact explanations
  - Included habit formation guidance
  - Provided stress response education
  - Made site fully publicly accessible without login
- July 02, 2025: Complete SEO optimization for search engine indexing
  - Enhanced HTML head with comprehensive meta tags including robots, canonical, and Open Graph
  - Created optimized sitemap.xml with proper URL structure and priorities
  - Updated robots.txt with specific crawler instructions and sitemap reference
  - Added enhanced structured data (JSON-LD) for WebApplication and Organization schemas
  - Implemented security.txt file for responsible disclosure practices
  - Added performance and security headers via Vercel configuration
  - Verified semantic HTML structure with proper heading hierarchy
  - Ensured all pages return 200 OK status and are publicly accessible
  - Optimized for mobile-first indexing with responsive design
  - Added proper caching headers for static assets and XML files
- August 31, 2025: Transformed into comprehensive mindfulness resource hub
  - Created About Mindful Breathing page with 600+ word article explaining 4-4-4-4 method
  - Added Benefits of Daily Practice page covering stress reduction and mental health benefits
  - Created How to Practice Anywhere page with tips for beginners and mobile-friendly suggestions
  - Added blog section with 10+ mindfulness articles (500+ words each)
  - Updated navigation to include all new sections and enhanced mobile responsiveness
  - Enhanced existing Privacy Policy with Google AdSense compliance and opt-out instructions
  - Added comprehensive Terms of Service page for legitimacy and trust
  - Updated SEO metadata and sitemap for all new pages
  - Enhanced Contact page with FAQ section and detailed support information
  - Created multi-page resource hub structure for better AdSense approval odds
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```