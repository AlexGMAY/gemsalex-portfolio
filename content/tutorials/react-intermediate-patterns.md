---
title: "React Intermediate Patterns and Best Practices"
date: "2025-11-20"
excerpt: "Master React hooks, context API, performance optimization, and component composition patterns."
category: "Tutorial"
tags: ["react", "hooks", "context", "performance", "patterns", "intermediate"]
featured: true
level: "intermediate"
author: "Merveille Alexander"
readTime: "25 min read"
---

# React Intermediate Patterns and Best Practices

*Master React hooks, context API, performance optimization, and component composition patterns*

---

## Before We Begin: Who This Tutorial Is For

You've built a few React apps. You know how to create components, use `useState` and `useEffect`, maybe even `useContext`. But something feels off. Your components are getting bloated. State logic is duplicated everywhere. Performance is starting to suffer.

**This tutorial is for you.**

**What you'll learn:**
- Core concepts and practical applications
- Step-by-step implementation guide
- Best practices and optimization tips
- Real-world tradeoffs and decision-making

**Prerequisites:**
- You've built at least 2-3 React apps
- You know basic hooks (`useState`, `useEffect`, `useContext`)
- You're comfortable with JavaScript/TypeScript basics

**Time to complete:** About 2 hours

Let's level up your React skills.

---

## Part 1: The Problem With "Just Making It Work"

### The Scenario

You're building a shopping cart for an e-commerce site. Requirements:

- Add/remove items
- Calculate totals
- Apply discounts
- Save to localStorage
- Track analytics

Your first attempt might look like this:

```jsx
// ❌ The "it works" approach (but it doesn't scale)
function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [discountCode, setDiscountCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage when items change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  // Apply discount
  const discount = discountCode === 'SAVE10' ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  // Track analytics
  useEffect(() => {
    if (items.length > 0) {
      analytics.track('cart_updated', { itemCount: items.length, total });
    }
  }, [items, total]);

  const addItem = (product) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => 
          i.id === product.id 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  // ... render the UI
}
```

This works. But it has problems:

1. **Everything is coupled** — Cart logic, localStorage, analytics all in one component
2. **Hard to test** — Can't test cart logic without rendering
3. **Hard to reuse** — Want to use cart in another component? Copy-paste
4. **Performance issues** — Every state change recalculates everything

Let's fix this step by step.

---

## Part 2: Custom Hooks – The Foundation of Reusable Logic

The first pattern to master: **extracting logic into custom hooks**.

### Step 1: Create a useCart Hook

Let's pull all cart logic into its own hook:

```jsx
// hooks/useCart.js
import { useState, useCallback } from 'react';

export function useCart(initialItems = []) {
  const [items, setItems] = useState(initialItems);

  const addItem = useCallback((product) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => 
          i.id === product.id 
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems(prev => prev.filter(i => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    if (quantity <= 0) {
      return removeItem(id);
    }
    setItems(prev => 
      prev.map(i => i.id === id ? { ...i, quantity } : i)
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);
  
  const subtotal = items.reduce(
    (sum, i) => sum + i.price * i.quantity, 
    0
  );

  return {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
  };
}
```

### Step 2: Create a useLocalStorage Hook

Now a reusable localStorage hook:

```jsx
// hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Get initial value from localStorage or use initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage when state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
```

### Step 3: Create a useAnalytics Hook

And an analytics hook:

```jsx
// hooks/useAnalytics.js
import { useEffect, useRef } from 'react';

export function useAnalytics() {
  const trackEvent = (eventName, properties = {}) => {
    // In production, send to your analytics service
    console.log('📊 Analytics:', eventName, properties);
    
    // Example: send to Google Analytics
    if (window.gtag) {
      window.gtag('event', eventName, properties);
    }
  };

  const trackPageView = (path) => {
    trackEvent('page_view', { path });
  };

  const trackUserAction = (action, details) => {
    trackEvent('user_action', { action, ...details });
  };

  return { trackEvent, trackPageView, trackUserAction };
}
```

### Step 4: Compose Them Together

Now our component becomes clean and focused:

