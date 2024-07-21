import { doctors } from "@/src/constant";
import { getAppointment } from "@/src/lib/actions/appointment.action";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import moment from "moment";
import React from "react";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";
type TSuccessPage = {
  params: {
    userId: string;
  };
  searchParams: { appointmentId: string };
};

export const metadata: Metadata = {
  title: "Success",
};
const page = async ({ params, searchParams }: TSuccessPage) => {
  const appointment = await getAppointment(searchParams.appointmentId);
  const currentDoctor = doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician
  );
  if (!appointment) {
    notFound();
  }
  return (
    <div className="flex items-center justify-center h-screen max-h-screen">
      <div>
        <section className="flex flex-col items-center justify-center space-y-6 mb-16">
          <Image
            src={"/assets/gif/success.gif"}
            alt={"success-img"}
            width={300}
            height={200}
          />
          <h2 className="sub-header text-center w-3/4 lg:w-full">
            Great, your appointment request has been successfully submitted!
          </h2>
          <p>We will inform you shortly to confirm</p>
        </section>{" "}
        <section className="flex flex-col items-center justify-center space-y-6">
          <div className="flex text-sm flex-col sm:flex-row items-center gap-6">
            <p>Appointment Details:</p>
            <div className="flex text-sm items-center gap-2">
              <Image
                src={currentDoctor?.image ?? ""}
                alt={"doctor"}
                width={25}
                height={25}
              />
              <p>Dr.{currentDoctor?.name}</p>
            </div>
            <div className="flex text-sm items-center gap-2">
              <Calendar size={20} />
              <p>
                {moment(appointment.schedule).format("YYYY-MM-DD hh:mm:ss A")}
              </p>
            </div>
          </div>
          <Button>
            <Link href={`/patients/${params.userId}/new-appointment`}>
              New Appointment
            </Link>
          </Button>{" "}
          <p className="text-text-secondary my-10 text-sm text-center">
            &copy; 2024 HealthCare
          </p>
        </section>
      </div>
    </div>
  );
};

export default page;
