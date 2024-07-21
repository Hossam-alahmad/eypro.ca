import React from "react";
import { cn } from "../lib/utils";
type TStateCard = {
  icon: React.ReactNode;
  label: string;
  count: number;
  className?: string;
};
const StateCard = ({ icon, label, count, className }: TStateCard) => {
  return (
    <div
      className={cn(
        "border space-y-4  border-border-primary p-4 rounded-md shadow",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {" "}
        {icon}
        <h2 className="sub-header">{count}</h2>
      </div>
      <p>{label}</p>
    </div>
  );
};

export default StateCard;
