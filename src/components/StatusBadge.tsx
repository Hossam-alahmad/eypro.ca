import React from "react";
import { TAppointmentStatus } from "../lib/types";
import clsx from "clsx";
import { Ban, CalendarCheck, History } from "lucide-react";

const StatusBadge = ({ status }: { status: TAppointmentStatus }) => {
  let statusIcon;
  switch (status) {
    case "schedule":
      statusIcon = <CalendarCheck size={15} />;
      break;
    case "pending":
      statusIcon = <History size={15} />;
      break;
    case "cancelled":
      statusIcon = <Ban size={15} />;
      break;
  }
  return (
    <div
      className={clsx(
        "py-2 rounded-[50px] flex items-center justify-center font-semibold text-xs text-white  gap-2 w-fit px-2 md:px-3 capitalize",
        {
          "bg-secondary": status === "schedule",
          "bg-primary": status === "pending",
          "bg-destructive": status === "cancelled",
        }
      )}
    >
      {" "}
      {statusIcon}
      {status}
    </div>
  );
};

export default StatusBadge;
