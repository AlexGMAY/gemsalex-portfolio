---
title: "10 TypeScript Tips Every React Developer Should Know"
date: "2025-01-20"
excerpt: "Level up your React development with these essential TypeScript patterns and techniques."
category: "TypeScript"
tags: ["typescript", "react", "typing", "development", "frontend"]
level: "intermediate"
author: "Merveille Alexander"
readTime: "14 min read"
---

# 10 TypeScript Tips Every React Developer Should Know

*Level up your React development with these essential TypeScript patterns and techniques*

---

## The Day TypeScript Stopped Being Scary

I remember the exact moment I decided to finally learn TypeScript. It was 3 PM on a rainy Tuesday, and I was debugging a React app that I hadn't touched in six months. A simple prop—just a boolean—was causing chaos somewhere deep in my component tree.

I stared at the error. `Cannot read property 'map' of undefined`. But I was sure I passed the data. I checked the parent component. The data was there. I checked the child component. The prop was there. I checked the grandchild component, and... oh. I had spelled `isLoading` as `isLoadingg`. One extra letter, three hours of my life gone forever.

"That's it," I shoutted. "I'm learning TypeScript."

Three years later, I could confidently say it was the best decision of my career. Not because TypeScript prevents typos (though it does). Not because it makes my code more "enterprise-ready" (whatever that means). But because TypeScript fundamentally changed how I think about React components.

These are the 10 tips I wish someone had told me on that rainy Tuesday.

---

## Tip 1: Stop Using `any` – Really, Just Stop

I know. I know. When you're learning TypeScript, `any` feels like a life raft. You're drowning in red squiggles, and `any` promises to make them go away.

```typescript
// Please don't do this
const fetchUser = async (id: any): Promise<any> => {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
};

// Or this
const MyComponent = ({ data }: any) => {
  return <div>{data.name}</div>;
};
```

But here's the thing: using `any` is like putting a band-aid on a broken leg. It hides the problem without fixing it.

### What To Do Instead

```typescript
// Define your types properly
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

const fetchUser = async (id: number): Promise<User> => {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
};

// Now React knows exactly what to expect
const UserProfile = ({ user }: { user: User }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {user.role === 'admin' && <button>Delete User</button>}
    </div>
  );
};
```

See what happened? Now when I try to access `user.address`, TypeScript gently reminds me that addresses don't exist on my User type. When I pass `user.id` as a string to something expecting a number, TypeScript catches it before my users do.

**The rule I follow now:** If I'm tempted to use `any`, I take a deep breath and ask myself: "Do I really not know what this is?" Usually, I do know. I'm just being lazy. And laziness in typing leads to pain later.

---

## Tip 2: Master `type` vs `interface` (It's Simpler Than You Think)

This debate has caused more Twitter arguments than pineapple on pizza. When should you use `type` and when should you use `interface`?

Here's the practical answer that actually matters for React development:

### Use `interface` for objects and class-like structures

```typescript
// Great for props and state
interface UserProps {
  name: string;
  age: number;
  email?: string; // optional
}

// Great for extending
interface AdminProps extends UserProps {
  permissions: string[];
}

// Great for declaration merging (more on this later)
```

### Use `type` for everything else

```typescript
// Unions
type Status = 'idle' | 'loading' | 'success' | 'error';

// Primitives
type UserID = string | number;

// Tuples
type Coordinates = [number, number];

// Utility types
type Nullable<T> = T | null;

// Function types
type ClickHandler = (event: React.MouseEvent) => void;
```

### The React Props Rule of Thumb

For 95% of React components, this is all you need:

```typescript
// I use interface for props 90% of the time
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled 
}: ButtonProps) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

Simple, readable, and TypeScript knows exactly what's going on.

---

## Tip 3: Use `React.FC`? Maybe Not

When I first started with TypeScript, every tutorial told me to use `React.FC`:

```typescript
// The old way
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};
```

But here's what nobody told me: `React.FC` has some quirks.

**The problems:**
- It implicitly includes `children` (even when you don't want them)
- It doesn't work well with generics
- It makes default props behave strangely

**What I use instead:**

```typescript
// Just type the props directly
const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

