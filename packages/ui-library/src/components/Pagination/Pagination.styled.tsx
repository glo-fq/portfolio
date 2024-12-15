import styled, { css } from 'styled-components';
import {
  ButtonVariant,
  sizeStyles,
  variantStyles,
} from '../Button/Button.styled';

export const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

export const PaginationContentStyled = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

export const PaginationItemStyled = styled.li``;

export const PaginationLinkStyled = styled.a<{
  $isActive?: boolean;
  size: keyof typeof sizeStyles;
}>`
  border-radius: ${({ theme }) => theme.radius.md};
  ${({ $isActive }) =>
    $isActive
      ? css`
          border: 1px solid ${({ theme }) => theme.colors.input};
          ${() => variantStyles[ButtonVariant.Outline]};
        `
      : css`
          ${() => variantStyles[ButtonVariant.Ghost]};
        `}
  ${({ size }) => sizeStyles[size]};
`;

export const PaginationPreviousStyled = styled(PaginationLinkStyled)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding-left: 0.625rem;
`;

export const PaginationNextStyled = styled(PaginationLinkStyled)`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding-right: 0.625rem;
`;

export const PaginationEllipsisStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  width: 2.25rem;
`;
