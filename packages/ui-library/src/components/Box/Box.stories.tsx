import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Box, BoxProps } from '.';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    $m: { control: 'text' },
    $mt: { control: 'text' },
    $mr: { control: 'text' },
    $mb: { control: 'text' },
    $ml: { control: 'text' },
    $mx: { control: 'text' },
    $my: { control: 'text' },
    $p: { control: 'text' },
    $pt: { control: 'text' },
    $pr: { control: 'text' },
    $pb: { control: 'text' },
    $pl: { control: 'text' },
    $px: { control: 'text' },
    $py: { control: 'text' },
    $width: { control: 'text' },
    $height: { control: 'text' },
    $fontSize: { control: 'text' },
    $color: { control: 'color' },
    $bg: { control: 'color' },
    $display: { control: 'text' },
    $justifyContent: { control: 'text' },
    $alignItems: { control: 'text' },
    $flexDirection: { control: 'text' },
    $flexWrap: { control: 'text' },
    $border: { control: 'text' },
    $borderRadius: { control: 'text' },
    $boxShadow: { control: 'text' },
    $position: { control: 'text' },
    $top: { control: 'text' },
    $right: { control: 'text' },
    $bottom: { control: 'text' },
    $left: { control: 'text' },
    $zIndex: { control: 'number' },
    $sx: { control: 'object' },
  },
} as Meta;

const Template: StoryFn<BoxProps> = (args) => <Box {...args}>Box Content</Box>;

export const Default = Template.bind({});
Default.args = {
  $p: '2',
  $bg: 'lightgray',
  $color: 'black',
  $borderRadius: '4px',
};

export const Custom = Template.bind({});
Custom.args = {
  $p: '4',
  $bg: 'blue',
  $color: 'white',
  $borderRadius: '8px',
  $boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  $sx: {
    '&:hover': {
      $bg: 'darkblue',
    },
  },
};

export const Themed = Template.bind({});
Themed.args = {
  $p: '3',
  $bg: 'primary', // Assuming theme.colors.primary exists
  $color: 'white',
  $borderRadius: '8px',
  $boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  $sx: {
    '&:hover': {
      $bg: 'secondary', // Assuming theme.colors.secondary exists
    },
  },
};
