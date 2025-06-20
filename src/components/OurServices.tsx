import React from "react";
import HeadingSection from "./HeadingSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Slider from "./Slider";
import ServiceCard from "./ServiceCard";

const OurServices = ({
    servicesPath,
    data,
    title,
    ...rest
}: {
    servicesPath: string;
    data: any[];
    title?: string;
} & React.ComponentProps<"div">) => {
    return (
        <div className={rest.className}>
            <div className="container mx-auto">
                <div className="space-y-4 px-2 ">
                    <HeadingSection>{title || "Our Services"}</HeadingSection>
                    <div>
                        {" "}
                        <div className="flex items-center justify-between">
                            <h2 className="heading-2">Best services for you</h2>
                            <Link
                                href={servicesPath}
                                className="flex items-center gap-2 text-primary text-sm hover:underline"
                            >
                                View All Services <ArrowRight size={15} />
                            </Link>
                        </div>
                    </div>

                    <Slider
                        items={data.map((service: any) => (
                            <ServiceCard key={service.id} {...service} />
                        ))}
                        className="basis-full py-10 sm:basis-2/4 md:basis-2/6 xl:basis-1/4"
                    />
                </div>
            </div>
        </div>
    );
};

export default OurServices;
