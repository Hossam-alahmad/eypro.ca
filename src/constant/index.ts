import { TGender } from "../lib/types";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  PHONE = "phoneInput",
  CHECKBOX = "checkbox",
  DATE_PICKER = "dataPicker",
  SELECT = "select",
  SKELETON = "skeleton",
}

export const genderOptions = ["male", "female"];
export const identificationTypeOptions = [
  "Personal ID",
  "Passport",
  "Driver License",
];
export const doctors = [
  {
    image: "/assets/images/doctor-1.jpg",
    name: "John Green",
  },
  {
    image: "/assets/images/doctor-7.jpg",
    name: "Leila Cameron",
  },
  {
    image: "/assets/images/doctor-3.jpg",
    name: "David Livingston",
  },
  {
    image: "/assets/images/doctor-4.jpg",
    name: "Evan Peter",
  },
  {
    image: "/assets/images/doctor-5.jpg",
    name: "Jane Powell",
  },
  {
    image: "/assets/images/doctor-8.jpg",
    name: "Alex Ramirez",
  },
  {
    image: "/assets/images/doctor-6.jpg",
    name: "Jasmine Lee",
  },
  {
    image: "/assets/images/doctor-9.jpg",
    name: "Alyana Cruz",
  },
  {
    image: "/assets/images/doctor-10.jpg",
    name: "Hardik Sharma",
  },
];

export const patientRegisterFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as TGender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};
