// "use client";

// import * as React from "react";
// import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { type ThemeProviderProps } from "next-themes/dist/types";

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
// }

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class" // ← REQUIRED for Tailwind dark mode
      defaultTheme="system" // or "dark" (if you want forced dark)
      enableSystem // ← Optional: enables system preference detection
      disableTransitionOnChange // ← Prevents flash on theme switch
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}