import OurClient from "@/src/components/OurClient";
import { Metadata } from "next";
import React from "react";
const title = "Clients";
const description =
  "Discover how EY Solution partners with industry-leading clients to deliver innovative solutions and exceptional service. Our diverse portfolio showcases our commitment to excellence across multiple sectors, including technology, healthcare, finance, retail, and more. ";
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
  return <OurClient />;
};

export default page;