```jsx
// components/ShoppingCart.jsx
import { useCart } from '../hooks/useCart';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useAnalytics } from '../hooks/useAnalytics';
import { useEffect } from 'react';

export function ShoppingCart() {
  // Load initial cart from localStorage
  const [savedCart, setSavedCart] = useLocalStorage('cart', []);
  
  // Use the cart hook
  const { 
    items, 
    addItem, 
    removeItem, 
    updateQuantity, 
    clearCart,
    subtotal,
    itemCount 
  } = useCart(savedCart);

  const { trackUserAction } = useAnalytics();

  // Save to localStorage whenever cart changes
  useEffect(() => {
    setSavedCart(items);
  }, [items, setSavedCart]);

  // Track cart updates
  useEffect(() => {
    if (items.length > 0) {
      trackUserAction('cart_updated', { 
        itemCount: items.length, 
        subtotal 
      });
    }
  }, [items, subtotal, trackUserAction]);

  const [discountCode, setDiscountCode] = useState('');
  
  // Discount logic (still in component - specific to this view)
  const discount = discountCode === 'SAVE10' ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart ({itemCount} items)</h2>
      
      <CartItems 
        items={items} 
        onUpdateQuantity={updateQuantity}
        onRemove={removeItem}
      />
      
      <CartSummary 
        subtotal={subtotal}
        discount={discount}
        total={total}
        discountCode={discountCode}
        onDiscountCodeChange={setDiscountCode}
        onCheckout={() => trackUserAction('checkout_started')}
      />
      
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
```

**What we gained:**
- ✅ **Separation of concerns** — Each hook does one thing
- ✅ **Reusability** — Use these hooks anywhere
- ✅ **Testability** — Test cart logic without DOM
- ✅ **Readability** — Component is now about composition, not implementation

---

## Part 3: Context API – When and How to Use It

Custom hooks are great for reusable logic, but sometimes you need to share state across many components. That's when you reach for Context.

### The Problem: Prop Drilling

```jsx
// ❌ Props passed through components that don't need them
function App() {
  const [user, setUser] = useState(null);
  
  return (
    <div>
      <Header user={user} setUser={setUser} />
      <Sidebar user={user} />
      <MainContent user={user} />
    </div>
  );
}

function Header({ user, setUser }) {
  return (
    <header>
      <UserMenu user={user} setUser={setUser} />
    </header>
  );
}
```

### Step 1: Create a Context

```jsx
// contexts/AuthContext.jsx
import { createContext, useContext, useState, useCallback } from 'react';

// Create context
const AuthContext = createContext(null);

// Create provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (email, password) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      const userData = await response.json();
      setUser(userData);
      return userData;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    await fetch('/api/logout');
    setUser(null);
  }, []);

  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
```

### Step 2: Use the Context

```jsx
// App.jsx
import { AuthProvider } from './contexts/AuthContext';
import { ShoppingCart } from './components/ShoppingCart';

export default function App() {
  return (
    <AuthProvider>
      <Header />
      <Sidebar />
      <ShoppingCart />
    </AuthProvider>
  );
}
```

```jsx
// components/UserMenu.jsx
import { useAuth } from '../contexts/AuthContext';

export function UserMenu() {
  const { user, logout, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  if (!user) {
    return <LoginButton />;
  }

  return (
    <div className="user-menu">
      <span>Welcome, {user.name}!</span>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

### Step 3: Optimize Context Usage

Context has a downside: **everything that consumes it re-renders when any value changes**. Here's how to fix that:

```jsx
// ❌ Problem: All consumers re-render when ANYTHING changes
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState({});
  
  const value = { user, setUser, settings, setSettings };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// ✅ Solution: Split into multiple contexts
const UserContext = createContext();
const SettingsContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [settings, setSettings] = useState({});
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <SettingsContext.Provider value={{ settings, setSettings }}>
        {children}
      </SettingsContext.Provider>
    </UserContext.Provider>
  );
}

// Now components only re-render when their slice changes
function UserAvatar() {
  const { user } = useContext(UserContext); // Only re-renders when user changes
  return <img src={user?.avatar} />;
}

