import * as React from 'react';
import styled, { css } from 'styled-components';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Types
interface CarouselProps {
  opts?: Parameters<typeof useEmblaCarousel>[0];
  plugins?: Parameters<typeof useEmblaCarousel>[1];
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: UseEmblaCarouselType[1]) => void;
  className?: string;
  children: React.ReactNode;
}

const CarouselContext = React.createContext<any>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }
  return context;
}

// Styled Components
const StyledCarousel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const CarouselContainer = styled.div<{
  orientation: 'horizontal' | 'vertical';
}>`
  display: flex;
  flex-direction: ${({ orientation }) =>
    orientation === 'horizontal' ? 'row' : 'column'};
`;

const CarouselItemWrapper = styled.div<{
  orientation: 'horizontal' | 'vertical';
}>`
  flex: 0 0 auto;
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          padding-left: 1rem;
        `
      : css`
          padding-top: 1rem;
        `};
`;

const StyledButton = styled.button<{ disabled?: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: white;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const PreviousButton = styled(StyledButton)<{
  orientation: 'horizontal' | 'vertical';
}>`
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          left: -2rem;
          top: 50%;
          transform: translateY(-50%);
        `
      : css`
          top: -2rem;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        `};
`;

const NextButton = styled(StyledButton)<{
  orientation: 'horizontal' | 'vertical';
}>`
  ${({ orientation }) =>
    orientation === 'horizontal'
      ? css`
          right: -2rem;
          top: 50%;
          transform: translateY(-50%);
        `
      : css`
          bottom: -2rem;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        `};
`;

// Component
const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    { orientation = 'horizontal', opts, setApi, plugins, className, children },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      { ...opts, axis: orientation === 'horizontal' ? 'x' : 'y' },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: UseEmblaCarouselType[1]) => {
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
      api.on('select', onSelect);
      api.on('reInit', onSelect);

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
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <StyledCarousel
          ref={ref}
          className={className}
          role="region"
          aria-roledescription="carousel"
        >
          {children}
        </StyledCarousel>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} style={{ overflow: 'hidden' }}>
      <CarouselContainer
        ref={ref}
        orientation={orientation}
        className={className}
        {...props}
      >
        {children}
      </CarouselContainer>
    </div>
  );
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <CarouselItemWrapper
      ref={ref}
      orientation={orientation}
      className={className}
      {...props}
    >
      {children}
    </CarouselItemWrapper>
  );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  { className?: string }
>((props, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <PreviousButton
      ref={ref}
      onClick={scrollPrev}
      orientation={orientation}
      disabled={!canScrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span style={{ visibility: 'hidden' }}>Previous</span>
    </PreviousButton>
  );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  { className?: string }
>((props, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <NextButton
      ref={ref}
      onClick={scrollNext}
      orientation={orientation}
      disabled={!canScrollNext}
      {...props}
    >
      <ArrowRight />
      <span style={{ visibility: 'hidden' }}>Next</span>
    </NextButton>
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
