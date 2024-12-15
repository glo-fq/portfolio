import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './index';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta;

const Template: StoryFn = (args) => (
  <Carousel {...args}>
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
          <div style={{ padding: '0.25rem' }}>
            <div
              style={{
                display: 'flex',
                aspectRatio: '1/1',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
                backgroundColor: '#f0f0f0',
                borderRadius: '0.5rem',
              }}
            >
              <span style={{ fontSize: '2.25rem', fontWeight: '600' }}>
                {index + 1}
              </span>
            </div>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <div>
      <CarouselPrevious />
      <CarouselNext />
    </div>
  </Carousel>
);

export const Default = Template.bind({});
Default.args = {
  orientation: 'horizontal',
};
