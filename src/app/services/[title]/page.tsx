import HeadingSection from "@/src/components/HeadingSection";
import { OurServicesList } from "@/src/constant";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const page = ({ params }: { params: { title: string } }) => {
  const service = OurServicesList.find(
    (service) => service.title.toLowerCase() === params.title.replace("-", " ")
  );
  if (!service) {
    notFound();
  }

  return (
    <div className="py-20 px-2">
      <div className="container mx-auto">
        <div className="space-y-4">
          <HeadingSection>{service.title}</HeadingSection>
          <Image
            src={service.backImage}
            alt={service.title}
            width={1000}
            height={1000}
            className="mx-auto w-full max-h-[500px]"
          />
          <p>{service.content}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
