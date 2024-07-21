import { Models } from "node-appwrite";
import { TAppointmentStatus, TGender } from ".";

export interface Patient extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: TGender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string | undefined;
  currentMedication: string | undefined;
  familyMedicalHistory: string | undefined;
  pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
  treatmentConsent: boolean;
  disclosureConsent: boolean;
}

export interface Appointment extends Models.Document {
  userId: string;
  patient: Patient;
  primaryPhysician: string;
  schedule: Date;
  reason: string;
  cancellationReason: string | undefined;
  status: TAppointmentStatus;
  note: string;
}
