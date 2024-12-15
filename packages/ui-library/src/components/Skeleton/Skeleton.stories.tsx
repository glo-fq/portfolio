import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Skeleton } from './index';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as Meta;

const Template: StoryFn = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  height: '50px',
  width: '50px',
};

export const Rounded = Template.bind({});
Rounded.args = {
  height: '50px',
  width: '50px',
  isRounded: true,
};
