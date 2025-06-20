import ContactUsForm from "@/src/components/Forms/ContactUsForm";
import HeadingSection from "@/src/components/HeadingSection";
import { Metadata } from "next";
import React from "react";
const title = "Contact Us";
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
        <div>
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <HeadingSection>Get in Touch</HeadingSection>
                    <p className="mt-4 text-lg text-gray-600">
                        We’d love to hear from you! Whether you have a question
                        about services, pricing, or anything else, our team is
                        ready to help.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div>
                            <h2 className="heading-3 font-semibold text-gray-800">
                                Our Office
                            </h2>
                            <p className="text-gray-600">
                                3525 EMILYCARR lane
                                <br />
                                London,ON, N6L 0H7
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-3 font-semibold text-gray-800">
                                Contact
                            </h2>
                            <p className="text-gray-600">
                                Phone: (226)400-4008
                                <br />
                                Email: info@eypro.ca
                            </p>
                        </div>

                        <div>
                            <h2 className="heading-3 font-semibold text-gray-800">
                                Hours
                            </h2>
                            <p className="text-gray-600">
                                Mon – Fri: 8 AM – 6 PM
                                <br />
                                Sat: 9 AM – 3 PM
                                <br />
                                Sun: Closed
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="shadow-lg">
                        <ContactUsForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
