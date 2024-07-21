"use server";

import { ID, Query } from "node-appwrite";
import { databases } from "../appwrite.config";
import { parsStringify } from "../utils";
import { CreateAppointmentParams, UpdateAppointmentParams } from "../types";
import { revalidatePath } from "next/cache";

export const createAppointment = async (
  appointment: CreateAppointmentParams
) => {
  try {
    const createAppointment = await databases.createDocument(
      process.env.DB_ID!,
      process.env.APPOINTMENT_COLLECTION!,
      ID.unique(),
      appointment
    );
    return parsStringify(createAppointment);
  } catch (e) {
    console.log(e);
  }
};
export const getAppointment = async (appointmentId: string) => {
  try {
    const appointment = await databases.getDocument(
      process.env.DB_ID!,
      process.env.APPOINTMENT_COLLECTION!,
      appointmentId
    );
    return parsStringify(appointment);
  } catch (e) {
    console.log(e);
    return null;
  }
};
export const getRecentAppointments = async () => {
  const initialCounts = {
    scheduled: 0,
    pending: 0,
    cancelled: 0,
  };
  try {
    revalidatePath("/admin");
    const appointments = await databases.listDocuments(
      process.env.DB_ID!,
      process.env.APPOINTMENT_COLLECTION!,
      [Query.orderDesc("$id")]
    );
    const counts = appointments.documents.reduce((acc, appointment) => {
      if (appointment.status === "schedule") {
        acc.scheduled += 1;
      } else if (appointment.status === "pending") {
        acc.pending += 1;
      } else if (appointment.status === "cancelled") {
        acc.cancelled += 1;
      }
      return acc;
    }, initialCounts);
    return {
      total: appointments.total,
      ...counts,
      documents: appointments.documents.map((document) =>
        parsStringify(document)
      ),
    };
  } catch (e) {
    console.log(e);
    return {
      total: 0,
      ...initialCounts,
      documents: [],
    };
  }
};
export const updateAppointment = async (data: UpdateAppointmentParams) => {
  console.log(data);
  try {
    const updateAppointment = await databases.updateDocument(
      process.env.DB_ID!,
      process.env.APPOINTMENT_COLLECTION!,
      data.appointmentId,
      data.appointment
    );
    if (!updateAppointment) {
      throw new Error("Appointment not found");
    }

    // sms notification
    revalidatePath("/admin");
    return parsStringify(updateAppointment);
  } catch (e) {
    console.log(e);
  }
};
