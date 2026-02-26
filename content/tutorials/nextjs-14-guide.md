---
title: "Next.js 14 Complete Guide"
date: "2024-01-18"
excerpt: "A comprehensive, step-by-step guide to building modern web applications with Next.js 14."
featured: true
category: "Tutorial"
tags: ["nextjs", "tutorial", "guide", "featured", "advanced"]
image: "/images/tutorials/nextjs-guide.jpg"
level: "intermediate"
author: "Merveille Alexander"
---

# Next.js 14 Complete Guide: A Beginner's Journey to Production

*A comprehensive, step-by-step guide to building modern web applications with Next.js 14*

---

## Before We Begin: Welcome to Your Next.js Journey

Hey friends! 👋 I remember when I first opened the Next.js documentation. My eyes glazed over. Server components? App Router? Static generation? It felt like everyone spoke a secret language I wasn't part of.

This tutorial is different. We're going to build a real project together—step by step, line by line. By the end, you'll have a working application and, more importantly, you'll understand *why* Next.js works the way it does.

**What we're building:** GloboTicket, an online ticket sales platform 

**What you'll learn:**
- Core concepts and practical applications
- Step-by-step implementation guide
- Best practices and optimization tips
- Real-world project structure

**Prerequisites:**
- Basic JavaScript knowledge (variables, functions, etc.)
- Some React experience (components, props, useState)
- A computer with Node.js installed

**Time to complete:** About 2-3 hours

Let's build something awesome together.

---

## Part 1: What Is Next.js and Why Should You Care?

### The Problem Next.js Solves

Imagine you're building a website with just React. You'd need to figure out:

- How do I handle routing? (React Router)
- How do I fetch data before showing the page? (useEffect)
- How do I make my site show up in Google searches? (SSR is hard)
- How do I optimize images? (manual work)
- How do I create API endpoints? (Express server)

That's a lot! Next.js solves all of these problems out of the box.

### What Makes Next.js Special

**Next.js is a React framework that gives you structure and superpowers.** Think of it as React with all the difficult parts already figured out .

Key superpowers include:

1. **File-based routing** — Create pages by making files, not writing route config
2. **Server-side rendering** — Pages load fast and work for SEO
3. **API routes** — Build your backend in the same project
4. **Image optimization** — Images resize and optimize automatically
5. **Built-in CSS support** — Any CSS solution works

### Next.js 14: What's New

The version we're using (14) brings some exciting improvements :

- **Turbopack** — 53% faster server startup, 94% faster code updates
- **Server Actions (stable)** — Call server code directly from components
- **Improved forms** — Better handling of form submissions
- **Partial Prerendering** — Mix static and dynamic content

Don't worry if these terms sound confusing. We'll use them all in this tutorial!

---

## Part 2: Setting Up Your First Next.js Project

### Step 1: Create the Project

Open your terminal and run:

```bash
npx create-next-app@latest globoticket --typescript --eslint --tailwind --app --use-yarn --no-src
```

Let's break down what each flag means :

| Flag | Purpose |
|------|---------|
| `--typescript` | Adds TypeScript for type safety |
| `--eslint` | Sets up code linting |
| `--tailwind` | Includes Tailwind CSS for styling |
| `--app` | Uses the new App Router (recommended) |
| `--use-yarn` | Uses Yarn as package manager |
| `--no-src` | Keeps files at root level (cleaner) |

### Step 2: Understand the Project Structure

Once the command finishes, open the project in VS Code and let's explore what we have :

```
globoticket/
├── app/                    # Main application folder
│   ├── layout.tsx          # Root layout (wraps all pages)
│   ├── page.tsx            # Homepage (/)
│   ├── globals.css         # Global styles
│   └── favicon.ico         # Browser tab icon
├── public/                 # Static assets (images, fonts)
├── next.config.js          # Next.js configuration
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

The magic is in the `app/` folder. Every file inside becomes a route automatically.

### Step 3: Run Your Project

```bash
cd globoticket
yarn dev
```

Open `http://localhost:3000` in your browser. You should see the default Next.js starter page. Congratulations! Your first Next.js app is running.

---

## Part 3: The App Router – File-Based Routing Made Simple

### How Routing Works

In Next.js, **folders define routes, files define UI** . This is the core concept to understand.

