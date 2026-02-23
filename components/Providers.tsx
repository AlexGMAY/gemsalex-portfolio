"use client";

import { ErrorBoundary } from "./ErrorBoundary";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Suppress hydration warnings in production
    if (process.env.NODE_ENV === "production") {
      const originalError = console.error;
      console.error = (...args) => {
        if (args[0]?.includes?.("Hydration")) return;
        originalError.call(console, ...args);
      };
    }
  }, []);

  return (
    <ErrorBoundary
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Refresh Page
            </button>
          </div>
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  );
}
