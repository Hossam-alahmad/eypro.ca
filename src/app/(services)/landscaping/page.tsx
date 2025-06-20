import Image from "next/image";
import React from "react";
import { FeaturesList } from "../../../constant";
import { CircleCheckBig } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import ScrollMotionEffect from "../../../components/Motions/ScrollMotionEffect";
import OurServices from "../../../components/OurServices";
import AboutUsLandscaping from "@/src/components/AboutUsLandscaping";
import { OurLandscapingServicesList } from "./services/[title]/page";
import { Metadata } from "next";
import HowWeWorkLandscaping from "@/src/components/HowWeWorkLandscaping";

const title = "Landscaping Services";
const description =
    "At EY Solution, we take pride in offering top-notch landscaping services that transform outdoor spaces into stunning landscapes. Whether it's residential or commercial, our team is dedicated to enhancing the beauty and functionality of your property through expert landscaping solutions.";

export const metadata: Metadata = {
    title,
    description,
    openGraph: {
        title,
        description,
    },
    twitter: {
        title,
        description,
    },
};
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
                                    <span className="text-primary">
                                        10+ Years
                                    </span>{" "}
                                    of Experience in Landscaping Services
                                </h1>
                                <p>
                                    At EY Solution, we understand the importance
                                    of creating beautiful and sustainable
                                    outdoor spaces that reflect the unique
                                    character and natural beauty of our
                                    community.
                                </p>
                                <ul className="grid grid-cols-2 gap-4">
                                    {FeaturesList.map(feature => (
                                        <li
                                            key={feature.id}
                                            className="flex items-center gap-2"
                                        >
                                            <CircleCheckBig
                                                size={20}
                                                className="text-primary shrink-0"
                                            />
                                            {feature.feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex  sm:w-3/4 gap-2">
                                    <Link
                                        href="/get-qoute"
                                        className="shrink  grow"
                                    >
                                        <Button size={"lg"} className="w-full">
                                            GET QOUTE
                                        </Button>
                                    </Link>
                                    <Link
                                        href="/cleaning/services"
                                        className="shrink  grow"
                                    >
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
                                src="/assets/images/landscaping-1.jpg"
                                width={400}
                                height={400}
                                alt="cleaning-services"
                                className="w-full rounded-md 2xl:w-3/4 ml-auto h-auto max-h-[400px]  object-fill"
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
            {/* about us */}
            <div className="py-20">
                <AboutUsLandscaping about="At EY Solution, landscaping isn't just a service; it's a commitment we pursue with creativity and passion. With years of experience in the landscaping industry, we've refined our craft to deliver outstanding solutions tailored to your unique outdoor needs. Whether it’s residential yards, commercial grounds, or large-scale green spaces, we have the expertise and dedication to transform and maintain your landscape with excellence. " />
            </div>{" "}
            {/* our services */}
            <div className="py-20 bg-third/50">
                <OurServices
                    data={OurLandscapingServicesList}
                    servicesPath="/landscaping/services"
                />
            </div>
            {/* how work */}
            <div className="py-20">
                <HowWeWorkLandscaping />
            </div>
            {/* <div className="relative bg-cleaning-service-1 bg-fixed bg-cover">
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
                                {HowWorkList.map(item => (
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
                                        <h3 className="heading-4 text-white">
                                            {item.title}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </ScrollMotionEffect>
                    </div>
                </div>
            </div> */}
            {/* testimonial */}
            {/* clients */}
        </div>
    );
};

export default Home;