// For components that need to be super explicit
function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
```

Both work perfectly. Both are clear. Both play nicely with TypeScript.

---

## Tip 4: Extract Union Types from Constants

This pattern saves me hours of maintenance every month. When you have constants, don't write separate types—derive them.

### The Bad Way

```typescript
// You're maintaining the same list in two places
const buttonVariants = ['primary', 'secondary', 'danger'] as const;
type ButtonVariant = 'primary' | 'secondary' | 'danger'; // Duplication!
```

Now when you add a new variant, you have to update two things. Eventually you'll forget, and TypeScript will yell at you.

### The Good Way

```typescript
// Define your constants
export const BUTTON_VARIANTS = ['primary', 'secondary', 'danger'] as const;

// Derive the type from the constant
export type ButtonVariant = typeof BUTTON_VARIANTS[number];
// Result: 'primary' | 'secondary' | 'danger'

// Use them together
interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', children }: ButtonProps) => {
  return (
    <button className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};

// In another file, you can map through the constants
const VariantShowcase = () => (
  <div>
    {BUTTON_VARIANTS.map(variant => (
      <Button key={variant} variant={variant}>
        {variant} button
      </Button>
    ))}
  </div>
);
```

One source of truth. TypeScript infers everything. Maintenance goes down, confidence goes up.

---

## Tip 5: Type Your Event Handlers Properly

Nothing made me feel more like a beginner than trying to type event handlers. The syntax looked like alien language:

```typescript
// What is this?!
onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
```

But once I understood the pattern, it became second nature.

### The Pattern

```typescript
// Form elements -> ChangeEvent
<input 
  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }}
/>

<select 
  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  }}
>
  {/* options */}
</select>

// Buttons, divs -> MouseEvent
<button 
  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleClick();
  }}
>
  Click me
</button>

// Forms -> FormEvent
<form 
  onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm();
  }}
>
  {/* form fields */}
</form>
```

### The Clean Way

Better yet, extract your handlers:

```typescript
const SearchInput = () => {
  const [query, setQuery] = useState('');
  
  // TypeScript infers the event type automatically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchAPI(query);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};
```

Clean, readable, and fully typed.

---

## Tip 6: Use Discriminated Unions for Complex State

This pattern changed how I handle complex component states. Instead of boolean flags everywhere, use a discriminated union.

### The Messy Way

```typescript
// So many booleans, so many impossible states
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);
const [errorMessage, setErrorMessage] = useState('');

// What happens if isLoading and isError are both true? 
// What if we have data but also an error?
// Chaos, that's what.
```

### The Clean Way

```typescript
// One type to rule them all
type DataState<T> = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function DataFetcher({ url }: { url: string }) {
  const [state, setState] = useState<DataState<any>>({ status: 'idle' });
  
  useEffect(() => {
    setState({ status: 'loading' });
    
    fetch(url)
      .then(res => res.json())
      .then(data => setState({ status: 'success', data }))
      .catch(err => setState({ status: 'error', error: err.message }));
  }, [url]);
  
  // TypeScript knows exactly what's available in each state
  switch (state.status) {
    case 'idle':
      return <div>Ready to fetch</div>;
      
    case 'loading':
      return <Spinner />;
      
    case 'success':
      // TypeScript knows data exists here
      return <DisplayData data={state.data} />;
      
    case 'error':
      // TypeScript knows error exists here
      return <ErrorMessage message={state.error} />;
  }
}
```

This is beautiful. Impossible states are impossible. TypeScript guides you through every branch. Your coworkers will thank you.

---

## Tip 7: Leverage TypeScript's Utility Types

TypeScript comes with built-in utility types that save enormous amounts of code. Here are the ones I use daily:

### Pick and Omit

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

// For a profile display, omit sensitive fields
type PublicUser = Omit<User, 'password' | 'createdAt' | 'updatedAt'>;

// For a user card, pick only what you need
type UserCardProps = Pick<User, 'id' | 'name'>;

const UserCard = ({ id, name }: UserCardProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <Link to={`/users/${id}`}>View Profile</Link>
    </div>
  );
};
```

