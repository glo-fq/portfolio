import styled, { css } from 'styled-components';
import { rgba } from 'polished';

export enum ButtonVariant {
  Default = 'default',
  Destructive = 'destructive',
  Outline = 'outline',
  Secondary = 'secondary',
  Ghost = 'ghost',
  Link = 'link',
}

export type ButtonVariantStyle = `${ButtonVariant}`;

export const variantStyles: Record<ButtonVariant, ReturnType<typeof css>> = {
  [ButtonVariant.Default]: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryForeground};
    &:hover {
      background-color: ${({ theme }) => rgba(theme.colors.primary, 0.9)};
    }
  `,
  [ButtonVariant.Destructive]: css`
    background-color: ${({ theme }) => theme.colors.destructive};
    color: ${({ theme }) => theme.colors.destructiveForeground};
    &:hover {
      background-color: ${({ theme }) => rgba(theme.colors.destructive, 0.9)};
    }
  `,
  [ButtonVariant.Outline]: css`
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.inputBorder};
    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.accentForeground};
    }
  `,
  [ButtonVariant.Secondary]: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondaryForeground};
    &:hover {
      background-color: ${({ theme }) => rgba(theme.colors.secondary, 0.8)};
    }
  `,
  [ButtonVariant.Ghost]: css`
    &:hover {
      background-color: ${({ theme }) => theme.colors.accent};
      color: ${({ theme }) => theme.colors.accentForeground};
    }
  `,
  [ButtonVariant.Link]: css`
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  `,
};

export const sizeStyles = {
  default: css`
    height: 2.5rem;
    padding: 0 1rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  sm: css`
    height: 2.25rem;
    padding: 0 0.75rem;
    border-radius: 0.375rem;
  `,
  lg: css`
    height: 2.75rem;
    padding: 0 2rem;
  `,
  icon: css`
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export const StyledButton = styled.button<{
  $variant: keyof typeof variantStyles;
  $size: keyof typeof sizeStyles;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 500;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
  ${({ $variant }) => variantStyles[$variant]};
  ${({ $size }) => sizeStyles[$size]};
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.ring};
    outline-offset: 2px;
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;
