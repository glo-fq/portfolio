import styled from 'styled-components';

export const StyledCard = styled.div`
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.cardForeground};
  box-shadow: ${({ theme }) => theme.shadow.sm};
`;

export const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: ${({ theme }) => theme.spacing.padding};
`;

export const StyledCardTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.015em;
`;

export const StyledCardDescription = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
`;

export const StyledCardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.padding};
  padding-top: 0;
`;

export const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.padding};
  padding-top: 0;
`;
