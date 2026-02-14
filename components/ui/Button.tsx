"use client";

import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "w-[194px] h-[69px]  text-[18px] font-medium transition duration-200 flex items-center justify-center",
        {
          "bg-[#2f57c7] text-white hover:bg-[#254ab3]":
            variant === "primary",
          "border border-[#2f57c7] text-[#2f57c7] hover:bg-blue-50":
            variant === "outline",
        },
        className
      )}
    >
      {children}
    </button>
  );
}
