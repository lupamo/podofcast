# pod-of-cast web app

A modern podcast platform built with Next.js and TypeScript, featuring podcast listings, episode playback, and a blog section.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Development](#development)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
  - [Testing](#testing)
  - [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Podcast Discovery** - Browse and search for podcasts
- **Episode Streaming** - Listen to podcast episodes with a custom audio player
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Blog Platform** - Read articles related to podcasts and audio content
- **User Accounts** - Save favorite podcasts and create playlists (coming soon)

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: React Context API & custom hooks
- **Authentication**: NextAuth.js (planned)
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn or pnpm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/lupamo/podcast-app.git
   cd podoofcast
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your configuration

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser

## 📁 Project Structure

```
podofcast/
├── app/                   # App Router (Next.js 13+)
├── components/            # Reusable UI components
├── lib/                   # Utility functions, helpers, and custom hooks
├── public/                # Static assets (images, favicons, etc.)
├── styles/                # Global styles
└── types/                 # TypeScript type definitions
```

Key pages:
- `/` - Landing page
- `/about` - About us page  
- `/podcasts` - Podcast listing
- `/podcasts/[slug]` - Podcast detail with episodes
- `/blog` - Blog listing
- `/blog/[slug]` - Individual blog post


### Running Locally

```bash
# Development mode w
# Development mode with hot reloading
npm run dev

# Run tests
npm run test

# Lint code
npm run lint
