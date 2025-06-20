import React from "react";
import { cn } from "../lib/utils";
type THeadingSection = React.ComponentProps<"h2">;
const HeadingSection = ({ className, children, ...rest }: THeadingSection) => {
  return (
    <h2 {...rest} className={cn("heading-2 text-center mb-10", className)}>
      {children}
    </h2>
  );
};

export default HeadingSection;
