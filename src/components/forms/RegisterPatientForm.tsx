"use client";
import { TUserProps } from "@/src/lib/types";
import React, { useState } from "react";
import { Form, FormControl } from "../ui/form";
import { useForm } from "react-hook-form";
import CustomFormField from "../CustomFormField";
import {
  doctors,
  FormFieldType,
  genderOptions,
  identificationTypeOptions,
  patientRegisterFormDefaultValues,
} from "@/src/constant";
import { CalendarDays, Mail, User } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { SelectItem } from "../ui/select";
import Image from "next/image";
import FileUploaderZone from "../FileUploaderZone";
import SubmitButton from "../SubmitButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { PatientRegisterSchema } from "@/src/lib/validations";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { registerPatient } from "@/src/lib/actions/patient.action";

type TRegisterPatientForm = {
  user: TUserProps;
};
const RegisterPatientForm = ({ user }: TRegisterPatientForm) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof PatientRegisterSchema>>({
    defaultValues: {
      ...patientRegisterFormDefaultValues,
      ...user,
    },
    resetOptions: {
      keepDefaultValues: true,
      keepValues: true,
    },
    resolver: zodResolver(PatientRegisterSchema),
  });
  const onSubmit = async (data: z.infer<typeof PatientRegisterSchema>) => {
    try {
      setLoading(true);
      const formData = new FormData();

      // if document exist
      if (
        data.identificationDocument &&
        data.identificationDocument.length > 0
      ) {
        formData.append("blobFile", data.identificationDocument[0]);
      }

      const patientData = {
        ...data,
        userId: user.$id,
        birthDate: new Date(data.birthDate),
        identificationDocument: formData,
      };
      // @ts-ignore
      const patient = await registerPatient(patientData);
      if (patient) router.push(`/patients/${user.$id}/new-appointment`);
    } catch (error) {
      console.log(error);
      setTimeout(() => form.reset(), 1000);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section>
          <h1 className="header">Welcome {user.name}</h1>
          <p>Let us know more about your self</p>
        </section>
        <section className="space-y-6">
          <h2 className="sub-header">Personal Information</h2>
        </section>
        <div className="flex flex-col gap-6">
          <CustomFormField
            name="name"
            fieldType={FormFieldType.INPUT}
            label="Name:"
            icon={<User size={20} />}
            control={form.control}
            placeholder="Ex: Hosam Alahmad"
          />
          <div className="flex flex-col xl:flex-row gap-6">
            <CustomFormField
              name="email"
              fieldType={FormFieldType.INPUT}
              label="Email address:"
              icon={<Mail size={20} />}
              control={form.control}
              placeholder="Ex: example@example.com"
            />{" "}
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.PHONE}
              name="phone"
              label="Phone number"
            />
          </div>
          <div className="flex flex-col xl:flex-row gap-6">
            <CustomFormField
              name="birthDate"
              fieldType={FormFieldType.DATE_PICKER}
              label="Date of birth:"
              control={form.control}
              showTimeSelect={true}
              icon={<CalendarDays size={20} />}
            />{" "}
            <CustomFormField
              name="gender"
              fieldType={FormFieldType.SKELETON}
              label="Gender:"
              control={form.control}
              renderSkeleton={(field) => (
                <FormControl>
                  <RadioGroup
                    className="flex gap-6 h-11"
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    {genderOptions.map((gender) => (
                      <div key={gender} className="shad-radio-group">
                        <RadioGroupItem value={gender} id={gender} />
                        <Label
                          htmlFor={gender}
                          className="first-letter:uppercase"
                        >
                          {gender}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            />{" "}
          </div>
          <div className="flex flex-col xl:flex-row gap-6">
            <CustomFormField
              name="address"
              fieldType={FormFieldType.INPUT}
              label="Address:"
              control={form.control}
              placeholder="Ex: Idleb - Andalus Street"
            />
            <CustomFormField
              name="occupation"
              fieldType={FormFieldType.INPUT}
              label="Occupation:"
              control={form.control}
              placeholder="Ex: Software Engineering"
            />
          </div>{" "}
          <div className="flex flex-col xl:flex-row gap-6">
            <CustomFormField
              name="emergencyContactName"
              fieldType={FormFieldType.INPUT}
              label="Emergency contact name:"
              control={form.control}
              placeholder="Ex: Jhon smith"
            />
            <CustomFormField
              name="emergencyContactNumber"
              fieldType={FormFieldType.PHONE}
              label="Emergency contact number:"
              control={form.control}
            />
          </div>
        </div>
        <section className="space-y-6">
          <h2 className="sub-header">Medical Information</h2>
        </section>
        <div className="flex flex-col gap-6">
          <CustomFormField
            name="primaryPhysician"
            fieldType={FormFieldType.SELECT}
            label="Primary Physician:"
            control={form.control}
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
          <div className="flex flex-col xl:flex-row gap-6">
            <CustomFormField
              name="insuranceProvider"
              fieldType={FormFieldType.INPUT}
              control={form.control}
              label="Insurance Provider:"
              placeholder="Ex: Ghost Broker"
            />
            <CustomFormField
              name="insurancePolicyNumber"
              fieldType={FormFieldType.INPUT}
              control={form.control}
              label="Insurance policy number:"
              placeholder="Ex: A12345678"
            />
          </div>
          <div className="flex flex-col xl:flex-row gap-6">
            <CustomFormField
              name="allergies"
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              label="Allergies (if any):"
              placeholder="Ex: Penicillin, Pollen"
            />
            <CustomFormField
              name="currentMedication"
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              label="Current medication (if any):"
              placeholder="Ex: Paracetamol 500mg"
            />
          </div>
          <div className="flex flex-col xl:flex-row gap-6">
            <CustomFormField
              name="familyMedicalHistory"
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              label="Family medical history (if any):"
              placeholder="Ex: Tonsillectomy"
            />
            <CustomFormField
              name="pastMedicalHistory"
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              label="Past medical history (if any):"
              placeholder="Ex: Tonsillectomy"
            />
          </div>
        </div>
        <section className="space-y-6">
          <h2 className="sub-header">Identification and Verification</h2>
        </section>{" "}
        <div className="flex flex-col gap-6">
          <CustomFormField
            name="identificationType"
            fieldType={FormFieldType.SELECT}
            label="Identification Type:"
            control={form.control}
          >
            {identificationTypeOptions.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </CustomFormField>
          <CustomFormField
            name="identificationNumber"
            fieldType={FormFieldType.INPUT}
            label="Identification Number:"
            control={form.control}
            placeholder="Ex: 12345678"
          />

          <CustomFormField
            name="identificationDocument"
            fieldType={FormFieldType.SKELETON}
            label="Identification Document:"
            control={form.control}
            renderSkeleton={(field) => (
              <FormControl>
                <FileUploaderZone
                  files={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
            )}
          />
        </div>
        <section className="space-y-6">
          <h2 className="sub-header">Consent and Privacy</h2>
        </section>{" "}
        <div className="flex flex-col gap-6">
          <CustomFormField
            name="disclosureConsent"
            fieldType={FormFieldType.CHECKBOX}
            label="I consent to treatment"
            control={form.control}
          />{" "}
          <CustomFormField
            name="treatmentConsent"
            fieldType={FormFieldType.CHECKBOX}
            label="I consent to disclosure of information"
            control={form.control}
          />{" "}
          <CustomFormField
            name="privacyConsent"
            fieldType={FormFieldType.CHECKBOX}
            label="I consent to privacy policy"
            control={form.control}
          />
        </div>
        <SubmitButton isLoading={loading} disabled={loading}>
          Get Started
        </SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterPatientForm;
