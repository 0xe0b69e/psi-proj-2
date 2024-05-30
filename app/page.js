"use client";

import Navbar from "@/components/navbar";
import Sidenav from "@/components/sidenav";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ImageGrid } from "@/components/image-grid";

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
        <div className="flex flex-col px-[5%] w-full overflow-x-hidden">
          {/* One */}
          <div className="flex flex-col w-full">
            <h2 className="text-xl">Dashboards</h2>
            <p className="text-black/50">Three dashboard examples to get you started!</p>
            <span className="border-gray-300 border-t-[1px] my-3"/>
            <ImageGrid colsClasses="xl:grid-cols-3 md:grid-cols-2 grid-cols-1" images={[
              {
                src: "https://steamuserimages-a.akamaihd.net/ugc/2446096169990098970/28B2C397FD21EF1559EF892FEECE25131D43E5A1/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
                alt: "One",
                title: "One",
              },
              {
                src: "https://steamuserimages-a.akamaihd.net/ugc/2446096169990098970/28B2C397FD21EF1559EF892FEECE25131D43E5A1/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
                alt: "Two",
                title: "Two",
              },
              {
                src: "https://steamuserimages-a.akamaihd.net/ugc/2446096169990098970/28B2C397FD21EF1559EF892FEECE25131D43E5A1/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
                alt: "Three",
                title: "Three",
              },
            ]}/>
          </div>
          {/* Two */}
          <div className="flex flex-col w-full">
            <h2 className="text-xl">App Pages</h2>
            <p className="text-black/50">App pages to cover common use pages to help build your app!</p>
            <span className="border-gray-300 border-t-[1px] my-3"/>
            <ImageGrid  colsClasses="xl:grid-cols-4 md:grid-cols-3 grid-cols-1"  images={[
              "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"
            ].map((value) => ({
              src: "https://steamuserimages-a.akamaihd.net/ugc/2446096169990098970/28B2C397FD21EF1559EF892FEECE25131D43E5A1/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
              alt: value,
              title: value,
            }))}/>
          </div>
        </div>
      </div>
    </main>
  );
}