Here's the pattern:

```
app/
├── page.tsx           →  / (homepage)
├── about/
│   └── page.tsx       →  /about
├── blog/
│   ├── page.tsx       →  /blog (list of posts)
│   └── [slug]/
│       └── page.tsx   →  /blog/hello-world (dynamic)
└── dashboard/
    └── settings/
        └── page.tsx   →  /dashboard/settings
```

### Step 1: Create Your First Pages

Let's build the GloboTicket pages. First, clear the default content:

```bash
# Delete the default files
rm app/page.tsx
rm app/globals.css
```

Now create `app/page.tsx`:

```tsx
// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-8">
          Welcome to GloboTicket
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Find the best events in your city
        </p>
        <div className="text-center">
          <a 
            href="/events" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Browse Events
          </a>
        </div>
      </div>
    </main>
  );
}
```

### Step 2: Create an Events Page

Create a new folder `app/events` and add `page.tsx`:

```tsx
// app/events/page.tsx
export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Event cards will go here */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Sample Event</h2>
            <p className="text-gray-600 mb-4">This is a placeholder event</p>
            <a href="/events/1" className="text-blue-600 hover:underline">
              View Details →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
```

### Step 3: Create a Dynamic Event Detail Page

Now create a folder `app/events/[id]` with `page.tsx`. The `[id]` syntax means this is a **dynamic route** :

```tsx
// app/events/[id]/page.tsx
interface EventPageProps {
  params: {
    id: string;
  };
}

export default function EventDetailPage({ params }: EventPageProps) {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Event Details</h1>
        <p className="text-gray-600">
          You're viewing event with ID: {params.id}
        </p>
        <a href="/events" className="text-blue-600 hover:underline block mt-4">
          ← Back to Events
        </a>
      </div>
    </main>
  );
}
```

Test it out: visit `http://localhost:3000/events/42` and you'll see the ID displayed.

### Key Insight: Dynamic Routes

The `[id]` in the folder name becomes a parameter you can access. This works for any number of segments:
- `app/blog/[slug]/page.tsx` → `/blog/hello-world`
- `app/products/[category]/[id]/page.tsx` → `/products/electronics/123`
- `app/users/[...catchAll]/page.tsx` → catch-all routes

---

## Part 4: Layouts – The Secret to Consistent UI

### What Are Layouts?

Layouts are components that wrap around your pages and **persist across navigation** . Think headers, footers, sidebars—things that stay the same as users move around your site.

### Step 1: Create a Root Layout

Open `app/layout.tsx`. This is the root layout that wraps your entire app:

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GloboTicket',
  description: 'Your premier ticket booking platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            © 2026 GloboTicket. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
```

### Step 2: Create a Navbar Component

Create a `components` folder at the root and add `Navbar.tsx`:

```tsx
// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            GloboTicket
          </Link>
          
          <div className="flex space-x-8">
            <Link href="/events" className="hover:text-blue-600 transition">
              Events
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

**Important:** Use Next.js's `Link` component for navigation, not regular `<a>` tags. It enables client-side transitions without page reloads .

### Step 3: Nested Layouts (Powerful Pattern)

You can also create layouts for specific sections. Create `app/events/layout.tsx`:

```tsx
// app/events/layout.tsx
export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          🎫 Find amazing events near you
        </div>
      </div>
      {children}
    </div>
  );
}
```

Now every page under `/events` will show this banner, while the root layout (with navbar and footer) still wraps everything.

---

## Part 5: The Link Component – Smooth Navigation

The `Link` component is one of Next.js's most useful features. Let's enhance our event listing with proper links .

### Step 1: Create Mock Data

First, let's create some mock events. Create `app/util/events.ts`:

```ts
// app/util/events.ts
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  price: number;
  imageUrl: string;
}

export const events: Event[] = [
  {
    id: '1',
    title: 'Rock Concert 2026',
    description: 'The biggest rock concert of the year!',
    date: '2026-06-15',
    location: 'Madison Square Garden, NYC',
    price: 89.99,
    imageUrl: '/images/concert.jpg'
  },
  {
    id: '2',
    title: 'Tech Conference',
    description: 'Learn about the latest in tech',
    date: '2026-07-20',
    location: 'Convention Center, SF',
    price: 299.99,
    imageUrl: '/images/tech.jpg'
  },
  {
    id: '3',
    title: 'Food Festival',
    description: 'Taste cuisines from around the world',
    date: '2026-08-05',
    location: 'Central Park, NYC',
    price: 45.00,
    imageUrl: '/images/food.jpg'
  },
];
```

