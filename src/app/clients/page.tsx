import OurClient from "@/src/components/OurClient";
import { Metadata } from "next";

import React from "react";
const title = "Clients";
const description =
    "Get in touch with EY Solution today. Whether you have questions about our services, need support, or want to explore partnership opportunities";
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
    return <OurClient />;
};

export default page;
