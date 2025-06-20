import GetQuoteForm from "@/src/components/Forms/GetQuoteForm";
import { Metadata } from "next";
import React from "react";
const title = "Get Qoute";
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
    return (
        <div className="-mt-10">
            <div className="relative bg-cleaning-service-bg-1 h-[350px] md:h-[700px] bg-cover md:bg-fixed">
                <div className="overlay absolute top-0 left-0 bg-primary/50 w-full h-full"></div>
                <div className="container mx-auto h-full px-2">
                    <div className="relative z-10 flex flex-col h-full  text-center items-center gap-4 justify-center text-white">
                        <h1 className="heading-1">
                            Hello. We'd love to get quote for you
                        </h1>
                        <p className="text-lg font-bold">
                            Interested in our services? We’re ready to work with
                            you
                        </p>
                    </div>
                </div>
            </div>
            <div className="py-10 px-2">
                <div className="container mx-auto w-4/4 md:w-2/4">
                    <GetQuoteForm />
                </div>
            </div>
        </div>
    );
};

export default page;
