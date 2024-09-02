import ContactUsForm from "@/src/components/Forms/ContactUsForm";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
const title = "Contact Us";
const description =
  "Get in touch with EY Solution today. Whether you have questions about our services, need support, or want to explore partnership opportunities";
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
  return (
    <div>
      <div className="relative bg-cleaning-service-bg-1 h-[400px] md:h-[600px] bg-cover  bg-no-repeat">
        <div className="overlay absolute top-0 left-0 bg-primary/50 w-full h-full"></div>
        <div className="container mx-auto h-full px-2">
          <div className="relative z-10 flex flex-col h-full  text-center items-center gap-4 justify-center text-white">
            <h1 className="heading-1">Hello. We'd love to hear from you.</h1>
            <p className="text-lg font-bold">
              Interested in our services? We’re ready to answer any and all
              questions.
            </p>
          </div>
        </div>
      </div>
      <div className="py-10 px-2">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-4">
            <ContactUsForm />
            <Image
              src={"/assets/images/cleaning-service-7.jpeg"}
              width={500}
              height={500}
              alt="contact-image"
              className="hidden lg:block max-h-[450px] rounded-md w-full my-auto"
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default page;
