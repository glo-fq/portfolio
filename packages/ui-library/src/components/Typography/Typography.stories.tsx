import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Typography, TypographyProps } from './index';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: [
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'p',
          'blockquote',
          'table',
          'list',
          'inlineCode',
          'lead',
          'large',
          'small',
          'muted',
          'body1',
          'body2',
        ],
      },
    },
  },
} as Meta;

const Template: StoryFn<TypographyProps> = (args) => (
  <Typography {...args}>This is a typography component</Typography>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'p',
};

export const Heading1 = Template.bind({});
Heading1.args = {
  variant: 'h1',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  variant: 'h2',
};

export const Heading3 = Template.bind({});
Heading3.args = {
  variant: 'h3',
};

export const Heading4 = Template.bind({});
Heading4.args = {
  variant: 'h4',
};

export const Heading5 = Template.bind({});
Heading5.args = {
  variant: 'h5',
};

export const Heading6 = Template.bind({});
Heading6.args = {
  variant: 'h6',
};

export const Blockquote = Template.bind({});
Blockquote.args = {
  variant: 'blockquote',
};

export const InlineCode = Template.bind({});
InlineCode.args = {
  variant: 'inlineCode',
};

export const Lead = Template.bind({});
Lead.args = {
  variant: 'lead',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'large',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'small',
};

export const Muted = Template.bind({});
Muted.args = {
  variant: 'muted',
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: 'body1',
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: 'body2',
};
