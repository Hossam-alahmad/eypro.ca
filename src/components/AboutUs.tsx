import React from "react";
import HeadingSection from "./HeadingSection";
import Slider from "./Slider";
import { AboutSliderList } from "../constant";
import Image from "next/image";
import ScrollMotionEffect from "./Motions/ScrollMotionEffect";
import { Button } from "./ui/button";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="py-20 px-2">
      <div className="container mx-auto space-y-4">
        <HeadingSection>About Us</HeadingSection>
        <div className="flex flex-col md:flex-row justify-around gap-4 items-center">
          <div className="w-full md:w-3/6 max-h-[350px]">
            <Slider
              items={AboutSliderList.map((s, index) => (
                <Image
                  key={index}
                  src={s}
                  width={400}
                  height={400}
                  alt={`cleaning-service-${index + 1}`}
                  className="w-full h-full rounded-md "
                />
              ))}
              className="h-[350px]"
            />
          </div>

          <ScrollMotionEffect
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:w-2/5 ml-auto"
          >
            <div className="space-y-2 ">
              <h2 className="heading-2 ">
                We are different in Cleaning Industry
              </h2>
              <p>
                At EY Solution, we understand the importance of maintaining a
                clean and inviting environment that resonates with the spirit of
                this remarkable city. As your trusted cleaning partner, we are
                dedicated to ensuring that every corner of your space shines,
                reflecting the beauty of London, Ontario.​Our Commitment to
                CleanlinessAt EY Solution, cleanliness isn't just a service;
                it's a commitment we uphold with passion.
              </p>
              <Link href={"/about-us"} className="block">
                <Button size={"lg"} className="flex">
                  Read More
                </Button>
              </Link>
            </div>
          </ScrollMotionEffect>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
