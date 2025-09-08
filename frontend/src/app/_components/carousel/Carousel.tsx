'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Slide {
  title: string;
  desc: string;
  img: string;
}

interface CarouselProps {
  slides: Slide[];
  reverse?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ slides, reverse = false }) => {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{
          delay: 4000, // slower autoplay (4s)
          disableOnInteraction: false,
          reverseDirection: reverse,
        }}
        speed={1500} // slower transition between slides (1.5s)
        slidesPerView={1}
        className="w-full h-full"
        effect="slide"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                style={{ objectFit: 'cover', transition: 'transform 1.5s ease-in-out' }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-30 text-white p-4">
                <h2 className="text-lg md:text-xl font-bold">{slide.title}</h2>
                <p className="text-xs md:text-sm mt-1">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;