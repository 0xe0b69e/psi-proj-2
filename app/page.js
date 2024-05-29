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
      <Sidenav visible={isSideNavOpen} />1
      <div className={cn(
        "h-screen w-full bg-background pt-14 text-black transition-all",
        isSideNavOpen && "ml-[240px]"
      )}>
        fsldkfhsdkh
      </div>
    </main>
  );
}
