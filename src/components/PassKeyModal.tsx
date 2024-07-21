"use client";
import React, { useEffect, useState } from "react";
import CustomAlertDialog from "./CustomAlertDialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";
import { AlertDialogAction, AlertDialogCancel } from "./ui/alert-dialog";
import { usePathname, useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";

const PassKeyModal = ({ trigger }: { trigger?: React.ReactNode }) => {
  const router = useRouter();
  const path = usePathname();
  const [open, setOpen] = useState(true);
  const [passkey, setPasskey] = useState({
    data: "",
    isLoading: false,
    error: "",
  });

  // check if admin already login
  const accessKey =
    typeof window !== "undefined"
      ? window.localStorage.getItem("accessKey")
      : null;

  useEffect(() => {
    if (path && accessKey) {
      if (atob(accessKey) === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
        setOpen(false);
        router.push("/admin");
      } else {
        setPasskey((prev) => ({
          ...prev,
          error: "Invalid passkey, please try again",
        }));
      }
    }
  }, [accessKey]);

  const validatePasskey = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (passkey.data === process.env.NEXT_PUBLIC_ADMIN_PASSKEY) {
      setPasskey((prev) => ({ ...prev, isLoading: true }));
      const encryptPasskey = btoa(passkey.data);
      localStorage.setItem("accessKey", encryptPasskey);
      setOpen(false);
      setPasskey((prev) => ({ ...prev, isLoading: false }));
    } else {
      setPasskey((prev) => ({
        ...prev,
        error: "Invalid passkey, please try again",
      }));
    }
  };
  return (
    <CustomAlertDialog
      title="Admin Access Verification"
      description="To access the admin page, please enter passkey"
      trigger={trigger}
      open={open}
      setOpen={setOpen}
      dialogFooter={
        <>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={passkey.isLoading}
            onClick={validatePasskey}
          >
            {passkey.isLoading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Access"
            )}
          </AlertDialogAction>
        </>
      }
    >
      <div className="flex flex-col space-y-2">
        <InputOTP
          value={passkey.data}
          onChange={(val) => setPasskey((prev) => ({ ...prev, data: val }))}
          maxLength={6}
        >
          <InputOTPGroup className="flex-1">
            <InputOTPSlot className="shad-otp-slot" index={0} />
            <InputOTPSlot className="shad-otp-slot" index={1} />
            <InputOTPSlot className="shad-otp-slot" index={2} />
            <InputOTPSlot className="shad-otp-slot" index={3} />
            <InputOTPSlot className="shad-otp-slot" index={4} />
            <InputOTPSlot className="shad-otp-slot" index={5} />
          </InputOTPGroup>
        </InputOTP>
        {passkey.error && (
          <p className="text-destructive text-sm">{passkey.error}</p>
        )}
      </div>
    </CustomAlertDialog>
  );
};

export default PassKeyModal;
