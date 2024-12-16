import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
  border,
  position,
  shadow,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  ShadowProps,
} from 'styled-system';

interface CustomBoxProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
    FlexboxProps,
    BorderProps,
    PositionProps,
    ShadowProps {
  $m?: SpaceProps['m'];
  $mt?: SpaceProps['mt'];
  $mr?: SpaceProps['mr'];
  $mb?: SpaceProps['mb'];
  $ml?: SpaceProps['ml'];
  $mx?: SpaceProps['mx'];
  $my?: SpaceProps['my'];
  $p?: SpaceProps['p'];
  $pt?: SpaceProps['pt'];
  $pr?: SpaceProps['pr'];
  $pb?: SpaceProps['pb'];
  $pl?: SpaceProps['pl'];
  $px?: SpaceProps['px'];
  $py?: SpaceProps['py'];
  $width?: LayoutProps['width'];
  $height?: LayoutProps['height'];
  $fontSize?: TypographyProps['fontSize'];
  $color?: ColorProps['color'];
  $bg?: ColorProps['bg'];
  $display?: LayoutProps['display'];
  $justifyContent?: FlexboxProps['justifyContent'];
  $alignItems?: FlexboxProps['alignItems'];
  $flexDirection?: FlexboxProps['flexDirection'];
  $flexWrap?: FlexboxProps['flexWrap'];
  $border?: BorderProps['border'];
  $borderRadius?: BorderProps['borderRadius'];
  $boxShadow?: ShadowProps['boxShadow'];
  $position?: PositionProps['position'];
  $top?: PositionProps['top'];
  $right?: PositionProps['right'];
  $bottom?: PositionProps['bottom'];
  $left?: PositionProps['left'];
  $zIndex?: PositionProps['zIndex'];
}

const mapProps = (props: CustomBoxProps) => ({
  m: props.$m,
  mt: props.$mt,
  mr: props.$mr,
  mb: props.$mb,
  ml: props.$ml,
  mx: props.$mx,
  my: props.$my,
  p: props.$p,
  pt: props.$pt,
  pr: props.$pr,
  pb: props.$pb,
  pl: props.$pl,
  px: props.$px,
  py: props.$py,
  width: props.$width,
  height: props.$height,
  fontSize: props.$fontSize,
  color: props.$color,
  bg: props.$bg,
  display: props.$display,
  justifyContent: props.$justifyContent,
  alignItems: props.$alignItems,
  flexDirection: props.$flexDirection,
  flexWrap: props.$flexWrap,
  border: props.$border,
  borderRadius: props.$borderRadius,
  boxShadow: props.$boxShadow,
  position: props.$position,
  top: props.$top,
  right: props.$right,
  bottom: props.$bottom,
  left: props.$left,
  zIndex: props.$zIndex,
});

const shouldForwardProp = (prop: string) =>
  !prop.startsWith('$') &&
  ![
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'width',
    'height',
    'fontSize',
    'color',
    'bg',
    'display',
    'justifyContent',
    'alignItems',
    'flexDirection',
    'flexWrap',
    'border',
    'borderRadius',
    'boxShadow',
    'position',
    'top',
    'right',
    'bottom',
    'left',
    'zIndex',
  ].includes(prop);

export const BoxStyled = styled.div
  .withConfig({
    shouldForwardProp,
  })
  .attrs<CustomBoxProps>((props) => mapProps(props))`
  ${compose(space, layout, typography, color, flexbox, border, position, shadow)}
`;
