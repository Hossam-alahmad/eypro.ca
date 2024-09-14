"use server";
import { ContactEmailProps } from "../types";
import nodemailer from "nodemailer";
import fs from "fs";
import handlebars from "handlebars";

const transporter = nodemailer.createTransport({
  // @ts-ignore
  host: process.env.NEXT_PUBLIC_EMAIL_HOST,
  port: process.env.NEXT_PUBLIC_EMAIL_PORT,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_USER,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
  },
  secure: true,
});
const contactFormPath = `${process.env.NEXT_PUBLIC_DOMAIN}/templates/contact-form.html`;

export const sendContactEmail = async (info: ContactEmailProps) => {
  console.log(contactFormPath);
  try {
    const data = await fs.readFileSync(contactFormPath, {
      encoding: "utf8",
    });
    const template = handlebars.compile(data);
    const replacements = info;
    const htmlToSend = template(replacements);
    const mailOptions = {
      from: "noreply@eypro.ca",
      to: info.email,
      subject: info.subject,
      text: info.description,
      html: htmlToSend,
    };
    await new Promise<void>((resolve, reject) => {
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
    return true;
  } catch (err) {
    console.error("Error sending email:", err);
    throw new Error(`Error sending email: ${err}`);
  }
  // Create a transporter
};
export const sendQuoteEmail = async (
  info: ContactEmailProps & { file?: { name: string; type: string } }
) => {
  try {
    const data = await fs.readFileSync(contactFormPath, {
      encoding: "utf8",
    });
    const template = handlebars.compile(data);
    const replacements = info;
    const htmlToSend = template(replacements);
    let mailOptions = {
      from: "noreply@eypro.ca",
      to: info.email,
      subject: info.subject,
      text: info.description,
      html: htmlToSend,
    };
    if (info.file) {
      const quoteFilePath = `${process.env.NEXT_PUBLIC_DOMAIN}/uploads/${info.file.name}`;

      const quoteFile = await fs.readFileSync(quoteFilePath);
      fs.unlink(quoteFilePath, () => {});
      // @ts-ignore
      mailOptions.attachments = [
        {
          filename: info.file.name,
          content: quoteFile,
          contentType: info.file.type,
        },
      ];
    }
    await new Promise<void>((resolve, reject) => {
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
    return true;
  } catch (err) {
    console.error("Error sending email:", err);
    return false;
  }
};
