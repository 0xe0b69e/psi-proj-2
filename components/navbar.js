"use client";

import { BellIcon, EnvelopeClosedIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import UserAvatar from "@/components/user-avatar";

export default function Navbar()
{
  return (
    <nav className="fixed w-full flex justify-between px-4 py-4 items-center bg-background-foreground h-14 shadow-lg">
      <div className="flex flex-row h-full items-center space-x-2">
        <Icon><HamburgerMenuIcon/></Icon>
        <Link href="#" className="font-bold">SB Admin Pro</Link>
      </div>
      <div className="flex flex-row-reverse h-full items-center space-x-4">
        <UserAvatar className="ml-4" src="" alt="@me"/>
        <Icon><EnvelopeClosedIcon/></Icon>
        <Icon><BellIcon/></Icon>
      </div>
    </nav>
  )
}

function Icon( { children } ) {
  return (
    <span className={cn(
      "hover:bg-gray-300/75 w-11 h-11 rounded-full transition-all items-center justify-center inline-flex ring-gray-300 active:ring-4",
      "cursor-pointer text-gray-800/50 duration-300"
    )}>
      {children}
    </span>
  );
}