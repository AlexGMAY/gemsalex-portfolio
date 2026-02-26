---
title: "Next.js 14/15/16 App Router: A Complete Deep Dive"
date: "2025-03-18"
excerpt: "Master the new App Router in Next.js 14/15/16 with server components, streaming, and advanced routing patterns."
category: "Next.js"
tags: ["nextjs", "app-router", "server-components", "react", "fullstack"]
featured: true
level: "intermediate"
author: "Merveille Alexander"
readTime: "18 min read"
---

# Next.js 14/15/16 App Router: A Complete Deep Dive

*Master the new App Router in Next.js 14/15/16 with server components, streaming, and advanced routing patterns*


---

## I Just Love NextJS Framework

I remember the exact moment I fell out of love with the Pages Router.

It was 2 PM on a Friday, and I was building a dashboard for a client. The UI design was simple enough: a shared layout with a sidebar that persisted across routes, a loading state for slow data fetching, and proper error boundaries. Three hours later, I was still fighting with custom `_app` wrappers, manual layout components, and a dozen HOCs just to get basic nesting to work.

"Why," I whispered to my neighbor's cat (who was judging me from the doorway), "is this so hard? I just want a layout that works."

The Pages Router had served me well for years. But that night, I felt every one of its limitations. The layout system was bolted on, not built in. Data fetching was split across multiple files. And don't get me started on the JavaScript bundle size.

Then Next.js 13 dropped the App Router, and suddenly everything made sense. By version 14, it was stable. By 15, it was refined. And now with 16, it's become something beautiful.

This is the guide I wish I'd had that night. Let's dive deep.

---

## Part 1: The Mental Model Shift

Before we write a single line of code, we need to understand how the App Router thinks differently. This isn't just a new API—it's a new way of building applications.

### The Old Way vs The New Way

**Pages Router (pre-13):**
- Every file in `pages/` is a route
- Layouts are hacky (remember `_app.tsx` and wrapping components?)
- Data fetching lives in `getServerSideProps` and `getStaticProps`
- Everything hydrates on the client, even static content

**App Router (14/15/16):**
- Folders define routes, files define UI
- Layouts are native, nestable, and persistent
- Data fetching lives in components (with `async/await`)
- Server Components by default, zero client JavaScript for static content

```tsx
// The old way - pages/blog/[slug].js
export async function getServerSideProps({ params }) {
  const post = await getPost(params.slug);
  return { props: { post } };
}

export default function BlogPost({ post }) {
  return <article>{post.title}</article>;
}

// The new way - app/blog/[slug]/page.tsx
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug); // Direct database call!
  return <article>{post.title}</article>;
}
```

See the difference? No more separation between data fetching and rendering. Just a component that fetches its own data and renders it. This is the mental model shift: **components own their data**.

### The File Structure Revolution

The App Router introduces a file-based convention that's both simple and powerful:

```
app/
├── layout.tsx              # Root layout (required)
├── page.tsx                # Homepage (/)
├── loading.tsx             # Loading UI for the homepage
├── error.tsx               # Error boundary for the homepage
├── not-found.tsx           # 404 page
├── about/
│   └── page.tsx            # /about
├── blog/
│   ├── layout.tsx          # Layout for all blog pages
│   ├── page.tsx            # /blog (list of posts)
│   └── [slug]/
│       └── page.tsx        # /blog/hello-world
└── dashboard/
    ├── layout.tsx          # Dashboard layout with sidebar
    ├── page.tsx            # /dashboard
    └── settings/
        └── page.tsx        # /dashboard/settings
```

Each folder becomes a route segment. Each special file (`page.tsx`, `layout.tsx`, `loading.tsx`) defines how that segment behaves. This isn't just organization—it's a complete routing system that's both intuitive and scalable. 

---

## Part 2: The Architecture of the App Router

### Nested Layouts: The Killer Feature

The single biggest improvement in the App Router is native nested layouts. In the Pages Router, layouts required manual composition. Now they're built into the routing system.

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      {/* This sidebar persists across all dashboard routes */}
      <aside className="w-64 bg-gray-100 p-4">
        <nav>
          <Link href="/dashboard">Home</Link>
          <Link href="/dashboard/analytics">Analytics</Link>
          <Link href="/dashboard/settings">Settings</Link>
        </nav>
      </aside>
      
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}

