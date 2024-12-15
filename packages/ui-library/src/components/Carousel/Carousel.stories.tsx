import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './index';
import { Card, CardContent } from '../Card';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta;

const Template: StoryFn = (args) => (
  <div
    style={{
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}
  >
    <Carousel style={{ width: '100%', maxWidth: '20rem' }} {...args}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div style={{ padding: '0.25rem' }}>
              <Card>
                <CardContent
                  style={{
                    display: 'flex',
                    aspectRatio: '1/1',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1.5rem',
                  }}
                >
                  <span style={{ fontSize: '2.25rem', fontWeight: '600' }}>
                    {index + 1}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  orientation: 'horizontal',
};
