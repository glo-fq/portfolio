import React from 'react';
import { ThemeProvider, useTheme, DefaultTheme } from 'styled-components';
import { defaultTheme } from './theme';

export const LibraryThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  let existingTheme: DefaultTheme | undefined;

  try {
    // Try to get the existing theme (if a ThemeProvider is already wrapping)
    existingTheme = useTheme();
  } catch {
    // Fallback if no ThemeProvider exists
    existingTheme = undefined;
  }

  const theme = existingTheme || defaultTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
