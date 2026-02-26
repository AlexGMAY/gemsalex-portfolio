---
title: "Docker for Beginners: Containerize Your First Next.js App"
date: "2025-11-11"
excerpt: "A complete, hands-on guide to Containerization of a Next.js app."
category: "Tutorial"
tags: ["docker", "devops", "containerization", "next.js"]
featured: true
level: "Beginner"
author: "Merveille Alexander"
readTime: "15 min read"
---

# Docker for Beginners: Containerize Your First Next.js App

*Stop saying "it works on my machine" and learn to package your app for anywhere*

*Published on May 31, 2026 · 18 min read*

---

## Before We Begin: The Problem Docker Solves

I'll never forget my first deployment disaster.

It was 11 PM on a Sunday. I'd spent three days building a Next.js app for a client. It worked perfectly on my machine. I ran `npm run build` — all good. I ran `npm start` — beautiful. Time to deploy.

I copied the files to the server, installed Node.js, ran `npm install`, and... errors. Different Node version. Missing dependencies. Wrong environment variables. The server had a completely different setup than my machine.

Three hours later, I was still fighting it. The client wasn't happy. I wasn't sleeping.

**Docker solves this forever.**

With Docker, you package your app with everything it needs:
- The exact Node.js version
- All dependencies
- Environment configuration
- Even the operating system bits

Then you run that package anywhere — your laptop, your server, the cloud — and it works exactly the same.

**What you'll learn:**
- What containers are and why they matter
- How to write a Dockerfile for a Next.js app
- Building and running containers
- Docker Compose for multi-service apps
- Best practices for production

