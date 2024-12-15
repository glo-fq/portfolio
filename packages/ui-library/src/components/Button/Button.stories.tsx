import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './index';
import { ButtonVariant, ButtonSize } from './Button.styled';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ButtonVariant,
      },
    },
    size: {
      control: {
        type: 'select',
        options: ButtonSize,
      },
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
Default.args = {
  variant: ButtonVariant.Default,
  size: ButtonSize.Default,
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: ButtonVariant.Destructive,
  size: ButtonSize.Default,
};

export const Outline = Template.bind({});
Outline.args = {
  variant: ButtonVariant.Outline,
  size: ButtonSize.Default,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: ButtonVariant.Secondary,
  size: ButtonSize.Default,
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: ButtonVariant.Ghost,
  size: ButtonSize.Default,
};

export const Link = Template.bind({});
Link.args = {
  variant: ButtonVariant.Link,
  size: ButtonSize.Default,
};

export const Small = Template.bind({});
Small.args = {
  variant: ButtonVariant.Default,
  size: ButtonSize.Sm,
};

export const Large = Template.bind({});
Large.args = {
  variant: ButtonVariant.Default,
  size: ButtonSize.Lg,
};

export const Icon = Template.bind({});
Icon.args = {
  variant: ButtonVariant.Default,
  size: ButtonSize.Icon,
  children: '🔍',
};
