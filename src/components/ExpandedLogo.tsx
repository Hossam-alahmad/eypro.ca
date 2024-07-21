import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExpandedLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        width={1000}
        height={1000}
        src={"/assets/logos/logo-icon.svg"}
        alt={"logo"}
        className="w-fit h-10"
      />
      <p className="text-sm md:text-lg font-bold">HealthCare</p>
    </Link>
  );
};

export default ExpandedLogo;
