import React from 'react';
import { LibraryThemeProvider } from '../../styles/LibraryThemeProvider';
import { FooterRoot } from './Footer.styled';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  backgroundColor?: string;
  textColor?: string;
  height?: string;
  padding?: string;
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
}

const Footer: React.FC<FooterProps> = ({
  children,
  backgroundColor,
  textColor,
  height,
  padding,
  alignItems,
  justifyContent,
  ...props
}) => {
  return (
    <LibraryThemeProvider>
      <FooterRoot
        backgroundColor={backgroundColor}
        textColor={textColor}
        height={height}
        padding={padding}
        alignItems={alignItems}
        justifyContent={justifyContent}
        {...props}
      >
        {children}
      </FooterRoot>
    </LibraryThemeProvider>
  );
};

export { Footer };
