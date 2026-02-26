---
title: "Advanced React Architecture and Patterns"
date: "2026-01-19"
excerpt: "Master advanced React patterns, state management, testing strategies, and enterprise-scale architecture."
category: "Tutorial"
tags: ["react", "architecture", "patterns", "testing", "enterprise", "advanced"]
featured: true
level: "advanced"
author: "Merveille Alexander"
readTime: "35 min read"
---

# Advanced React Architecture and Patterns

*Master advanced React patterns, state management, testing strategies, and enterprise-scale architecture*

---

## Before We Begin: What This Tutorial Is (And Isn't)

This is a **tutorial**, not just an article. By the end, you'll have built a production-ready application architecture from scratch. We'll write code together, make mistakes together, and fix them together.

**What you'll learn:**
- Core concepts and practical applications
- Step-by-step implementation guide
- Best practices and optimization tips
- Real-world tradeoffs and decision-making

**Prerequisites:**
- You've built at least one React app before
- You know hooks, context, and basic TypeScript
- You're comfortable with the command line

**Time to complete:** About 2-3 hours, depending on your pace

Let's build something we can actually use.

---

## Part 1: The Problem We're Solving

Every React tutorial shows you how to build a todo app. But real applications aren't todo apps. They have complex state, dozens of developers, performance requirements, and code that needs to last for years.

### The Scenario

You're leading a team building a customer support dashboard. Requirements:

- Real-time ticket updates (WebSocket)
- Complex filtering and sorting
- Multiple user roles with different permissions
- Offline support with sync
- Analytics tracking
- Ten different teams contributing code
- Must ship in 8 weeks

A simple component hierarchy won't cut it. You need **architecture**.

### What We're Building Today

We'll build a simplified version of that dashboard together, focusing on the architectural patterns that make it maintainable and scalable.

```
Customer Support Dashboard
├── Ticket list with real-time updates
├── Filtering and search
├── User permissions
├── Offline queue
└── Analytics tracking
```

Let's start from scratch and build it right.

---

## Part 2: Setting Up the Foundation

First, let's create our project. I'll use Next.js because it's the standard in 2026, but the patterns we'll learn apply to any React setup.

```bash
# Create the project
npx create-next-app@latest support-dashboard --typescript --tailwind --app

# Navigate in
cd support-dashboard

# Install additional dependencies
npm install zustand react-query socket.io-client zod
npm install -D @types/node @testing-library/react @testing-library/jest-dom
```

### The Folder Structure

Before writing code, let's establish our architecture. We're using Feature-Sliced Design, which organizes by domain, not by file type.

```
src/
├── app/                    # Next.js App Router (routes only)
│   ├── layout.tsx
│   ├── page.tsx
│   └── tickets/
│       ├── page.tsx        # /tickets
│       └── [id]/
│           └── page.tsx    # /tickets/123
│
├── features/               # Business features
│   ├── tickets/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── api/
│   │   ├── types/
│   │   └── index.ts
│   ├── auth/
│   │   └── ...
│   └── analytics/
│       └── ...
│
├── entities/               # Core business models
│   ├── ticket/
│   │   ├── types.ts
│   │   └── constants.ts
│   └── user/
│       └── types.ts
│
├── shared/                 # Reusable, non-domain code
│   ├── ui/                 # Design system components
│   ├── lib/                # Utilities
│   └── api/                # Generic API clients
│
└── widgets/                # Composite components
    └── ticket-table/
        └── index.tsx
```

Create these folders now:

```bash
mkdir -p src/{features/{tickets,auth,analytics},entities/{ticket,user},shared/{ui,lib,api},widgets}
```

This structure might feel like overkill for a small app. But for a production app that will grow, it's perfect. Each feature is isolated, shared code is explicit, and you can delete entire features without leaving orphaned components.

---

## Part 3: Core Domain Models (Entities)

Every application has core business concepts. In our case: Tickets and Users. These are our **entities**.

### Step 1: Define Ticket Types

```typescript
// src/entities/ticket/types.ts

export type TicketStatus = 'open' | 'in-progress' | 'resolved' | 'closed';
export type TicketPriority = 'low' | 'medium' | 'high' | 'critical';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  createdAt: Date;
  updatedAt: Date;
  assignedToId: string | null;
  createdById: string;
  tags: string[];
}

export interface TicketComment {
  id: string;
  ticketId: string;
  content: string;
  createdById: string;
  createdAt: Date;
}

export interface TicketFilters {
  status?: TicketStatus[];
  priority?: TicketPriority[];
  assignedToId?: string;
  search?: string;
  tags?: string[];
}
```

### Step 2: Define User Types

```typescript
// src/entities/user/types.ts

export type UserRole = 'agent' | 'manager' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  department?: string;
}

export interface Session {
  user: User;
  token: string;
  expiresAt: Date;
}
```

### Step 3: Create Constants

```typescript
// src/entities/ticket/constants.ts

export const TICKET_STATUSES: TicketStatus[] = ['open', 'in-progress', 'resolved', 'closed'];
export const TICKET_PRIORITIES: TicketPriority[] = ['low', 'medium', 'high', 'critical'];

export const TICKET_STATUS_COLORS: Record<TicketStatus, string> = {
  'open': 'bg-blue-100 text-blue-800',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  'resolved': 'bg-green-100 text-green-800',
  'closed': 'bg-gray-100 text-gray-800'
};

export const TICKET_PRIORITY_COLORS: Record<TicketPriority, string> = {
  'low': 'bg-gray-100 text-gray-800',
  'medium': 'bg-blue-100 text-blue-800',
  'high': 'bg-orange-100 text-orange-800',
  'critical': 'bg-red-100 text-red-800'
};
```

