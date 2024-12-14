import * as React from 'react';
import styled, { css } from 'styled-components';
import { LibraryThemeProvider } from '../../styles/LibraryThemeProvider';

// Styled Components
const StyledAlert = styled.div<{ variant: 'default' | 'destructive' }>`
  position: relative;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid;
  padding: 1rem;
  ${({ variant, theme }) =>
    variant === 'default'
      ? css`
          background-color: ${theme.colors.background};
          color: ${theme.colors.foreground};
          border-color: ${theme.colors.border};
        `
      : css`
          background-color: ${theme.colors.destructiveBackground};
          color: ${theme.colors.destructiveForeground};
          border-color: ${theme.colors.destructive};
        `}

  & > svg {
    position: absolute;
    left: 1rem;
    top: 1rem;
    color: ${({ variant, theme }) =>
      variant === 'default'
        ? theme.colors.foreground
        : theme.colors.destructive};
  }

  & > svg ~ * {
    padding-left: 1.75rem;
  }

  & > svg + div {
    transform: translateY(-3px);
  }
`;

const StyledAlertTitle = styled.h5`
  margin-bottom: 0.25rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.015em;
`;

const StyledAlertDescription = styled.div`
  font-size: 0.875rem;
  & > p {
    line-height: 1.5;
  }
`;

// Components
const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: 'default' | 'destructive' }
>(({ className, variant = 'default', ...props }, ref) => (
  <LibraryThemeProvider>
    <StyledAlert ref={ref} variant={variant} className={className} {...props} />
  </LibraryThemeProvider>
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <LibraryThemeProvider>
    <StyledAlertTitle ref={ref} className={className} {...props} />
  </LibraryThemeProvider>
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <LibraryThemeProvider>
    <StyledAlertDescription ref={ref} className={className} {...props} />
  </LibraryThemeProvider>
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
