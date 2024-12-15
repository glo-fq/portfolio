import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ButtonSize, ButtonVariant, StyledButton } from './Button.styled';
import { LibraryThemeProvider } from '../../styles/LibraryThemeProvider';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = ButtonVariant.Default,
      size = ButtonSize.Default,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <LibraryThemeProvider>
        <StyledButton
          as={Comp}
          ref={ref}
          $variant={variant}
          $size={size}
          className={className}
          {...props}
        />
      </LibraryThemeProvider>
    );
  }
);
Button.displayName = 'Button';

export { Button };
