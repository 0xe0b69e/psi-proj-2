"use client";

import { useState } from "react";
import { ChevronRightIcon, Cross1Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export default function Sidenav() {
  return (
    <div className="h-screen w-[240px] bg-foreground shadow-lg z-40 pt-[85px] pl-4 text-black flex flex-col space-y-2">
      <Header>fdsf1</Header>
      <Item title="Test" icon={<Cross1Icon/>}>
        <p>fsdfsdf</p>
        <p>fsdfsdf</p>
        <p>fsdfsdf</p>
        <p>fsdfsdf</p>
      </Item>
    </div>
  )
}

const Header = ( { children } ) => (
  <p className="text-xs uppercase font-bold text-gray-400/75 mb-2">
    {children}
  </p>
);

function Item( { children, title, icon } ) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col space-y-1">
      <div
        className="flex flex-row space-x-4 items-center pr-4 cursor-pointer select-none"
        onClick={() => setExpanded(!expanded)}
      >
        {icon}
        <p>{title}</p>
        <span className="flex-grow"/>
        <ChevronRightIcon
          className={cn(
            "transition-all",
            expanded && "transform rotate-90"
          )}
        />
      </div>
      <div
        className={cn(
          "flex w-full transition-max-height duration-300 ease-in-out overflow-hidden",
          expanded ? "max-h-full" : "max-h-0"
        )}
      >
        <span className="h-full border-l-2 border-gray-200 ml-[6px] mr-5 transition-all"/>
        <div className="flex flex-col py-3 transition-all">
          {children}
        </div>
      </div>
    </div>
  );
}