function ThemeToggle() {
  const { settings, setSettings } = useContext(SettingsContext); // Only re-renders when settings change
  return (
    <button onClick={() => setSettings({ theme: 'dark' })}>
      Toggle Theme
    </button>
  );
}
```

---

## Part 4: Component Composition Patterns

Now let's look at patterns for building flexible, reusable components.

### Pattern 1: The Compound Component Pattern

This pattern lets you create components that work together implicitly.

```jsx
// ❌ The rigid approach
function Select({ options, value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
// Can't customize option rendering, add icons, etc.
```

```jsx
// ✅ The compound component approach
import { createContext, useContext, useState } from 'react';

const SelectContext = createContext();

export function Select({ children, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const selectValue = (val) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <SelectContext.Provider value={{ value, selectValue, isOpen, setIsOpen }}>
      <div className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  );
}

Select.Trigger = function Trigger({ children }) {
  const { value, setIsOpen } = useContext(SelectContext);
  
  return (
    <button 
      onClick={() => setIsOpen(prev => !prev)}
      className="w-full p-2 border rounded flex justify-between items-center"
    >
      {children || value}
      <span>▼</span>
    </button>
  );
};

Select.Options = function Options({ children }) {
  const { isOpen } = useContext(SelectContext);
  
  if (!isOpen) return null;
  
  return (
    <div className="absolute z-10 w-full mt-1 border rounded bg-white shadow-lg">
      {children}
    </div>
  );
};

Select.Option = function Option({ value, children }) {
  const { selectValue, setIsOpen } = useContext(SelectContext);
  
  const handleClick = () => {
    selectValue(value);
  };
  
  return (
    <div
      onClick={handleClick}
      className="p-2 hover:bg-gray-100 cursor-pointer"
    >
      {children}
    </div>
  );
};

// Usage
function App() {
  const [color, setColor] = useState('red');
  
  return (
    <Select value={color} onChange={setColor}>
      <Select.Trigger />
      <Select.Options>
        <Select.Option value="red">🔴 Red</Select.Option>
        <Select.Option value="green">🟢 Green</Select.Option>
        <Select.Option value="blue">🔵 Blue</Select.Option>
      </Select.Options>
    </Select>
  );
}
```

### Pattern 2: The Render Props Pattern

Sometimes you need to share logic but let the consumer control rendering.

```jsx
// components/MouseTracker.jsx
import { useState, useEffect } from 'react';

export function MouseTracker({ children, render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Support both children as function or render prop
  if (typeof children === 'function') {
    return children(position);
  }
  
  if (render) {
    return render(position);
  }
  
  return null;
}

// Usage
function App() {
  return (
    <div>
      <h1>Move your mouse</h1>
      
      <MouseTracker>
        {({ x, y }) => (
          <div className="mouse-position">
            Mouse is at ({x}, {y})
          </div>
        )}
      </MouseTracker>
      
      <MouseTracker 
        render={({ x, y }) => (
          <div className="cursor" style={{ left: x, top: y }}>
            👆
          </div>
        )}
      />
    </div>
  );
}
```

### Pattern 3: The Higher-Order Component (HOC) Pattern

HOCs are less common now (hooks are usually better), but they're still useful for certain cross-cutting concerns.

```jsx
// hocs/withAuth.jsx
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { user, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !user) {
        router.push('/login');
      }
    }, [user, isLoading, router]);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!user) {
      return null;
    }

    return <Component {...props} user={user} />;
  };
}

// hocs/withLogger.jsx
export function withLogger(Component, componentName) {
  return function LoggedComponent(props) {
    useEffect(() => {
      console.log(`${componentName} mounted`);
      return () => console.log(`${componentName} unmounted`);
    }, []);

    useEffect(() => {
      console.log(`${componentName} updated`, props);
    });

    return <Component {...props} />;
  };
}

// Usage
function Dashboard({ user }) {
  return <div>Welcome, {user.name}!</div>;
}

// Compose multiple HOCs
export default withLogger(withAuth(Dashboard), 'Dashboard');
```

---

## Part 5: Advanced Hook Patterns

### Pattern 1: useReducer for Complex State

When `useState` gets messy, reach for `useReducer`:

```jsx
// hooks/useTicketManagement.js
import { useReducer, useCallback } from 'react';

