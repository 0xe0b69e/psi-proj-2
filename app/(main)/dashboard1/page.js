"use client";

import { Card } from "@/components/card";
import { ArchiveIcon, BookmarkIcon, LayoutIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import BrowserStats from "@/public/browser-stats.svg"
import Processing from "@/public/processing.svg"
import Windows from "@/public/windows.svg"
import Image from "next/image";

export default function Page ()
{
  return (
    <main className="overflow-x-hidden w-full bg-background dark:bg-background-dark transition-all">
      <header className="top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary py-10 h-64 z-0 w-full" />
      {/* TODO: Fix scrolling issue without adding bottom margin of 10000px */}
      <article className="z-10 w-full px-6 xl:px-[5vw] -mt-20 top-20 flex flex-col space-y-6 mb-52">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Card className="w-full flex p-5 items-center justify-between">
            <div className="flex flex-col space-y-3">
              <ArchiveIcon className="w-10 h-10 text-primary-lighter" />
              <p className="text-xl">Powerfull Components</p>
              <p className="text-slate-500 dark:text-slate-400">To create informative visual elements on your pages</p>
            </div>
            <Image src={BrowserStats} alt="browser stats" className="w-32" />
          </Card>
          <Card className="w-full flex p-5 items-center justify-between">
            <div className="flex flex-col space-y-3">
              <BookmarkIcon className="w-10 h-10 text-secondary-lighter" />
              <p className="text-xl">Documentation</p>
              <p className="text-slate-500 dark:text-slate-400">To keep you on track when working with our toolkit</p>
            </div>
            <Image src={Processing} alt="browser stats" className="w-32" />
          </Card>
          <Card className="w-full flex p-5 items-center justify-between">
            <div className="flex flex-col space-y-3">
              <LayoutIcon className="w-10 h-10 text-emerald-500" />
              <p className="text-xl">Pages & Layouts</p>
              <p className="text-slate-500 dark:text-slate-400">To help get you started when building your new UI</p>
            </div>
            <Image src={Windows} alt="browser stats" className="w-32" />
          </Card>
        </div>
      </article>
      <footer className="bottom-0 p-10 justify-between flex">
        <p>Copyright © Someone Somewhere</p>
        <Link href="#">
          <p>ToS</p>
        </Link>
      </footer>
    </main>
  );
}
