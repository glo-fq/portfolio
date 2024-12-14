import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styled, { css } from 'styled-components';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const buttonStyles = {
  base: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    white-space: nowrap;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    transition:
      background-color 0.2s,
      color 0.2s;
    &:focus-visible {
      outline: none;
      box-shadow:
        0 0 0 2px var(--ring-color),
        0 0 0 4px var(--ring-offset-color);
    }
    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
    svg {
      pointer-events: none;
      width: 1rem;
      height: 1rem;
      flex-shrink: 0;
    }
  `,
  variants: {
    default: css`
      background-color: var(--primary);
      color: var(--primary-foreground);
      &:hover {
        background-color: var(--primary-hover);
      }
    `,
    destructive: css`
      background-color: var(--destructive);
      color: var(--destructive-foreground);
      &:hover {
        background-color: var(--destructive-hover);
      }
    `,
    outline: css`
      border: 1px solid var(--input);
      background-color: var(--background);
      &:hover {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }
    `,
    secondary: css`
      background-color: var(--secondary);
      color: var(--secondary-foreground);
      &:hover {
        background-color: var(--secondary-hover);
      }
    `,
    ghost: css`
      background-color: transparent;
      &:hover {
        background-color: var(--accent);
        color: var(--accent-foreground);
      }
    `,
    link: css`
      background-color: transparent;
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    `,
  },
  sizes: {
    default: css`
      height: 2.5rem;
      padding: 0 1rem;
    `,
    sm: css`
      height: 2.25rem;
      border-radius: 0.375rem;
      padding: 0 0.75rem;
    `,
    lg: css`
      height: 2.75rem;
      border-radius: 0.5rem;
      padding: 0 2rem;
    `,
    icon: css`
      height: 2.5rem;
      width: 2.5rem;
      padding: 0;
    `,
  },
};

const StyledButton = styled.button<ButtonProps>`
  ${buttonStyles.base}
  ${({ variant }) => buttonStyles.variants[variant || 'default']}
  ${({ size }) => buttonStyles.sizes[size || 'default']}
`;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'default', size = 'default', asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : StyledButton;
    return <Comp ref={ref} variant={variant} size={size} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button };
