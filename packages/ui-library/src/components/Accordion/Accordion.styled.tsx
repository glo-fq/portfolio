import styled from 'styled-components';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

export const StyledAccordionItem = styled(AccordionPrimitive.Item)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const StyledAccordionTrigger = styled(AccordionPrimitive.Trigger)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  font-weight: 500;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  &:hover {
    text-decoration: underline;
  }
  &[data-state='open'] > svg {
    transform: rotate(180deg);
  }
`;

export const StyledAccordionContent = styled(AccordionPrimitive.Content)`
  overflow: hidden;
  font-size: 0.875rem;
  transition: all 0.2s;
  &[data-state='closed'] {
    animation: ${({ theme }) => theme.keyframes.accordionUp} 0.2s ease-out;
  }
  &[data-state='open'] {
    animation: ${({ theme }) => theme.keyframes.accordionDown} 0.2s ease-out;
  }
`;

export const StyledAccordionContentChildren = styled.div`
  padding-bottom: 1rem;
  padding-top: 0;
`;
