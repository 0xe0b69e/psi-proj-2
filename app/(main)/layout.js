"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Sidenav from "@/components/sidenav";

export default function Layout ( { children } )
{
  const [ isSideNavOpen, setIsSideNavOpen ] = useState( false );

  const onSideNavToggle = function ( e )
  {
    setIsSideNavOpen( !isSideNavOpen );
  };

  return (
    <>
      <Navbar toggleSideNav={onSideNavToggle} />
      <Sidenav visible={isSideNavOpen} toggleSideNav={onSideNavToggle} />
      <div className={cn(
        "w-full h-full transition-all",
        isSideNavOpen && "lg:ml-[240px] lg:w-[calc(100%-240px)]"
      )}>
        {children}
      </div>
    </>
  );
}
