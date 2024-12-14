import styled, { css } from 'styled-components';
import { Button } from '../Button';

export const CarouselWrapper = styled.div`
  position: relative;
`;

export const CarouselContentWrapper = styled.div`
  overflow: hidden;
`;

export const CarouselContentContainer = styled.div<{
  orientation: 'horizontal' | 'vertical';
}>`
  display: flex;
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          margin-left: -1rem;
        `
      : css`
          margin-top: -1rem;
          flex-direction: column;
        `}
`;

export const CarouselItemWrapper = styled.div<{
  orientation: 'horizontal' | 'vertical';
}>`
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 100%;
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          padding-left: 1rem;
        `
      : css`
          padding-top: 1rem;
        `}
`;

export const ButtonStyled = styled(Button)<{
  orientation: 'horizontal' | 'vertical';
}>`
  position: absolute;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          &:nth-child(1) {
            left: -3rem;
            top: 50%;
            transform: translateY(-50%);
          }
          &:nth-child(2) {
            right: -3rem;
            top: 50%;
            transform: translateY(-50%);
          }
        `
      : css`
          &:nth-child(1) {
            top: -3rem;
            left: 50%;
            transform: translateX(-50%) rotate(90deg);
          }
          &:nth-child(2) {
            bottom: -3rem;
            left: 50%;
            transform: translateX(-50%) rotate(90deg);
          }
        `}
`;
