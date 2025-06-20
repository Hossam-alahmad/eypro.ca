import HeadingSection from "@/src/components/HeadingSection";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
const title = "About Us";
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
                {/* Header */}
                <div className="text-center mb-12">
                    <HeadingSection>About Us</HeadingSection>

                    <p className="mt-4 text-lg text-gray-600">
                        Your trusted partner in cleaning and landscaping
                        excellence.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Text */}
                    <div className="space-y-4 lg:max-h-[500px] overflow-y-auto remove-scrollbar">
                        <h2 className="heading-3 font-semibold text-gray-800">
                            Who We Are
                        </h2>
                        <p className="text-gray-600">
                            At EY Solution, we are your trusted partner in
                            delivering high-quality cleaning and outdoor
                            maintenance services with professionalism and care.
                            We enhance both interior and exterior spaces with a
                            perfect balance of beauty and functionality—ensuring
                            a premium experience that exceeds expectations.
                        </p>
                        <h2 className="heading-3  font-semibold text-gray-800 mt-8">
                            Our Vision
                        </h2>
                        <p className="text-gray-600">
                            To be the top choice in London, Ontario for
                            innovative, detail-oriented, and eco-conscious
                            cleaning and landscaping services, with a strong
                            commitment to customer satisfaction.
                        </p>
                        <h2 className="heading-3  font-semibold text-gray-800 mt-8">
                            Our Experience
                        </h2>
                        <p>
                            With over 10 years of industry experience, we
                            proudly offer:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>
                                Comprehensive residential and commercial
                                cleaning services
                            </li>
                            <li>
                                High-quality lawn care and landscaping solutions
                            </li>
                        </ul>
                        <h2 className="heading-3  font-semibold text-gray-800 mt-8">
                            Our Values
                        </h2>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>
                                Trained Professionals: Our team is fully vetted,
                                experienced, and trustworthy.
                            </li>
                            <li>
                                Eco-Friendly Products: We prioritize the use of
                                environmentally responsible materials.
                            </li>{" "}
                            <li>
                                Flexible Scheduling: Daily, weekly, or custom
                                plans that fit your lifestyle or business needs.
                            </li>{" "}
                            <li>
                                100% Satisfaction Guarantee: We stand by our
                                work—your satisfaction is our success.
                            </li>
                        </ul>{" "}
                        <h2 className="heading-3  font-semibold text-gray-800 mt-8">
                            Our Services
                        </h2>
                        <ol className="list-decimal pl-6 text-gray-600">
                            <li>
                                Cleaning Services
                                <ul className="list-disc pl-6 text-gray-600">
                                    <li>
                                        Eco-Friendly Products: We prioritize the
                                        use of environmentally responsible
                                        materials.
                                    </li>{" "}
                                    <li>
                                        Deep cleaning for windows, carpets, and
                                        floors
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Landscaping Services
                                <ul className="list-disc pl-6 text-gray-600">
                                    <li>
                                        Lawn mowing, plant maintenance, and
                                        seasonal care
                                    </li>{" "}
                                    <li>
                                        Custom exterior designs that add value
                                        and elegance to your property
                                    </li>
                                </ul>
                            </li>
                        </ol>
                        <h2 className="heading-3  font-semibold text-gray-800 mt-8">
                            Why Choose Us?
                        </h2>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>
                                A cleaner, more beautiful space—inside and out
                            </li>
                            <li>
                                Reliable, on-time service at competitive prices
                            </li>{" "}
                            <li>
                                Skilled staff who take pride in delivering
                                top-quality work
                            </li>{" "}
                            <li>
                                Consistent follow-up to ensure ongoing client
                                satisfaction
                            </li>
                        </ul>{" "}
                    </div>

                    {/* Right: Image */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <Image
                            src="/assets/images/house-1.jpg"
                            alt="Cleaning and Landscaping"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
