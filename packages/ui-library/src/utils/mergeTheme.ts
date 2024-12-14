import { DefaultTheme } from 'styled-components';
import { defaultTheme } from '../styles/theme';

export const mergeTheme = (
  customTheme: Partial<DefaultTheme>
): DefaultTheme => ({
  ...defaultTheme,
  ...customTheme,
  colors: {
    ...defaultTheme.colors,
    ...customTheme.colors,
  },
  spacing: {
    ...defaultTheme.spacing,
    ...customTheme.spacing,
  },
  shadow: {
    ...defaultTheme.shadow,
    ...customTheme.shadow,
  },
});
