import * as React from 'react';
import styled, { css } from 'styled-components';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive';
}

const alertStyles = {
  base: css`
    position: relative;
    width: 100%;
    border-radius: 0.5rem;
    border: 1px solid;
    padding: 1rem;

    svg ~ * {
      padding-left: 1.75rem;
    }

    svg + div {
      transform: translateY(-3px);
    }

    svg {
      position: absolute;
      left: 1rem;
      top: 1rem;
      color: var(--foreground-color);
    }
  `,
  variants: {
    default: css`
      background-color: var(--background-color);
      color: var(--foreground-color);
    `,
    destructive: css`
      border-color: rgba(var(--destructive-color), 0.5);
      color: var(--destructive-color);

      svg {
        color: var(--destructive-color);
      }
    `,
  },
};

const StyledAlert = styled.div<AlertProps>`
  ${alertStyles.base}
  ${({ variant = 'default' }) => alertStyles.variants[variant]}
`;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'default', ...props }, ref) => (
    <StyledAlert ref={ref} variant={variant} role="alert" {...props} />
  )
);
Alert.displayName = 'Alert';

const AlertTitle = styled.h5`
  margin-bottom: 0.25rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.015em;
`;

const AlertDescription = styled.div`
  font-size: 0.875rem;

  p {
    line-height: 1.5;
  }
`;

export { Alert, AlertTitle, AlertDescription };
