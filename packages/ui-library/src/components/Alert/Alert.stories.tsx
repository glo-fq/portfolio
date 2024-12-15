import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Alert, AlertTitle, AlertDescription } from './index';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

const Template: StoryFn = (args) => (
  <Alert {...args}>
    <AlertTitle>Alert Title</AlertTitle>
    <AlertDescription>This is an alert description.</AlertDescription>
  </Alert>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
};