// app/dashboard/analytics/page.tsx
export default function AnalyticsPage() {
  return <h1>Analytics Dashboard</h1>;
}
```

When you navigate from `/dashboard` to `/dashboard/analytics`, only the `children` changes. The sidebar stays mounted, preserving state and avoiding re-renders. This is **partial rendering**, and it's automatic. 

### Route Groups: Organize Without Affecting URLs

Sometimes you need different layouts for different sections of your site. Route groups let you organize code without changing the URL structure.

```
app/
├── (marketing)/            # This group won't appear in URLs
│   ├── layout.tsx          # Marketing layout (header, footer)
│   ├── page.tsx            # /
│   └── pricing/
│       └── page.tsx        # /pricing
│
└── (dashboard)/            # Another group
    ├── layout.tsx          # Dashboard layout (sidebar, auth check)
    ├── dashboard/
    │   └── page.tsx        # /dashboard
    └── settings/
        └── page.tsx        # /settings
```

The parentheses `(marketing)` create a group that's ignored in the URL path. This lets you have completely different layout hierarchies for different parts of your app while keeping URLs clean. 

### Route Handlers: API Routes Evolved

Need API endpoints? Route handlers replace the old `pages/api` directory with a cleaner syntax:

```tsx
// app/api/users/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const users = await db.user.findMany();
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  const user = await db.user.create({ data: body });
  return NextResponse.json(user, { status: 201 });
}
```

Dynamic routes work the same way:

```tsx
// app/api/users/[id]/route.ts
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await db.user.findUnique({
    where: { id: params.id }
  });
  
  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(user);
}
```

Route handlers are perfect for third-party integrations, webhooks, and when you need a traditional API. For app-internal mutations, though, you'll want Server Actions. 

---

## Part 3: Server Components – The Paradigm Shift

### Understanding the Default

In the App Router, **every component is a Server Component by default**. This is the biggest change from traditional React, and it's brilliant.

```tsx
// app/products/page.tsx – This is a Server Component
import { db } from '@/lib/db';

export default async function ProductsPage() {
  // Direct database access – no API layer needed!
  const products = await db.product.findMany({
    take: 10,
    orderBy: { createdAt: 'desc' }
  });
  
  return (
    <div>
      <h1>Latest Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
```

This component:
- Runs **only on the server**
- Can directly access databases, filesystems, and environment variables
- Sends zero JavaScript to the client
- Supports `async/await` at the component level
- Never re-renders on the client 

### When to Use Client Components

Add `"use client"` when you need interactivity:

```tsx
'use client';

import { useState } from 'react';

export function AddToCartButton({ productId }: { productId: string }) {
  const [isAdded, setIsAdded] = useState(false);
  
  const handleClick = () => {
    setIsAdded(true);
    // Add to cart logic
  };
  
  return (
    <button 
      onClick={handleClick}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      {isAdded ? 'Added!' : 'Add to Cart'}
    </button>
  );
}
```

The golden rule: **push interactivity down to the leaves**. Keep your page as a Server Component, and only make the interactive parts Client Components. 

### The Composition Pattern

The real power comes from composing Server and Client components:

```tsx
// app/products/page.tsx – Server Component
import { ProductList } from '@/components/ProductList';
import { AddToCartButton } from '@/components/AddToCartButton';

export default async function ProductsPage() {
  const products = await getProducts();
  
  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products}>
        {product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            {/* Client component inside Server component */}
            <AddToCartButton productId={product.id} />
          </div>
        )}
      </ProductList>
    </div>
  );
}
```

The `ProductList` stays on the server, but each `AddToCartButton` is a client island with its own state and interactivity. This pattern minimizes client JavaScript while maximizing interactivity. 

---

## Part 4: Data Fetching and Caching (The Tricky Part)

### The Four-Layer Cache System

Here's where things get complex. Next.js has four layers of caching, and understanding them is crucial for building performant apps. 

| Cache Layer | Location | Scope | Duration |
|-------------|----------|-------|----------|
| Request Memoization | Server | Per render | Until render completes |
| Data Cache | Server | Cross-request | Persistent (can revalidate) |
| Full Route Cache | Server | Static routes | Persistent (can revalidate) |
| Router Cache | Client | User session | Session or 5 minutes |

**Request Memoization**: If you fetch the same URL twice in one render, Next.js dedupes it:

```tsx
// These two fetches become ONE network request
const user = await fetch('https://api.example.com/user/1');
const profile = await fetch('https://api.example.com/user/1');
```

**Data Cache**: Fetch results are cached across requests:

```tsx
// Cached for 1 hour
const posts = await fetch('https://api.example.com/posts', {
  next: { revalidate: 3600 }
});

