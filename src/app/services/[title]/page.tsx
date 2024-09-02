import HeadingSection from "@/src/components/HeadingSection";
import { OurServicesList } from "@/src/constant";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export const generateMetadata = ({
  params,
}: {
  params: { title: string };
}): Metadata => {
  const service = OurServicesList.find(
    (service) => service.title.toLowerCase() === params.title.replace("-", " ")
  );
  return {
    title: service?.title,
    description: service?.content || "",
    openGraph: {
      title: service?.title,
      description: service?.content || "",
      images: ["twitter-image.png?3ecc57bb282d1dc9"],
    },
    twitter: {
      title: service?.title,
      description: service?.content || "",
      images: ["twitter-image.png?3ecc57bb282d1dc9"],
    },
  };
};
const page = ({ params }: { params: { title: string } }) => {
  const service = OurServicesList.find(
    (service) => service.title.toLowerCase() === params.title.replace("-", " ")
  );
  if (!service) {
    notFound();
  }

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto w-full md:w-3/5">
        <div className="space-y-4">
          <HeadingSection>{service.title}</HeadingSection>
          <Image
            src={service.backImage}
            alt={service.title}
            width={1000}
            height={1000}
            className="mx-auto aspect-square md:aspect-video w-full max-h-[300px] md:max-h-max rounded-md"
          />
          <p>{service.content}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
