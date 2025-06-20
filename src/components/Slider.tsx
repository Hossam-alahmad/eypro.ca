"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
type TSlider = {
  className?: string;
  items?: React.ReactNode[];
  autoPlay?: boolean;
};
const Slider = ({ autoPlay = true, className, items = [] }: TSlider) => {
  const autoPlayPlugin = autoPlay
    ? [
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
        }),
      ]
    : [];
  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[...autoPlayPlugin]}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index} className={className}>
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;
