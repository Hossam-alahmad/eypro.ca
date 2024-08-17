import Image from "next/image";
import React from "react";
import {
  AboutSliderList,
  ClientsSliderList,
  FeaturesList,
  HowWorkList,
  OurServicesList,
  Testimonial,
} from "../constant";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import SuccessRequests from "../components/SuccessRequests";
import ServiceCard from "../components/ServiceCard";
import Slider from "../components/Slider";
import ScrollMotionEffect from "../components/Motions/ScrollMotionEffect";
import TestimonialCard from "../components/TestimonialCard";

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <div>
        <div className="relative">
          <div className="container mx-auto">
            <div className="relative z-10 h-full flex flex-col-reverse px-2 py-20 lg:flex-row gap-2 justify-between items-center">
              <ScrollMotionEffect
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {" "}
                <div className="w-full grow space-y-2">
                  <p>Trusted.... Simple... Affordable....</p>
                  <h1 className="heading-1 lg:heading-2 xl:heading-1">
                    <span className="text-primary">30+ Years</span> of
                    Experience in Cleaning Services
                  </h1>
                  <p>
                    At EY Solution, we understand the importance of maintaining
                    a clean and inviting environment that resonates with the
                    spirit of this remarkable city.{" "}
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {FeaturesList.map((feature) => (
                      <li key={feature.id} className="flex items-center gap-2">
                        <CircleCheckBig size={20} className="text-primary" />
                        {feature.feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row sm:w-3/4 gap-2">
                    <Link href="/get-qoute" className="shrink  grow">
                      <Button size={"lg"} className="w-full">
                        GET QOUTE
                      </Button>
                    </Link>
                    <Link href="/services" className="shrink  grow">
                      <Button
                        className="text-primary w-full border-primary hover:text-white hover:bg-primary"
                        size={"lg"}
                        variant={"outline"}
                      >
                        VIEW SERVICES
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollMotionEffect>
              <ScrollMotionEffect
                className="w-full grow-0"
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Image
                  src="/assets/images/cleaning-service.png"
                  width={400}
                  height={400}
                  alt="cleaning-services"
                  className=" w-full"
                />
              </ScrollMotionEffect>
            </div>
          </div>
          <Image
            src="/assets/images/city-background.jpg"
            width={1000}
            height={1000}
            alt="city"
            className="z-0 w-full h-full top-0 absolute opacity-50"
          />
        </div>
      </div>
      {/* success numbers */}
      <div className="relative bg-cleaning-service-1 bg-fixed bg-cover">
        <div className="relative py-10 z-10 bg-primary/70 px-2">
          <div className="container mx-auto">
            <SuccessRequests />
          </div>
        </div>
      </div>
      {/* about us */}
      <div className="py-20 px-2">
        <div className="container mx-auto">
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
                <section>
                  <span className="text-primary font-semibold pr-2 relative before:absolute before:top-2/4 before:left-full before:w-[100px] before:h-[1px] before:bg-primary">
                    ABOUT US
                  </span>
                  <h2 className="heading-2">
                    We are different in Cleaning Industry
                  </h2>
                </section>
                <p>
                  At EY Solution, we understand the importance of maintaining a
                  clean and inviting environment that resonates with the spirit
                  of this remarkable city. As your trusted cleaning partner, we
                  are dedicated to ensuring that every corner of your space
                  shines, reflecting the beauty of London, Ontario.​Our
                  Commitment to CleanlinessAt EY Solution, cleanliness isn't
                  just a service; it's a commitment we uphold with passion.
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
      {/* our services */}
      <div className="bg-third/50 py-20">
        <div className="container mx-auto">
          <div className="space-y-4 px-2 ">
            <div>
              {" "}
              <span className="text-primary font-semibold pr-2 relative before:absolute before:top-2/4 before:left-full before:w-[100px] before:h-[1px] before:bg-primary">
                OUR SERVICES
              </span>
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
      </div>{" "}
      {/* how work */}
      <div className="relative bg-cleaning-service-1 bg-fixed bg-cover">
        <div className="bg-primary/70  py-20 relative z-10 ">
          <div className=" container mx-auto space-y-4">
            <h2 className="text-center heading-2 text-white">
              How 'EY Solution' Work
            </h2>
            <ScrollMotionEffect
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <div className="flex justify-between ">
                {HowWorkList.map((item) => (
                  <div className="space-y-4 text-center w-full relative how-it-work-box">
                    {" "}
                    <div
                      data-value={item.id}
                      className="how-it-work-item relative  bg-white  mx-auto flex items-center justify-center w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] rounded-full"
                    >
                      <Image
                        src={item.icon}
                        width={50}
                        height={50}
                        alt={item.title}
                        className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                      />
                    </div>
                    <h3 className="heading-4 text-white">{item.title}</h3>
                  </div>
                ))}
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
      </div>
      {/* testimonial */}
      {/* clients */}
      <div className="py-20 px-2">
        <div className="container mx-auto space-y-4">
          <h2 className="heading-2 text-center">Our Client</h2>
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
                className="mx-auto object-scale-down cursor-pointer grayscale hover:grayscale-0"
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
    </div>
  );
};

export default Home;
