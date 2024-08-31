"use server";
import { ContactEmailProps } from "../types";
import nodemailer from "nodemailer";
import fs from "fs";
import handlebars from "handlebars";
import path from "path";

const transporter = nodemailer.createTransport({
  host: "eypro.ca",
  port: 465,
  auth: {
    user: "noreply@eypro.ca",
    pass: "@hY@x2.H4LbJ",
  },
  secure: true,
});
const contactFormPath = path.resolve(`public/templates/contact-form.html`);

export const sendContactEmail = async (info: ContactEmailProps) => {
  try {
    const data = await fs.readFileSync(contactFormPath, {
      encoding: "utf8",
    });
    const template = handlebars.compile(data);
    const replacements = info;
    const htmlToSend = template(replacements);
    const mailOptions = {
      from: "noreply@eypro.ca",
      to: "hossamahmad1998@gmail.com",
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
