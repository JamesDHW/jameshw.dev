"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => (
  <NextThemeProvider 
    attribute="class"
    defaultTheme="system"
    enableSystem
    storageKey="theme"
  >
    {children}
  </NextThemeProvider>
);