// Define state shape
const initialState = {
  tickets: [],
  selectedTicket: null,
  filters: {
    status: 'all',
    priority: 'all',
    search: ''
  },
  ui: {
    isLoading: false,
    error: null,
    viewMode: 'list'
  }
};

// Define actions as constants
const ACTIONS = {
  SET_TICKETS: 'SET_TICKETS',
  SELECT_TICKET: 'SELECT_TICKET',
  UPDATE_FILTERS: 'UPDATE_FILTERS',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  TOGGLE_VIEW_MODE: 'TOGGLE_VIEW_MODE'
};

// Reducer function
function ticketReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_TICKETS:
      return { ...state, tickets: action.payload };
      
    case ACTIONS.SELECT_TICKET:
      return { ...state, selectedTicket: action.payload };
      
    case ACTIONS.UPDATE_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };
      
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        ui: { ...state.ui, isLoading: action.payload }
      };
      
    case ACTIONS.SET_ERROR:
      return {
        ...state,
        ui: { ...state.ui, error: action.payload }
      };
      
    case ACTIONS.TOGGLE_VIEW_MODE:
      return {
        ...state,
        ui: {
          ...state.ui,
          viewMode: state.ui.viewMode === 'list' ? 'grid' : 'list'
        }
      };
      
    default:
      return state;
  }
}

