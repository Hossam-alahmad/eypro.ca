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
    pass: "Quran@2030",
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
      const quoteFilePath = path.resolve(`public/uploads/${info.file.name}`);

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
