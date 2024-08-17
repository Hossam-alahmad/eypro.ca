"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { UploadCloud } from "lucide-react";
import { Button } from "./ui/button";
import CircleProgressPar from "./CircleProgressPar";
import { convertFileToUrl } from "../lib/utils";
type TFileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[] | undefined) => void;
};

const FileUploaderZone = ({ files, onChange }: TFileUploaderProps) => {
  const [percentage, setPercentage] = useState(0);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files

    setPercentage(0);
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    onChange(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className=" relative ">
      <div {...getRootProps()} className="file-uploader-zone">
        <input {...getInputProps()} />
        {files && files.length > 0 ? (
          <Image
            width={1000}
            height={1000}
            src={convertFileToUrl(files[0])}
            alt={files[0].name}
            className="w-full h-full object-contain"
          />
        ) : percentage <= 100 && percentage > 0 ? (
          <div className="flex items-center justify-center h-full">
            <CircleProgressPar percentage={percentage} circleWidth={50} />
          </div>
        ) : (
          <div className="flex text-sm flex-col gap-2 h-full w-full justify-center items-center rounded-full mb-2">
            <span className="bg-third p-2 rounded-full text-primary">
              <UploadCloud />
            </span>
            <div className="text-center text-text-secondary">
              <p>
                <span className="text-primary">Click to upload</span> or drag
                and drop
              </p>{" "}
              <p>SVG, PNG, JPG or Gif (Max 5MB)</p>
            </div>
          </div>
        )}
      </div>
      {files && files.length > 0 && (
        <Button
          type="button"
          size={"icon"}
          className="flex mt-4 w-1/4 mx-auto"
          variant={"destructive"}
          onClick={() => {
            setPercentage(0);
            onChange(undefined);
          }}
        >
          Delete Image
        </Button>
      )}
    </div>
  );
};

export default FileUploaderZone;
