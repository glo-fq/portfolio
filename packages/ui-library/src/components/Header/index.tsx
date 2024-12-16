import React from 'react';
import { LibraryThemeProvider } from '../../styles/LibraryThemeProvider';
import { HeaderRoot } from './Header.styled';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
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
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  backgroundColor,
  textColor,
  height,
  padding,
  alignItems,
  justifyContent,
  className,
  ...props
}) => {
  return (
    <LibraryThemeProvider>
      <HeaderRoot
        backgroundColor={backgroundColor}
        textColor={textColor}
        height={height}
        padding={padding}
        alignItems={alignItems}
        justifyContent={justifyContent}
        className={className}
        {...props}
      >
        {children}
      </HeaderRoot>
    </LibraryThemeProvider>
  );
};

export { Header };
