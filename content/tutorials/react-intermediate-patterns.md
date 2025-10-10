---
title: "React Intermediate Patterns and Best Practices"
date: "2024-01-20"
excerpt: "Master React hooks, context API, performance optimization, and component composition patterns."
category: "Tutorial"
tags: ["react", "hooks", "context", "performance", "patterns", "intermediate"]
featured: true
level: "intermediate"
author: "Merveille Alexander"
readTime: "25 min read"
---

# React Intermediate Patterns and Best Practices

## Advanced Hooks Usage

### Custom Hooks
Create reusable logic with custom hooks:

```jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setStoredValue = (value) => {
    try {
      setValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [value, setStoredValue];
}

### useReducer for Complex State

Manage complex state logic:

jsx
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  return (
    // Component implementation
  );
}


### Performance Optimization

React.memo
Prevent unnecessary re-renders:

jsx
const ExpensiveComponent = React.memo(({ data }) => {
  // Component logic
  return <div>{/* rendered content */}</div>;
});

### useCallback and useMemo

Optimize functions and values:

function ProductList({ products, onProductSelect }) {
  const memoizedCallback = useCallback(
    (product) => {
      onProductSelect(product);
    },
    [onProductSelect]
  );

  const expensiveValue = useMemo(() => {
    return products.filter(p => p.price > 100);
  }, [products]);

  return (
    // Component implementation
  );
}

