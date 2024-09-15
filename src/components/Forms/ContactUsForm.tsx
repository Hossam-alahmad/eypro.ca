"use client";
import React, { useState } from "react";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import CustomFormField from "../CustomFormField";
import { FormFieldType } from "@/src/constant";
import SubmitButton from "../SubmitButton";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/src/lib/validations";
import { Mail, TagIcon, User } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { sendContactEmail } from "@/src/lib/actions/send-email";
const ContactUsForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const form = useForm<zod.infer<typeof contactSchema>>({
    defaultValues: {
      name: "",
      description: "",
      email: "",
      subject: "",
    },
    resolver: zodResolver(contactSchema),
    resetOptions: {
      keepValues: true,
    },
  });
  const onSubmit = (data: zod.infer<typeof contactSchema>) => {
    setIsLoading(true);
    sendContactEmail(data)
      .then((res) => {
        if (res) {
          setOverlayOpen(true);
        } else {
          toast.error("Failed send email");
        }
      })
      .catch(() => toast.error("Failed send email"))
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 border p-4 rounded-md shadow-sm"
      >
        <div>
          <div
            className={`fixed z-10 top-0 left-0 w-full h-full space-y-4 bg-secondary/70 transition-all flex flex-col items-center justify-center ${
              overlayOpen ? "visible opacity-1" : "invisible opacity-0"
            }`}
          >
            <Image
              src={"/assets/gif/success.gif"}
              width={500}
              height={500}
              alt="success"
              unoptimized
              className="w-auto h-auto"
            />
            <h2 className="heading-2 text-white">Send email success</h2>
            <Button
              onClick={() => setOverlayOpen(false)}
              type="button"
              className="w-[150px]"
            >
              Close
            </Button>
          </div>
        </div>
        <section>
          <h2 className="heading-2">Contact Information</h2>
          <p className="text-text-secondary">Feel Free To Sent Any Request</p>
        </section>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Name:"
          icon={<User className="text-text-secondary" />}
        />{" "}
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email:"
          icon={<Mail className="text-text-secondary" />}
        />{" "}
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="subject"
          label="Subject:"
          icon={<TagIcon className="text-text-secondary" />}
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.TEXTAREA}
          name="description"
          label="Description:"
        />
        <SubmitButton isLoading={isLoading} disabled={isLoading}>
          Send Now
        </SubmitButton>
      </form>
    </Form>
  );
};

export default ContactUsForm;
