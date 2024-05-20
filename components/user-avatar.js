"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export default function UserAvatar( { className, ...props } ) {
  return (
    <Avatar className={cn(
      "transition-all border-[1px] border-background ring-gray-300 hover:border-gray-300 active:ring-4 w-12 h-12 text-white",
      className
    )}>
      <AvatarImage {...props} />
      <AvatarFallback className="bg-sky-400">
        <FaUser className="w-5 h-5"/>
      </AvatarFallback>
    </Avatar>
  );
}