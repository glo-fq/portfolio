import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Header, HeaderProps } from '.';

export default {
  title: 'Components/Header',
  component: Header,
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

const Template: StoryFn<HeaderProps> = (args) => (
  <Header {...args}>Header Content</Header>
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

const StickyTemplate: StoryFn<HeaderProps> = (args) => (
  <div style={{ height: '200vh' }}>
    <Header {...args}>Sticky Header Content</Header>
    <div style={{ padding: '1rem' }}>
      Scroll down to see the sticky header in action. Make sure that no parent
      has overflow: hidden, be it x or y, because it will prevent the sticky
      header from working.
    </div>
  </div>
);

export const StickyDemo = StickyTemplate.bind({});
StickyDemo.args = {
  backgroundColor: '#333',
  textColor: '#fff',
  height: '5rem',
  padding: '0 2rem',
  alignItems: 'center',
  justifyContent: 'space-between',
  sticky: true, // Set sticky to true
};
