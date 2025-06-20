import React from "react";
import HeadingSection from "./HeadingSection";
import Slider from "./Slider";
import Image from "next/image";
import ScrollMotionEffect from "./Motions/ScrollMotionEffect";
import { Button } from "./ui/button";
import Link from "next/link";
type TAboutUsLandscaping = {
    about: string;
    readMore?: boolean;
};

const AboutSliderList = [
    "/assets/images/landscaping-1.jpg",
    "/assets/images/landscaping-2.jpg",
    "/assets/images/landscaping-3.jpg",
    "/assets/images/landscaping-4.jpg",
];
const AboutUsLandscaping = ({
    readMore = true,
    about,
}: TAboutUsLandscaping) => {
    return (
        <div>
            <div className="container mx-auto space-y-4">
                <HeadingSection>About Us</HeadingSection>
                <div className="flex flex-col xl:flex-row justify-around gap-4 items-center">
                    <div className="w-full xl:w-3/6 h-full  overflow-hidden rounded-md">
                        <Slider
                            items={AboutSliderList.map((s, index) => (
                                <Image
                                    key={index}
                                    src={s}
                                    width={1000}
                                    height={1000}
                                    alt={`cleaning-service-${index + 1}`}
                                    className="w-full h-full rounded-md"
                                />
                            ))}
                            className="max-h-[450px]"
                        />
                    </div>

                    <ScrollMotionEffect
                        variants={{
                            hidden: { opacity: 0, x: 100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="xl:w-2/5 ml-auto"
                    >
                        <div className="space-y-2 ">
                            <h2 className="heading-2 ">
                                We are different in Landscaping Industry
                            </h2>
                            <p>{about}</p>
                            {readMore && (
                                <Link href={"/about-us"} className="block">
                                    <Button
                                        size={"lg"}
                                        className="flex  mx-auto xl:ml-0"
                                    >
                                        Read More
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </ScrollMotionEffect>
                </div>
            </div>
        </div>
    );
};

export default AboutUsLandscaping;
