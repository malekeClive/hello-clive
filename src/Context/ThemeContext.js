import React, { createContext, useState } from 'react';

export const themes = {
  light: {
    background: "#fff",
    text: "#141414",
    summary: "#6b6b6b",
    weight: "500",
    mode: {
      object: "#ffff75",
      show: "inline-block"
    }
  },
  dark: {
    background: "#141414",
    text: "#ededed",
    summary: "#ededed",
    weight: "bold",
    mode: {
      object: "#fff",
      show: "none"
    }
  }
}

export const ThemeContext = createContext(themes.light);

export const ThemeProvider = ({ children }) => {
  const [ theme, setTheme ] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}