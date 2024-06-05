"use client";

import { useState } from "react";
import { ChevronRightIcon, Cross1Icon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Sidenav ( { visible, toggleSideNav } )
{
  const path = usePathname();
  const searchParams = useSearchParams();

  return (
    <>
      <div
        className={cn(
          "w-screen h-screen fixed bg-black transition-colors lg:hidden z-40 pointer-events-none",
          visible ? "bg-black/50" : "hidden"
        )}
        onClick={( e ) =>
        {
          if ( visible )
            toggleSideNav( e );
        }}
      />
      <div className={cn(
        "h-screen w-[240px] shadow-lg pt-[85px] pl-4 flex flex-col space-y-2 z-50 transition-all fixed",
        visible ? "translate-x-0" : "-translate-x-full",
        "bg-foreground dark:bg-foreground-dark"
      )}>
        <Header>core</Header>
        <Item
          title="Dashboards"
          icon={<Cross1Icon />}
          className={cn(
            path === "/dashboard" && "text-primary-lighter font-bold"
          )}
        >
          <Link
            href="/dashboard?type=0"
          >
            <div
              className={cn(
                "w-full h-[38px]",
                ( path === "/dashboard" && searchParams.get( "type" ) === "0" ) && "text-primary-lighter font-bold",
              )}
            >
              <p>Zero</p>
            </div>
          </Link>
        </Item>
        <span className="flex-grow" />
        <div
          className={cn(
            "w-[calc(100% + 1rem)] h-20 box-border ml-[-1rem] flex flex-col justify-center pl-3",
            "bg-gray-300/25 dark:bg-slate-800/40"
          )}>
          <p className="text-xs text-text/50 dark:text-text-dark/50">Logged in as:</p>
          <p className="text-sm">TODO</p>
        </div>
      </div>
    </>
  );
}

const Header = ( { children } ) => (
  <p className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 mb-2">
    {children}
  </p>
);

function Item ( { children, title, icon, onExpand, isExpanded = false, className } )
{
  const [ expanded, setExpanded ] = useState( isExpanded );

  const expand = function ( e )
  {
    if ( onExpand )
      onExpand( e );
    setExpanded( !expanded );
  };

  return (
    <div className="flex flex-col space-y-1 w-full">
      <div
        className={cn(
          "flex flex-row space-x-4 items-center pr-4 cursor-pointer select-none w-full",
          className
        )}
        onClick={expand}
      >
        {icon}
        <p>{title}</p>
        <span className="flex-grow" />
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
        <span className="h-full border-l-2 border-gray-200 ml-[6px] mr-5 transition-all" />
        <div className="flex flex-col py-3 transition-all w-full">
          {children}
        </div>
      </div>
    </div>
  );
}