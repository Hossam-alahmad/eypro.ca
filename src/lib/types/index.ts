export type TCreateUserProps = {
  name: string;
  email: string;
  phone: string;
};
export type TUserProps = TCreateUserProps & {
  $id: string;
};
export type TGender = "male" | "female";
export type TAppointmentStatus = "pending" | "cancelled" | "schedule";
export type TRegisterPatientProps = TCreateUserProps & {
  birthDate: Date;
  userId: string;
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
};
export type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: TAppointmentStatus;
  note: string | undefined;
};
export type UpdateAppointmentParams = {
  appointmentId: string;
  userId: string;
  appointment: {
    primaryPhysician: string;
    schedule: Date;
    status: TAppointmentStatus;
    cancellationReason?: string;
  };
};
