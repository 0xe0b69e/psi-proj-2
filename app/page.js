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
    <>
      <Navbar toggleSideNav={onSideNavToggle} />
      <Sidenav visible={isSideNavOpen} />
      <div className="h-screen">
      
      </div>
    </>
  );
}
