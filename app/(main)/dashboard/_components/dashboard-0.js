"use client";

import { Card, CardFooter, CardHeader } from "@/components/card";
import AtWork from "@/public/at-work.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CircularButton } from "@/components/circular-button";
import { ChevronRightIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import ProgressBar from "@/components/progress-bar";
import Link from "next/link";
import Timeline from "@/components/timeline";
import ReportCard from "@/components/report-card";
import BarChart from "@/components/bar-chart";
import LineChart from "@/components/line-chart";
import { activity, barChartData, lineChartData, personnel, progress, reports } from "@/lib/data";
import DataTable from "@/components/data-table";

export default function Page() {
  return (
    <main className="overflow-x-hidden w-full bg-background dark:bg-background-dark transition-all">
      <header className="top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary py-10 h-64 z-0 w-full" />
      {/* TODO: Fix scrolling issue */}
      <article className="z-10 w-full px-6 xl:px-[5vw] -mt-20 top-20 flex flex-col space-y-6 mb-52">
        <div className="flex flex-col 2xl+:flex-row 2xl+:space-x-6 max-2xl+:space-y-6 w-full">
          <Card className={cn("p-12 w-full 2xl+:w-[33%] flex items-center", "max-xl:flex-col xl:flex-row 2xl+:flex-col", "max-xl:justify-normal xl:justify-between 2xl+:justify-normal")}>
            <div className="max-xl:text-center 2xl+:text-center">
              <h1 className="text-primary-lighter text-xl font-bold mb-2">Welcome to SB Admin Pro!</h1>
              <p className="text-gray-700 dark:text-gray-400">
                Browse our fully designed UI toolkit! Browse our prebuilt app pages, <br className="max-xl:hidden xl:inline 2xl+:hidden" />
                components, and utilites, and be sure to look at our full documentation!
              </p>
            </div>
            <Image src={AtWork} alt="at work" className="mt-6 max-w-[28rem]" />
          </Card>
          <div className="grid grid-cols-1 xl:grid-cols-2 w-full xl:gap-6 max-xl:gap-6">
            <Card className="w-full 2xl+:w-full">
              <CardHeader className="justify-between px-5">
                <p className="text-lg text-primary-lighter">Recent Activity</p>
                <CircularButton>
                  <DotsVerticalIcon />
                </CircularButton>
              </CardHeader>
              <div className="p-5">
                <Timeline points={activity} />
              </div>
            </Card>
            <Card className="w-full 2xl+:w-full">
              <CardHeader className="justify-between px-5">
                <p className="text-lg text-primary-lighter">Progress Tracker</p>
                <CircularButton>
                  <DotsVerticalIcon />
                </CircularButton>
              </CardHeader>
              <div className="flex flex-col space-y-4 mb-10 p-5">
                {progress.map((progress, index) => (
                  <ProgressBar key={index} progress={progress} index={index} />
                ))}
              </div>
              <Link href="#">
                <CardFooter className="justify-between px-5">
                  <p className="text-sm">Visit Task Center</p>
                  <ChevronRightIcon />
                </CardFooter>
              </Link>
            </Card>
          </div>
        </div>
        <div className="grid grid-cols-2 2xl+:grid-cols-4 w-full gap-6">
          {reports.map((report, index) => <ReportCard key={index} {...report} />)}
        </div>
        <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
          <Card className="w-full">
            <CardHeader className="justify-between px-5">
              <p className="text-lg text-primary-lighter">Earnings Breakdown</p>
              <CircularButton>
                <DotsVerticalIcon />
              </CircularButton>
            </CardHeader>
            <div className="w-full h-full p-5">
              <LineChart data={lineChartData} label="Earnings" />
            </div>
          </Card>
          <Card className="w-full">
            <CardHeader className="justify-between px-5">
              <p className="text-lg text-primary-lighter">Monthly Revenue</p>
              <CircularButton>
                <DotsVerticalIcon />
              </CircularButton>
            </CardHeader>
            <div className="w-full h-full p-5 mt-[9%]">
              <BarChart data={barChartData} />
            </div>
          </Card>
        </div>
        <Card className="w-full">
          <CardHeader className="px-5">
            <p className="text-lg text-primary-lighter">Monthly Revenue</p>
          </CardHeader>
          
          <div className="w-full h-full p-5">
            <DataTable data={personnel} />
          </div>
        </Card>
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