**Why this matters:** These types are the source of truth. Every feature, every component will reference them. If a ticket's structure changes, TypeScript tells us everywhere that needs updating.

---

## Part 4: The Ticket Feature - API Layer

Now let's build the tickets feature. We'll start with the API layer, which handles data fetching and real-time updates.

### Step 1: Create API Client

```typescript
// src/features/tickets/api/client.ts

import { Ticket, TicketFilters, TicketComment } from '@/entities/ticket/types';

// In a real app, this would be in shared/api
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

class TicketsApiClient {
  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE}/api${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  async getTickets(filters?: TicketFilters): Promise<Ticket[]> {
    const params = new URLSearchParams();
    
    if (filters?.status?.length) {
      params.append('status', filters.status.join(','));
    }
    if (filters?.priority?.length) {
      params.append('priority', filters.priority.join(','));
    }
    if (filters?.assignedToId) {
      params.append('assignedTo', filters.assignedToId);
    }
    if (filters?.search) {
      params.append('search', filters.search);
    }
    
    return this.fetch(`/tickets?${params.toString()}`);
  }

  async getTicketById(id: string): Promise<Ticket> {
    return this.fetch(`/tickets/${id}`);
  }

  async createTicket(data: Partial<Ticket>): Promise<Ticket> {
    return this.fetch('/tickets', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateTicket(id: string, data: Partial<Ticket>): Promise<Ticket> {
    return this.fetch(`/tickets/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async getComments(ticketId: string): Promise<TicketComment[]> {
    return this.fetch(`/tickets/${ticketId}/comments`);
  }

  async addComment(ticketId: string, content: string): Promise<TicketComment> {
    return this.fetch(`/tickets/${ticketId}/comments`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    });
  }
}

// Singleton export
export const ticketsApi = new TicketsApiClient();
```

### Step 2: WebSocket Connection for Real-time Updates

```typescript
// src/features/tickets/api/socket.ts

import { io, Socket } from 'socket.io-client';

type TicketUpdateCallback = (ticketId: string, data: Partial<Ticket>) => void;
type NewTicketCallback = (ticket: Ticket) => void;

class TicketsSocketClient {
  private socket: Socket | null = null;
  private ticketUpdateCallbacks: Set<TicketUpdateCallback> = new Set();
  private newTicketCallbacks: Set<NewTicketCallback> = new Set();

  connect() {
    if (this.socket) return;

    this.socket = io(process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3001', {
      path: '/ws/tickets',
    });

    this.socket.on('ticket:updated', (ticketId: string, data: Partial<Ticket>) => {
      this.ticketUpdateCallbacks.forEach(cb => cb(ticketId, data));
    });

    this.socket.on('ticket:created', (ticket: Ticket) => {
      this.newTicketCallbacks.forEach(cb => cb(ticket));
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  onTicketUpdate(callback: TicketUpdateCallback) {
    this.ticketUpdateCallbacks.add(callback);
    return () => this.ticketUpdateCallbacks.delete(callback);
  }

  onNewTicket(callback: NewTicketCallback) {
    this.newTicketCallbacks.add(callback);
    return () => this.newTicketCallbacks.delete(callback);
  }

  subscribeToTicket(ticketId: string) {
    this.socket?.emit('ticket:subscribe', ticketId);
  }

  unsubscribeFromTicket(ticketId: string) {
    this.socket?.emit('ticket:unsubscribe', ticketId);
  }
}

export const ticketsSocket = new TicketsSocketClient();
```

### Step 3: Create Data Access Hooks

We'll use React Query (now TanStack Query) for server state management:

```typescript
// src/features/tickets/hooks/useTickets.ts

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ticketsApi } from '../api/client';
import { ticketsSocket } from '../api/socket';
import { TicketFilters, Ticket } from '@/entities/ticket/types';
import { useEffect } from 'react';

// Query keys for cache management
export const ticketKeys = {
  all: ['tickets'] as const,
  lists: () => [...ticketKeys.all, 'list'] as const,
  list: (filters: TicketFilters) => [...ticketKeys.lists(), filters] as const,
  details: () => [...ticketKeys.all, 'detail'] as const,
  detail: (id: string) => [...ticketKeys.details(), id] as const,
};

export function useTickets(filters?: TicketFilters) {
  const queryClient = useQueryClient();

  // Main query
  const query = useQuery({
    queryKey: ticketKeys.list(filters || {}),
    queryFn: () => ticketsApi.getTickets(filters),
    staleTime: 1000 * 60, // 1 minute
  });

  // Real-time updates
  useEffect(() => {
    ticketsSocket.connect();

    const unsubscribeUpdate = ticketsSocket.onTicketUpdate((ticketId, data) => {
      // Update the ticket in the cache
      queryClient.setQueryData<Ticket[]>(
        ticketKeys.list(filters || {}),
        (old) => old?.map(ticket => 
          ticket.id === ticketId ? { ...ticket, ...data } : ticket
        )
      );

      // Also update the individual ticket cache
      queryClient.setQueryData<Ticket>(
        ticketKeys.detail(ticketId),
        (old) => old ? { ...old, ...data } : old
      );
    });

    const unsubscribeNew = ticketsSocket.onNewTicket((ticket) => {
      // Add to list if it matches current filters
      if (matchesFilters(ticket, filters)) {
        queryClient.setQueryData<Ticket[]>(
          ticketKeys.list(filters || {}),
          (old) => old ? [ticket, ...old] : [ticket]
        );
      }
    });

    return () => {
      unsubscribeUpdate();
      unsubscribeNew();
      ticketsSocket.disconnect();
    };
  }, [filters, queryClient]);

  return query;
}

// Helper to check if ticket matches filters
function matchesFilters(ticket: Ticket, filters?: TicketFilters): boolean {
  if (!filters) return true;
  
  if (filters.status?.length && !filters.status.includes(ticket.status)) {
    return false;
  }
  if (filters.priority?.length && !filters.priority.includes(ticket.priority)) {
    return false;
  }
  if (filters.assignedToId && ticket.assignedToId !== filters.assignedToId) {
    return false;
  }
  if (filters.search) {
    const search = filters.search.toLowerCase();
    return ticket.title.toLowerCase().includes(search) || 
           ticket.description.toLowerCase().includes(search);
  }
  
  return true;
}
```

```typescript
// src/features/tickets/hooks/useTicket.ts

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ticketsApi } from '../api/client';
import { ticketsSocket } from '../api/socket';
import { ticketKeys } from './useTickets';
import { Ticket } from '@/entities/ticket/types';
import { useEffect } from 'react';

