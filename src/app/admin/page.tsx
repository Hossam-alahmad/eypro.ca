import ExpandedLogo from "@/src/components/ExpandedLogo";
import StateCard from "@/src/components/StateCard";
import { columns } from "@/src/components/Tables/Columns/Appointments/columns";
import { DataTable } from "@/src/components/Tables/DataTable";
import { getRecentAppointments } from "@/src/lib/actions/appointment.action";
import { Ban, CalendarCheck, History } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

const page = async () => {
  const appointments = await getRecentAppointments();

  return (
    <div className="flex-col space-y-8 h-screen max-h-screen">
      <header className="p-4 bg-third">
        <div className="remove-scrollbar container mx-auto">
          <div className="flex items-center justify-between">
            <ExpandedLogo />
            <p className="font-semibold">Admin Dashboard</p>
          </div>
        </div>
      </header>
      <main>
        <div className="container  mx-auto remove-scrollbar space-y-8">
          <section>
            <h2 className="sub-header">Welcome, Admin</h2>
            <p>Start the day with managing new appointments</p>
          </section>
          <section className="grid lg:grid-cols-3 gap-4">
            <StateCard
              icon={<CalendarCheck className="text-secondary" size={30} />}
              count={appointments.scheduled}
              label="Total numbers of scheduled appointment"
              className="bg-gradient-to-tr from-secondary/10 via-third/30 to-third/30"
            />{" "}
            <StateCard
              icon={<History size={30} className="text-primary" />}
              count={appointments.pending}
              className="bg-gradient-to-tr from-primary/10 via-third/30 to-third/30"
              label="Pending appointments"
            />{" "}
            <StateCard
              icon={<Ban size={30} className="text-destructive" />}
              className="bg-gradient-to-tr from-destructive/10 via-third/30 to-third/30"
              count={appointments.cancelled}
              label="Cancelled appointment"
            />{" "}
          </section>
          <section className="bg-third/30">
            <DataTable columns={columns} data={appointments.documents} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default page;
