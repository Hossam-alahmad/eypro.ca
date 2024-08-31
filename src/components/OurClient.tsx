import React from "react";
import HeadingSection from "./HeadingSection";
import Slider from "./Slider";
import { ClientsSliderList, Testimonial } from "../constant";
import Image from "next/image";
import TestimonialCard from "./TestimonialCard";

const OurClient = () => {
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto space-y-4">
        <HeadingSection>Our Client</HeadingSection>
        <Slider
          autoPlay={false}
          className="basis-1/2 md:basis-1/3 lg:basis-1/4 h-[100px] items-center justify-center flex"
          items={ClientsSliderList.map((client, index) => (
            <Image
              key={index}
              src={client}
              width={100}
              height={100}
              alt={`client-${index + 1}`}
              className="mx-auto  w-auto object-scale-down cursor-pointer grayscale hover:grayscale-0"
            />
          ))}
        />
        <Slider
          className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          items={Testimonial.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        />
      </div>
    </div>
  );
};

export default OurClient;
