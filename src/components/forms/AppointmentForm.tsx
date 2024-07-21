"use client";
import React, { useState } from "react";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CreateAppointmentSchema,
  getAppointmentSchema,
} from "@/src/lib/validations";
import { useRouter } from "next/navigation";
import SubmitButton from "../SubmitButton";
import CustomFormField from "../CustomFormField";
import { doctors, FormFieldType } from "@/src/constant";
import { SelectItem } from "../ui/select";
import Image from "next/image";
import {
  createAppointment,
  updateAppointment,
} from "@/src/lib/actions/appointment.action";
import { TAppointmentStatus } from "@/src/lib/types";
import { Calendar } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Appointment } from "@/src/lib/types/appwrite-mode";

type TAppointmentForm = {
  type: "create" | "cancel" | "schedule";
  userId: string;
  patientId: string;
  appointment?: Appointment;
  setOpen?: (open: boolean) => void;
};

const AppointmentForm = ({
  type,
  userId,
  patientId,
  appointment,
  setOpen,
}: TAppointmentForm) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const AppointmentSchema = getAppointmentSchema(type);
  const form = useForm<z.infer<typeof AppointmentSchema>>({
    defaultValues: {
      schedule: appointment ? new Date(appointment.schedule) : new Date(),
      cancellationReason: appointment?.cancellationReason || "",
      note: appointment?.note || "",
      primaryPhysician: appointment?.primaryPhysician || "",
      reason: appointment?.reason || "",
    },
    resolver: zodResolver(AppointmentSchema),
    resetOptions: {
      keepValues: true,
    },
  });
  let buttonLabel;
  let status;
  switch (type) {
    case "create":
      buttonLabel = "Create Appointment";
      status = "pending";
      break;
    case "cancel":
      buttonLabel = "Cancel Appointment";
      status = "cancelled";
      break;
    case "schedule":
      buttonLabel = "Schedule Appointment";
      status = "schedule";
      break;
  }

  const onSubmit = async (data: z.infer<typeof AppointmentSchema>) => {
    try {
      setLoading(true);
      if (type === "create") {
        const appointmentData = {
          patient: patientId,
          schedule: new Date(data.schedule),
          cancellationReason: data.cancellationReason!,
          primaryPhysician: data.primaryPhysician,
          reason: data.reason!,
          note: data.note,
          status: status as TAppointmentStatus,
          userId,
        };
        const appointment = await createAppointment(appointmentData);
        if (appointment) {
          form.reset();
          router.push(
            `/patients/${userId}/new-appointment/success?appointmentId=${appointment.$id}`
          );
        }
      } else {
        const appointmentCancelData = {
          appointmentId: appointment?.$id || "",
          userId,
          appointment: {
            primaryPhysician: data.primaryPhysician,
            schedule: new Date(data.schedule),
            status: status as TAppointmentStatus,
            cancellationReason: data?.cancellationReason,
          },
          type,
        };

        const appointmentDoc = await updateAppointment(appointmentCancelData);
        if (appointmentDoc) {
          form.reset();
          setOpen && setOpen(false);
          setLoading(false);
        }
      }
    } catch (e) {
      console.log(e);
      form.reset();
      setLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {type === "create" && (
          <section>
            <h1 className="text-2xl font-semibold ">Hi There</h1>
            <p>Request new appointment in 10 seconds</p>
          </section>
        )}
        {type !== "cancel" && (
          <>
            {" "}
            <CustomFormField
              name="primaryPhysician"
              fieldType={FormFieldType.SELECT}
              control={form.control}
              disabled={type !== "create"}
              label="Doctors:"
              placeholder="Select a doctor"
            >
              {doctors.map((doctor) => (
                <SelectItem key={doctor.name} value={doctor.name}>
                  <div className="flex items-center gap-2">
                    <Image
                      src={doctor.image}
                      width={35}
                      height={35}
                      alt={doctor.name}
                      className="rounded-full h-[35px] w-[35px] object-cover"
                    />
                    {doctor.name}
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>
            <CustomFormField
              name="schedule"
              fieldType={FormFieldType.DATE_PICKER}
              icon={<Calendar size={20} />}
              control={form.control}
              disabled={type !== "create"}
              label="Expected appointment date:"
              dateFormat="MM/dd/yyyy h:mm:ss"
              showTimeSelect
            />
            <div className="flex flex-col xl:flex-row gap-6">
              <CustomFormField
                name="reason"
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                label="Reason of appointment:"
                disabled={type !== "create"}
                placeholder="Enter reason of appointment"
              />
              <CustomFormField
                name="note"
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                label="Notes:"
                placeholder="Enter notes"
              />
            </div>
          </>
        )}
        {type === "cancel" && (
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.TEXTAREA}
            name="cancellationReason"
            label="Reason for cancellation:"
            placeholder="Enter reason for cancellation"
          />
        )}
        <SubmitButton
          variant={type === "cancel" ? "destructive" : "default"}
          isLoading={loading}
          disabled={loading}
        >
          {buttonLabel}
        </SubmitButton>
      </form>
    </Form>
  );
};

export default AppointmentForm;
