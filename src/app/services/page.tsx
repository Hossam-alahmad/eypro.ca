import OurServices from "@/src/components/OurServices";
import { Metadata } from "next";
import React from "react";
const title = "Our Services";
const description =
  "At EY Solution, we understand the importance of maintaining a clean and inviting environment that resonates with the spirit of this remarkable city.";
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    images: ["twitter-image.png?3ecc57bb282d1dc9"],
    description,
  },
  twitter: {
    title,
    images: ["twitter-image.png?3ecc57bb282d1dc9"],
    description,
  },
};
const page = () => {
  return <OurServices className="bg-white" />;
};

export default page;
