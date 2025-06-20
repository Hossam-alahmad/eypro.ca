import OurServices from "@/src/components/OurServices";
import React from "react";
import { OurCleaningServicesList } from "./[title]/page";
import { Metadata } from "next";

const title = "Cleaning Services";
const description =
    "At EY Solution, we understand the importance of maintaining a clean and inviting environment that resonates with the spirit of this remarkable city. As your trusted cleaning partner, we are dedicated to ensuring that every corner of your space shines, reflecting the beauty of London, Ontario.​";
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
                data={OurCleaningServicesList}
                servicesPath="/cleaning/services"
            />
        </div>
    );
};

export default page;