### Partial and Required

```typescript
interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// For form updates, everything is optional
const [formData, setFormData] = useState<Partial<FormData>>({});

// For submission, everything must be there
const handleSubmit = (data: Required<FormData>) => {
  // submit logic
};

// When editing, some fields might be required, some optional
interface EditUserForm {
  id: number; // required
  name?: string; // optional
  email?: string; // optional
}
```

### Record for Dictionaries

```typescript
// Instead of { [key: string]: User }
const usersById: Record<string, User> = {
  '1': { id: 1, name: 'John', email: 'john@example.com' },
  '2': { id: 2, name: 'Jane', email: 'jane@example.com' },
};

// With specific keys
type UserRole = 'admin' | 'moderator' | 'user';
const rolePermissions: Record<UserRole, string[]> = {
  admin: ['read', 'write', 'delete'],
  moderator: ['read', 'write'],
  user: ['read'],
};
```

---

## Tip 8: Type Your Custom Hooks

Custom hooks are where TypeScript really shines. A well-typed hook documents itself.

### Before: Guesswork

```typescript
function useLocalStorage(key, initialValue) {
  // What does this return? No idea.
  // Gotta read the implementation.
}
```

### After: Self-Documenting

```typescript
function useLocalStorage<T>(
  key: string, 
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
  
  return [storedValue, setValue];
}

// Now using it is crystal clear
function SettingsPage() {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>(
    'theme', 
    'light'
  );
  
  const [fontSize, setFontSize] = useLocalStorage<number>(
    'fontSize', 
    16
  );
  
  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      
      <input 
        type="number" 
        value={fontSize}
        onChange={(e) => setFontSize(parseInt(e.target.value))}
      />
    </div>
  );
}
```

The generic `<T>` makes this hook work with any type. The return type `[T, (value: T) => void]` tells you exactly how to use it.

---

## Tip 9: Use `satisfies` for Better Type Inference (TypeScript 4.9+)

This is a newer feature that solves a common frustration. Sometimes you want TypeScript to check that a value matches a type, but you also want the most specific inference possible.

### The Problem

```typescript
type Route = {
  path: string;
  component: React.ComponentType;
  permissions?: string[];
};

const routes: Record<string, Route> = {
  home: {
    path: '/',
    component: HomePage,
    // No permissions here - fine
  },
  admin: {
    path: '/admin',
    component: AdminPage,
    permissions: ['admin'], // This should be specific
  }
};

// When we use routes.admin.permissions, TypeScript only knows it's
// string[] | undefined, not the specific ['admin'] array
```

### The Solution with `satisfies`

```typescript
const routes = {
  home: {
    path: '/',
    component: HomePage,
  },
  admin: {
    path: '/admin',
    component: AdminPage,
    permissions: ['admin'] as const, // Now it's specifically ['admin']
  },
} satisfies Record<string, Route>;

// TypeScript knows routes.admin.permissions is ['admin']
// But it also checks that everything matches the Route type
```

This is perfect for configuration objects, route definitions, and any time you want both type checking AND precise inference.

---

## Tip 10: Don't Over-Optimize Types

This is the most important tip. TypeScript is a tool to help you, not a religion to worship.

### When NOT to Use TypeScript's Advanced Features

```typescript
// You COULD do this...
type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

// But do you NEED to?
interface SimpleProps {
  name: string;
  age: number;
}

// This is probably fine
const MyComponent = ({ name, age }: SimpleProps) => {
  return <div>{name} is {age} years old</div>;
};
```

### My Philosophy on TypeScript Complexity

**Do type:**
- Props and state
- API responses
- Complex business logic
- Custom hooks
- Utility functions

**Don't obsess over:**
- Perfectly typing every callback
- Deeply nested generics
- Conditional types for simple logic
- Making everything immutable

