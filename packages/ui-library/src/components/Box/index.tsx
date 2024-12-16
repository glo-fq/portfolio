import React from 'react';
import { CSSObject } from 'styled-components';
import { BoxStyled } from './Box.styled';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  sx?: CSSObject | ((theme: any) => CSSObject);
  m?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  mx?: string | number;
  my?: string | number;
  p?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
  px?: string | number;
  py?: string | number;
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
  color?: string;
  bg?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  flexWrap?: string;
  border?: string;
  borderRadius?: string | number;
  boxShadow?: string;
  position?: string;
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
  zIndex?: number;
  theme?: any;
}

const Box: React.FC<BoxProps> = ({ as = 'div', sx, ...props }) => {
  const sxStyles = typeof sx === 'function' ? sx(props.theme) : sx;
  return <BoxStyled as={as} style={sxStyles} {...props} />;
};

export { Box };
