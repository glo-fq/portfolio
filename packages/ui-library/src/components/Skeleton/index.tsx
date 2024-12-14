import React from 'react';
import { LibraryThemeProvider } from '../../styles/LibraryThemeProvider';
import { StyledSkeleton } from './Skeleton.styled';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  height?: string;
  width?: string;
  isRounded?: boolean;
  animationDuration?: string;
  backgroundColor?: string;
  margin?: string;
  borderRadius?: string;
}

const Skeleton = ({
  className,
  height,
  width,
  isRounded = false,
  animationDuration,
  backgroundColor,
  margin,
  borderRadius,
  ...props
}: SkeletonProps) => {
  return (
    <LibraryThemeProvider>
      <StyledSkeleton
        className={className}
        height={height}
        width={width}
        $isRounded={isRounded}
        animationDuration={animationDuration}
        backgroundColor={backgroundColor}
        margin={margin}
        borderRadius={borderRadius}
        {...props}
      />
    </LibraryThemeProvider>
  );
};

export { Skeleton };
