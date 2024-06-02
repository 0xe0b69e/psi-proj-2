"use client";

import { cn } from "@/lib/utils";
import { useContext, useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import Sidenav from "@/components/sidenav";
import { DarkModeContext } from "@/contexts/dark-mode";

export default function Layout ( { children } )
{
  const [ isSideNavOpen, setIsSideNavOpen ] = useState( false );
  const { isDarkMode } = useContext( DarkModeContext );

  /*
  useEffect( () =>
  {
    setIsSideNavOpen( window.innerWidth > 1024 );
  }, [] );
   */

  const onSideNavToggle = function ( e )
  {
    setIsSideNavOpen( !isSideNavOpen );
  };

  return (
    <div
      className={cn(
        "w-full h-full transition-all",
        isDarkMode && "dark",
        "text-text dark:text-text-dark",
        "bg-background dark:bg-background-dark",
      )}
    >
      <Navbar toggleSideNav={onSideNavToggle} />
      <Sidenav visible={isSideNavOpen} toggleSideNav={onSideNavToggle} />
      <div className={cn(
        "w-full h-full transition-all pt-14",
        isSideNavOpen && "lg:ml-[240px] lg:w-[calc(100%-240px)]"
      )}>
        {children}
      </div>
    </div>
  );
}
