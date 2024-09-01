import Image from "next/image";
import React from "react";
import { FeaturesList, HowWorkList } from "../constant";
import { CircleCheckBig } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import SuccessRequests from "../components/SuccessRequests";
import ScrollMotionEffect from "../components/Motions/ScrollMotionEffect";
import HeadingSection from "../components/HeadingSection";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import OurClient from "../components/OurClient";

const Home = () => {
  return (
    <div>
      {/* hero section */}
      <div className="relative bg-cleaning-service-bg-2 bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="overlay absolute top-0 left-0 w-full h-full bg-white/50"></div>
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
                  <span className="text-primary">30+ Years</span> of Experience
                  in Cleaning Services
                </h1>
                <p>
                  At EY Solution, we understand the importance of maintaining a
                  clean and inviting environment that resonates with the spirit
                  of this remarkable city.{" "}
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  {FeaturesList.map((feature) => (
                    <li key={feature.id} className="flex items-center gap-2">
                      <CircleCheckBig
                        size={20}
                        className="text-primary shrink-0"
                      />
                      {feature.feature}
                    </li>
                  ))}
                </ul>
                <div className="flex  sm:w-3/4 gap-2">
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
                src="/assets/images/cleaning-service-4.jpeg"
                width={400}
                height={400}
                alt="cleaning-services"
                className="w-full rounded-md 2xl:w-3/4 ml-auto h-[400px] object-fill"
              />
            </ScrollMotionEffect>
          </div>
        </div>
        {/* <Image
          src="/assets/images/city-background.jpg"
          width={1000}
          height={1000}
          alt="city"
          className="z-0 w-full h-full top-0 absolute opacity-50"
        /> */}
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
      <AboutUs about="At EY Solution, we understand the importance of maintaining a clean and inviting environment that resonates with the spirit of this remarkable city. As your trusted cleaning partner, we are dedicated to ensuring that every corner of your space shines, reflecting the beauty of London, Ontario.​Our Commitment to CleanlinessAt EY Solution, cleanliness isn't just a service; it's a commitment we uphold with passion. With years of experience in the cleaning industry, we have honed our expertise to deliver top-notch cleaning solutions tailored to your specific needs. Whether it's residential, commercial, or industrial cleaning, we have the skills and knowledge to make your space immaculate.​Why Choose Us?1. Local Expertise: As a cleaning company based in London, Ontario, " />
      {/* our services */}
      <OurServices />
      {/* how work */}
      <div className="relative bg-cleaning-service-1 bg-fixed bg-cover">
        <div className="bg-primary/70  py-20 relative z-10 ">
          <div className=" container mx-auto space-y-4">
            <HeadingSection className="text-white">
              How 'EY Solution' Work
            </HeadingSection>
            <ScrollMotionEffect
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <div className="flex justify-between ">
                {HowWorkList.map((item) => (
                  <div
                    key={item.id}
                    className="space-y-4 text-center w-full relative how-it-work-box"
                  >
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
      <OurClient />
    </div>
  );
};

export default Home;
