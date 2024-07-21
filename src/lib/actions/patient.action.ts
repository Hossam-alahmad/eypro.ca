"use server";
import { ID, Query } from "node-appwrite";
import { InputFile } from "node-appwrite/file";
import { databases, storage, users } from "../appwrite.config";
import { TCreateUserProps, TRegisterPatientProps } from "../types";
import { parsStringify } from "../utils";

export const createUser = async (user: TCreateUserProps) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    return newUser;
  } catch (err: any) {
    console.log(err);
    if (err && err?.code === 409) {
      const documents = await users.list([Query.equal("email", user.email)]);
      return documents?.users[0];
    }
  }
};
export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parsStringify(user);
  } catch (error) {
    console.log(error);
  }
};
export const registerPatient = async ({
  identificationDocument,
  ...patient
}: TRegisterPatientProps) => {
  try {
    let file;

    if (identificationDocument) {
      file = await storage.createFile(
        process.env.NEXT_PUBLIC_STORAGE_ID!,
        ID.unique(),
        identificationDocument?.get("blobFile") as File
      );
    }
    const createPatient = await databases.createDocument(
      process.env.DB_ID!,
      process.env.PATIENTS_COLLECTION!,
      ID.unique(),
      {
        identificationDocumentId: file?.$id || null,
        identificationDocumentUrl: `${process.env.NEXT_PUBLIC_ENDPOINT}/storage/${process.env.NEXT_PUBLIC_STORAGE_ID}/files/${file?.$id}/view?project=${process.env.PROJECT_ID}`,
        ...patient,
      }
    );

    return createPatient;
  } catch (e) {
    console.log(e);
  }
};
export const getPatient = async (userId: string) => {
  try {
    const patients = await databases.listDocuments(
      process.env.DB_ID!,
      process.env.PATIENTS_COLLECTION!,
      [Query.equal("userId", userId)]
    );
    return parsStringify(patients.documents[0]);
  } catch (e) {
    console.log(e);
  }
};
