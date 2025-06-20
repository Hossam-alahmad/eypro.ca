import zod from "zod";
import { uploadFileConfig } from "../constant";

export const contactSchema = zod.object({
  name: zod
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: zod.string().email("Invalid email address"),
  subject: zod
    .string()
    .min(2, "Subject must be at least 2 characters")
    .max(100, "Subject must be at most 100 characters"),
  description: zod
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(500, "Description must be at most 500 characters"),
});
export const quoteSchema = zod.object({
  name: zod
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: zod.string().email("Invalid email address"),
  subject: zod
    .string()
    .min(2, "Subject must be at least 2 characters")
    .max(100, "Subject must be at most 100 characters"),
  file: zod
    .custom<File[]>()
    .refine(
      (file: File[]) => uploadFileConfig.format.includes(file[0]?.type),
      `accept only pdf,txt,jpeg,jpg,png,webp`
    )
    .refine(
      (file: File[]) => file[0]?.size <= uploadFileConfig.size,
      `Max image size is 5MB.`
    )
    .optional(),
  description: zod
    .string()
    .min(20, "Description must be at least 20 characters")
    .max(500, "Description must be at most 500 characters"),
});
