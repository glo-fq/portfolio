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
} from 'styled-system';

export const BoxStyled = styled.div(
  compose(space, layout, typography, color, flexbox, border, position, shadow)
);
