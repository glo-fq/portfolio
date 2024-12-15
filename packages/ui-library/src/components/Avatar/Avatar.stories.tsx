import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Avatar, AvatarImage, AvatarFallback } from './index';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: StoryFn = (args) => (
  <Avatar {...args}>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);

export const Default = Template.bind({});
Default.args = {};
