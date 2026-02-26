---
title: "Modern React Patterns You Should Know in 2024"
date: "2024-01-15"
excerpt: "Explore the latest React patterns and best practices that will make your code more maintainable and performant."
category: "React"
tags: ["react", "patterns", "hooks", "performance", "best-practices", "frontend"]
featured: true
level: "intermediate"
author: "Merveille Alexander"
readTime: "12 min read"
---

# Web Components vs React: The Future of Web Development


---

## The Coffee Shop Conversation That Started It All

Last Tuesday, I found myself tucked in the corner of my favorite coffee shop, the one with the terrible Wi-Fi but absolutely perfect oat milk lattes. I was deep in the zone, refactoring a particularly nasty piece of React code when a young developer approached me.

"Hey, sorry to bother you," he said, clutching his laptop like a shield. "I couldn't help but notice the React devtools on your screen. I'm learning web development, and everyone keeps telling me I need to choose between Web Components and React. I'm completely lost."

I smiled, closed my laptop, and waved him to sit down. "That's actually perfect timing," I said. "I've been thinking about this exact topic for weeks."

What followed was a two-hour conversation that reminded me why I fell in love with web development in the first place. And now, I want to share that conversation with you.

---

## Setting the Stage: A Quick History Lesson

Before we dive into the deep end, let me take you back to 2016. I was fresh out of College, building websites with jQuery and PHP, life was simple. Then Facebook dropped React like a bombshell, and suddenly everything changed.

```javascript
// The old ways (2012)
$('.button').click(function() {
  $(this).text('Clicked!');
  $('.modal').fadeIn();
});

// React enters the chat (2013)
class Button extends React.Component {
  handleClick = () => {
    this.setState({ clicked: true });
  }
  
  render() {
    return <button onClick={this.handleClick}>Clicked!</button>;
  }
}
```

Meanwhile, the Web Components specification was slowly making its way through the W3C, promising native, framework-agnostic components that would work everywhere.

Fast forward to 2024, and here we are, still having this debate. But here's the thing: it's not really a debate anymore. It's a conversation about choice, trade-offs, and understanding what tools work best for different jobs.

---

## Understanding Web Components: The Native Approach

Let's start with Web Components, because they're often misunderstood. Think of Web Components as the web platform's way of saying, "Hey, I heard you like components, so I built them right into the browser."

### The Three Pillars of Web Components

Web Components are built on three core technologies:

```javascript
// A simple Web Component
class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: 1px solid #ddd;
          padding: 1rem;
          border-radius: 8px;
        }
      </style>
      <div class="card">
        <h3>${this.getAttribute('name')}</h3>
        <p>${this.getAttribute('role')}</p>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('user-card', UserCard);
```

**1. Custom Elements**: These let you define your own HTML tags. When you write `<user-card name="Sarah"></user-card>`, you're using the platform directly.

**2. Shadow DOM**: This is encapsulation at its finest. Styles and scripts inside a Shadow DOM are isolated from the rest of the page. No more CSS bleeding! No more accidental ID conflicts!

**3. HTML Templates**: The `<template>` and `<slot>` elements allow you to define reusable chunks of markup that aren't rendered until you need them.

### The Beauty of Web Components

The most beautiful thing about Web Components is their longevity. Code written with Web Components five years ago still works today. Code written today will work in five years. That's the promise of web standards.

I've worked on projects where we built a component library with Web Components, and it was used across React, Angular, and vanilla JavaScript applications. One codebase, every framework happy.

```html
<!-- The same Web Component works everywhere -->
<custom-date-picker></custom-date-picker>

<!-- In React -->
function App() {
  return <custom-date-picker />;
}

<!-- In Vue -->
<template>
  <custom-date-picker />
</template>

<!-- In Angular -->
<custom-date-picker></custom-date-picker>
```

---

## React: The Developer Experience Champion

Now, let's talk about my old friend React. I've been using React professionally since version 0.14, and watching it evolve has been like watching a child grow up—sometimes frustrating, often surprising, but ultimately rewarding.

### Why React Stole Our Hearts

React isn't just a library; it's a mental model. The component paradigm, the declarative approach, the way it makes you think about your UI as a function of state—these ideas fundamentally changed how we build for the web.

```jsx
// Modern React with hooks
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchUser(userId).then(data => {
      setUser(data);
      setLoading(false);
    });
  }, [userId]);
  
  if (loading) return <Spinner />;
  
  return (
    <div className="profile">
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
}
```

The developer experience in React is unparalleled. Hot reloading that actually works, a massive ecosystem of tools and libraries, and error messages that (usually) tell you what's wrong.