// Custom hook using useReducer
export function useTicketManagement() {
  const [state, dispatch] = useReducer(ticketReducer, initialState);

  const loadTickets = useCallback(async () => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    try {
      const response = await fetch('/api/tickets');
      const data = await response.json();
      dispatch({ type: ACTIONS.SET_TICKETS, payload: data });
    } catch (error) {
      dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
    } finally {
      dispatch({ type: ACTIONS.SET_LOADING, payload: false });
    }
  }, []);

  const selectTicket = useCallback((ticket) => {
    dispatch({ type: ACTIONS.SELECT_TICKET, payload: ticket });
  }, []);

  const updateFilters = useCallback((filters) => {
    dispatch({ type: ACTIONS.UPDATE_FILTERS, payload: filters });
  }, []);

  const toggleViewMode = useCallback(() => {
    dispatch({ type: ACTIONS.TOGGLE_VIEW_MODE });
  }, []);

  return {
    ...state,
    loadTickets,
    selectTicket,
    updateFilters,
    toggleViewMode
  };
}
```

### Pattern 2: useMemo and useCallback – When to Use Them

The React Compiler in 2026 handles most memoization automatically, but sometimes you need manual control:

```jsx
// ✅ Good use of useMemo: Expensive calculations
function ProductList({ products, filters }) {
  // This calculation is expensive - memoize it
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products
      .filter(p => {
        if (filters.category && p.category !== filters.category) return false;
        if (filters.minPrice && p.price < filters.minPrice) return false;
        if (filters.maxPrice && p.price > filters.maxPrice) return false;
        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'price') return a.price - b.price;
        if (filters.sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [products, filters]);

  return (
    <div>
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// ✅ Good use of useCallback: Stable function references
function SearchBox({ onSearch }) {
  const [query, setQuery] = useState('');

  // Debounced search function - stable reference prevents re-renders
  const debouncedSearch = useCallback(
    debounce((searchQuery) => {
      onSearch(searchQuery);
    }, 300),
    [onSearch]
  );

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search..."
    />
  );
}
```

### Pattern 3: useRef for DOM and Instance Variables

```jsx
// components/VideoPlayer.jsx
import { useRef, useState, useEffect } from 'react';

export function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // useRef for values that shouldn't trigger re-renders
  const analyticsRef = useRef({
    startTime: null,
    pauseCount: 0
  });

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
      analyticsRef.current.pauseCount++;
    } else {
      videoRef.current.play();
      analyticsRef.current.startTime = Date.now();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    const progress = (video.currentTime / video.duration) * 100;
    setProgress(progress);
  };

  const handleEnded = () => {
    const watchTime = (Date.now() - analyticsRef.current.startTime) / 1000;
    console.log(`Video watched for ${watchTime}s with ${analyticsRef.current.pauseCount} pauses`);
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div>
      <video
        ref={videoRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        className="w-full"
      />
      
      <div className="controls">
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
```

---

## Part 6: Performance Optimization Patterns

### Pattern 1: React.memo for Preventing Re-renders

```jsx
// components/ExpensiveChart.jsx
import { memo } from 'react';

// Only re-renders if data or color change
export const ExpensiveChart = memo(function ExpensiveChart({ data, color }) {
  console.log('Rendering chart...');
  
  // Imagine expensive rendering here
  return (
    <div className="chart" style={{ backgroundColor: color }}>
      {data.map(point => (
        <div key={point.x} style={{ height: point.y }}>
          {/* Chart bars */}
        </div>
      ))}
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function
  return (
    prevProps.color === nextProps.color &&
    prevProps.data.length === nextProps.data.length &&
    prevProps.data.every((point, i) => 
      point.x === nextProps.data[i].x && 
      point.y === nextProps.data[i].y
    )
  );
});
```

### Pattern 2: useDeferredValue for Responsive UI

```jsx
// components/SearchResults.jsx
import { useState, useDeferredValue, useMemo } from 'react';

export function SearchResults({ items }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Defer the expensive rendering
  const deferredQuery = useDeferredValue(searchQuery);
  
  // This will be delayed if the user is typing quickly
  const filteredItems = useMemo(() => {
    console.log('Filtering...');
    return items.filter(item => 
      item.name.toLowerCase().includes(deferredQuery.toLowerCase())
    );
  }, [items, deferredQuery]);

  const isStale = deferredQuery !== searchQuery;

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />
      
      <div style={{ opacity: isStale ? 0.5 : 1 }}>
        {filteredItems.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      
      {isStale && <div>Updating...</div>}
    </div>
  );
}
```

### Pattern 3: useTransition for Non-Urgent Updates

```jsx
// components/TabView.jsx
import { useState, useTransition } from 'react';

export function TabView() {
  const [tab, setTab] = useState('home');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (newTab) => {
    // Mark this update as non-urgent
    startTransition(() => {
      setTab(newTab);
    });
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => handleTabChange('home')}>
          Home
        </button>
        <button onClick={() => handleTabChange('products')}>
          Products
        </button>
        <button onClick={() => handleTabChange('analytics')}>
          Analytics (Slow)
        </button>
      </div>

      {isPending && <div>Loading...</div>}

      <div style={{ opacity: isPending ? 0.5 : 1 }}>
        {tab === 'home' && <HomeTab />}
        {tab === 'products' && <ProductsTab />}
        {tab === 'analytics' && <SlowAnalyticsTab />}
      </div>
    </div>
  );
}
```

---

## Part 7: Error Handling Patterns

### Pattern 1: Error Boundaries

```jsx
// components/ErrorBoundary.jsx
import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log to error tracking service
    console.error('Error caught:', error, errorInfo);
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="error-boundary p-4 bg-red-50 border border-red-200 rounded">
          <h2 className="text-red-800 font-bold mb-2">
            Something went wrong
          </h2>
          <p className="text-red-600 mb-4">
            {this.state.error?.message || 'Unknown error'}
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### Pattern 2: Async Error Handling with Hooks

```jsx
// hooks/useAsync.js
import { useState, useCallback } from 'react';

export function useAsync(asyncFunction) {
  const [state, setState] = useState({
    status: 'idle',
    data: null,
    error: null
  });

  const execute = useCallback(async (...args) => {
    setState({ status: 'pending', data: null, error: null });
    
    try {
      const data = await asyncFunction(...args);
      setState({ status: 'success', data, error: null });
      return data;
    } catch (error) {
      setState({ status: 'error', data: null, error });
      throw error;
    }
  }, [asyncFunction]);

  return {
    ...state,
    execute,
    isIdle: state.status === 'idle',
    isPending: state.status === 'pending',
    isSuccess: state.status === 'success',
    isError: state.status === 'error'
  };
}

// Usage
function UserProfile({ userId }) {
  const { 
    data: user, 
    isPending, 
    isError, 
    error, 
    execute: fetchUser 
  } = useAsync(async (id) => {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  });

  useEffect(() => {
    fetchUser(userId);
  }, [userId, fetchUser]);

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!user) return null;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

---

## Part 8: Real-World Example: Building a Data Table

Let's put everything together by building a feature-rich data table:

```jsx
// components/DataTable/DataTable.jsx
import { useState, useMemo, useCallback } from 'react';
import { useSorting } from './hooks/useSorting';
import { useFiltering } from './hooks/useFiltering';
import { usePagination } from './hooks/usePagination';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { Pagination } from './Pagination';

export function DataTable({ data, columns, pageSize = 10 }) {
  // Sorting
  const { sortConfig, sortedData, requestSort } = useSorting(data);

  // Filtering
  const { filters, filteredData, updateFilter } = useFiltering(sortedData);

  // Pagination
  const { 
    paginatedData, 
    currentPage, 
    totalPages, 
    goToPage 
  } = usePagination(filteredData, pageSize);

  // Column visibility (local state)
  const [visibleColumns, setVisibleColumns] = useState(
    columns.map(c => c.key)
  );

  const toggleColumn = useCallback((columnKey) => {
    setVisibleColumns(prev => 
      prev.includes(columnKey)
        ? prev.filter(k => k !== columnKey)
        : [...prev, columnKey]
    );
  }, []);

  // Export data (memoized)
  const exportData = useMemo(() => {
    return filteredData.map(row => {
      const exported = {};
      visibleColumns.forEach(col => {
        exported[col] = row[col];
      });
      return exported;
    });
  }, [filteredData, visibleColumns]);

  const handleExport = useCallback(() => {
    const csv = exportData.map(row => 
      Object.values(row).join(',')
    ).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'export.csv';
    a.click();
  }, [exportData]);

  return (
    <div className="data-table">
      <div className="toolbar">
        <ColumnSelector
          columns={columns}
          visibleColumns={visibleColumns}
          onToggle={toggleColumn}
        />
        <button onClick={handleExport}>Export CSV</button>
      </div>

      <table>
        <TableHeader
          columns={columns.filter(c => visibleColumns.includes(c.key))}
          sortConfig={sortConfig}
          onSort={requestSort}
          filters={filters}
          onFilter={updateFilter}
        />
        
        <tbody>
          {paginatedData.map((row, index) => (
            <TableRow
              key={row.id || index}
              row={row}
              columns={columns.filter(c => visibleColumns.includes(c.key))}
            />
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
        totalItems={filteredData.length}
      />
    </div>
  );
}

// hooks/useSorting.js
import { useState, useMemo } from 'react';

export function useSorting(data) {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'asc'
  });

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [data, sortConfig]);

  const requestSort = useCallback((key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  }, []);

  return { sortConfig, sortedData, requestSort };
}

// hooks/useFiltering.js
import { useState, useMemo } from 'react';

export function useFiltering(data) {
  const [filters, setFilters] = useState({});

  const filteredData = useMemo(() => {
    return data.filter(row => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;
        const cellValue = String(row[key] || '').toLowerCase();
        return cellValue.includes(value.toLowerCase());
      });
    });
  }, [data, filters]);

  const updateFilter = useCallback((key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  return { filters, filteredData, updateFilter };
}

// hooks/usePagination.js
import { useState, useMemo } from 'react';

export function usePagination(data, pageSize) {
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, currentPage, pageSize]);

  const totalPages = Math.ceil(data.length / pageSize);

  const goToPage = useCallback((page) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  }, [totalPages]);

  return { paginatedData, currentPage, totalPages, goToPage };
}
```

---

## Part 9: Testing Your Patterns

### Testing Custom Hooks

```jsx
// hooks/__tests__/useLocalStorage.test.js
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns initial value when nothing in storage', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'initial'));
    
    expect(result.current[0]).toBe('initial');
  });

  it('reads existing value from localStorage', () => {
    localStorage.setItem('key', JSON.stringify('stored'));
    
    const { result } = renderHook(() => useLocalStorage('key', 'initial'));
    
    expect(result.current[0]).toBe('stored');
  });

  it('updates localStorage when value changes', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'initial'));
    
    act(() => {
      result.current[1]('updated');
    });
    
    expect(localStorage.getItem('key')).toBe(JSON.stringify('updated'));
    expect(result.current[0]).toBe('updated');
  });
});
```

### Testing Context

```jsx
// contexts/__tests__/AuthContext.test.js
import { render, screen, act } from '@testing-library/react';
import { AuthProvider, useAuth } from '../AuthContext';

