import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Footer, FooterProps } from '.';

export default {
  title: 'Components/Footer',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' },
    height: { control: 'text' },
    padding: { control: 'text' },
    alignItems: {
      control: {
        type: 'select',
        options: ['flex-start', 'center', 'flex-end'],
      },
    },
    justifyContent: {
      control: {
        type: 'select',
        options: [
          'flex-start',
          'center',
          'flex-end',
          'space-between',
          'space-around',
        ],
      },
    },
  },
} as Meta;

const Template: StoryFn<FooterProps> = (args) => (
  <Footer {...args}>Footer Content</Footer>
);

export const Default = Template.bind({});
Default.args = {};

export const Custom = Template.bind({});
Custom.args = {
  backgroundColor: '#333',
  textColor: '#fff',
  height: '5rem',
  padding: '0 2rem',
  alignItems: 'center',
  justifyContent: 'space-between',
};
