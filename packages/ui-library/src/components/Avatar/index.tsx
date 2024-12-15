import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import {
  AvatarRootStyled,
  AvatarImageStyled,
  AvatarFallbackStyled,
} from './Avatar.styled';
import { LibraryThemeProvider } from '../../styles/LibraryThemeProvider';

const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LibraryThemeProvider>
    <AvatarRootStyled ref={ref} className={className} {...props} />
  </LibraryThemeProvider>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarImageStyled ref={ref} className={className} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarFallbackStyled ref={ref} className={className} {...props} />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
