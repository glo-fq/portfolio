import * as React from 'react';
import { LibraryThemeProvider } from '../../styles/LibraryThemeProvider';
import {
  StyledAlert,
  StyledAlertTitle,
  StyledAlertDescription,
} from './Alert.styled';

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
