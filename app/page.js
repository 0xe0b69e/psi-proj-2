"use client";

import Navbar from "@/components/navbar";
import Sidenav from "@/components/sidenav";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Page() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const onSideNavToggle = function ( e ) {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <main className="overflow-x-hidden">
      <Navbar toggleSideNav={onSideNavToggle} />
      <Sidenav visible={isSideNavOpen} toggleSideNav={onSideNavToggle} />
      <div className={cn(
        "h-full w-full bg-background pt-14 text-black transition-all",
        isSideNavOpen && "lg:ml-[240px]"
      )}>
        <header className="bg-gradient-to-r from-primary to-secondary py-10 mb-4 h-64 flex items-center justify-center">
          <div className="w-full text-center text-white text-2xl">
            <h1>Welcome to SB Admin Pro</h1>
            <p className="mb-0 text-white/50 text-sm">A professionally designed admin panel template built with Bootstrap 5</p>
          </div>
        </header>
        <div className="flex flex-col px-[5%] w-full">
          <div className="flex flex-col w-full">
            <h2 className="text-xl">Dashboards</h2>
            <p className="text-black/50">Three dashboard examples to get you started!</p>
            <span className="border-gray-300 border-t-[1px] my-3" />
            <div className="grid xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1">
              <div className="w-full flex flex-col items-center p-2">
                <p>One</p>
              </div>
              <div className="w-full flex flex-col items-center p-2">
                <p>Two</p>
              </div>
              <div className="w-full flex flex-col items-center p-2">
                <p>Three</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
