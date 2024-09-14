import { sendQuoteEmail } from "@/src/lib/actions/send-email";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { ContactEmailProps } from "@/src/lib/types";

const quoteFilePath = path.resolve(`public/uploads`);

export const POST = async (req: NextRequest) => {
  const body = await req.formData();
  let data: { [key: string]: any } = {};
  if (body.get("file")) {
    const file = body.get("file") as File;
    const buffer = Buffer.from(await file.arrayBuffer());
    const fileNameSplit = file.name.split(".");
    const fileName =
      fileNameSplit[0] + "-" + new Date().getTime() + "." + fileNameSplit[1];

    fs.writeFileSync(quoteFilePath + `/${fileName}`, buffer);
    data.file = {
      name: fileName,
      type: file.type,
    };
  }

  Array.from(body.entries())
    .filter((item) => item[0] !== "file")
    .map((entry) => {
      data[entry[0]] = entry[1];
    });

  const result = await sendQuoteEmail(
    data as ContactEmailProps & { name: string; type: string }
  );

  if (!result) {
    return NextResponse.json({ status: "error", result }, { status: 400 });
  }
  return NextResponse.json({ status: "success", result }, { status: 200 });
};
