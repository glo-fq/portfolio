import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './index';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    content: { control: 'text' },
    footer: { control: 'text' },
  },
} as Meta;

const Template: StoryFn = ({
  title,
  description,
  content,
  footer,
  ...args
}) => (
  <Card {...args}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{content}</p>
    </CardContent>
    <CardFooter>
      <p>{footer}</p>
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  description: 'Card Description',
  content: 'This is the card content.',
  footer: 'Card Footer',
};
