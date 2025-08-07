# CoreAI.dk Website

A modern React website for CoreAI.dk built with Vite, Tailwind CSS, and shadcn/ui components.

## Docker Setup

### Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier management)

### Quick Start

1. **Build and run with Docker:**

   ```bash
   # Build the Docker image
   docker build -t coreai-website .

   # Run the container
   docker run -d -p 3000:80 --name coreai-website-container coreai-website
   ```

2. **Or use Docker Compose:**

   ```bash
   # Build and run with docker-compose
   docker-compose up --build
   ```

3. **Access the website:**
   - Open your browser and navigate to `http://localhost:3000`

### Docker Commands

**Build the image:**

```bash
docker build -t coreai-website .
```

**Run the container:**

```bash
docker run -d -p 3000:80 --name coreai-website-container coreai-website
```

**Stop the container:**

```bash
docker stop coreai-website-container
```

**Remove the container:**

```bash
docker rm coreai-website-container
```

**View logs:**

```bash
docker logs coreai-website-container
```

### Development

For local development without Docker:

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Services.jsx    # Services section
│   │   ├── About.jsx       # About section
│   │   ├── FAQ.jsx         # FAQ section
│   │   ├── Contact.jsx     # Contact section
│   │   ├── Footer.jsx      # Footer
│   │   └── Chatbot.jsx     # Chatbot component
│   ├── assets/             # Images and static assets
│   ├── lib/                # Utility functions
│   ├── hooks/              # Custom React hooks
│   ├── App.jsx             # Main App component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose configuration
├── nginx.conf              # Nginx configuration
└── package.json            # Dependencies and scripts
```

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **Nginx** - Web server for production

## Features

- Responsive design
- Modern UI components
- Smooth animations
- Interactive chatbot
- Contact form
- FAQ section
- Services showcase
- About section with company information

## Port Configuration

The website runs on port 3000 by default when using Docker. You can change this by modifying the port mapping in the docker run command or docker-compose.yml file.
