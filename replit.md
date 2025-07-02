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
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```