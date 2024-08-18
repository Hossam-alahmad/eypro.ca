"use client";
import React from "react";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import CustomFormField from "../CustomFormField";
import { FormFieldType } from "@/src/constant";
import SubmitButton from "../SubmitButton";

const ContactUsForm = () => {
  const form = useForm();
  const onSubmit = () => {};
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 border p-4 rounded-md shadow-sm"
      >
        <section>
          <h2 className="heading-2">Contact Information</h2>
          <p className="text-text-secondary">Feel Free To Sent Any Request</p>
        </section>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Name:"
        />{" "}
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email:"
        />{" "}
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="subject"
          label="Subject:"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.TEXTAREA}
          name="desc"
          label="Description:"
        />
        <SubmitButton>Send Now</SubmitButton>
      </form>
    </Form>
  );
};

export default ContactUsForm;
