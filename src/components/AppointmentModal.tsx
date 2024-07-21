import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Ban, CheckCircle } from "lucide-react";
import AppointmentForm from "./forms/AppointmentForm";
import { Appointment } from "../lib/types/appwrite-mode";

type TAppointmentModal = {
  type: "cancel" | "schedule";
  patientId: string;
  appointment: Appointment;
  userId: string;
  title: string;
  description: string;
};
const AppointmentModal = ({
  type,
  patientId,
  userId,
  title,
  description,
  appointment,
}: TAppointmentModal) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"transparent"}>
          {type === "cancel" ? (
            <Ban size={20} className="text-destructive" />
          ) : (
            <CheckCircle size={20} className="text-secondary" />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="space-y-3">
          <DialogTitle className="capitalize">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <AppointmentForm
          type={type}
          userId={userId}
          patientId={patientId}
          appointment={appointment}
          setOpen={setOpen}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentModal;