**Prerequisites:**
- Basic terminal/command line knowledge
- A Next.js app (we'll create one)
- Docker installed (instructions below)

**Time to complete:** About 1-2 hours

Let's containerize your first app.

---

## Part 1: What Is Docker? (The Mental Model)

### Think of It Like Shipping Containers

Before shipping containers, moving goods was chaos. Boxes of different sizes, shapes, and handling requirements. Ships, trains, and trucks couldn't work together easily.

Shipping containers changed everything. Now every container is the same size and shape. Ships are built to carry them. Trains and trucks too. You pack your goods once, and the container moves anywhere.

**Docker containers are like shipping containers for software.**

You package your app with everything it needs. Then any system with Docker can run it — your laptop, your company's servers, AWS, Google Cloud — without changes.

### Containers vs Virtual Machines

This confuses everyone at first. Let me clarify:

**Virtual Machines:**
- Each VM has its own operating system
- Heavy (gigabytes)
- Slow to start (minutes)
- Good isolation

**Containers:**
- Share the host's operating system
- Light (megabytes)
- Instant start (seconds)
- Good enough isolation for most apps

Think of VMs as houses (each with its own foundation) and containers as apartments (sharing the same building but isolated units).

### Key Docker Concepts

| Term | What It Means |
|------|---------------|
| **Image** | A blueprint/template for a container (like a class in programming) |
| **Container** | A running instance of an image (like an object) |
| **Dockerfile** | Instructions to build an image |
| **Registry** | Storage for images (Docker Hub is the default) |
| **Volume** | Persistent storage that survives container restarts |

---

## Part 2: Installing Docker

### Step 1: Download and Install

**Mac:**
1. Go to [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/)
2. Download Docker Desktop for Mac
3. Install (drag to Applications)
4. Open Docker Desktop (you'll see the whale icon in menu bar)

**Windows:**
1. Go to [docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop/)
2. Download Docker Desktop for Windows
3. Run installer (enable WSL 2 if prompted)
4. Restart your computer
5. Open Docker Desktop

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER  # Run Docker without sudo
# Log out and back in
```

### Step 2: Verify Installation

```bash
docker --version
docker-compose --version
```

You should see version numbers.

### Step 3: Test It Works

```bash
docker run hello-world
```

You'll see:
```
Hello from Docker!
This message shows that your installation appears to be working correctly.
```

Congratulations! Docker is running.

---

## Part 3: Create a Simple Next.js App

First, let's create a Next.js app to containerize.

```bash
# Create a new Next.js app
npx create-next-app@latest my-docker-app --typescript --tailwind --app --use-npm

# Navigate into the project
cd my-docker-app

# Test it runs
npm run dev
```

Open `http://localhost:3000` to verify it works.

Now let's make a small change so we know our containerized version is working. Edit `app/page.tsx`:

```tsx
// app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Dockerized Next.js App! 🐳
      </h1>
      <p className="text-xl text-gray-600">
        This app is running inside a Docker container
      </p>
    </main>
  );
}
```

Stop the dev server with `Ctrl+C`.

---

## Part 4: Your First Dockerfile

A **Dockerfile** is a recipe for building your container image.

### Step 1: Create Dockerfile

In the root of your project (same level as `package.json`), create a file named `Dockerfile` (no extension):

```dockerfile
# Dockerfile

# 1. Base image - what OS and tools we start with
FROM node:18-alpine

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package files first (for better caching)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the app
COPY . .

# 6. Build the Next.js app
RUN npm run build

# 7. Expose port 3000
EXPOSE 3000

# 8. Start the app
CMD ["npm", "start"]
```

### Step 2: Create .dockerignore

Just like `.gitignore` tells Git what to ignore, `.dockerignore` tells Docker what to ignore. Create `.dockerignore`:

```
node_modules
.next
.git
.env
.env.local
.DS_Store
README.md
```

This keeps your image small and secure.

### Step 3: Build Your Image

```bash
docker build -t my-nextjs-app .
```

Let's break this down:
- `docker build` — Build an image
- `-t my-nextjs-app` — Tag it with a name
- `.` — Build from current directory

This will take a minute or two the first time. You'll see each step executing.

### Step 4: Run Your Container

```bash
docker run -p 3000:3000 my-nextjs-app
```

- `-p 3000:3000` — Map port 3000 on your computer to port 3000 in the container
- `my-nextjs-app` — The image to run

Open `http://localhost:3000`. You should see your app!

### Step 5: Stop the Container

Press `Ctrl+C` in the terminal where it's running.

---

## Part 5: Understanding What Just Happened

Let's break down the Dockerfile step by step:

### FROM node:18-alpine

This is your **base image**. Think of it as your starting point:

- `node:18` — Official Node.js image with Node 18
- `-alpine` — Alpine Linux version (tiny, only 5MB!)

Why Alpine? Regular Node image is ~1GB. Alpine is ~50MB. Smaller images = faster downloads = happier deployments.

### WORKDIR /app

Sets the working directory inside the container. All subsequent commands run from here.

### COPY package*.json ./

This copies `package.json` and `package-lock.json` (if exists) to the container.

**Why copy these separately?** Docker caches each step. If you change your code but not your dependencies, Docker reuses the cached `npm install` step. Much faster builds.

### RUN npm install

Installs dependencies inside the container.

### COPY . .

Copies the rest of your app.

### RUN npm run build

Builds your Next.js app for production.

### EXPOSE 3000

Documentation that your app uses port 3000. Doesn't actually publish the port — that's what `-p` does.

### CMD ["npm", "start"]

The command that runs when the container starts. `npm start` runs your production server.

---

## Part 6: Development vs Production (Different Needs)

Our Dockerfile works for production, but it's terrible for development. Every code change would require rebuilding the image. Let's fix that.

### Development Dockerfile

Create `Dockerfile.dev`:

```dockerfile
# Dockerfile.dev

FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Start in development mode
CMD ["npm", "run", "dev"]
```

Build and run:

```bash
docker build -f Dockerfile.dev -t my-nextjs-app-dev .
docker run -p 3000:3000 my-nextjs-app-dev
```

But we still have the rebuild problem. Every code change requires rebuilding. Not great.

### Enter Volumes for Live Reload

Volumes let you share files between your computer and the container. Changes on your computer appear instantly in the container.

```bash
docker run -p 3000:3000 -v $(pwd):/app my-nextjs-app-dev
```

- `-v $(pwd):/app` — Mount current directory to `/app` in container

Now changes to your code will trigger Next.js's hot reload! But wait — there's a problem.

### The node_modules Issue

When you mount your entire project, the container's `node_modules` gets overwritten by your host's `node_modules` (which might be empty or different). Fix with a **named volume**:

```bash
docker run -p 3000:3000 \
  -v $(pwd):/app \
  -v /app/node_modules \
  my-nextjs-app-dev
```

The second `-v /app/node_modules` creates a special volume that persists `node_modules` from the container, not your host.

### Development Script

Create a shell script `dev.sh`:

```bash
#!/bin/bash
docker run -p 3000:3000 \
  -v $(pwd):/app \
  -v /app/node_modules \
  my-nextjs-app-dev
```

Make it executable: `chmod +x dev.sh`

Now development is smooth:
```bash
./dev.sh
```

---

## Part 7: Docker Compose – Stop Typing Long Commands

Docker Compose lets you define multi-container apps in a YAML file. Even for single containers, it saves typing.

### Step 1: Create docker-compose.yml

```yaml
# docker-compose.yml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
```

### Step 2: Run with Compose

```bash
# Start in foreground
docker-compose up

# Start in background
docker-compose up -d

# Stop
docker-compose down

# View logs
docker-compose logs -f
```

That's it! Compose handles all the complex volume mounts and port mappings.

### Production Compose File

Create `docker-compose.prod.yml`:

```yaml
# docker-compose.prod.yml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: always
```

Run production:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

---

## Part 8: Adding a Database with Docker Compose

Real apps need databases. Let's add PostgreSQL.

### Step 1: Update docker-compose.yml

```yaml
# docker-compose.yml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://postgres:password@db:5432/myapp
    depends_on:
      - db

  db:
    image: postgres:15-alpine
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### Step 2: Install Prisma (Optional)

If you want to use Prisma with your database:

```bash
npm install prisma @prisma/client
npx prisma init
```

Update `.env`:
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/myapp"
```

But in Docker, the database host is `db` (the service name), not `localhost`.

### Step 3: Run Everything

```bash
docker-compose up
```

Now you have:
- Next.js app at `http://localhost:3000`
- PostgreSQL at `localhost:5432`

The `depends_on` ensures the database starts before your app.

---

## Part 9: Optimizing for Production

Production images should be small, secure, and fast. Here's an optimized Dockerfile:

```dockerfile
# Dockerfile.prod
# Multi-stage build for smallest possible image

# Stage 1: Dependencies and Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm ci --only=production

# Copy source
COPY . .

# Build the app
RUN npm run build

# Stage 2: Production image
FROM node:18-alpine

WORKDIR /app

# Copy built assets from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Expose port
EXPOSE 3000

# Run as non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

# Start the app
CMD ["npm", "start"]
```

**What this does:**
- **Multi-stage build** — First stage builds, second stage only includes runtime files
- **No dev dependencies** — Only production code in final image
- **Non-root user** — Security best practice
- **Smaller image** — Final image is ~150MB instead of ~1GB

Build it:
```bash
docker build -f Dockerfile.prod -t my-nextjs-app-prod .
```

---

## Part 10: Docker Commands Cheat Sheet

### Image Commands
```bash
# Build an image
docker build -t myapp:latest .

# List images
docker images

# Remove an image
docker rmi myapp:latest

# Remove unused images
docker image prune
```

### Container Commands
```bash
# Run a container
docker run -p 3000:3000 myapp

# Run in background
docker run -d -p 3000:3000 myapp

# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop a container
docker stop container_id

# Start a stopped container
docker start container_id

# Remove a container
docker rm container_id

# View logs
docker logs container_id
docker logs -f container_id  # Follow logs

# Execute command in running container
docker exec -it container_id bash
```

### Compose Commands
```bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# Stop all services
docker-compose down

# Rebuild and start
docker-compose up --build

# View logs
docker-compose logs -f

# Stop and remove volumes (careful!)
docker-compose down -v
```

### Cleanup Commands
```bash
# Remove all stopped containers
docker container prune

# Remove all unused images
docker image prune -a

# Remove everything unused
docker system prune -a
```

---

## Part 11: Real-World Workflow

Here's how you'll actually use Docker day-to-day:

### Development
```bash
# Start everything
docker-compose up

# Make code changes (auto-reload works)
# View logs
docker-compose logs -f web

# Run migrations
docker-compose exec web npx prisma migrate dev

# Run tests
docker-compose exec web npm test
```

### Staging/Production
```bash
# Build production image
docker build -f Dockerfile.prod -t myapp:latest .

# Test locally
docker run -p 3000:3000 myapp:latest

# Push to registry
docker tag myapp:latest username/myapp:latest
docker push username/myapp:latest

# On server
docker pull username/myapp:latest
docker run -d -p 3000:3000 --env-file .env username/myapp:latest
```

### Deploy with Compose on Server
```bash
# On server, create docker-compose.prod.yml
docker-compose -f docker-compose.prod.yml up -d
docker-compose -f docker-compose.prod.yml logs -f
```

---

## Part 12: Common Problems and Solutions

### Problem 1: Port Already in Use

```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution:** Either stop the process using port 3000, or use a different host port:

```bash
docker run -p 3001:3000 myapp  # Maps host 3001 to container 3000
```

### Problem 2: node_modules Issues

```
Error: Cannot find module 'some-package'
```

**Solution:** Rebuild with clean install:

```bash
docker build --no-cache -t myapp .
```

### Problem 3: Permission Denied

```
Error: EACCES: permission denied
```

**Solution:** Your container is running as root. Either:
1. Use non-root user in Dockerfile (recommended)
2. Fix permissions: `RUN chown -R node:node /app`

### Problem 4: Container Exits Immediately

```bash
# Check why it exited
docker logs container_id

# Run interactively to see errors
docker run -it myapp /bin/sh
# Then manually start your app to see errors
```

### Problem 5: Changes Not Reflecting in Development

**Solution:** Check volume mounts are correct:

```bash
# Verify files are mounted
docker exec -it container_id ls -la /app
```

---

## Part 13: Docker Best Practices

### 1. Keep Images Small
- Use alpine variants
- Multi-stage builds
- Clear apt cache: `RUN apt-get clean && rm -rf /var/lib/apt/lists/*`
- Combine RUN commands: `RUN command1 && command2`

### 2. Use .dockerignore
Always include:
```
node_modules
.git
.env
.DS_Store
README.md
.vscode
.idea
```

### 3. Don't Run as Root
```dockerfile
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs
```

### 4. Layer Order Matters
Put things that change least often first:
1. Base image
2. Package files
3. Install dependencies
4. Copy source
5. Build

### 5. Use Specific Tags
```dockerfile
# ❌ Bad - latest could change
FROM node:latest

# ✅ Good - specific version
FROM node:18.17.0-alpine
```

### 6. One Process Per Container
Each container should do one thing. If you need multiple processes, use multiple containers.

### 7. Use Environment Variables
```dockerfile
# Dockerfile
ENV NODE_ENV=production
```

```bash
# Override at runtime
docker run -e NODE_ENV=development myapp
```

---

## Part 14: Your Docker Cheat Sheet

### Essential Commands
```bash
# Build
docker build -t myapp .

# Run
docker run -p 3000:3000 myapp

# List containers
docker ps

# Stop container
docker stop $(docker ps -q)

# Remove everything
docker system prune -a

# Compose up
docker-compose up

# Compose down
docker-compose down
```

### Dockerfile Template for Next.js

```dockerfile
# Development
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

# Production (multi-stage)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]
```

### docker-compose.yml Template

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    env_file:
      - .env

  db:
    image: postgres:15-alpine
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

---

## What You've Learned

Congratulations! You can now:

- [ ] Explain what containers are and why they matter
- [ ] Write a Dockerfile for a Next.js app
- [ ] Build and run containers
- [ ] Use volumes for development
- [ ] Docker Compose for multi-service apps
- [ ] Optimize images for production
- [ ] Debug common Docker issues

---

## Next Steps

You've mastered Docker basics. Here's what to learn next:

1. **Docker Swarm** — Built-in orchestration
2. **Kubernetes** — Industry-standard container orchestration
3. **CI/CD with Docker** — Automate builds and deployments
4. **GitHub Actions + Docker** — Build and push on every commit
5. **Monitoring containers** — Logs, metrics, alerts
6. **Security scanning** — Check images for vulnerabilities

---

## Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/) — Find pre-built images
- [Play with Docker](https://labs.play-with-docker.com/) — Practice in browser
- [Awesome Docker](https://github.com/veggiemonk/awesome-docker) — Curated resources

---

## Final Thoughts

That night I spent fighting server configuration? It never happened again after Docker. Now I ship apps with confidence, knowing they'll run exactly the same everywhere.

Docker isn't just a tool — it's peace of mind. Your app packaged with everything it needs, ready to run anywhere. No more "works on my machine." No more late-night debugging server configurations. Just your app, running exactly as you intended.

Start containerizing your apps today. Future you will be grateful.

---

*Enjoyed this tutorial? I write about DevOps, containers, and web development every Month. Follow me on X [@themarelbiz](https://x.com/@themarelbiz). And if you containerize something cool, —I'd love to see it!*

---
