import { createContext, useContext } from 'react';

export const CarouselContext = createContext<any>(null);

export function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}
