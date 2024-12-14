import * as React from 'react';
import { LibraryThemeProvider } from '../../styles/LibraryThemeProvider';
import { variantStyles, sizeStyles, StyledButton } from './Button.styled';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantStyles;
  size?: keyof typeof sizeStyles;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'default',
      size = 'default',
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? 'span' : 'button';
    return (
      <LibraryThemeProvider>
        <StyledButton
          as={Comp}
          ref={ref}
          variant={variant}
          size={size}
          {...props}
        >
          {children}
        </StyledButton>
      </LibraryThemeProvider>
    );
  }
);
Button.displayName = 'Button';

export { Button };
