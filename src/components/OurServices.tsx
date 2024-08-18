import React from "react";
import HeadingSection from "./HeadingSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Slider from "./Slider";
import ServiceCard from "./ServiceCard";
import { OurServicesList } from "../constant";

const OurServices = () => {
  return (
    <div className="bg-third/50 py-20">
      <div className="container mx-auto">
        <div className="space-y-4 px-2 ">
          <HeadingSection>Our Services</HeadingSection>
          <div>
            {" "}
            <div className="flex items-center justify-between">
              <h2 className="heading-2">Best services for you</h2>
              <Link
                href={"/services"}
                className="flex items-center gap-2 text-primary text-sm hover:underline"
              >
                View All Services <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <Slider
            items={OurServicesList.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
            className="basis-full sm:basis-2/4 md:basis-2/6 xl:basis-1/4"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
