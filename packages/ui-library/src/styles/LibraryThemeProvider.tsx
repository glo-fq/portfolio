import React from 'react';
import { ThemeProvider, useTheme, DefaultTheme } from 'styled-components';
import { defaultTheme } from './theme';
import { GlobalStyles } from './GlobalStyles';

export const LibraryThemeProvider: React.FC<{
  children: React.ReactNode;
  theme?: DefaultTheme;
}> = ({ children, theme: propTheme }) => {
  let existingTheme: DefaultTheme | undefined;

  try {
    // Try to get the existing theme (if a ThemeProvider is already wrapping)
    existingTheme = useTheme();
  } catch {
    // Fallback if no ThemeProvider exists
    existingTheme = undefined;
  }

  const theme = propTheme ?? existingTheme ?? defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
