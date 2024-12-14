'use client';

import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@portfolio/ui-library';

export default function Home() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Carousel style={{ width: '100%', maxWidth: '20rem' }}>
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
}
