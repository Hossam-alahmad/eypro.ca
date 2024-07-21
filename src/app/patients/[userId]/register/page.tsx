import ExpandedLogo from "@/src/components/ExpandedLogo";
import RegisterPatientForm from "@/src/components/forms/RegisterPatientForm";
import { getUser } from "@/src/lib/actions/patient.action";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
export const metadata: Metadata = {
  title: "Register",
};
const page = async ({ params }: { params: { userId: string } }) => {
  const user = await getUser(params.userId);

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen lg:max-h-screen ">
      <section className="remove-scrollbar container">
        <div className="sub-container w-2/4 flex-1 space-y-6">
          <ExpandedLogo />
          <RegisterPatientForm user={user} />
          <p className="text-text-secondary my-10 text-sm text-center">
            &copy; 2024 HealthCare
          </p>
        </div>
      </section>
      <Image
        width={1000}
        height={1000}
        src={"/assets/images/bg-home.jpg"}
        alt={"patient"}
        className="-order-1 w-full lg:max-w-[50%] lg:order-1  object-scale-down"
      />
    </div>
  );
};

export default page;
