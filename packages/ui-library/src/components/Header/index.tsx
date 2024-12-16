import React from 'react';
import { LibraryThemeProvider } from '../../styles/LibraryThemeProvider';
import { HeaderRoot } from './Header.styled';
import { omit } from 'lodash';

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
  sticky?: boolean; // Add sticky prop
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
  sticky, // Add sticky prop
  ...props
}) => {
  const headerProps = omit(props, [
    'backgroundColor',
    'textColor',
    'height',
    'padding',
    'alignItems',
    'justifyContent',
    'sticky', // Add sticky to omit list
  ]);

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
        sticky={sticky} // Pass sticky prop
        {...headerProps}
      >
        {children}
      </HeaderRoot>
    </LibraryThemeProvider>
  );
};

export { Header };
