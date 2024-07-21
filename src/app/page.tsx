import React from "react";
import Image from "next/image";
import PatientForm from "../components/forms/PatientForm";
import { Metadata } from "next";
import Link from "next/link";
import PassKeyModal from "../components/PassKeyModal";
import ExpandedLogo from "../components/ExpandedLogo";

export const metadata: Metadata = {
  title: "Home | HealthCare",
};

const Home = ({ searchParams }: { searchParams: { admin: boolean } }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen max-h-screen ">
      {searchParams.admin && <PassKeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container w-2/4">
          <ExpandedLogo />
          <PatientForm />
          <div className="flex items-center gap-4 justify-between">
            <p className="text-text-secondary my-10 text-sm text-center">
              &copy; 2024 HealthCare
            </p>
            <Link href={"/?admin=true"}>Admin</Link>
          </div>
        </div>
      </section>
      <Image
        width={1000}
        height={1000}
        src={"/assets/images/bg-home.jpg"}
        alt={"patient"}
        className="-order-1 w-full md:max-w-[50%] md:order-1  object-scale-down"
      />
    </div>
  );
};

export default Home;
