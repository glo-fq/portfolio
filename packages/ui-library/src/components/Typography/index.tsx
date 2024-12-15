import React from 'react';
import {
  TypographyH1Styled,
  TypographyH2Styled,
  TypographyH3Styled,
  TypographyH4Styled,
  TypographyPStyled,
  TypographyBlockquoteStyled,
  TypographyTableStyled,
  TypographyListStyled,
  TypographyInlineCodeStyled,
  TypographyLeadStyled,
  TypographyLargeStyled,
  TypographySmallStyled,
  TypographyMutedStyled,
} from './Typography.styled';
import { LibraryThemeProvider } from '../../styles/LibraryThemeProvider';

export type TypographyProps = {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'blockquote'
    | 'table'
    | 'list'
    | 'inlineCode'
    | 'lead'
    | 'large'
    | 'small'
    | 'muted';
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  color?: string;
  align?: 'left' | 'center' | 'right' | 'justify';
  weight?: string;
  margin?: string;
  padding?: string;
  lineHeight?: string;
  letterSpacing?: string;
  decoration?: string;
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  as: Component = variant,
  children,
  className,
  color,
  align,
  weight,
  margin,
  padding,
  lineHeight,
  letterSpacing,
  decoration,
}) => {
  const styleProps = {
    color,
    align,
    weight,
    margin,
    padding,
    lineHeight,
    letterSpacing,
    decoration,
  };

  switch (variant) {
    case 'h1':
      return (
        <LibraryThemeProvider>
          <TypographyH1Styled
            as={Component}
            className={className}
            {...styleProps}
          >
            {children}
          </TypographyH1Styled>
        </LibraryThemeProvider>
      );
    case 'h2':
      return (
        <LibraryThemeProvider>
          <TypographyH2Styled
            as={Component}
            className={className}
            {...styleProps}
          >
            {children}
          </TypographyH2Styled>
        </LibraryThemeProvider>
      );
    case 'h3':
      return (
        <LibraryThemeProvider>
          <TypographyH3Styled
            as={Component}
            className={className}
            {...styleProps}
          >
            {children}
          </TypographyH3Styled>
        </LibraryThemeProvider>
      );
    case 'h4':
      return (
        <LibraryThemeProvider>
          <TypographyH4Styled
            as={Component}
            className={className}
            {...styleProps}
          >
            {children}
          </TypographyH4Styled>
        </LibraryThemeProvider>
      );
    case 'p':
      return (
        <LibraryThemeProvider>
          <TypographyPStyled
            as={Component}
            className={className}
            {...styleProps}
          >
            {children}
          </TypographyPStyled>
        </LibraryThemeProvider>
      );
    case 'blockquote':
      return (
        <LibraryThemeProvider>
          <TypographyBlockquoteStyled
            as={Component}
            className={className}
            {...styleProps}
          >
            {children}
          </TypographyBlockquoteStyled>
        </LibraryThemeProvider>
      );
    case 'table':
      return (
        <LibraryThemeProvider>
          <TypographyTableStyled
            as={Component}
            className={className}
            {...styleProps}
          >
            {children}
          </TypographyTableStyled>
        </LibraryThemeProvider>
      );
    case 'list':
      return (
        <LibraryThemeProvider>
          <TypographyListStyled
            as={Component}
            className={className}
            {...styleProps}
          >
            {children}
          </TypographyListStyled>
        </LibraryThemeProvider>
      );
    case 'inlineCode':
      return (
        <LibraryThemeProvider>
          <TypographyInlineCodeStyled
            as={Component}
            className={className}
            {...styleProps}
          >
            {children}
          </TypographyInlineCodeStyled>
        </LibraryThemeProvider>
      );
    case 'lead':
      return (
        <LibraryThemeProvider>
          <TypographyLeadStyled
            as={Component}
            className={className}
            {...styleProps}
          >
            {children}
          </TypographyLeadStyled>
        </LibraryThemeProvider>
      );
    case 'large':
      return (
        <LibraryThemeProvider>
          <TypographyLargeStyled
            as={Component}
            className={className}
            {...styleProps}
          >
            {children}
          </TypographyLargeStyled>
        </LibraryThemeProvider>
      );
    case 'small':
      return (
        <LibraryThemeProvider>
          <TypographySmallStyled
            as={Component}
            className={className}
            {...styleProps}
          >
            {children}
          </TypographySmallStyled>
        </LibraryThemeProvider>
      );
    case 'muted':
      return (
        <LibraryThemeProvider>
          <TypographyMutedStyled
            as={Component}
            className={className}
            {...styleProps}
          >
            {children}
          </TypographyMutedStyled>
        </LibraryThemeProvider>
      );
    default:
      return null;
  }
};