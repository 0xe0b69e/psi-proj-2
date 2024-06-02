"use client";

import { Card } from "@/components/card";
import AtWork from "@/public/at-work.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CircularButton } from "@/components/circular-button";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import ProgressBar from "@/components/progress-bar";

export default function Page ()
{
  const progress = [
    { name: "Server Migration", percentage: 20 },
    { name: "Sales Tracking", percentage: 40 },
    { name: "Customer Database", percentage: 60 },
    { name: "Payout Details", percentage: 80 },
    { name: "Account Setup", percentage: 100 },
  ];

  return (
    <main className="relative overflow-x-hidden h-full w-full bg-background dark:bg-background-dark transition-all">
      <header
        className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary py-10 h-64 z-0 w-full"
      />
      <article className="relative z-10 w-full overflow-x-hidden px-6 xl:px-[5vw] h-full">
        <div className="relative flex flex-col 2xl+:flex-row 2xl+:space-x-6 max-2xl+:space-y-6 w-full top-40">
          <Card
            className={cn(
              "p-12 w-full 2xl+:w-[33%] flex items-center",
              "max-xl:flex-col xl:flex-row 2xl+:flex-col",
              "max-xl:justify-normal xl:justify-between 2xl+:justify-normal"
            )}
          >
            <div className="max-xl:text-center 2xl+:text-center">
              <h1 className="text-primary-lighter text-xl font-bold mb-2">Welcome to SB Admin Pro!</h1>
              <p className="text-gray-700 dark:text-gray-400">
                Browse our fully designed UI toolkit! Browse our prebuilt app pages, <br
                className="max-xl:hidden xl:inline 2xl+:hidden" />
                components, and utilites, and be sure to look at our full documentation!
              </p>
            </div>
            <Image src={AtWork} alt="at work" className="mt-6 max-w-[28rem]" />
          </Card>
          <div className="flex flex-col xl:flex-row 2xl+:w-[66%] xl:space-x-6 max-xl:space-y-6">
            <Card className="w-full 2xl+:w-[50%] p-5">
              <div className={cn(
                "h-14 -m-5 mb-5 w-[calc(100%+2.5rem)]",
                "bg-gray-300/50 dark:bg-gray-900/25 border-gray-300 dark:border-gray-900/75",
                "rounded-t-md border-b-[1px]",
                "flex items-center justify-between px-5",
              )}>
                <p className="text-lg text-primary-lighter">Recent Activity</p>
                <CircularButton>
                  <DotsVerticalIcon />
                </CircularButton>
              </div>
            </Card>
            <Card className="w-full 2xl+:w-[50%] p-5">
              <div className={cn(
                "h-14 -m-5 mb-5 w-[calc(100%+2.5rem)]",
                "bg-gray-300/50 dark:bg-gray-900/25 border-gray-300 dark:border-gray-900/75",
                "rounded-t-md border-b-[1px]",
                "flex items-center justify-between px-5",
              )}>
                <p className="text-lg text-primary-lighter">Progress Tracker</p>
                <CircularButton>
                  <DotsVerticalIcon />
                </CircularButton>
              </div>
              <div className="flex flex-col space-y-4">
                <ProgressBar progress={progress[4]} color="#00ff00" />
              </div>
            </Card>
          </div>
        </div>
      </article>
    </main>
  );
}