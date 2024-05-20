"use client";

import { cn } from "@/lib/utils";

export default function Input({ className, variant, ...props }) {
  // TODO: Change
  return (
    <input
      className={cn(
        "w-full px-4 py-2 border border-gray-300 rounded-md",
        "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
        "font-mono after:content-[attr(data-type)] after:absolute after:right-2 after:top-2 after:text-xs after:text-gray-400",
        className,
      )}
      {...props}
    />
  );
}