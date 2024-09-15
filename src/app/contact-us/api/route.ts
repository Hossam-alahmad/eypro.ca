import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import handlebars from "handlebars";

const contactFormPath = `${process.cwd()}/public/templates/contact-form.html`;

export const POST = async (req: NextRequest) => {
  try {
    const info = await req.json();
    const transporter = nodemailer.createTransport({
      host: "server105.web-hosting.com",
      port: 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: true,
      tls: {
        rejectUnauthorized: false, // Disable certificate validation
      },
    });
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
    return NextResponse.json(
      { status: "success", message: "send success" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      { status: "error", message: "Error sending email" },
      { status: 400 }
    );
  }
};
