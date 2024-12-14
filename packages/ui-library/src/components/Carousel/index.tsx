import * as React from 'react';
import styled, { css } from 'styled-components';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../Button';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

// Styled Components
const CarouselWrapper = styled.div`
  position: relative;
`;

const CarouselContentWrapper = styled.div`
  overflow: hidden;
`;

const CarouselContentContainer = styled.div<{
  orientation: 'horizontal' | 'vertical';
}>`
  display: flex;
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          margin-left: -1rem;
        `
      : css`
          margin-top: -1rem;
          flex-direction: column;
        `}
`;

const CarouselItemWrapper = styled.div<{
  orientation: 'horizontal' | 'vertical';
}>`
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 100%;
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          padding-left: 1rem;
        `
      : css`
          padding-top: 1rem;
        `}
`;

const ButtonStyled = styled(Button)<{ orientation: 'horizontal' | 'vertical' }>`
  position: absolute;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          &:nth-child(1) {
            left: -3rem;
            top: 50%;
            transform: translateY(-50%);
          }
          &:nth-child(2) {
            right: -3rem;
            top: 50%;
            transform: translateY(-50%);
          }
        `
      : css`
          &:nth-child(1) {
            top: -3rem;
            left: 50%;
            transform: translateX(-50%) rotate(90deg);
          }
          &:nth-child(2) {
            bottom: -3rem;
            left: 50%;
            transform: translateX(-50%) rotate(90deg);
          }
        `}
`;

// Context for Carousel
const CarouselContext = React.createContext<any>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

// Main Carousel Component
const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      { ...opts, axis: orientation === 'horizontal' ? 'x' : 'y' },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return;
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);

      return () => {
        api.off('select', onSelect);
      };
    }, [api, onSelect]);

    const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
    const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          orientation,
        }}
      >
        <CarouselWrapper ref={ref} {...props}>
          {children}
        </CarouselWrapper>
      </CarouselContext.Provider>
    );
  }
);

Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <CarouselContentWrapper ref={carouselRef}>
      <CarouselContentContainer
        ref={ref}
        orientation={orientation}
        {...props}
      />
    </CarouselContentWrapper>
  );
});

CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return <CarouselItemWrapper ref={ref} orientation={orientation} {...props} />;
});

CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollPrev, canScrollPrev, orientation } = useCarousel();

  return (
    <ButtonStyled
      orientation={orientation}
      ref={ref}
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      {...props}
    >
      <ArrowLeft />
    </ButtonStyled>
  );
});

CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const { scrollNext, canScrollNext, orientation } = useCarousel();

  return (
    <ButtonStyled
      orientation={orientation}
      ref={ref}
      onClick={scrollNext}
      disabled={!canScrollNext}
      {...props}
    >
      <ArrowRight />
    </ButtonStyled>
  );
});

CarouselNext.displayName = 'CarouselNext';

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