// Test component that uses the hook
function TestComponent() {
  const { user, login, logout } = useAuth();
  
  return (
    <div>
      <div data-testid="user">{user?.name || 'No user'}</div>
      <button onClick={() => login('test@test.com', 'pass')}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

describe('AuthContext', () => {
  it('provides authentication state', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(screen.getByTestId('user')).toHaveTextContent('No user');

    // Mock successful login
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ name: 'Test User' })
    });

    await act(async () => {
      screen.getByText('Login').click();
    });

    expect(screen.getByTestId('user')).toHaveTextContent('Test User');
  });
});
```

---

## Part 10: Common Pitfalls and How to Avoid Them

### Pitfall 1: Over-memoization

```jsx
// ❌ Too much memoization
function ProductList({ products }) {
  const total = useMemo(() => {
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  const productCount = useMemo(() => products.length, [products]);
  
  // This is unnecessary - primitive values don't benefit from useMemo
  const title = useMemo(() => 'Product List', []);

  // ✅ Only memoize expensive operations
  const processedProducts = useMemo(() => {
    return products.map(p => expensiveProcessing(p));
  }, [products]);

  return (
    <div>
      <h1>{title}</h1> {/* This didn't need useMemo */}
      <p>Total: {total}</p> {/* This needed it */}
    </div>
  );
}
```

### Pitfall 2: Stale Closures in useEffect

```jsx
// ❌ Stale closure problem
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1); // Uses stale count
    }, 1000);
    
    return () => clearInterval(timer);
  }, []); // Missing dependency

  // ✅ Solution 1: Add dependency
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1); // Use functional update
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // ✅ Solution 2: Use functional update
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
}
```

### Pitfall 3: Context Re-renders

```jsx
// ❌ Causes unnecessary re-renders
function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  
  // New object every render
  const value = { user, setUser, theme, setTheme };
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// ✅ Memoize the value
function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  
  const value = useMemo(() => ({
    user, setUser, theme, setTheme
  }), [user, theme]);
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
```

---

## Your Intermediate React Checklist

Before you call yourself an intermediate React developer, you should be comfortable with:

### Hooks
- [ ] Custom hooks for reusable logic
- [ ] `useReducer` for complex state
- [ ] `useMemo` and `useCallback` for performance
- [ ] `useRef` for DOM and instance variables
- [ ] `useTransition` and `useDeferredValue` for responsive UI

### Context
- [ ] Creating and consuming context
- [ ] Splitting contexts to prevent re-renders
- [ ] Provider patterns and composition

### Composition
- [ ] Compound components
- [ ] Render props
- [ ] Higher-order components (when appropriate)

### Performance
- [ ] `React.memo` for component memoization
- [ ] Code splitting with lazy loading
- [ ] Virtualization for long lists
- [ ] Debouncing and throttling

### Testing
- [ ] Testing custom hooks
- [ ] Testing context providers
- [ ] Integration testing

---

## Next Steps

You've mastered intermediate React patterns. Here's what to learn next:

1. **State management libraries** — Zustand, Redux Toolkit, Jotai
2. **Server state** — React Query, SWR, Apollo Client
3. **Animation** — Framer Motion, React Spring
4. **Forms** — React Hook Form, Formik
5. **Routing** — React Router, TanStack Router
6. **TypeScript** — Advanced types, generics, type safety

---

## Resources

- [React Documentation](https://react.dev)
- [useHooks.com](https://usehooks.com) - Collection of custom hooks
- [React Patterns](https://reactpatterns.com)
- [Kent C. Dodds Blog](https://kentcdodds.com/blog)

---

*Enjoyed this tutorial? I write about React patterns and best practices every Month. Follow me on X [@themarvelbiz](https://x.com/@themarvelbiz). And if you've discovered a pattern that changed how you code, use it in your project*

---
