import styled, { keyframes } from 'styled-components';
import { SkeletonProps } from '.';

// Define the pulse animation
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const StyledSkeleton = styled.div<
  Omit<SkeletonProps, 'isRounded'> & { $isRounded?: boolean }
>`
  animation: ${pulse} ${({ animationDuration }) => animationDuration || '1.5s'}
    ease-in-out infinite;
  border-radius: ${({ borderRadius, $isRounded }) =>
    $isRounded ? (borderRadius ?? '0.375rem') : '0'};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.muted}; /* bg-muted */
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || '100%'};
  margin: ${({ margin }) => margin || '0'};
`;
