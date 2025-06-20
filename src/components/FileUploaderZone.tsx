"use client";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
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
    <div className=" relative flex gap-2">
      <div {...getRootProps()} className="shad-input">
        <input {...getInputProps()} />
        {files && files.length && <p>{files[0].name}</p>}
      </div>
      {files && files.length > 0 && (
        <Button
          type="button"
          size={"icon"}
          className=""
          variant={"destructive"}
          onClick={() => {
            setPercentage(0);
            onChange(undefined);
          }}
        >
          <Trash size={20} />
        </Button>
      )}
    </div>
  );
};

export default FileUploaderZone;
