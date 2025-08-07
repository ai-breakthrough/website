# Bevar Ukraine Website

A React-based website built with Vite, Tailwind CSS, and Radix UI components.

## Docker Setup

### Prerequisites

- Docker
- Docker Compose

### Quick Start with Docker

1. **Build and run with Docker Compose:**

   ```bash
   docker-compose up --build
   ```

   The website will be available at `http://localhost:3000`

2. **Run in background:**

   ```bash
   docker-compose up -d --build
   ```

3. **Stop the container:**
   ```bash
   docker-compose down
   ```

### Manual Docker Commands

1. **Build the Docker image:**

   ```bash
   docker build -t bevar-ukraine-website .
   ```

2. **Run the container:**

   ```bash
   docker run -p 3000:80 bevar-ukraine-website
   ```

3. **Run in background:**
   ```bash
   docker run -d -p 3000:80 --name bevar-ukraine-website bevar-ukraine-website
   ```

### Development Setup (without Docker)

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start development server:**

   ```bash
   pnpm dev
   ```

3. **Build for production:**

   ```bash
   pnpm build
   ```

4. **Preview production build:**
   ```bash
   pnpm preview
   ```

## Features

- React 19 with Vite
- Tailwind CSS for styling
- Radix UI components
- Responsive design
- Modern UI/UX

## Project Structure

```
src/
├── components/     # React components
├── assets/        # Static assets
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── ui/            # UI components
```

## Technologies Used

- React 19
- Vite
- Tailwind CSS
- Radix UI
- Framer Motion
- React Router DOM
