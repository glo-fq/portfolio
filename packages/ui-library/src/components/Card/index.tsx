import * as React from 'react';
import { LibraryThemeProvider } from '../../styles/LibraryThemeProvider';
import {
  StyledCard,
  StyledCardHeader,
  StyledCardTitle,
  StyledCardDescription,
  StyledCardContent,
  StyledCardFooter,
} from './Card.styled';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <LibraryThemeProvider>
    <StyledCard ref={ref} {...props}>
      {children}
    </StyledCard>
  </LibraryThemeProvider>
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <LibraryThemeProvider>
    <StyledCardHeader ref={ref} {...props}>
      {children}
    </StyledCardHeader>
  </LibraryThemeProvider>
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <LibraryThemeProvider>
    <StyledCardTitle ref={ref} {...props}>
      {children}
    </StyledCardTitle>
  </LibraryThemeProvider>
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <LibraryThemeProvider>
    <StyledCardDescription ref={ref} {...props}>
      {children}
    </StyledCardDescription>
  </LibraryThemeProvider>
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <LibraryThemeProvider>
    <StyledCardContent ref={ref} {...props}>
      {children}
    </StyledCardContent>
  </LibraryThemeProvider>
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <LibraryThemeProvider>
    <StyledCardFooter ref={ref} {...props}>
      {children}
    </StyledCardFooter>
  </LibraryThemeProvider>
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