### The React Ecosystem: A Double-Edged Sword

Here's where it gets complicated. React's ecosystem is both its greatest strength and its biggest weakness.

```bash
# A typical React project's dependencies
npm install react react-dom next
npm install @tanstack/react-query
npm install zustand
npm install tailwindcss
npm install @radix-ui/react-dialog
npm install react-hook-form
npm install framer-motion
# ... and 50 more packages
```

Yes, you can build almost anything with React. But do you really need all these dependencies? Sometimes I look at my `package.json` and wonder if I'm building an application or managing a small country's economy.

---

## The Great Comparison: Where They Shine

Let me break this down in a way I wish someone had explained to me when I was starting out.

### Performance: The Native Advantage

Web Components have a fundamental advantage: they're built into the browser. No virtual DOM diffing, no JavaScript bundle to parse and execute before rendering—just pure, native performance.

```javascript
// Web Component: Direct DOM manipulation
class FastList extends HTMLElement {
  set items(newItems) {
    this.render(newItems);
  }
  
  render(items) {
    // Direct DOM updates
    this.innerHTML = items.map(item => `
      <li>${item}</li>
    `).join('');
  }
}

// React: Virtual DOM overhead
function SlowList({ items }) {
  return (
    <ul>
      {items.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  );
}
```

But here's the catch: for most applications, you'll never notice the difference. React's virtual DOM is incredibly optimized, and unless you're building something with thousands of dynamic elements, performance won't be your bottleneck.

### Developer Experience: React Takes the Crown

This is where React shines brightest. The component model in React is intuitive and powerful.

```jsx
// React: Declarative and intuitive
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  
  const addTodo = () => {
    setTodos([...todos, { text: input, id: Date.now() }]);
    setInput('');
  };
  
  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

Try doing that with vanilla Web Components. It's possible, but it requires more boilerplate and a deeper understanding of the platform.

```javascript
// Web Component: More imperative
class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.todos = [];
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }
  
  render() {
    this.shadowRoot.innerHTML = `
      <div>
        <input class="input" />
        <button class="add-btn">Add</button>
        <ul class="todo-list">
          ${this.todos.map(todo => `
            <li>${todo.text}</li>
          `).join('')}
        </ul>
      </div>
    `;
  }
  
  setupEventListeners() {
    this.shadowRoot.querySelector('.add-btn')
      .addEventListener('click', () => {
        const input = this.shadowRoot.querySelector('.input');
        this.todos.push({ text: input.value });
        this.render();
      });
  }
}
```

---

## The Next.js Factor: React's Secret Weapon

Now, I need to be honest with you about something. As someone who spends most of their days in Next.js, I'm a little biased. Next.js took React and made it production-ready.

```jsx
// app/users/[id]/page.jsx
import { notFound } from 'next/navigation';

