import { sendQuoteEmail } from "@/src/lib/actions/send-email";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { ContactEmailProps } from "@/src/lib/types";

const quoteFilePath = `${process.env.NEXT_PUBLIC_DOMAIN}/uploads`;

export const POST = async (req: NextRequest) => {
  const body = await req.formData();
  let data: { [key: string]: any } = {};

  Array.from(body.entries()).map((entry) => {
    data[entry[0]] = entry[1];
  });

  const result = await sendQuoteEmail(data as ContactEmailProps);
  if (!result) {
    return NextResponse.json({ status: "error", result }, { status: 400 });
  }
  return NextResponse.json({ status: "success", result }, { status: 200 });
};
