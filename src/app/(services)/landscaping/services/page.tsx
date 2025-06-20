import OurServices from "@/src/components/OurServices";
import React from "react";
import { OurLandscapingServicesList } from "./[title]/page";
import { Metadata } from "next";

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
const page = () => {
    return (
        <div>
            <OurServices
                data={OurLandscapingServicesList}
                servicesPath="/landscaping/services"
            />
        </div>
    );
};

export default page;
