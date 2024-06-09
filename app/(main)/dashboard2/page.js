"use client";

import { Card } from "@/components/card";
import Image from "next/image";
import statisticsSvg from "@/public/statistics.svg";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { BiMoney, BiTrendingUp } from "react-icons/bi";

export default function Page ()
{
  return (
    <main className="overflow-x-hidden w-full bg-background dark:bg-background-dark transition-all">
      <article className="z-10 w-full px-6 xl:px-[5vw] mt-32 top-20 flex flex-col space-y-6">
        <Card className="w-full p-5 flex flex-row justify-between items-center space-x-5">
          <div className="flex flex-col space-y-2">
            <p className="text-xl text-primary-lighter font-semibold">Welcome back, your dashboard is ready!</p>
            <p>
              Great job, your affiliate dashboard is ready to go!
              You can view sales, generate links, prepare coupons, and download affiliate reports using this dashboard.
            </p>
            <button className={cn(
              "bg-primary text-white py-3 px-4 flex flex-row w-36 items-center space-x-2 rounded-md",
              "transition-all duration-300 ease-in-out hover:bg-primary-lighter",
            )}>
              <p>Get Started</p>
              <ArrowRightIcon />
            </button>
          </div>
          <Image src={statisticsSvg} alt="Statistics" className="max-w-full h-auto -mt-10" />
        </Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <Card className="flex flex-row p-5 border-l-4 border-blue-800 justify-between items-center">
            <div className="flex flex-col space-y-2">
              <p className="text-blue-800 text-sm">Earnings (monthly)</p>
              <p className="text-lg">$4,390</p>
              <div className="flex flex-row space-x-1 text-green-500 items-center">
                <BiTrendingUp />
                <p className="text-xs">12%</p>
              </div>
            </div>
            <BiMoney className="w-14 h-14" />
          </Card>
          <Card className="flex flex-row p-5 border-l-4 border-blue-800 justify-between items-center">
            <div className="flex flex-col space-y-2">
              <p className="text-blue-800 text-sm">Earnings (monthly)</p>
              <p className="text-lg">$4,390</p>
              <div className="flex flex-row space-x-1 text-green-500 items-center">
                <BiTrendingUp />
                <p className="text-xs">12%</p>
              </div>
            </div>
            <BiMoney className="w-14 h-14" />
          </Card>
          <Card className="flex flex-row p-5 border-l-4 border-blue-800 justify-between items-center">
            <div className="flex flex-col space-y-2">
              <p className="text-blue-800 text-sm">Earnings (monthly)</p>
              <p className="text-lg">$4,390</p>
              <div className="flex flex-row space-x-1 text-green-500 items-center">
                <BiTrendingUp />
                <p className="text-xs">12%</p>
              </div>
            </div>
            <BiMoney className="w-14 h-14" />
          </Card>
          <Card className="flex flex-row p-5 border-l-4 border-blue-800 justify-between items-center">
            <div className="flex flex-col space-y-2">
              <p className="text-blue-800 text-sm">Earnings (monthly)</p>
              <p className="text-lg">$4,390</p>
              <div className="flex flex-row space-x-1 text-green-500 items-center">
                <BiTrendingUp />
                <p className="text-xs">12%</p>
              </div>
            </div>
            <BiMoney className="w-14 h-14" />
          </Card>
        </div>
      </article>
    </main>
  );
}