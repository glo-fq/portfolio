import React, { useCallback, useState } from 'react';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';

import { Button } from '../Button';

import {
  CarouselWrapper,
  CarouselContentWrapper,
  CarouselContentContainer,
  CarouselItemWrapper,
  ButtonStyled,
  StyledArrowRight,
  StyledArrowLeft,
} from './Carousel.styled';
import {
  CarouselApi,
  CarouselContext,
  CarouselProps,
  useCarousel,
} from '../../context/CarouselContext';
import { ButtonSize, ButtonVariant } from '../Button/Button.styled';

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
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);

      return () => {
        api?.off('select', onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <CarouselWrapper
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={className}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
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
        orientation={orientation ?? 'horizontal'}
        className={className}
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

  return (
    <CarouselItemWrapper
      ref={ref}
      role="group"
      aria-roledescription="slide"
      orientation={orientation ?? 'horizontal'}
      className={className}
      {...props}
    />
  );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(
  (
    {
      className,
      variant = ButtonVariant.Outline,
      size = ButtonSize.Icon,
      ...props
    },
    ref
  ) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <ButtonStyled
        ref={ref}
        variant={variant}
        size={size}
        orientation={orientation ?? 'horizontal'}
        className={className}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <StyledArrowLeft />
        <span className="sr-only">Previous slide</span>
      </ButtonStyled>
    );
  }
);
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(
  (
    {
      className,
      variant = ButtonVariant.Outline,
      size = ButtonSize.Icon,
      ...props
    },
    ref
  ) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <ButtonStyled
        ref={ref}
        variant={variant}
        size={size}
        orientation={orientation ?? 'horizontal'}
        className={className}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <StyledArrowRight />
        <span className="sr-only">Next slide</span>
      </ButtonStyled>
    );
  }
);
CarouselNext.displayName = 'CarouselNext';

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
