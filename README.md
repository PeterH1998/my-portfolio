# My Portfolio

A responsive personal portfolio website that presents selected projects, professional background, and contact information in a polished recruiter-friendly format.

## Overview

This project is a React-based portfolio site for showcasing work samples and professional profile information. It was built to make it easy for recruiters, hiring managers, and collaborators to review projects, understand technical skills, and find contact details quickly.

The site includes a project gallery, detailed project pages, an About section, and data-driven content loaded from JSON files.

## Key Features

- Project gallery with interactive project selection
- Detailed project pages with descriptions, highlights, challenges, and tech stack notes
- Media previews for portfolio projects using images and videos from the `public/assets` folder
- About page with bio, toolkit, resume link, LinkedIn link, and email contact
- JSON-driven profile and project content for easier updates
- Responsive layout built for desktop and mobile viewing
- Loading and error states for JSON content
- Client-side routing for project and profile pages

## Tech Stack

- React
- React DOM
- React Router DOM
- Vite
- Tailwind CSS
- JavaScript
- HTML
- CSS
- ESLint
- Netlify-style `_redirects` file for client-side routing support

## Screenshots or Demo

Screenshots or demo coming soon.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Install project dependencies:

```bash
npm install
```

### Environment Variables

No environment variables are required for the current project setup.

### Run Locally

Start the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
my-portfolio/
|-- public/
|   |-- assets/          # Images, videos, resume file, icons, and visual project assets
|   |-- data/            # JSON content for profile and project details
|   `-- _redirects       # Redirect rule for client-side routing
|-- src/
|   |-- components/      # Shared layout, header, async state, and project detail components
|   |-- hooks/           # Custom hook for loading JSON resources
|   |-- pages/           # Projects and About page views
|   |-- App.jsx          # App routes
|   |-- index.css        # Tailwind import, theme fonts, and global utility styles
|   `-- main.jsx         # React entry point
|-- eslint.config.js     # ESLint configuration
|-- index.html           # HTML entry file
|-- package.json         # Scripts and dependencies
`-- vite.config.js       # Vite configuration
```

## What I Learned

This project demonstrates how to build a portfolio that is both visually polished and easy to maintain. It shows practical experience with React routing, reusable components, JSON-based content management, responsive layouts, loading states, and organizing project information for a non-technical audience.

## Future Improvements

- Add a live demo link once the site is deployed
- Add screenshots directly to the README
- Add a dedicated GitHub link in the profile data if needed
- Improve accessibility testing across all interactive states
- Add automated tests for key navigation and rendering behavior
- Add a contact form if a backend or form service is introduced

## Contact

- GitHub: `[Add your GitHub profile URL]`
- LinkedIn: `http://www.linkedin.com/in/panagiotis-hondropoulos`
- Email: `phondropoulos@gmail.com`
