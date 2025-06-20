import Image from "next/image";
import React from "react";

import { Button } from "../components/ui/button";
import Link from "next/link";
import SuccessRequests from "../components/SuccessRequests";
import WhyChooseUs from "../components/WhyChooseUs";
import HeadingSection from "../components/HeadingSection";
import OurServices from "../components/OurServices";
import { OurLandscapingServicesList } from "./(services)/landscaping/services/[title]/page";
import { OurCleaningServicesList } from "./(services)/cleaning/services/[title]/page";

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="rounded-2xl mb-20 relative xl:w-3/4 h-[400px] lg:h-auto  mx-auto overflow-hidden">
                    <Image
                        src={"/assets/images/house-1.jpg"}
                        width={1000}
                        height={800}
                        alt={`house-1`}
                        className="mx-auto size-full  cursor-pointer"
                    />
                    <div className="absolute top-0 left-0 size-full bg-black/30"></div>
                    <div className="absolute  space-y-2 w-full text-center  z-10 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white p-4">
                        <h1 className="heading-2">EY Solution</h1>
                        <p className="hidden lg:block">
                            Professional Cleaning & Landscaping Services in
                            London, Ontario – EY Solution We deliver reliable
                            and high-quality residential and commercial
                            cleaning, lawn care, and outdoor maintenance.
                            Experience the difference with a team that cares
                            about details.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Link href={"/get-qoute"}>
                                <Button className="hover:bg-primary hover:text-white">
                                    Get a Free Quote
                                </Button>
                            </Link>
                            <Link
                                href={
                                    "https://api.whatsapp.com/send?phone=5197017116"
                                }
                                target="_blank"
                            >
                                <Button
                                    variant={"third"}
                                    className="hover:bg-primary hover:text-white"
                                >
                                    Book Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative bg-cleaning-service-1 bg-fixed bg-cover">
                <div className="relative py-10 z-10 bg-primary/70 px-2">
                    <div className="container mx-auto">
                        <SuccessRequests />
                    </div>
                </div>
            </div>
            <div className="py-20">
                <div className="space-y-4">
                    <div className="container mx-auto">
                        <HeadingSection>Who we are</HeadingSection>
                        <p className="text-center">
                            At EY Solution, we believe every space deserves to
                            be clean, organized, and beautiful. With over 10
                            years of experience, we proudly serve London,
                            Ontario with top-tier interior and exterior
                            services. Our work is defined by integrity, quality,
                            and consistent customer satisfaction.
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-20 bg-third/30">
                <div className="space-y-4">
                    <div className="container mx-auto">
                        <OurServices
                            data={OurLandscapingServicesList}
                            servicesPath="/landscaping/services"
                            title="Landscaping Services"
                        />
                        <OurServices
                            title="Cleaning Services"
                            data={OurCleaningServicesList}
                            servicesPath="/cleaning/services"
                        />
                    </div>
                </div>
            </div>
            <div className="py-20">
                <WhyChooseUs />
            </div>
        </div>
    );
};

export default Home;
