import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from './index';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    fallback: { control: 'text' },
  },
} as Meta;

const Template: StoryFn = ({ src, alt, fallback, ...args }) => (
  <Avatar {...args}>
    <AvatarImage src={src} alt={alt} />
    <AvatarFallback>{fallback}</AvatarFallback>
  </Avatar>
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://github.com/shadcn.png',
  alt: '@shadcn',
  fallback: 'CN',
};
