"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import Image from "next/image";

interface Slide {
  id: number;
  src: string;
  alt: string;
}

const generateSlidesData = (start: number, end: number): Slide[] => {
  const slides: Slide[] = [];
  for (let i = start; i <= end; i++) {
    slides.push({
      id: i,
      src: `/img-${i}.png`,
      alt: `Image ${i}`,
    });
  }
  return slides;
};

const slidesData1 = generateSlidesData(1, 5);
const slidesData2 = generateSlidesData(6, 10);

export default function StackedCarousels() {
  return (
    <div className="flex flex-col  gap-50 justify-center items-center  pt-5">
      {/* Top Carousel */}
      <div className="w-full h-15 max-w-lg">
        <Carousel>
          <CarouselContent>
            {slidesData1.map((slide: Slide) => (
              <CarouselItem key={slide.id}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={500}
                  height={300}
                  className="rounded-lg h-[35vh] shadow-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Bottom Carousel (uncommented) */}
      <div className="w-full block h-10 max-w-lg">
        <Carousel>
          <CarouselContent>
            {slidesData2.map((slide: Slide) => (
              <CarouselItem key={slide.id}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={500}
                  height={300}
                  className="rounded-lg h-[35vh] shadow-md"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}