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
    ShadowProps {}

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
  .attrs<CustomBoxProps>((props) => props)`
  ${compose(space, layout, typography, color, flexbox, border, position, shadow)}
`;
