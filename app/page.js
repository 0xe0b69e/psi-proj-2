"use server";

import Navbar from "@/components/navbar";
import Sidenav from "@/components/sidenav";

export default async function Page() {
  return (
    <>
      <Navbar />
      <Sidenav />
      <div className="h-screen">
      
      </div>
    </>
  );
}
