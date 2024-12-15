import styled from 'styled-components';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

export const AvatarRootStyled = styled(AvatarPrimitive.Root)`
  position: relative;
  display: flex;
  height: 2.5rem;
  width: 2.5rem;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 50%;
`;

export const AvatarImageStyled = styled(AvatarPrimitive.Image)`
  aspect-ratio: 1 / 1;
  height: 100%;
  width: 100%;
`;

export const AvatarFallbackStyled = styled(AvatarPrimitive.Fallback)`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.muted};
`;