// Never cached
const realtime = await fetch('https://api.example.com/live', {
  cache: 'no-store'
});
```

### The Next.js 15+ Fetch Defaults

Important change in Next.js 15: the default fetch behavior changed. 

```tsx
// Next.js 14 and earlier – default was 'force-cache'
const data = await fetch('https://api.example.com/data'); // Cached by default

// Next.js 15 and later – default is 'no-store'
const data = await fetch('https://api.example.com/data'); // NOT cached by default
```

This caught me off guard when upgrading. Now you need to explicitly opt into caching:

```tsx
// If you want caching in Next.js 15+
const data = await fetch('https://api.example.com/data', {
  next: { revalidate: 3600 } // Cache for 1 hour
});
```

### Revalidating on Demand

Sometimes you need to update cached data immediately:

```tsx
'use server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function updatePost(formData: FormData) {
  const id = formData.get('id');
  const title = formData.get('title');
  
  // Update the database
  await db.post.update({ where: { id }, data: { title } });
  
  // Revalidate everything
  revalidatePath('/blog'); // Revalidate the blog listing
  revalidateTag(`post-${id}`); // Revalidate a specific post by tag
}
```

The `revalidateTag` function is particularly powerful when combined with tagged fetches:

```tsx
// Fetch with tags
const post = await fetch(`https://api.example.com/posts/${id}`, {
  next: { tags: [`post-${id}`, 'all-posts'] }
});

// Later, anywhere in your app
revalidateTag('all-posts'); // Revalidates everything with that tag
```

### The `unstable_noStore` Escape Hatch

For truly dynamic data that should never be cached:

```tsx
import { unstable_noStore as noStore } from 'next/cache';

export default async function DashboardPage() {
  noStore(); // Opt out of all caching
  
  const analytics = await fetchAnalytics(); // Always fresh
  return <AnalyticsDashboard data={analytics} />;
}
```

This is useful for user-specific dashboards, real-time data, or any page that must be 100% fresh on every request. 

---

## Part 5: Streaming and Suspense

### The Problem with Traditional SSR

Traditional server-side rendering had a critical flaw: **all or nothing**. The server would fetch all data, render the entire HTML, and send it to the client. If one database query was slow, the whole page waited.

### Streaming to the Rescue

The App Router introduces streaming HTML:

```tsx
import { Suspense } from 'react';
import { PostList, CommentList, SlowAnalytics } from '@/components';

export default function BlogPage() {
  return (
    <div>
      <h1>My Blog</h1>
      
      {/* This renders immediately */}
      <p>Welcome to my blog!</p>
      
      <Suspense fallback={<div>Loading posts...</div>}>
        <PostList />
      </Suspense>
      
      <Suspense fallback={<div>Loading comments...</div>}>
        <CommentList />
      </Suspense>
      
      <Suspense fallback={<div>Loading analytics...</div>}>
        <SlowAnalytics />
      </Suspense>
    </div>
  );
}

// components/PostList.tsx
export default async function PostList() {
  const posts = await fetchPosts(); // Takes 1 second
  return <div>{/* render posts */}</div>;
}

// components/SlowAnalytics.tsx
export default async function SlowAnalytics() {
  const analytics = await fetchAnalytics(); // Takes 3 seconds
  return <div>{/* render analytics */}</div>;
}
```

The browser receives the static HTML immediately, then streams in each Suspense boundary as its data resolves. The user sees content progressively, not all at once. 

### The `loading.tsx` Convention

For route-level loading states, create a `loading.tsx` file:

```tsx
// app/blog/loading.tsx
export default function BlogLoading() {
  return (
    <div className="animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
      <div className="space-y-3">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-24 bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
  );
}
```

This automatically wraps the page in Suspense with your loading component as the fallback. 

---

## Part 6: Server Actions – Mutations Without APIs

### The Old Way

Before Server Actions, mutations meant:

1. Create an API route
2. Write a fetch call in your component
3. Handle loading states manually
4. Figure out revalidation

### The Server Actions Way

Server Actions let you call server code directly from your components:

```tsx
// app/posts/[id]/page.tsx
import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await db.post.findUnique({
    where: { id: params.id },
    include: { comments: true }
  });
  
  if (!post) return <div>Post not found</div>;
  
  // Server Action defined inline
  async function addComment(formData: FormData) {
    'use server';
    
    const comment = formData.get('comment');
    const author = formData.get('author');
    
    await db.comment.create({
      data: {
        content: comment,
        author,
        postId: params.id
      }
    });
    
    revalidatePath(`/posts/${params.id}`);
  }
  
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      
      <h2>Comments</h2>
      {post.comments.map(comment => (
        <div key={comment.id}>{comment.content} – {comment.author}</div>
      ))}
      
      <form action={addComment}>
        <input name="author" placeholder="Your name" required />
        <textarea name="comment" placeholder="Your comment" required />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