async function getUser(id) {
  const res = await fetch(`https://api.example.com/users/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function UserPage({ params }) {
  const user = await getUser(params.id);
  
  if (!user) {
    notFound();
  }
  
  return (
    <main>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </main>
  );
}
```

Server Components, file-based routing, automatic code splitting—Next.js solved so many of React's production challenges that it's hard to imagine building a serious React app without it.

### Where Web Components Shine in the Next.js World

Here's an interesting pattern I've been using lately: building core UI components as Web Components, then wrapping them for use in Next.js.

```jsx
// components/WrappedButton.jsx
'use client';

import { useEffect, useRef } from 'react';
import 'custom-elements/button';

export function WrappedButton({ children, variant, onClick }) {
  const ref = useRef();
  
  useEffect(() => {
    const element = ref.current;
    element.addEventListener('click', onClick);
    return () => element.removeEventListener('click', onClick);
  }, [onClick]);
  
  return (
    <custom-button ref={ref} variant={variant}>
      {children}
    </custom-button>
  );
}
```

This gives you the best of both worlds: the stability and reusability of Web Components with the developer experience of React.

---

## Real-World Scenarios: When to Use What

After fifteen years of building for the web, here's my honest advice about when to choose each technology.

### Choose Web Components When:

**1. You're building a design system for a large organization**

```javascript
// A design system component that works everywhere
// button.js - published to npm
class DSButton extends HTMLElement {
  // Implementation that works in any framework
}

// Used in React, Vue, Angular, and vanilla JS projects
```

I did this for a fintech company with 50+ microfrontends. Being able to update the button style once and have it propagate everywhere was magical.

**2. Your application needs to outlive framework trends**

Government websites, educational platforms, digital archives—these need to work for decades, not just until the next hot framework appears.

**3. You're embedding widgets in third-party sites**

```html
<!-- Any website can use your widget -->
<script src="https://cdn.example.com/chat-widget.js"></script>
<chat-widget theme="dark"></chat-widget>
```

No framework conflicts, no weird initialization scripts—just HTML.

### Choose React When:

**1. You're building a complex, interactive application**

```jsx
// Complex state management is React's bread and butter
function AnalyticsDashboard() {
  const { data, isLoading } = useQuery('analytics', fetchAnalytics);
  const [dateRange, setDateRange] = useState('week');
  const filters = useFilters();
  const { mutate } = useMutation(exportData);
  
  // Complex UI logic becomes manageable
  return (
    <DashboardLayout>
      <DatePicker value={dateRange} onChange={setDateRange} />
      <FilterBar {...filters} />
      {isLoading ? (
        <SkeletonGrid />
      ) : (
        <>
          <ChartGrid data={data} filters={filters} />
          <DataTable 
            data={data.rows} 
            onExport={() => mutate(data)}
          />
        </>
      )}
    </DashboardLayout>
  );
}
```

**2. You need rich ecosystem support**

Need authentication? There's a library. Forms? React Hook Form has you covered. Tables, charts, drag-and-drop, animations—the React ecosystem has battle-tested solutions for everything.

**3. You're building with Next.js for SEO and performance**

```jsx
// app/blog/[slug]/page.jsx
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [post.coverImage],
    }
  };
}
```

The combination of React and Next.js gives you the developer experience of a single-page app with the SEO benefits of server-rendered content.

---

## The Future: Where We're Headed

I've been doing this long enough to know that predicting the future of web development is a fool's errand. But I can tell you where I'm placing my bets.

### The Convergence

Here's what excites me: the line between Web Components and React is blurring.

**React 19 and Web Components**

React 19 has significantly improved Web Component support. You can now use Web Components in React with less boilerplate:

```jsx
// React 19 - Web Components work more naturally
function App() {
  return (
    <>
      <my-input 
        value={value}
        onInput={(e) => setValue(e.target.value)}
      />
      
      <sl-dialog open={isOpen}>
        <my-card>
          <h2 slot="header">Title</h2>
          <p>Content</p>
        </my-card>
      </sl-dialog>
    </>
  );
}
```

**Web Components Getting Better Tooling**

The Web Components ecosystem is maturing. Libraries like Lit make authoring Web Components feel almost as good as writing React components:

```javascript
// Lit - Web Components with React-like DX
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  @property() name = 'World';
  
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
```

### My Prediction

I think we're heading toward a hybrid future. Core UI components will be Web Components—stable, framework-agnostic, and long-lasting. Application logic and complex interactions will be built with React (or whatever framework you prefer), wrapping these base components.

```jsx
// The future: Hybrid approach
// Design system built with Web Components
import '@company/design-system/button';
import '@company/design-system/card';
import '@company/design-system/modal';

// Application built with Next.js
export default function App() {
  return (
    <company-card>
      <h2>Welcome to our app</h2>
      <p>This content is dynamic, but the components are stable</p>
      <company-button variant="primary">
        Get Started
      </company-button>
    </company-card>
  );
}
```

---

## What I Tell Junior Developers

If you're just starting out, here's my honest advice:

**Learn Web Components first.** Understanding how the platform works—custom elements, shadow DOM, events, slots—will make you a better developer regardless of what framework you use later. It's like learning to cook before you start using a microwave.

```javascript
// Start here
class MyComponent extends HTMLElement {
  // Understand the platform
}

// Then move to frameworks
function MyComponent() {
  // Appreciate the abstractions
}
```

**But build your projects with React.** The job market, the community, the tools—React is where the opportunities are right now. Plus, the skills you learn—component thinking, state management, hooks—transfer to other frameworks.

**Never stop being curious.** The web platform is evolving. New APIs, new patterns, new ways of thinking. The developers who thrive aren't the ones who pick the "right" technology—they're the ones who understand the trade-offs and make informed decisions.

---

## Wrapping Up

As I finished my latte and my new friend packed up his laptop, he asked one last question: "So... who wins? Web Components or React?"

I laughed and said, "The web wins. We get to build amazing things with amazing tools. The rest is just implementation details."

And that's the truth. Whether you're writing vanilla Web Components, crafting beautiful React applications, or (like me) finding creative ways to combine both, you're building for the web. You're creating experiences that reach people across devices, across borders, across the world.

That's pretty special, isn't it?

---

*Enjoyed this post? I write about React, Next.js, and web development every Month. Follow me on X [@themarvelbiz](https://x.com/@themarvelbiz). And if you have questions about Web Components or React, contact me on social media.*

---
