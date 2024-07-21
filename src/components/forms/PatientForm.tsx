"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import CustomFormField from "../CustomFormField";
import { FormFieldType } from "@/src/constant";
import { User, Mail } from "lucide-react";
import SubmitButton from "../SubmitButton";
import { PatientSchema } from "@/src/lib/validations";
import { createUser } from "@/src/lib/actions/patient.action";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PatientForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof PatientSchema>>({
    resolver: zodResolver(PatientSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    resetOptions: {
      keepDefaultValues: true,
      keepValues: true,
    },
  });
  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof PatientSchema>) => {
    try {
      setLoading(true);
      const newUser = await createUser(values);
      if (newUser) {
        setTimeout(() => {
          router.push(`/patients/${newUser.$id}/register`);
        }, 2000);
      }
    } catch (err) {
      console.log("=============== ", err);
      setTimeout(() => {
        form.reset();
        setLoading(false);
      }, 1000);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section>
          <h1 className="text-2xl font-semibold ">Hi There</h1>
          <p>Schedule your first appointment</p>
        </section>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Full name"
          placeholder="Hosam alahmad"
          icon={<User size={20} />}
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email address"
          placeholder="example@exmaple.com"
          icon={<Mail size={20} />}
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PHONE}
          name="phone"
          label="Phone number"
          placeholder="+963 965216115"
        />
        <SubmitButton isLoading={loading} disabled={loading} className="w-full">
          Submit
        </SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
