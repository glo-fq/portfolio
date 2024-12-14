import * as React from 'react';
import styled from 'styled-components';
import { LibraryThemeProvider } from '../../styles/LibraryThemeProvider';

// Styled Components
const StyledCard = styled.div`
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.cardForeground};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: ${({ theme }) => theme.spacing.padding};
`;

const StyledCardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.015em;
`;

const StyledCardDescription = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

const StyledCardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.padding};
  padding-top: 0;
`;

const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.padding};
  padding-top: 0;
`;

// Components
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
