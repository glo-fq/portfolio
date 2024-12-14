import styled, { css } from 'styled-components';

export const StyledAlert = styled.div<{ variant: 'default' | 'destructive' }>`
  position: relative;
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid;
  padding: 1rem;
  ${({ variant, theme }) =>
    variant === 'default'
      ? css`
          background-color: ${theme.colors.background};
          color: ${theme.colors.foreground};
          border-color: ${theme.colors.border};
        `
      : css`
          background-color: ${theme.colors.destructiveBackground};
          color: ${theme.colors.destructiveForeground};
          border-color: ${theme.colors.destructive};
        `}

  & > svg {
    position: absolute;
    left: 1rem;
    top: 1rem;
    color: ${({ variant, theme }) =>
      variant === 'default'
        ? theme.colors.foreground
        : theme.colors.destructive};
  }

  & > svg ~ * {
    padding-left: 1.75rem;
  }

  & > svg + div {
    transform: translateY(-3px);
  }
`;

export const StyledAlertTitle = styled.h5`
  margin-bottom: 0.25rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.015em;
`;

export const StyledAlertDescription = styled.div`
  font-size: 0.875rem;
  & > p {
    line-height: 1.5;
  }
`;