```

The `'use server'` directive marks this function as a Server Action. When the form submits, it calls this function directly—no API route needed. 

### Reusable Server Actions

For actions used in multiple places, create a separate file:

```tsx
// app/actions/posts.ts
'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/db';
import { z } from 'zod';

const createPostSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(10),
  authorId: z.string()
});

export async function createPost(formData: FormData) {
  // Validate input
  const validated = createPostSchema.parse({
    title: formData.get('title'),
    content: formData.get('content'),
    authorId: formData.get('authorId')
  });
  
  // Check authorization
  const user = await getCurrentUser();
  if (!user || user.id !== validated.authorId) {
    throw new Error('Unauthorized');
  }
  
  // Create post
  await db.post.create({ data: validated });
  
  // Revalidate
  revalidatePath('/posts');
}
```

Then use it anywhere:

```tsx
import { createPost } from '@/app/actions/posts';

export default function NewPostForm() {
  return (
    <form action={createPost}>
      <input name="title" placeholder="Title" />
      <textarea name="content" placeholder="Content" />
      <input type="hidden" name="authorId" value={currentUser.id} />
      <button type="submit">Create Post</button>
    </form>
  );
}
```

### When to Use Server Actions vs Route Handlers

| Use Server Actions When | Use Route Handlers When |
|------------------------|------------------------|
| Form submissions | Building public APIs |
| Data mutations tied to UI | Accepting webhooks |
| Actions that need revalidation | File uploads |
| Internal app operations | Third-party integrations |

---

## Part 7: Next.js 15 and 16 – What's New

### Next.js 15: The Refinement Release

Next.js 15 brought several important changes: 

**1. Async Request APIs**
```tsx
// Next.js 15 – params and searchParams are now Promises
export default async function Page({ 
  params,
  searchParams 
}: { 
  params: Promise<{ slug: string }>,
  searchParams: Promise<{ q: string }>
}) {
  const { slug } = await params;
  const { q } = await searchParams;
  // ...
}
```

**2. Caching Defaults Change**
```tsx
// Next.js 14 – fetch cached by default
// Next.js 15 – fetch NO LONGER cached by default
// Explicitly opt in:
const data = await fetch(url, { next: { revalidate: 3600 } });
```

**3. React 19 Support**
- Full support for React 19 features
- Improved Server Components
- Better error handling

### Next.js 16: Cache Components and Beyond

Next.js 16 introduced a fundamental shift in caching with **Cache Components**. 

```tsx
// Next.js 16 – explicit caching with 'use cache'
export default async function ProductPage({ params }: { params: { id: string } }) {
  'use cache';
  
  const product = await db.product.findUnique({
    where: { id: params.id }
  });
  
  return <ProductDisplay product={product} />;
}
```

The `'use cache'` directive tells Next.js to cache this component explicitly, with intelligent cache key generation by the compiler. This completes the story of **Partial Pre-Rendering**, letting you mix static and dynamic content freely. 

**Turbopack is Now Default**
- Up to 10x faster Fast Refresh
- 2-5x faster production builds
- 50% of dev sessions already using it 

**Breaking Changes in 16**
- Minimum Node.js version: 20.9.0
- Async params required (like Next.js 15)
- Middleware replaced by `proxy.ts`
- `revalidateTag()` now requires cache profile 

---

## Part 8: Advanced Patterns and Pitfalls

### Pattern 1: Parallel Data Fetching

Don't waterfall your requests:

```tsx
// ❌ Bad – sequential
export default async function Dashboard() {
  const user = await getUser(); // Waits 1s
  const posts = await getPosts(); // Then waits 1s
  const analytics = await getAnalytics(); // Then waits 1s
  // Total: 3 seconds
  
  return <DashboardView user={user} posts={posts} analytics={analytics} />;
}