export function useTicket(id: string) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: ticketKeys.detail(id),
    queryFn: () => ticketsApi.getTicketById(id),
    staleTime: 1000 * 60,
  });

  // Subscribe to real-time updates for this specific ticket
  useEffect(() => {
    if (!id) return;

    ticketsSocket.connect();
    ticketsSocket.subscribeToTicket(id);

    return () => {
      ticketsSocket.unsubscribeFromTicket(id);
    };
  }, [id]);

  const updateMutation = useMutation({
    mutationFn: (data: Partial<Ticket>) => ticketsApi.updateTicket(id, data),
    onMutate: async (newData) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: ticketKeys.detail(id) });

      // Snapshot previous value
      const previousTicket = queryClient.getQueryData<Ticket>(ticketKeys.detail(id));

      // Optimistically update
      queryClient.setQueryData<Ticket>(ticketKeys.detail(id), (old) => ({
        ...old!,
        ...newData,
      }));

      return { previousTicket };
    },
    onError: (err, newData, context) => {
      // Rollback on error
      queryClient.setQueryData(ticketKeys.detail(id), context?.previousTicket);
    },
    onSettled: () => {
      // Refetch to ensure consistency
      queryClient.invalidateQueries({ queryKey: ticketKeys.detail(id) });
    },
  });

  return {
    ticket: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    updateTicket: updateMutation.mutate,
    isUpdating: updateMutation.isPending,
  };
}
```

**Key patterns here:**

- **Query keys as constants**: Prevents typos and enables type safety
- **Optimistic updates**: UI feels instant while server processes
- **WebSocket integration**: Real-time updates flow into cache
- **Separation of concerns**: API client, socket client, and hooks each do one thing

---

## Part 5: State Management with Zustand

For client state (UI state, filters, etc.), we'll use Zustand. It's simpler than Redux but more powerful than context for complex state.

### Step 1: Create Filter Store

```typescript
// src/features/tickets/store/filterStore.ts

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TicketFilters, TicketStatus, TicketPriority } from '@/entities/ticket/types';

interface FilterState {
  // State
  filters: TicketFilters;
  
  // Actions
  setStatus: (status: TicketStatus[]) => void;
  setPriority: (priority: TicketPriority[]) => void;
  setAssignedTo: (userId: string | null) => void;
  setSearch: (search: string) => void;
  setTags: (tags: string[]) => void;
  resetFilters: () => void;
  
  // Derived state
  hasActiveFilters: () => boolean;
  getActiveFilterCount: () => number;
}

export const useFilterStore = create<FilterState>()(
  persist(
    (set, get) => ({
      // Initial state
      filters: {
        status: [],
        priority: [],
        assignedToId: null,
        search: '',
        tags: [],
      },

      // Actions
      setStatus: (status) => 
        set((state) => ({
          filters: { ...state.filters, status }
        })),

      setPriority: (priority) =>
        set((state) => ({
          filters: { ...state.filters, priority }
        })),

      setAssignedTo: (assignedToId) =>
        set((state) => ({
          filters: { ...state.filters, assignedToId }
        })),

      setSearch: (search) =>
        set((state) => ({
          filters: { ...state.filters, search }
        })),

      setTags: (tags) =>
        set((state) => ({
          filters: { ...state.filters, tags }
        })),

      resetFilters: () =>
        set({
          filters: {
            status: [],
            priority: [],
            assignedToId: null,
            search: '',
            tags: [],
          }
        }),

      // Derived state
      hasActiveFilters: () => {
        const filters = get().filters;
        return (
          filters.status.length > 0 ||
          filters.priority.length > 0 ||
          filters.assignedToId !== null ||
          filters.search !== '' ||
          (filters.tags?.length || 0) > 0
        );
      },

      getActiveFilterCount: () => {
        const filters = get().filters;
        let count = 0;
        if (filters.status.length) count++;
        if (filters.priority.length) count++;
        if (filters.assignedToId) count++;
        if (filters.search) count++;
        if (filters.tags?.length) count++;
        return count;
      },
    }),
    {
      name: 'ticket-filters', // Persist to localStorage
    }
  )
);
```

### Step 2: Create UI State Store

```typescript
// src/features/tickets/store/uiStore.ts

import { create } from 'zustand';

interface UIState {
  // View state
  viewMode: 'table' | 'grid';
  selectedTicketIds: string[];
  isFilterDrawerOpen: boolean;
  
  // Actions
  setViewMode: (mode: 'table' | 'grid') => void;
  toggleTicketSelection: (ticketId: string) => void;
  selectAll: (ticketIds: string[]) => void;
  clearSelection: () => void;
  toggleFilterDrawer: () => void;
  
