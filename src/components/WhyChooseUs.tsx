import React from "react";
import HeadingSection from "./HeadingSection";
import Image from "next/image";

const chooseUsListData = [
    {
        id: 1,
        img: "/assets/images/estimation.png",
        title: "Free estimation",
        desc: `Our company’s foundation is transparency. We make sure you are
                aware of the size and expense of your job by providing free,
                comprehensive estimates.`,
    },
    {
        id: 3,
        img: "/assets/images/guaranteed.png",
        title: "Satisfaction guaranteed",
        desc: `Your happiness is our top concern. We go above and above to make sure our clients are thrilled with the outcome of our work, not simply satisfied.`,
    },
    {
        id: 3,
        img: "/assets/images/quality.png",
        title: "High Quality",
        desc: `We understand the value of completing projects quickly since time is of the essence. Our group is dedicated to providing prompt and effective service.`,
    },
    {
        id: 4,
        img: "/assets/images/meeting.png",
        title: "Meeting the time frame",
        desc: `We are aware of how important it is to complete tasks on time and on budget. Emesa Concrete is committed to keeping its word and giving its clients a smooth project experience.`,
    },
    {
        id: 5,
        img: "/assets/images/insurance.png",
        title: "Insurance",
        desc: `We value your mental tranquility. Because Eypro Solution is completely insured, your projects will have an extra degree of security and protection.`,
    },
];

const ChooseUsCard = ({
    img,
    title,
    desc,
}: {
    img: string;
    title: string;
    desc: string;
}) => {
    return (
        <div className="basis-1/3 grow shrink-0 border p-4 flex flex-col justify-center items-center gap-4">
            <Image src={img} width={150} height={150} alt={title} />
            <h3 className="heading-3 text-center">{title}</h3>
            <p className="text-center">{desc}</p>
        </div>
    );
};
const WhyChooseUs = () => {
    return (
        <div className="space-y-4">
            <div className="container mx-auto">
                <HeadingSection>Why Choose Us</HeadingSection>
                <p className="text-center">
                    Eypro Solution is a partner dedicated to your happiness and
                    the success of your projects, not merely a supplier of
                    concrete services. Here are some reasons why picking us is a
                    wise choice:
                </p>
            </div>
            <div className="flex flex-col md:flex-row flex-wrap justify-center">
                {chooseUsListData.map(item => (
                    <ChooseUsCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
