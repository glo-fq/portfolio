import * as React from 'react';
import styled from 'styled-components';

// Styled components
const StyledCard = styled.div`
  border-radius: 0.5rem;
  border: 1px solid var(--border-color);
  background-color: var(--card-background);
  color: var(--card-foreground);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1.5rem;
`;

const StyledCardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.015em;
`;

const StyledCardDescription = styled.div`
  font-size: 0.875rem;
  color: var(--muted-foreground);
`;

const StyledCardContent = styled.div`
  padding: 1.5rem;
  padding-top: 0;
`;

const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  padding-top: 0;
`;

// Components
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <StyledCard ref={ref} className={className} {...props} />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <StyledCardHeader ref={ref} className={className} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <StyledCardTitle ref={ref} className={className} {...props} />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <StyledCardDescription ref={ref} className={className} {...props} />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <StyledCardContent ref={ref} className={className} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <StyledCardFooter ref={ref} className={className} {...props} />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
