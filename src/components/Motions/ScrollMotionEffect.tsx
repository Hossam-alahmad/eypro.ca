"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { cn } from "@/src/lib/utils";
type TScrollMotionEffect = React.ComponentProps<"div"> & {
  children: React.ReactNode;
  variants: Variants;
  duration?: number;
  delay?: number;
};

const ScrollMotionEffect = ({
  variants,
  children,
  delay = 0.25,
  duration = 0.5,
  ...rest
}: TScrollMotionEffect) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const animateControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      animateControl.start("visible");
    } else {
      animateControl.start("hidden");
    }
  }, [isInView]);
  return (
    <div
      {...rest}
      ref={ref}
      className={cn("relative overflow-hidden", rest.className)}
    >
      {" "}
      <motion.div
        variants={variants}
        initial="hidden"
        animate={animateControl}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollMotionEffect;