  // Derived
  hasSelection: boolean;
  selectedCount: number;
}

export const useUIStore = create<UIState>((set, get) => ({
  viewMode: 'table',
  selectedTicketIds: [],
  isFilterDrawerOpen: false,

  setViewMode: (mode) => set({ viewMode: mode }),

  toggleTicketSelection: (ticketId) => 
    set((state) => {
      const isSelected = state.selectedTicketIds.includes(ticketId);
      return {
        selectedTicketIds: isSelected
          ? state.selectedTicketIds.filter(id => id !== ticketId)
          : [...state.selectedTicketIds, ticketId]
      };
    }),

  selectAll: (ticketIds) =>
    set({ selectedTicketIds: ticketIds }),

  clearSelection: () =>
    set({ selectedTicketIds: [] }),

  toggleFilterDrawer: () =>
    set((state) => ({ isFilterDrawerOpen: !state.isFilterDrawerOpen })),

  // Computed properties
  get hasSelection() {
    return get().selectedTicketIds.length > 0;
  },

  get selectedCount() {
    return get().selectedTicketIds.length;
  },
}));
```

**Why Zustand over Context:**

- **No provider needed**: Use anywhere in your app
- **Selective subscriptions**: Components only re-render when their slice changes
- **Middleware built-in**: Persist, devtools, etc.
- **Simple API**: No reducers, no actions, no boilerplate

---

## Part 6: Building the UI Components

Now let's build the actual UI, using our hooks and stores.

### Step 1: Create Shared UI Components

First, let's build reusable components that will be used throughout the app:

```tsx
// src/shared/ui/Button.tsx

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    asChild = false, 
    variant = 'primary', 
    size = 'md', 
    isLoading = false,
    className = '',
    children, 
    disabled,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
      outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 focus:ring-blue-500',
      ghost: 'bg-transparent hover:bg-gray-100 focus:ring-gray-500',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    };
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-4 py-2 text-base gap-2',
      lg: 'px-6 py-3 text-lg gap-2.5',
    };
    
    return (
      <Comp
        ref={ref}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
```

```tsx
// src/shared/ui/Select.tsx

import { forwardRef, SelectHTMLAttributes } from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  error?: string;
  label?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, error, label, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={`
            block w-full rounded-md border-gray-300 shadow-sm
            focus:border-blue-500 focus:ring-blue-500 sm:text-sm
            ${error ? 'border-red-500' : ''}
            ${className}
          `}
          {...props}
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
```

### Step 2: Build Feature Components

Now the ticket-specific components:

```tsx
// src/features/tickets/components/TicketFilters.tsx

'use client';

import { useFilterStore } from '../store/filterStore';
import { TICKET_STATUSES, TICKET_PRIORITIES } from '@/entities/ticket/constants';
import { Button } from '@/shared/ui/Button';
import { Select } from '@/shared/ui/Select';
import { Input } from '@/shared/ui/Input';

export function TicketFilters() {
  const { filters, setStatus, setPriority, setSearch, resetFilters } = useFilterStore();
  const activeFilterCount = useFilterStore((state) => state.getActiveFilterCount());

  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Filters</h3>
        {activeFilterCount > 0 && (
          <Button variant="ghost" size="sm" onClick={resetFilters}>
            Clear all
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Select
          label="Status"
          options={[
            { value: '', label: 'All Statuses' },
            ...TICKET_STATUSES.map(status => ({
              value: status,
              label: status.charAt(0).toUpperCase() + status.slice(1)
            }))
          ]}
          value={filters.status?.[0] || ''}
          onChange={(e) => setStatus(e.target.value ? [e.target.value as any] : [])}
        />

        <Select
          label="Priority"
          options={[
            { value: '', label: 'All Priorities' },
            ...TICKET_PRIORITIES.map(priority => ({
              value: priority,
              label: priority.charAt(0).toUpperCase() + priority.slice(1)
            }))
          ]}
          value={filters.priority?.[0] || ''}
          onChange={(e) => setPriority(e.target.value ? [e.target.value as any] : [])}
        />

        <Input
          label="Search"
          type="search"
          placeholder="Search tickets..."
          value={filters.search || ''}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex items-end">
          <Button variant="secondary" onClick={() => console.log('Apply filters')}>
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
```

```tsx
// src/features/tickets/components/TicketTable.tsx

'use client';

import { useTickets } from '../hooks/useTickets';
import { useFilterStore } from '../store/filterStore';
import { useUIStore } from '../store/uiStore';
import { TICKET_STATUS_COLORS, TICKET_PRIORITY_COLORS } from '@/entities/ticket/constants';
import { formatDistanceToNow } from 'date-fns';
import { Button } from '@/shared/ui/Button';
import { Checkbox } from '@/shared/ui/Checkbox';
import { useRouter } from 'next/navigation';

export function TicketTable() {
  const router = useRouter();
  const filters = useFilterStore((state) => state.filters);
  const { data: tickets, isLoading, isError } = useTickets(filters);
  
  const { selectedTicketIds, toggleTicketSelection, selectAll, clearSelection } = useUIStore();

  if (isLoading) {
    return <TicketTableSkeleton />;
  }

  if (isError) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Failed to load tickets</p>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Retry
        </Button>
      </div>
    );
  }

  if (!tickets?.length) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <p className="text-gray-600">No tickets found</p>
      </div>
    );
  }

  const handleSelectAll = () => {
    if (selectedTicketIds.length === tickets.length) {
      clearSelection();
    } else {
      selectAll(tickets.map(t => t.id));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">
                <Checkbox
                  checked={selectedTicketIds.length === tickets.length}
                  indeterminate={selectedTicketIds.length > 0 && selectedTicketIds.length < tickets.length}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assigned To
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tickets.map((ticket) => (
              <tr 
                key={ticket.id} 
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => router.push(`/tickets/${ticket.id}`)}
              >
                <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                  <Checkbox
                    checked={selectedTicketIds.includes(ticket.id)}
                    onChange={() => toggleTicketSelection(ticket.id)}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">
                  {ticket.id.slice(0, 8)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {ticket.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${TICKET_STATUS_COLORS[ticket.status]}`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${TICKET_PRIORITY_COLORS[ticket.priority]}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {ticket.assignedToId ? 'Agent Name' : 'Unassigned'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDistanceToNow(new Date(ticket.createdAt), { addSuffix: true })}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/tickets/${ticket.id}/edit`);
                    }}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TicketTableSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="animate-pulse">
        <div className="bg-gray-50 px-6 py-3">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="px-6 py-4 border-t">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Step 3: Compose the Page

Finally, let's put it all together in the page:

```tsx
// src/app/tickets/page.tsx

import { Suspense } from 'react';
import { TicketFilters } from '@/features/tickets/components/TicketFilters';
import { TicketTable } from '@/features/tickets/components/TicketTable';
import { Button } from '@/shared/ui/Button';
import Link from 'next/link';

export default function TicketsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Support Tickets</h1>
        <Link href="/tickets/new">
          <Button>Create Ticket</Button>
        </Link>
      </div>

      <div className="space-y-6">
        <TicketFilters />
        
        <Suspense fallback={<div>Loading tickets...</div>}>
          <TicketTable />
        </Suspense>
      </div>
    </div>
  );
}
```

---

## Part 7: Advanced Patterns

Now that we have a working feature, let's add some advanced patterns that make the code more maintainable and performant.

### Pattern 1: The Compound Component Pattern

For complex components like the filter bar, compound components provide a flexible API:

```tsx
// src/features/tickets/components/FilterBar/FilterBar.tsx

import { createContext, useContext, useState } from 'react';

interface FilterBarContextValue {
  activeFilters: Set<string>;
  toggleFilter: (name: string) => void;
}

const FilterBarContext = createContext<FilterBarContextValue | null>(null);

function useFilterBar() {
  const context = useContext(FilterBarContext);
  if (!context) {
    throw new Error('FilterBar components must be used within FilterBar');
  }
  return context;
}

interface FilterBarProps {
  children: React.ReactNode;
  onApply?: (filters: string[]) => void;
}

export function FilterBar({ children, onApply }: FilterBarProps) {
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());

  const toggleFilter = (name: string) => {
    setActiveFilters(prev => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  const handleApply = () => {
    onApply?.(Array.from(activeFilters));
  };

  return (
    <FilterBarContext.Provider value={{ activeFilters, toggleFilter }}>
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex flex-wrap gap-4">
          {children}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleApply}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </FilterBarContext.Provider>
  );
}

interface FilterOptionProps {
  name: string;
  label: string;
}

FilterBar.Option = function FilterOption({ name, label }: FilterOptionProps) {
  const { activeFilters, toggleFilter } = useFilterBar();
  const isActive = activeFilters.has(name);

  return (
    <button
      onClick={() => toggleFilter(name)}
      className={`
        px-3 py-1 rounded-full text-sm font-medium
        ${isActive 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }
      `}
    >
      {label}
    </button>
  );
};

// Usage:
<FilterBar onApply={(filters) => console.log(filters)}>
  <FilterBar.Option name="open" label="Open" />
  <FilterBar.Option name="in-progress" label="In Progress" />
  <FilterBar.Option name="resolved" label="Resolved" />
  <FilterBar.Option name="high-priority" label="High Priority" />
</FilterBar>
```

### Pattern 2: The Render Props Pattern for Data Loading

Sometimes you need to share data loading logic without committing to a UI:

```typescript
// src/features/tickets/components/TicketDataLoader.tsx

import { useTickets } from '../hooks/useTickets';
import { TicketFilters } from '@/entities/ticket/types';

interface TicketDataLoaderProps {
  filters?: TicketFilters;
  children: (props: {
    tickets: Ticket[];
    isLoading: boolean;
    isError: boolean;
    refetch: () => void;
  }) => React.ReactNode;
}

export function TicketDataLoader({ filters, children }: TicketDataLoaderProps) {
  const { data: tickets = [], isLoading, isError, refetch } = useTickets(filters);
  
  return children({ tickets, isLoading, isError, refetch });
}

// Usage:
<TicketDataLoader filters={{ status: ['open'] }}>
  {({ tickets, isLoading }) => (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} />)
      )}
    </div>
  )}
</TicketDataLoader>
```

### Pattern 3: The Factory Pattern for Hooks

When you have similar hooks across different entities, a factory pattern reduces duplication:

```typescript
// src/shared/lib/createEntityHooks.ts

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ticketsApi } from '@/features/tickets/api/client';

interface EntityConfig<T, F> {
  baseKey: string;
  getById: (id: string) => Promise<T>;
  getList: (filters?: F) => Promise<T[]>;
  create: (data: Partial<T>) => Promise<T>;
  update: (id: string, data: Partial<T>) => Promise<T>;
  delete: (id: string) => Promise<void>;
}

export function createEntityHooks<T, F = any>(config: EntityConfig<T, F>) {
  const keys = {
    all: [config.baseKey] as const,
    lists: () => [...keys.all, 'list'] as const,
    list: (filters?: F) => [...keys.lists(), filters] as const,
    details: () => [...keys.all, 'detail'] as const,
    detail: (id: string) => [...keys.details(), id] as const,
  };

  function useList(filters?: F) {
    return useQuery({
      queryKey: keys.list(filters),
      queryFn: () => config.getList(filters),
    });
  }

  function useOne(id: string) {
    const queryClient = useQueryClient();

    const query = useQuery({
      queryKey: keys.detail(id),
      queryFn: () => config.getById(id),
    });

    const updateMutation = useMutation({
      mutationFn: (data: Partial<T>) => config.update(id, data),
      onMutate: async (newData) => {
        await queryClient.cancelQueries({ queryKey: keys.detail(id) });
        const previous = queryClient.getQueryData<T>(keys.detail(id));
        queryClient.setQueryData<T>(keys.detail(id), (old) => ({
          ...old!,
          ...newData,
        }));
        return { previous };
      },
      onError: (err, newData, context) => {
        queryClient.setQueryData(keys.detail(id), context?.previous);
      },
    });

    return {
      data: query.data,
      isLoading: query.isLoading,
      update: updateMutation.mutate,
      isUpdating: updateMutation.isPending,
    };
  }

  return { useList, useOne };
}

// Usage:
export const ticketHooks = createEntityHooks({
  baseKey: 'tickets',
  getById: ticketsApi.getTicketById,
  getList: ticketsApi.getTickets,
  create: ticketsApi.createTicket,
  update: ticketsApi.updateTicket,
  delete: ticketsApi.deleteTicket,
});
```

---

## Part 8: Testing Strategy

A robust architecture needs robust tests. Let's write tests for our key pieces.

### Step 1: Unit Test a Hook

```typescript
// src/features/tickets/hooks/__tests__/useTickets.test.ts

import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTickets } from '../useTickets';
import { ticketsApi } from '../../api/client';

// Mock the API
jest.mock('../../api/client');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useTickets', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetches tickets successfully', async () => {
    const mockTickets = [
      { id: '1', title: 'Ticket 1' },
      { id: '2', title: 'Ticket 2' },
    ];

    (ticketsApi.getTickets as jest.Mock).mockResolvedValue(mockTickets);

    const { result } = renderHook(() => useTickets(), { wrapper });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockTickets);
    expect(ticketsApi.getTickets).toHaveBeenCalledTimes(1);
  });

  it('handles error states', async () => {
    const error = new Error('Failed to fetch');
    (ticketsApi.getTickets as jest.Mock).mockRejectedValue(error);

    const { result } = renderHook(() => useTickets(), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });

  it('applies filters correctly', async () => {
    const filters = { status: ['open'], priority: ['high'] };
    
    renderHook(() => useTickets(filters), { wrapper });

    expect(ticketsApi.getTickets).toHaveBeenCalledWith(filters);
  });
});
```

### Step 2: Component Test

```typescript
// src/features/tickets/components/__tests__/TicketFilters.test.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import { TicketFilters } from '../TicketFilters';
import { useFilterStore } from '../../store/filterStore';

// Mock the store
jest.mock('../../store/filterStore');

describe('TicketFilters', () => {
  const mockSetStatus = jest.fn();
  const mockSetPriority = jest.fn();
  const mockSetSearch = jest.fn();

  beforeEach(() => {
    (useFilterStore as jest.Mock).mockImplementation((selector) => {
      const state = {
        filters: {
          status: [],
          priority: [],
          search: '',
        },
        setStatus: mockSetStatus,
        setPriority: mockSetPriority,
        setSearch: mockSetSearch,
        getActiveFilterCount: () => 0,
      };
      return selector ? selector(state) : state;
    });
  });

  it('renders all filter inputs', () => {
    render(<TicketFilters />);

    expect(screen.getByLabelText(/status/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/priority/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('updates search input', () => {
    render(<TicketFilters />);

    const searchInput = screen.getByPlaceholderText(/search/i);
    fireEvent.change(searchInput, { target: { value: 'bug' } });

    expect(mockSetSearch).toHaveBeenCalledWith('bug');
  });

  it('clears filters when clear button is clicked', () => {
    (useFilterStore as jest.Mock).mockImplementation((selector) => {
      const state = {
        filters: {
          status: ['open'],
          priority: ['high'],
          search: 'test',
        },
        setStatus: mockSetStatus,
        setPriority: mockSetPriority,
        setSearch: mockSetSearch,
        resetFilters: jest.fn(),
        getActiveFilterCount: () => 3,
      };
      return selector ? selector(state) : state;
    });

    render(<TicketFilters />);

    const clearButton = screen.getByText(/clear all/i);
    fireEvent.click(clearButton);

    expect(mockSetStatus).toHaveBeenCalledWith([]);
    expect(mockSetPriority).toHaveBeenCalledWith([]);
    expect(mockSetSearch).toHaveBeenCalledWith('');
  });
});
```

### Step 3: Integration Test

```typescript
// src/features/tickets/__tests__/TicketFlow.test.tsx

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TicketsPage } from '@/app/tickets/page';
import { ticketsApi } from '../api/client';

// Mock the API
jest.mock('../api/client');

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe('Ticket Management Flow', () => {
  beforeEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  it('loads and displays tickets', async () => {
    const mockTickets = [
      {
        id: '1',
        title: 'First Ticket',
        status: 'open',
        priority: 'high',
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Second Ticket',
        status: 'in-progress',
        priority: 'medium',
        createdAt: new Date().toISOString(),
      },
    ];

    (ticketsApi.getTickets as jest.Mock).mockResolvedValue(mockTickets);

    render(
      <QueryClientProvider client={queryClient}>
        <TicketsPage />
      </QueryClientProvider>
    );

    // Should show loading state initially
    expect(screen.getByText(/loading tickets/i)).toBeInTheDocument();

    // Wait for tickets to load
    await waitFor(() => {
      expect(screen.getByText('First Ticket')).toBeInTheDocument();
    });

    expect(screen.getByText('Second Ticket')).toBeInTheDocument();
  });

  it('filters tickets when filter is applied', async () => {
    const mockTickets = [
      {
        id: '1',
        title: 'Open Ticket',
        status: 'open',
        priority: 'high',
        createdAt: new Date().toISOString(),
      },
      {
        id: '2',
        title: 'Closed Ticket',
        status: 'closed',
        priority: 'low',
        createdAt: new Date().toISOString(),
      },
    ];

    (ticketsApi.getTickets as jest.Mock).mockResolvedValue(mockTickets);

    render(
      <QueryClientProvider client={queryClient}>
        <TicketsPage />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Open Ticket')).toBeInTheDocument();
    });

    // Apply status filter
    const statusSelect = screen.getByLabelText(/status/i);
    await userEvent.selectOptions(statusSelect, 'open');

    // API should be called with filters
    expect(ticketsApi.getTickets).toHaveBeenCalledWith(
      expect.objectContaining({ status: ['open'] })
    );
  });
});
```

---

## Part 9: Performance Optimization

Let's optimize our application for production.

### Step 1: Code Splitting with Next.js

Next.js automatically code-splits by routes, but we can also lazy-load heavy components:

```typescript
// src/features/tickets/components/TicketAnalytics.tsx

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Heavy chart library - only loaded when needed
const TicketChart = dynamic(
  () => import('./TicketChart').then(mod => mod.TicketChart),
  {
    loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded" />,
    ssr: false, // Don't render on server
  }
);

export function TicketAnalytics({ ticketId }: { ticketId: string }) {
  const [showCharts, setShowCharts] = useState(false);

  return (
    <div>
      <button onClick={() => setShowCharts(!showCharts)}>
        {showCharts ? 'Hide' : 'Show'} Analytics
      </button>

      {showCharts && (
        <Suspense fallback={<div>Loading charts...</div>}>
          <TicketChart ticketId={ticketId} />
        </Suspense>
      )}
    </div>
  );
}
```

### Step 2: Virtualization for Large Lists

When rendering many tickets, virtualization prevents DOM overload:

```typescript
// src/features/tickets/components/VirtualizedTicketList.tsx

import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';
import { Ticket } from '@/entities/ticket/types';

interface VirtualizedTicketListProps {
  tickets: Ticket[];
  onTicketClick: (id: string) => void;
}

export function VirtualizedTicketList({ tickets, onTicketClick }: VirtualizedTicketListProps) {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: tickets.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 80, // Height of each row
    overscan: 5, // Render 5 extra rows above/below viewport
  });

  return (
    <div
      ref={parentRef}
      className="h-[600px] overflow-auto border rounded"
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            <TicketRow
              ticket={tickets[virtualRow.index]}
              onClick={() => onTicketClick(tickets[virtualRow.index].id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function TicketRow({ ticket, onClick }: { ticket: Ticket; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="p-4 border-b hover:bg-gray-50 cursor-pointer"
    >
      <div className="flex justify-between">
        <h3 className="font-medium">{ticket.title}</h3>
        <span className="text-sm text-gray-500">
          {ticket.status}
        </span>
      </div>
    </div>
  );
}
```

### Step 3: Memoization Strategy

With the React Compiler, we need less manual memoization, but sometimes we still need control:

```typescript
// src/features/tickets/components/TicketCard.tsx

import { memo } from 'react';
import { Ticket } from '@/entities/ticket/types';
import { TICKET_STATUS_COLORS } from '@/entities/ticket/constants';

interface TicketCardProps {
  ticket: Ticket;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

// Memoize the entire component
export const TicketCard = memo(function TicketCard({ 
  ticket, 
  onSelect, 
  isSelected 
}: TicketCardProps) {
  return (
    <div
      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
        isSelected ? 'bg-blue-50 border-blue-300' : 'hover:bg-gray-50'
      }`}
      onClick={() => onSelect(ticket.id)}
    >
      <div className="flex justify-between items-start">
        <h3 className="font-medium">{ticket.title}</h3>
        <span className={`px-2 py-1 text-xs rounded-full ${TICKET_STATUS_COLORS[ticket.status]}`}>
          {ticket.status}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
        {ticket.description}
      </p>
      
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
        <span>Priority: {ticket.priority}</span>
        <span>
          {new Date(ticket.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison to prevent unnecessary re-renders
  return (
    prevProps.ticket.id === nextProps.ticket.id &&
    prevProps.ticket.status === nextProps.ticket.status &&
    prevProps.ticket.priority === nextProps.ticket.priority &&
    prevProps.isSelected === nextProps.isSelected
  );
});
```

### Step 4: Bundle Analysis

Add bundle analysis to your build process:

```bash
npm install -D @next/bundle-analyzer
```

```js
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // your config
};

module.exports = withBundleAnalyzer(nextConfig);
```

```json
// package.json
{
  "scripts": {
    "analyze": "ANALYZE=true npm run build"
  }
}
```

---

## Part 10: Deployment and Monitoring

### Step 1: Environment Configuration

```typescript
// src/shared/lib/env.ts

import { z } from 'zod';

const envSchema = z.object({
  // Required
  NODE_ENV: z.enum(['development', 'production', 'test']),
  NEXT_PUBLIC_API_URL: z.string().url(),
  
  // Optional with defaults
  NEXT_PUBLIC_WS_URL: z.string().url().optional().default('ws://localhost:3001'),
  NEXT_PUBLIC_ANALYTICS_ID: z.string().optional(),
  
  // Server-side only
  DATABASE_URL: z.string().url(),
  API_SECRET: z.string().min(32),
});

// Parse and validate
const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL,
  NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  DATABASE_URL: process.env.DATABASE_URL,
  API_SECRET: process.env.API_SECRET,
});