// ✅ Good – parallel
export default async function Dashboard() {
  // Start all fetches immediately
  const userPromise = getUser();
  const postsPromise = getPosts();
  const analyticsPromise = getAnalytics();
  
  // Wait for them in parallel
  const [user, posts, analytics] = await Promise.all([
    userPromise, postsPromise, analyticsPromise
  ]);
  // Total: ~1 second (the slowest request)
  
  return <DashboardView user={user} posts={posts} analytics={analytics} />;
}
```

For even better UX, combine with Suspense:

```tsx
export default function Dashboard() {
  return (
    <div>
      <Suspense fallback={<UserSkeleton />}>
        <UserProfile />
      </Suspense>
      
      <Suspense fallback={<PostsSkeleton />}>
        <UserPosts />
      </Suspense>
      
      <Suspense fallback={<AnalyticsSkeleton />}>
        <UserAnalytics />
      </Suspense>
    </div>
  );
}
```

Each component fetches its own data, streams in when ready. 

### Pattern 2: Search Params and URL State

Use search params for shareable UI state:

```tsx
// app/products/page.tsx
export default async function ProductsPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ 
    q: string, 
    category: string, 
    page: string 
  }> 
}) {
  const { q, category, page = '1' } = await searchParams;
  
  const products = await db.product.findMany({
    where: {
      name: { contains: q },
      category: category
    },
    take: 20,
    skip: (parseInt(page) - 1) * 20
  });
  
  return (
    <div>
      <SearchForm initialQuery={q} initialCategory={category} />
      <ProductGrid products={products} />
      <Pagination currentPage={parseInt(page)} />
    </div>
  );
}
```

Combine with client components for interactive filtering:

```tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export function SearchForm({ initialQuery, initialCategory }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams(searchParams);
    
    params.set('q', formData.get('q') as string);
    params.set('category', formData.get('category') as string);
    
    router.push(`/products?${params.toString()}`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input name="q" defaultValue={initialQuery} />
      <select name="category" defaultValue={initialCategory}>
        <option value="">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
}
```

### Pitfall 1: The State Reset Trap

One of the most confusing behaviors: **layout state persists across routes**. 

```tsx
// app/dashboard/layout.tsx
'use client';

import { useState } from 'react';

export default function DashboardLayout({ children }) {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      {children}
    </div>
  );
}
```

When you navigate from `/dashboard/analytics` to `/dashboard/settings`, the `count` state persists. This is by design—layouts are meant to be persistent. But if you want state to reset on navigation, use a template instead:

```tsx
// app/dashboard/template.tsx
'use client';

import { useState } from 'react';

export default function DashboardTemplate({ children }) {
  const [count, setCount] = useState(0); // Resets on navigation
  
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      {children}
    </div>
  );
}
```

### Pitfall 2: Context Providers in Server Components

Context providers must be in Client Components, but they need to wrap Server Components:

```tsx
// app/providers.tsx
'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { QueryProvider } from '@/components/query-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>
        {children}
      </QueryProvider>
    </ThemeProvider>
  );
}

// app/layout.tsx
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          {children} {/* Can contain Server Components */}
        </Providers>
      </body>
    </html>
  );
}
```

This pattern lets Client Components provide context while still allowing Server Components as children. 

### Pitfall 3: The "use client" Waterfall

Be careful not to make entire branches client-side unnecessarily:

```tsx
// ❌ Bad – this makes everything below it client components
'use client';

export default function Page() {
  return (
    <div>
      <Header /> {/* Becomes client component */}
      <Content /> {/* Becomes client component */}
      <Footer /> {/* Becomes client component */}
    </div>
  );
}

