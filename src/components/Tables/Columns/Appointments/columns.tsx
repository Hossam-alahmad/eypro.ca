"use client";

import AppointmentModal from "@/src/components/AppointmentModal";
import StatusBadge from "@/src/components/StatusBadge";
import { doctors } from "@/src/constant";
import { Appointment } from "@/src/lib/types/appwrite-mode";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import Image from "next/image";

export const columns: ColumnDef<Appointment>[] = [
  {
    header: "ID",
    cell: ({ row }) => <p>{row.index + 1}</p>,
  },
  {
    accessorKey: "patient",
    header: "Patient",
    cell: ({ row }) => (
      <p>
        {/* <Image
          src={row.original.patient.image}
          alt={row.original.patient.name}
        /> */}
        {row.original.patient.name}
      </p>
    ),
  },
  {
    accessorKey: "schedule",
    header: "Date",
    cell: ({ row }) =>
      moment(row.original.schedule).format("YYYY-MM-DD hh:mm:ss A"),
  },
  {
    accessorKey: "primaryPhysician",
    header: "Doctor",
    cell: ({ row }) => (
      <p className="flex items-center justify-center gap-2">
        {
          <Image
            width={30}
            height={30}
            className="rounded-full h-[30px] w-[30px]"
            src={
              doctors.find(
                (doctor) => doctor.name === row.original.primaryPhysician
              )?.image || ""
            }
            alt={row.original.primaryPhysician}
          />
        }
        {row.original.primaryPhysician}
      </p>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="flex justify-center">
        <StatusBadge status={row.original.status} />
      </div>
    ),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-1 justify-center">
        <AppointmentModal
          type="schedule"
          patientId={row.original.patient.$id}
          appointment={row.original}
          userId={row.original.userId}
          title="Schedule Appointment"
          description="Please confirm the following details to schedule"
        />
        <AppointmentModal
          type="cancel"
          patientId={row.original.patient.$id}
          appointment={row.original}
          userId={row.original.userId}
          title="Cancel Appointment"
          description="Please confirm the following details to cancel"
        />
      </div>
    ),
  },
];
