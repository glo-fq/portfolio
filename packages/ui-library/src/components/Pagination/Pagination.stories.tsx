import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from './index';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'default', 'large'],
      },
    },
    isActive: { control: 'boolean' },
    pageCount: {
      control: {
        type: 'number',
        min: 1,
        max: 20,
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <Pagination {...args}>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" size={args.size} />
      </PaginationItem>
      {[...Array(args.pageCount)].map((_, index) => (
        <PaginationItem key={index}>
          <PaginationLink
            href="#"
            size={args.size}
            isActive={index === 1 && args.isActive}
          >
            {index + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" size={args.size} />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
  isActive: false,
  pageCount: 5,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  isActive: false,
  pageCount: 5,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  isActive: false,
  pageCount: 5,
};

export const ActivePage = Template.bind({});
ActivePage.args = {
  size: 'default',
  isActive: true,
  pageCount: 5,
};
