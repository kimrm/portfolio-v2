"use client";
import { createContext } from "react";

export const ThemeContext = createContext({ theme: "dark" });

export function ThemeContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContext.Provider value={{ theme: "dark" }}>
      {children}
    </ThemeContext.Provider>
  );
}
