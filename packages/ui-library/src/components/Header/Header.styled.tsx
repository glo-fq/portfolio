import styled from 'styled-components';
import { HeaderProps } from './index';

export const HeaderRoot = styled.header<HeaderProps>`
  display: flex;
  width: 100%;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.background};
  color: ${({ textColor, theme }) => textColor || theme.colors.text};
  height: ${({ height }) => height || '4rem'};
  padding: ${({ padding }) => padding || '0 1rem'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  box-shadow: ${({ theme }) => theme.shadow.sm};

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
`;
