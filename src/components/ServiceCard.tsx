import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
type TServiceCard = {
  title: string;
  desc: string;
  icon: string;
};
const ServiceCard = ({ title, desc, icon }: TServiceCard) => {
  return (
    <div className="bg-background h-full p-4 cursor-pointer group hover:bg-primary transition-all space-y-4 shadow-md rounded-md text-center flex flex-col items-center">
      <div className="curved-background after:bg-third/60 after:group-hover:bg-white   before:group-hover:bg-white before:bg-third/60 group-hover:bg-white bg-third/60 w-[100px] h-[100px]">
        <Image src={icon} width={50} height={50} alt={title} />
      </div>
      <h3 className="heading-4 text-primary group-hover:text-white">{title}</h3>
      <p className="w-3/4 group-hover:text-white">{desc}</p>
      <Link href={`/services/${title.replaceAll(" ", "-").toLowerCase()}`}>
        <Button
          variant={"outline"}
          size={"lg"}
          className="border-primary text-primary group-hover:bg-secondary group-hover:text-white"
        >
          Read More
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
