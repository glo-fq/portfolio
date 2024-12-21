import React, {
  ComponentPropsWithoutRef,
  ComponentRef,
  forwardRef,
} from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import {
  StyledAccordionContent,
  StyledAccordionContentChildren,
  StyledAccordionItem,
  StyledAccordionTrigger,
} from './Accordion.styled';
import { LibraryThemeProvider } from '../../styles/LibraryThemeProvider';

const Accordion = forwardRef<
  ComponentRef<typeof AccordionPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LibraryThemeProvider>
    <AccordionPrimitive.Root ref={ref} className={className} {...props} />
  </LibraryThemeProvider>
));

const AccordionItem = forwardRef<
  ComponentRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <StyledAccordionItem ref={ref} className={className} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = forwardRef<
  ComponentRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header style={{ display: 'flex' }} className="flex">
    <StyledAccordionTrigger ref={ref} className={className} {...props}>
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </StyledAccordionTrigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = forwardRef<
  ComponentRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <StyledAccordionContent ref={ref} className={className} {...props}>
    <StyledAccordionContentChildren className={className}>
      {children}
    </StyledAccordionContentChildren>
  </StyledAccordionContent>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