### Step 2: Update the Events Page

Now update `app/events/page.tsx` to use our mock data:

```tsx
// app/events/page.tsx
import Link from 'next/link';
import { events } from '@/app/util/events';

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-48 bg-gray-300"></div> {/* Placeholder for image */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-2">{event.description}</p>
                <p className="text-sm text-gray-500 mb-2">
                  📅 {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  📍 {event.location}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">
                    ${event.price}
                  </span>
                  <Link 
                    href={`/events/${event.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
```

### Step 3: Update the Event Detail Page

Finally, update `app/events/[id]/page.tsx` to show real data:

```tsx
// app/events/[id]/page.tsx
import Link from 'next/link';
import { events } from '@/app/util/events';
import { notFound } from 'next/navigation';

interface EventPageProps {
  params: {
    id: string;
  };
}

export default function EventDetailPage({ params }: EventPageProps) {
  const event = events.find(e => e.id === params.id);
  
  // If event doesn't exist, show 404
  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/events" className="text-blue-600 hover:underline inline-block mb-6">
          ← Back to Events
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-96 bg-gray-300"></div> {/* Image placeholder */}
          
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-700 mb-4">{event.description}</p>
                
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Date:</span> {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Location:</span> {event.location}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Price:</span> ${event.price}
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Purchase Tickets</h2>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
```

---

## Part 6: The Image Component – Automatic Optimization

Next.js provides an `Image` component that optimizes images automatically .

### Step 1: Add Images to Your Project

Create a `public/images` folder and add some placeholder images. For now, we'll use Unsplash URLs.

### Step 2: Update the Events Page with Images

```tsx
// app/events/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { events } from '@/app/util/events';

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-2">{event.description}</p>
                <p className="text-sm text-gray-500 mb-2">
                  📅 {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  📍 {event.location}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">
                    ${event.price}
                  </span>
                  <Link 
                    href={`/events/${event.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
```

### What the Image Component Does

The Next.js `Image` component automatically :

- **Resizes images** for different screen sizes
- **Converts to modern formats** like WebP
- **Lazy loads** images only when they're about to enter the viewport
- **Prevents layout shift** by reserving space
- **Optimizes** without any build-time work

The `fill` prop makes the image fill its parent container, and `object-cover` ensures it maintains aspect ratio while covering the area.

---

## Part 7: Data Fetching – Getting Real Data

Now let's learn how to fetch data in Next.js. The App Router introduces a simpler model: **components can be async and fetch data directly** .

### Understanding Fetching Strategies

Next.js provides three main strategies :

| Strategy | When to Use | Method |
|----------|-------------|--------|
| **Static (SSG)** | Content rarely changes | Default fetch with `{ cache: 'force-cache' }` |
| **Dynamic (SSR)** | Personalized/real-time data | `{ cache: 'no-store' }` or `export const dynamic = 'force-dynamic'` |
| **ISR** | Periodic updates | `{ next: { revalidate: 60 } }` |

### Step 1: Create a Mock API

Let's pretend we're fetching from a real API. Create `app/lib/api.ts`:

```ts
// app/lib/api.ts
import { events as mockEvents, Event } from '@/app/util/events';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getEvents(): Promise<Event[]> {
  await delay(1000); // Simulate loading
  return mockEvents;
}

export async function getEvent(id: string): Promise<Event | null> {
  await delay(500);
  const event = mockEvents.find(e => e.id === id);
  return event || null;
}
```

### Step 2: Update Events Page with Data Fetching

```tsx
// app/events/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getEvents } from '@/app/lib/api';

// This page is now a Server Component (no 'use client')
export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-2">{event.description}</p>
                <p className="text-sm text-gray-500 mb-2">
                  📅 {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  📍 {event.location}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">
                    ${event.price}
                  </span>
                  <Link 
                    href={`/events/${event.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
```

**Key insight:** This is a **Server Component**. It runs on the server, fetches data, and sends HTML to the client. No loading states needed—the user sees nothing until the data is ready, then sees the complete page.

### Step 3: Add Loading States

Create `app/events/loading.tsx`. This file automatically shows while the page is loading:

```tsx
// app/events/loading.tsx
export default function EventsLoading() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Upcoming Events</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6 space-y-3">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="flex justify-between pt-4">
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                  <div className="h-10 bg-gray-200 rounded w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
```

### Step 4: Update Event Detail Page

```tsx
// app/events/[id]/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getEvent } from '@/app/lib/api';
import { notFound } from 'next/navigation';

interface EventPageProps {
  params: {
    id: string;
  };
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const event = await getEvent(params.id);
  
  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/events" className="text-blue-600 hover:underline inline-block mb-6">
          ← Back to Events
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="object-cover"
              priority // Prioritize loading this image
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-700 mb-4">{event.description}</p>
                
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Date:</span> {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Location:</span> {event.location}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Price:</span> ${event.price}
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Purchase Tickets</h2>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
```

### Step 5: Add Not Found Page

Create `app/events/[id]/not-found.tsx`:

```tsx
// app/events/[id]/not-found.tsx
import Link from 'next/link';

export default function EventNotFound() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Event Not Found</h2>
        <p className="text-gray-600 mb-8">
          The event you're looking for doesn't exist or has been removed.
        </p>
        <Link 
          href="/events"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Browse Events
        </Link>
      </div>
    </main>
  );
}
```

---

## Part 8: Server Actions – Forms Without API Routes

One of Next.js 14's best features is **Server Actions**—functions that run on the server but can be called directly from components .

### Step 1: Create a Server Action for Ticket Purchases

Create `app/events/[id]/actions.ts`:

```ts
// app/events/[id]/actions.ts
'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

export async function addToBasket(formData: FormData) {
  const eventId = formData.get('eventId') as string;
  const numberOfTickets = parseInt(formData.get('tickets') as string, 10);
  
  // Get current basket from cookies
  const cookieStore = cookies();
  const currentBasket = cookieStore.get('basket')?.value;
  const basket = currentBasket ? JSON.parse(currentBasket) : [];
  
  // Add new item
  basket.push({
    eventId,
    tickets: numberOfTickets,
    addedAt: new Date().toISOString()
  });
  
  // Save back to cookie
  cookies().set('basket', JSON.stringify(basket), {
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
  
  // Revalidate the page to show updated basket
  revalidatePath('/events/[id]');
}
```

### Step 2: Create a Form Component

Create `app/events/[id]/TicketForm.tsx`:

```tsx
// app/events/[id]/TicketForm.tsx
'use client';

import { useFormStatus } from 'react-dom';
import { addToBasket } from './actions';
import { useState } from 'react';

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-300"
    >
      {pending ? 'Adding...' : 'Add to Basket'}
    </button>
  );
}

export default function TicketForm({ eventId }: { eventId: string }) {
  const [ticketCount, setTicketCount] = useState(1);
  
  return (
    <form action={addToBasket}>
      <input type="hidden" name="eventId" value={eventId} />
      
      <div className="mb-4">
        <label htmlFor="tickets" className="block text-sm font-medium mb-2">
          Number of Tickets
        </label>
        <select
          id="tickets"
          name="tickets"
          value={ticketCount}
          onChange={(e) => setTicketCount(parseInt(e.target.value))}
          className="w-full p-2 border rounded"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>
      
      <SubmitButton />
    </form>
  );
}
```

### Step 3: Update Event Detail to Use the Form

```tsx
// app/events/[id]/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getEvent } from '@/app/lib/api';
import { notFound } from 'next/navigation';
import TicketForm from './TicketForm';

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const event = await getEvent(params.id);
  
  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/events" className="text-blue-600 hover:underline inline-block mb-6">
          ← Back to Events
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-gray-700 mb-4">{event.description}</p>
                
                <div className="space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Date:</span> {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Location:</span> {event.location}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Price:</span> ${event.price}
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Purchase Tickets</h2>
                <TicketForm eventId={event.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
```

### Step 4: Update Navbar to Show Basket Count

Update `components/Navbar.tsx`:

```tsx
// components/Navbar.tsx
import Link from 'next/link';
import { cookies } from 'next/headers';

export default function Navbar() {
  const cookieStore = cookies();
  const basket = cookieStore.get('basket')?.value;
  const itemCount = basket ? JSON.parse(basket).length : 0;

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-blue-600">
            GloboTicket
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href="/events" className="hover:text-blue-600 transition">
              Events
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
            
            <div className="relative">
              <span className="text-gray-600">🛒</span>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

---

## Part 9: API Routes – Building Your Backend

Sometimes you need traditional API endpoints. Next.js makes this easy with **route handlers** .

### Step 1: Create a GET API Route

Create `app/api/events/route.ts`:

```ts
// app/api/events/route.ts
import { NextResponse } from 'next/server';
import { getEvents } from '@/app/lib/api';

export async function GET() {
  try {
    const events = await getEvents();
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}
```

### Step 2: Create a POST API Route

```ts
// app/api/events/route.ts (add to same file)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the data
    if (!body.title || !body.price) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // In a real app, you'd save to a database
    const newEvent = {
      id: Math.random().toString(36).substr(2, 9),
      ...body,
      createdAt: new Date().toISOString()
    };
    
    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
```

### Step 3: Create a Dynamic API Route

Create `app/api/events/[id]/route.ts`:

```ts
// app/api/events/[id]/route.ts
import { NextResponse } from 'next/server';
import { getEvent } from '@/app/lib/api';

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(request: Request, { params }: RouteParams) {
  const event = await getEvent(params.id);
  
  if (!event) {
    return NextResponse.json(
      { error: 'Event not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(event);
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const body = await request.json();
    
    // In a real app, you'd update the database
    return NextResponse.json({
      id: params.id,
      ...body,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function DELETE(request: Request, { params }: RouteParams) {
  // In a real app, you'd delete from database
  return NextResponse.json({
    message: `Event ${params.id} deleted`
  });
}
```

### Testing Your API

You can test these endpoints with curl or a tool like Postman:

```bash
# Get all events
curl http://localhost:3000/api/events

# Get single event
curl http://localhost:3000/api/events/1

# Create new event
curl -X POST http://localhost:3000/api/events \
  -H "Content-Type: application/json" \
  -d '{"title":"New Event","price":49.99}'
```

---

## Part 10: Middleware – Running Code Before Requests

Middleware lets you run code before a request completes . Perfect for authentication, redirects, and more.

### Step 1: Create a Middleware File

Create `middleware.ts` at the root of your project:

```ts
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function runs before every request
export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has('auth-token');
  const isAuthPage = request.nextUrl.pathname.startsWith('/login');
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  
  // Protect admin routes
  if (isAdminRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // Redirect authenticated users away from login page
  if (isAuthPage && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  // Add custom headers
  const response = NextResponse.next();
  response.headers.set('x-custom-header', 'hello-from-globoticket');
  
  return response;
}

// Configure which routes use middleware
export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
    '/login',
    '/api/:path*',
    // Exclude static files
    '/((?!_next/static|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
```

### Step 2: Add Authentication Middleware

Let's create a more realistic auth example:

```ts
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session');
  const path = request.nextUrl.pathname;
  
  // Public paths that don't require authentication
  const publicPaths = ['/login', '/register', '/events', '/'];
  const isPublicPath = publicPaths.some(p => 
    path === p || path.startsWith('/events/')
  );
  
  // Check authentication
  if (!isPublicPath && !session) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', path);
    return NextResponse.redirect(loginUrl);
  }
  
  // Rate limiting for API routes
  if (path.startsWith('/api/')) {
    const ip = request.ip || 'unknown';
    // In a real app, you'd check rate limits in Redis
    // For now, just add a header
    const response = NextResponse.next();
    response.headers.set('X-RateLimit-Limit', '100');
    return response;
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
```

---

## Part 11: Environment Variables and Configuration

### Step 1: Create Environment Files

Create `.env.local` for local development:

```bash
# .env.local
DATABASE_URL="postgresql://localhost:5432/globoticket"
API_SECRET="your-super-secret-key-here"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

Create `.env.production` for production:

```bash
# .env.production
DATABASE_URL="postgresql://prod-db:5432/globoticket"
API_SECRET="production-secret-key"
NEXT_PUBLIC_SITE_URL="https://globoticket.com"
```

### Step 2: Access Environment Variables

```ts
// app/lib/config.ts
export const config = {
  database: {
    url: process.env.DATABASE_URL!,
  },
  api: {
    secret: process.env.API_SECRET!,
  },
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL!,
  },
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
};

// Validate required variables
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required');
}
```

**Important:** Variables with `NEXT_PUBLIC_` prefix are exposed to the browser. All others are server-side only.

---

## Part 12: Deployment – Going Live

### Step 1: Prepare for Production

Update `next.config.js` with production optimizations:

```js
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  // Enable logging for production
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // Experimental features (optional)
  experimental: {
    turbo: {
      // Turbopack config if needed
    },
  },
};

module.exports = nextConfig;
```

### Step 2: Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm run start
```

### Step 3: Deploy to Vercel

The easiest way to deploy Next.js is **Vercel** :

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

Or connect your Git repository to Vercel for automatic deployments.

### Step 4: Post-Deployment Checklist

- [ ] Environment variables are set in Vercel dashboard
- [ ] Database connection works
- [ ] API routes are accessible
- [ ] Images load correctly
- [ ] Authentication works
- [ ] Analytics are tracking (if configured)

---

## Your Next.js Beginner Checklist

You've built a complete Next.js application! Here's what you've learned:

### Routing
- [ ] File-based routing with App Router
- [ ] Dynamic routes with `[param]`
- [ ] Nested layouts
- [ ] Link component for navigation

### Data Fetching
- [ ] Server Components with `async/await`
- [ ] Loading states with `loading.tsx`
- [ ] Error handling with `not-found.tsx`
- [ ] Different caching strategies

### Forms and Mutations
- [ ] Server Actions for form handling
- [ ] Form status with `useFormStatus`
- [ ] Cookie management
- [ ] Cache revalidation

### API Routes
- [ ] GET, POST, PUT, DELETE handlers
- [ ] Dynamic API routes
- [ ] Error handling
- [ ] Response formatting

### Optimization
- [ ] Image component for optimization
- [ ] Font optimization
- [ ] Middleware for request handling
- [ ] Environment configuration

### Deployment
- [ ] Production build
- [ ] Environment variables
- [ ] Vercel deployment

---

## Common Pitfalls to Avoid

### 1. Forgetting 'use client'
```tsx
// ❌ This won't work (can't use hooks in Server Component)
export default function Component() {
  const [count, setCount] = useState(0); // Error!
  return <button onClick={() => setCount(count + 1)}>Click</button>;
}

// ✅ Add 'use client' at the top
'use client';
export default function Component() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Click</button>;
}
```

### 2. Using `<a>` Instead of `Link`
```tsx
// ❌ Causes full page reload
<a href="/events">Events</a>

// ✅ Client-side navigation (fast!)
import Link from 'next/link';
<Link href="/events">Events</Link>
```

### 3. Not Handling Loading States
```tsx
// ❌ Users see blank screen while loading
export default async function Page() {
  const data = await fetchSlowData();
  return <div>{data}</div>;
}

// ✅ Show loading state
// Create loading.tsx in same folder
```

### 4. Missing Error Boundaries
```tsx
// ❌ Errors crash the page
// ✅ Add error.tsx for graceful failure
```

---

## What's Next?

You've mastered the basics! Here's where to go next:

1. **Add a database** — PostgreSQL with Prisma or Drizzle ORM 
2. **Add authentication** — Clerk, NextAuth.js, or Auth0 
3. **Add payments** — Stripe integration
4. **Add real-time features** — WebSockets with Socket.io
5. **Add search** — Algolia or Meilisearch
6. **Add analytics** — Vercel Analytics, Plausible
7. **Add testing** — Jest, React Testing Library, Cypress

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs) — The official docs
- [Next.js Learn Course](https://nextjs.org/learn) — Free interactive course 
- [Vercel Deployment Docs](https://vercel.com/docs) — Deployment guide
- [Awesome Next.js](https://github.com/unicodeveloper/awesome-nextjs) — Curated resources

---

*Enjoyed this tutorial? I write about Next.js, React, and web development every Month. Follow me on X [@themarvelbiz](https://x.com/@themarvelbiz). And if you build something with Next.js, I'd love to see it!*

---
