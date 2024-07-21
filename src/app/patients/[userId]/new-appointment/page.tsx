import ExpandedLogo from "@/src/components/ExpandedLogo";
import AppointmentForm from "@/src/components/forms/AppointmentForm";
import { getPatient } from "@/src/lib/actions/patient.action";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
export const metadata: Metadata = {
  title: "New Appointment",
};
const page = async ({ params }: { params: { userId: string } }) => {
  const patient = await getPatient(params.userId);

  if (!patient) {
    notFound();
  }
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen lg:max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container w-2/4 h-full">
          <ExpandedLogo />
          <AppointmentForm
            type={"create"}
            userId={params.userId}
            patientId={patient.$id}
          />
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
