"use client";

import { useState } from "react";
import { ChevronRightIcon, Cross1Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

export default function Sidenav({ visible }) {
  return (
    <>
      <div className={cn(
        "w-screen h-screen absolute bg-black lg:hidden transition-colors",
        visible ? "bg-black/50" : "bg-transparent"
      )}/>
      <div className={cn(
        "h-screen w-[240px] bg-foreground shadow-lg pt-[85px] pl-4 text-black flex flex-col space-y-2 z-40 transition-all fixed",
        visible ? "translate-x-0" : "-translate-x-full"
      )}>
        <Header>fdsf1</Header>
        <Item title="Test" icon={<Cross1Icon/>}>
          <p>fsdfsdf</p>
          <p>fsdfsdf</p>
          <p>fsdfsdf</p>
          <p>fsdfsdf</p>
        </Item>
        <span className="flex-grow"/>
        <div
          className="w-[calc(100% + 1rem)] h-20 bg-gray-300/25 box-border ml-[-1rem] flex flex-col justify-center pl-3">
          <p className="text-black/50 text-xs">Logged in as:</p>
          <p className="text-sm">TODO</p>
        </div>
      </div>
    </>
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