// ✅ Good – only the interactive parts are client components
export default function Page() {
  return (
    <div>
      <Header /> {/* Server component */}
      <InteractiveContent /> {/* Client component */}
      <Footer /> {/* Server component */}
    </div>
  );
}
```

---

## Part 9: Middleware – The Global Interceptor

Middleware runs before requests complete, perfect for authentication, redirects, and rewriting. 

```tsx
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has('session');
  const isAuthPage = request.nextUrl.pathname.startsWith('/login');
  
  // Redirect unauthenticated users to login
  if (!isAuthenticated && !isAuthPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // Redirect authenticated users away from auth pages
  if (isAuthenticated && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  // Add headers to all responses
  const response = NextResponse.next();
  response.headers.set('x-custom-header', 'hello-world');
  
  return response;
}

// Configure which routes use middleware
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
    '/api/:path*',
    // Exclude static files
    '/((?!_next/static|favicon.ico).*)',
  ],
};
```

### A/B Testing with Middleware

```tsx
export function middleware(request: NextRequest) {
  // Randomly assign user to test group
  const bucket = Math.random() < 0.5 ? 'a' : 'b';
  
  // Rewrite the URL to the test version
  const url = request.nextUrl.clone();
  url.pathname = `/test-${bucket}${url.pathname}`;
  
  return NextResponse.rewrite(url);
}
```

### Geolocation and Localization

```tsx
export function middleware(request: NextRequest) {
  const country = request.geo?.country || 'US';
  const locale = getLocaleFromCountry(country);
  
  // Redirect to localized version
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${url.pathname}`;
  
  return NextResponse.redirect(url);
}
```

---

## Part 10: Performance Monitoring and Optimization

### Measuring What Matters

```tsx
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
```

### Bundle Analysis

```bash
# Analyze your bundle size
npm run build -- --analyze

# Or add to package.json
{
  "scripts": {
    "analyze": "ANALYZE=true npm run build"
  }
}
```

### Core Web Vitals

```tsx
// app/report-web-vitals.ts
'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric);
    
    // Send to analytics
    fetch('/api/vitals', {
      method: 'POST',
      body: JSON.stringify(metric)
    });
  });
  
  return null;
}
```

---

## Part 11: A Complete Example

Let's build a real feature: a blog with comments, using everything we've learned.

### The Folder Structure

```
app/
├── blog/
│   ├── layout.tsx           # Blog layout with sidebar
│   ├── loading.tsx          # Loading state for blog
│   ├── error.tsx            # Error boundary
│   ├── page.tsx             # /blog – post listing
│   └── [slug]/
│       └── page.tsx         # /blog/hello-world – individual post
├── actions/
│   └── comments.ts          # Server Actions for comments
└── components/
    ├── blog/
    │   ├── PostList.tsx
    │   ├── PostCard.tsx
    │   └── CommentForm.tsx
    └── ui/
        └── Button.tsx
```

### The Code

```tsx
// app/blog/layout.tsx
export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-8">
      <aside className="w-64">
        <nav>
          <h2 className="font-bold">Categories</h2>
          <ul>
            <li><Link href="/blog?category=tech">Tech</Link></li>
            <li><Link href="/blog?category=design">Design</Link></li>
            <li><Link href="/blog?category=business">Business</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
```

```tsx
// app/blog/page.tsx
import { Suspense } from 'react';
import { PostList } from '@/components/blog/PostList';

export default async function BlogPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ category: string; page: string }> 
}) {
  const { category, page = '1' } = await searchParams;
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      
      <Suspense fallback={<PostListSkeleton />} key={`${category}-${page}`}>
        <PostList category={category} page={parseInt(page)} />
      </Suspense>
    </div>
  );
}
```

```tsx
// components/blog/PostList.tsx
import { db } from '@/lib/db';
import { PostCard } from './PostCard';
import { Pagination } from '../ui/Pagination';

export async function PostList({ 
  category, 
  page = 1 
}: { 
  category?: string; 
  page: number;
}) {
  const pageSize = 10;
  
  const [posts, total] = await Promise.all([
    db.post.findMany({
      where: category ? { category } : {},
      include: { author: true },
      take: pageSize,
      skip: (page - 1) * pageSize,
      orderBy: { createdAt: 'desc' }
    }),
    db.post.count({ where: category ? { category } : {} })
  ]);
  
  return (
    <div>
      <div className="space-y-4">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      
      <Pagination 
        currentPage={page}
        totalPages={Math.ceil(total / pageSize)}
        baseUrl={`/blog${category ? `?category=${category}` : ''}`}
      />
    </div>
  );
}
```

```tsx
// app/blog/[slug]/page.tsx
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import { CommentForm } from '@/components/blog/CommentForm';
import { CommentList } from '@/components/blog/CommentList';

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  
  const post = await db.post.findUnique({
    where: { slug },
    include: { author: true }
  });
  
  if (!post) {
    notFound();
  }
  
  return (
    <article>
      <header>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-gray-600">
          By {post.author.name} on {post.createdAt.toLocaleDateString()}
        </p>
      </header>
      
      <div className="prose mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        
        <Suspense fallback={<div>Loading comments...</div>}>
          <CommentList postId={post.id} />
        </Suspense>
        
        <div className="mt-8">
          <CommentForm postId={post.id} />
        </div>
      </section>
    </article>
  );
}
```

```tsx
// app/actions/comments.ts
'use server';

import { revalidateTag } from 'next/cache';
import { db } from '@/lib/db';
import { z } from 'zod';
import { getCurrentUser } from '@/lib/auth';

const commentSchema = z.object({
  content: z.string().min(1).max(1000),
  authorName: z.string().min(1),
  postId: z.string()
});

export async function addComment(formData: FormData) {
  // Validate
  const validated = commentSchema.parse({
    content: formData.get('content'),
    authorName: formData.get('authorName'),
    postId: formData.get('postId')
  });
  
  // Optional: Check if user is authenticated
  const user = await getCurrentUser();
  
  // Create comment
  await db.comment.create({
    data: {
      content: validated.content,
      authorName: validated.authorName,
      postId: validated.postId,
      userId: user?.id // Optional association
    }
  });
  
  // Revalidate
  revalidateTag(`post-${validated.postId}-comments`);
}
```

```tsx
// components/blog/CommentList.tsx
import { db } from '@/lib/db';

export async function CommentList({ postId }: { postId: string }) {
  const comments = await db.comment.findMany({
    where: { postId },
    orderBy: { createdAt: 'desc' },
    take: 50
  });
  
  if (comments.length === 0) {
    return <p className="text-gray-500">No comments yet. Be the first!</p>;
  }
  
  return (
    <div className="space-y-4">
      {comments.map(comment => (
        <div key={comment.id} className="border-b pb-4">
          <div className="flex justify-between">
            <span className="font-medium">{comment.authorName}</span>
            <span className="text-sm text-gray-500">
              {comment.createdAt.toLocaleDateString()}
            </span>
          </div>
          <p className="mt-2">{comment.content}</p>
        </div>
      ))}
    </div>
  );
}
```

```tsx
// components/blog/CommentForm.tsx
'use client';

import { useRef } from 'react';
import { addComment } from '@/app/actions/comments';
import { Button } from '../ui/Button';

export function CommentForm({ postId }: { postId: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  
  async function handleSubmit(formData: FormData) {
    formData.append('postId', postId);
    
    await addComment(formData);
    
    // Reset form
    formRef.current?.reset();
  }
  
  return (
    <form ref={formRef} action={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="authorName" className="block text-sm font-medium">
          Your Name
        </label>
        <input
          type="text"
          id="authorName"
          name="authorName"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>
      
      <div>
        <label htmlFor="content" className="block text-sm font-medium">
          Comment
        </label>
        <textarea
          id="content"
          name="content"
          rows={4}
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
        />
      </div>
      
      <Button type="submit">Post Comment</Button>
    </form>
  );
}
```

---

## What I Wish I Knew When I Started

After building with the App Router for two years, here's what I'd tell my past self:

**Start with the defaults.** Server Components by default, client components only when needed. Let Next.js handle the hard stuff.

**Think in layouts, not pages.** The layout system is your superpower. Design your layout hierarchy before writing components.

**Cache explicitly.** Don't rely on defaults—they change between versions. Always specify your caching strategy.

**Use Suspense boundaries liberally.** They make your app feel faster and give you fine-grained control over loading states.

**Server Actions are magical, but use them wisely.** Great for forms and mutations, but for public APIs, stick to Route Handlers.

**Measure everything.** The App Router is powerful, but with power comes complexity. Use the tools to monitor performance.

**Upgrade carefully.** Each version (14→15→16) brought breaking changes. Read the migration guides. Run the codemods. Test thoroughly.

---

That dashboard I was struggling with at 2 AM? I rebuilt it with the App Router in four hours. The layouts worked perfectly. The data fetching was clean. The performance was better than I'd ever seen.

And my cat finally stopped judging me.

---

*Enjoyed this post? I write about Next.js, React, and full-stack development every Month. Follow me on X [@themarelbiz](https://x.com/@themarvelbiz).*

---
