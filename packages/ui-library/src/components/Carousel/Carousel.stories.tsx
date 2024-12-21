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
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    numberOfItems: {
      control: 'number',
      defaultValue: 5,
    },
  },
} as Meta;

const Template: StoryFn = ({ numberOfItems, ...args }) => (
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
        {Array.from({ length: numberOfItems }).map((_, index) => (
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
  numberOfItems: 5,
};

const CustomContentTemplate: StoryFn = ({ items, ...args }) => (
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
        {items.map((item: any, index: number) => (
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
                    {item}
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

export const CustomContent = CustomContentTemplate.bind({});
CustomContent.args = {
  orientation: 'horizontal',
  items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
};
CustomContent.argTypes = {
  items: { control: 'object' },
  numberOfItems: {
    control: false,
    table: { disable: true },
  },
};

const ChildrenContentTemplate: StoryFn = ({ items, ...args }) => (
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
        {items.map((item: any, index: number) => (
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
                  {item}
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

export const ChildrenContent = ChildrenContentTemplate.bind({});
ChildrenContent.args = {
  orientation: 'horizontal',
  items: [
    <div style={{ fontSize: '2.25rem', fontWeight: '600' }}>
      <h3>Child 1</h3>
      <p>This is the first child content.</p>
    </div>,
    <div style={{ fontSize: '2.25rem', fontWeight: '600' }}>
      <h3>Child 2</h3>
      <p>This is the second child content.</p>
    </div>,
    <div style={{ fontSize: '2.25rem', fontWeight: '600' }}>
      <h3>Child 3</h3>
      <p>This is the third child content.</p>
    </div>,
    <div style={{ fontSize: '2.25rem', fontWeight: '600' }}>
      <h3>Child 4</h3>
      <p>This is the fourth child content.</p>
    </div>,
    <div style={{ fontSize: '2.25rem', fontWeight: '600' }}>
      <h3>Child 5</h3>
      <p>This is the fifth child content.</p>
    </div>,
  ],
};
ChildrenContent.argTypes = {
  items: { control: 'object' },
  numberOfItems: {
    control: false,
    table: { disable: true },
  },
};

const ImageContentTemplate: StoryFn = ({ items, ...args }) => (
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
        {items.map((item: any, index: number) => (
          <CarouselItem key={index}>
            <div style={{ padding: '0.25rem' }}>
              <Card>
                <CardContent
                  style={{
                    display: 'flex',
                    aspectRatio: '1/1',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0',
                  }}
                >
                  <img
                    src={item}
                    alt={`Slide ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '0.5rem',
                    }}
                  />
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

export const ImageContent = ImageContentTemplate.bind({});
ImageContent.args = {
  orientation: 'horizontal',
  items: [
    'https://cataas.com/cat/gif',
    'https://cataas.com/cat/says/Hello%20world!',
    'https://cataas.com/cat/says/Meow',
    'https://cataas.com/cat/says/Feed%20me',
    'https://cataas.com/cat/says/Please',
  ],
};
ImageContent.argTypes = {
  items: { control: 'object' },
  numberOfItems: {
    control: false,
    table: { disable: true },
  },
};
