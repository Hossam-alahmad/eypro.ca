import React from "react";
import HeadingSection from "./HeadingSection";
import Link from "next/link";
import { Button } from "./ui/button";

const HowWeWorkLandscapingCard = ({
    className,
    steps = [],
}: {
    className: string;
    steps: { step: string; desc: string }[];
}) => {
    return (
        <div className={`space-y-4  p-4 rounded-xl ${className}`}>
            {steps.map((step, index) => (
                <div key={index}>
                    <h2 className="heading-2">{step.step}</h2>
                    <p>{step.desc}</p>
                </div>
            ))}
        </div>
    );
};
const HowWeWorkLandscaping = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="space-y-4 text-center lg:text-start">
                        <p className="font-semibold text-primary">
                            Our Process
                        </p>
                        <HeadingSection className="lg:text-start  text-center">
                            Who We Work
                        </HeadingSection>
                        <p>
                            We blend innovative techniques with sustainable
                            practices to deliver top-quality, eco-friendly
                            solutions.
                        </p>
                        <Link href={"/contact-us"} className="inline-block">
                            <Button>Contact Us</Button>
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-4">
                        <HowWeWorkLandscapingCard
                            steps={[
                                { step: "01", desc: "Initial Consultation" },
                                { step: "02", desc: "Design & Planning" },
                            ]}
                            className="bg-primary text-white"
                        />
                        <HowWeWorkLandscapingCard
                            steps={[
                                { step: "03", desc: "Proposal & Agreement" },
                                {
                                    step: "04",
                                    desc: "Site Preparation & Installation",
                                },
                            ]}
                            className="bg-primary/40 "
                        />
                        <HowWeWorkLandscapingCard
                            steps={[
                                { step: "05", desc: "Quality Check & Review" },
                                {
                                    step: "06",
                                    desc: "Maintenance & Customer Support",
                                },
                            ]}
                            className="bg-secondary/60 text-white "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowWeWorkLandscaping;
