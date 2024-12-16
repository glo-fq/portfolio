import styled from 'styled-components';
import { HeaderProps } from './index';

const resolveColor = (color: string | undefined, theme: any) => {
  if (!color) return undefined;
  return theme.colors[color] || color;
};

const shouldForwardProp = (prop: string) =>
  ![
    'backgroundColor',
    'textColor',
    'height',
    'padding',
    'alignItems',
    'justifyContent',
    'sticky', // Add sticky to shouldForwardProp
  ].includes(prop);

export const HeaderRoot = styled.header.withConfig({
  shouldForwardProp,
})<HeaderProps>`
  display: flex;
  width: 100%;
  background-color: ${({ backgroundColor, theme }) =>
    resolveColor(backgroundColor, theme) || theme.colors.background};
  color: ${({ textColor, theme }) =>
    resolveColor(textColor, theme) || theme.colors.text};
  height: ${({ height }) => height || '4rem'};
  padding: ${({ padding }) => padding || '0 1rem'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  position: ${({ sticky }) =>
    sticky ? 'sticky' : 'static'}; // Handle sticky prop
  ${({ sticky }) =>
    sticky && `position: -webkit-sticky;`} // Handle sticky prop for Safari
  top: 0; // Ensure top is set to 0 for sticky
  z-index: 1000; // Ensure header stays on top

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
`;
