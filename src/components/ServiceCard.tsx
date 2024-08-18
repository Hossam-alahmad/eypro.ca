import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
type TServiceCard = {
  title: string;
  desc: string;
  icon: string;
  backImage: string;
  url: string;
};
const ServiceCard = ({ title, desc, icon, url, backImage }: TServiceCard) => {
  return (
    <div className="flip-card ">
      <div className="flip-card-inner min-h-[250px]">
        {/* front side */}
        <div className="flip-card-front bg-background  h-full p-4 cursor-pointer group hover:bg-primary transition-all space-y-4  text-center flex flex-col items-center border border-border-primary rounded-md shadow-md">
          <div className="curved-background after:bg-third/60 after:group-hover:bg-white   before:group-hover:bg-white before:bg-third/60 group-hover:bg-white bg-third/60 w-[100px] h-[100px]">
            <Image src={icon} width={50} height={50} alt={title} />
          </div>
          <h3 className="heading-4 text-primary group-hover:text-white">
            {title}
          </h3>
          <p className="w-3/4 group-hover:text-white">{desc}</p>
        </div>
        {/* back side */}
        <div className="flip-card-back rounded-md overflow-hidden">
          <Link href={url}>
            {" "}
            <Image
              src={backImage}
              alt={title}
              className="h-full"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
