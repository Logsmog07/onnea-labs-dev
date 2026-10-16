Site Architecture Overview
This document provides a high-level explanation of how the Onnea Labs website is structured and how different directories are utilized.

Technology Stack
The site is built with a modern, high-performance stack:

Framework: Next.js (using the App Router)
Language: TypeScript
Styling: Tailwind CSS 4
Animations: Framer Motion & Lenis (for smooth scrolling)
Icons: Lucide React
Directory Structure
The project follows a standard Next.js src directory pattern:

1. src/app/ (Routing & Layouts)
This is the heart of the application, using Next.js App Router.

layout.tsx: Defines the root layout (HTML, body, global fonts, navbar, and footer) shared across all pages.
page.tsx: The entry point for the homepage (/).
globals.css: Contains global Tailwind CSS styles and custom CSS variables for colors and gradients.
services/:
page.tsx: The main services listing page (/services).
[slug]/page.tsx: A dynamic route that generates individual service pages (e.g., /services/web-development) based on a unique identifier (slug).
2. src/components/ (UI Components)
Reusable UI pieces organized by their role:

layout/: Components that define the site's frame, such as Navbar.tsx and Footer.tsx.
sections/: Larger blocks of content used primarily on the homepage or main pages (e.g., Hero.tsx, Features.tsx).
ui/: Atomic, low-level components like buttons, cards, and specialized containers (e.g., GlassCard.tsx, GradientButton.tsx).
3. src/lib/ (Logic & Data)
Utilities and shared logic:

services.ts: Centralizes the data for all service offerings. This is where the content for the dynamic [slug] pages is stored.
animations.ts: Contains reusable Framer Motion animation variants to ensure consistent motion across the site.
utils.ts: Helper functions for merging Tailwind classes and other common tasks.
4. public/ (Static Assets)
Contains images, icons, and local fonts that are served directly by the web server.

How the Site Works
Request Flow: When a user visits a URL, Next.js matches it to a file in src/app.
Dynamic Rendering: For service pages, the [slug]/page.tsx file reads the slug from the URL, looks up the corresponding data in src/lib/services.ts, and renders the page using common section components.
Visual Experience: Tailwind CSS 4 provides the styling, while Framer Motion and Lenis create a premium, smooth feel with micro-animations and smooth scrolling.
Consistency: Shared components in src/components ensure that the design remains uniform across all pages.