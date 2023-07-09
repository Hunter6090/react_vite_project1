import React, { useContext } from 'react';
import { ThemeContext } from "../../ThemeProvider";

export function ThemeToggle() {
  const theme = useContext(ThemeContext);

  return (
    <button onClick={theme.toggleTheme}>
      {theme.mode === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}