export const config = {
  api: {
    baseUrl: env.NEXT_PUBLIC_API_URL,
    wsUrl: env.NEXT_PUBLIC_WS_URL,
  },
  analytics: {
    id: env.NEXT_PUBLIC_ANALYTICS_ID,
  },
  database: {
    url: env.DATABASE_URL,
  },
  isDev: env.NODE_ENV === 'development',
  isProd: env.NODE_ENV === 'production',
} as const;
```

### Step 2: Error Tracking with Error Boundaries

```tsx
// src/features/error/ErrorBoundary.tsx

'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/shared/ui/Button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to error tracking service
    console.error('Error caught by boundary:', error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              {this.state.error?.message || 'An unexpected error occurred'}
            </p>
            <Button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
            >
              Try again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

Usage:

```tsx
// src/app/tickets/page.tsx
import { ErrorBoundary } from '@/features/error/ErrorBoundary';

export default function TicketsPage() {
  return (
    <ErrorBoundary>
      <TicketTable />
    </ErrorBoundary>
  );
}
```

### Step 3: Analytics Tracking

```typescript
// src/features/analytics/track.ts

type EventName = 'ticket_viewed' | 'ticket_updated' | 'filter_applied' | 'search_performed';

interface EventProperties {
  ticket_id?: string;
  filter_type?: string;
  search_term?: string;
  [key: string]: any;
}

class Analytics {
  private isEnabled = config.analytics.id && !config.isDev;

  track(eventName: EventName, properties?: EventProperties) {
    if (!this.isEnabled) return;

    // Send to analytics service
    fetch('/api/analytics', {
      method: 'POST',
      body: JSON.stringify({
        event: eventName,
        properties,
        timestamp: new Date().toISOString(),
      }),
    }).catch(console.error);
  }

  pageView(path: string) {
    this.track('page_view' as any, { path });
  }
}

export const analytics = new Analytics();

// Usage in components:
analytics.track('ticket_viewed', { ticket_id: '123' });
```

---

## Part 11: The Complete Architecture Review

Let's step back and look at what we've built:

### Layer 1: Domain Entities
- Pure TypeScript types
- No framework dependencies
- Single source of truth

### Layer 2: API Layer
- REST client with typed methods
- WebSocket for real-time updates
- Singleton pattern for shared instances

### Layer 3: Data Access Hooks
- React Query for server state
- Optimistic updates
- Automatic cache management

### Layer 4: Client State
- Zustand stores for UI state
- Persisted filters
- Computed selectors

### Layer 5: UI Components
- Shared design system
- Feature-specific components
- Compound components for complex UIs

### Layer 6: Routing
- Next.js App Router
- Route-level code splitting
- Server Components by default

### Layer 7: Testing
- Unit tests for hooks
- Component tests with RTL
- Integration tests for flows

### Layer 8: Performance
- Code splitting
- Virtualization
- Memoization strategy
- Bundle analysis

### Layer 9: Monitoring
- Error boundaries
- Analytics tracking
- Environment configuration

---

## The Architecture Decision Tree

Here's how I make architectural decisions now:

**Question 1: Where does this data live?**
- Server (database) → React Query
- Client (UI state) → Zustand
- URL (shareable) → Search params

**Question 2: Where does this component render?**
- Static content → Server Component
- Interactive but no state → Server Component + Client event handlers
- Has state or effects → Client Component

**Question 3: How reusable is this?**
- Only used in one feature → Keep in feature folder
- Used in multiple features → Move to shared/ui
- Core business concept → Move to entities

**Question 4: How complex is this interaction?**
- Simple form → Server Action
- Complex state → Zustand store
- Real-time → WebSocket + React Query

---

## What I'd Tell My Past Self

Building this architecture taught me lessons I wish I'd known years ago:

**Start with types, not components.** Define your domain models first. Everything else flows from them.

**State management is about boundaries, not tools.** The question isn't "Redux or Zustand?"—it's "which state belongs where?"

**Test behavior, not implementation.** Test that your component shows tickets when data loads, not that it called a specific function.

**Performance is a feature, not an afterthought.** Build with virtualization, code splitting, and memoization in mind from day one.

**Your architecture will evolve.** What works for a team of 5 won't work for 50. Design for change.

**The best pattern is the one you understand.** Don't adopt a pattern just because it's trendy. Adopt it because it solves a real problem you have.

---

## Next Steps

You've built a production-ready architecture. Here's what to do with it:

1. **Extend the entities** — Add more fields, more relationships
2. **Add more features** — User management, reporting, exports
3. **Implement the backend** — Build the actual API
4. **Add authentication** — Protect routes, add permissions
5. **Deploy to production** — Vercel makes this trivial

The code we've written together is a starting point, not a finish line. Every application has unique needs. Take these patterns, adapt them, make them your own.

And when something breaks—because it will—you'll have the architecture to fix it without tearing everything down.

---

## Resources

- [React Documentation](https://react.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [TanStack Query](https://tanstack.com/query/latest)
- [Zustand](https://github.com/pmndrs/zustand)
- [Feature-Sliced Design](https://feature-sliced.design)

---

*Enjoyed this tutorial? I write about React architecture and patterns every Month. Follow me on Twitter [@themarvelbiz](https://x.com/@themarvelbiz)*

---
