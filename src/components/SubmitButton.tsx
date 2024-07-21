import React from "react";
import { Button, ButtonProps } from "./ui/button";
import { LoaderCircle } from "lucide-react";
import { cn } from "../lib/utils";

type TSubmitButton = ButtonProps & {
  isLoading?: boolean;
  children: React.ReactNode;
};

const SubmitButton = ({
  isLoading = false,
  children,
  ...props
}: TSubmitButton) => {
  return (
    <Button className={cn("w-full", props.className)} type="submit" {...props}>
      {isLoading ? <LoaderCircle className="animate-spin" /> : children}
    </Button>
  );
};

export default SubmitButton;