### The 80/20 Rule

```typescript
// Good enough
function processItems<T>(items: T[], filter: (item: T) => boolean): T[] {
  return items.filter(filter);
}

// Probably overkill for most apps
type ProcessItemsReturnType<T> = T extends Array<infer U> ? U[] : never;
function processItems<T, F extends (item: T) => boolean>(
  items: T[], 
  filter: F
): ProcessItemsReturnType<T> {
  // ... implementation
}
```

The first version is readable, maintainable, and catches the important errors. The second version might impress your TypeScript friends, but it'll confuse everyone else (including you in six months).

---

## Putting It All Together: A Real Component

Let's see these tips in action with a real-world example:

```typescript
import { useState } from 'react';

// Tip 4: Derive types from constants
export const BUTTON_SIZES = ['small', 'medium', 'large'] as const;
export const BUTTON_VARIANTS = ['primary', 'secondary', 'outline'] as const;

export type ButtonSize = typeof BUTTON_SIZES[number];
export type ButtonVariant = typeof BUTTON_VARIANTS[number];

// Tip 2: Interface for props
export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

// Tip 3: Regular function with typed props
export function Button({ 
  children, 
  size = 'medium',
  variant = 'primary',
  disabled = false,
  loading = false,
  onClick,
  type = 'button'
}: ButtonProps) {
  // Tip 5: Properly typed event handler
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };
  
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={`btn btn-${size} btn-${variant}`}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
}

// Tip 6: Discriminated union for async state
type AsyncState<T> = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

// Tip 8: Generic custom hook
function useAsync<T>(asyncFn: () => Promise<T>) {
  const [state, setState] = useState<AsyncState<T>>({ status: 'idle' });
  
  const execute = async () => {
    setState({ status: 'loading' });
    
    try {
      const data = await asyncFn();
      setState({ status: 'success', data });
    } catch (err) {
      setState({ status: 'error', error: String(err) });
    }
  };
  
  return { ...state, execute };
}

// Using everything together
const SubmitButton = () => {
  const { status, execute } = useAsync(async () => {
    const response = await fetch('/api/submit', { method: 'POST' });
    return response.json();
  });
  
  return (
    <Button
      variant="primary"
      size="large"
      loading={status === 'loading'}
      onClick={execute}
      type="submit"
    >
      {status === 'error' ? 'Try Again' : 'Submit Form'}
    </Button>
  );
};
```

---

## What I Wish I Knew When I Started

Learning TypeScript felt overwhelming at first. The error messages were cryptic. The syntax was foreign. I kept thinking, "Is this really worth it?"

Three years later, I can't imagine going back.

**Here's what I know now that I wish I knew then:**

**Start simple.** Type the easy stuff first. Props, state, simple functions. The advanced patterns will come naturally as you need them.

**Let TypeScript guide you.** When you see red squiggles, don't just add `any`. Read the error message. Try to understand what TypeScript is telling you. Often, it's catching a real bug.

**Use an IDE with good TypeScript support.** VS Code is free and amazing. The autocomplete, the refactoring tools, the instant feedback—it's worth its weight in gold.

**TypeScript is for humans, not just the compiler.** The best types make your code self-documenting. When someone reads your component, they should understand what it needs without reading the implementation.

**You'll still make mistakes.** TypeScript doesn't guarantee bug-free code. But it catches the dumb mistakes—the typos, the undefined values, the wrong function calls—so you can focus on the interesting bugs.

---

That rainy Tuesday when I decided to learn TypeScript turned out to be one of the best days of my career. Not because TypeScript made me a genius. But because it made me a more confident developer. When I push code now, I sleep better at night. When I refactor, I move faster. When I onboard new team members, they understand the codebase sooner.

TypeScript didn't make me smarter. It just eliminated the distractions so I could focus on what matters: building things that people actually use.

---

*Enjoyed this post? I write about React, TypeScript, and real-world development every Month. Follow me on X [@themarvelbiz](https://x.com/@themarvelbiz).*

---
