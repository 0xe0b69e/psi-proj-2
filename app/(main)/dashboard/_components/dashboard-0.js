"use client";

import { Card, CardFooter, CardHeader } from "@/components/card";
import AtWork from "@/public/at-work.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CircularButton } from "@/components/circular-button";
import { CalendarIcon, ChevronRightIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import ProgressBar from "@/components/progress-bar";
import Link from "next/link";
import Timeline from "@/components/timeline";
import ReportCard from "@/components/report-card";

export default function Page ()
{
  const progress = [
    { name: "Server Migration", percentage: 20, color: "#e81500" },
    { name: "Sales Tracking", percentage: 40, color: "#f4a100" },
    { name: "Customer Database", percentage: 60, color: "#0061f2" },
    { name: "Payout Details", percentage: 80, color: "#00cfd5" },
    { name: "Account Setup", percentage: 100, color: "#00ac69" },
  ];
  
  const now = new Date();
  const activity = [
    {
      date: new Date( now.getTime() - 27 * 60 * 1000 ),
      color: "#00ac69",
      name: "New order placed! Order #2912 has been successfully placed."
    }, // 27 min ago
    {
      date: new Date( now.getTime() - 58 * 60 * 1000 ),
      color: "#0061f2",
      name: "Your weekly report has been generated and is ready to view."
    }, // 58 min ago
    {
      date: new Date( now.getTime() - 2 * 60 * 60 * 1000 ),
      color: "#6900c7",
      name: "New user Valerie Luna has registered"
    }, // 2 hours ago
    { date: new Date( now.setDate( now.getDate() - 1 ) ), color: "#f4a100", name: "Server activity monitor alert" }, // 1 day ago
    {
      date: new Date( now.setDate( now.getDate() - 1 ) ),
      color: "#00ac69",
      name: "New order placed! Order #2911 has been successfully placed."
    }, // 1 day ago
    {
      date: new Date( now.setDate( now.getDate() - 1 ) ),
      color: "#6900c7",
      name: "Details for Marketing and Planning Meeting have been updated."
    }, // 1 day ago
    {
      date: new Date( now.setDate( now.getDate() - 2 ) ),
      color: "#00ac69",
      name: "New order placed! Order #2910 has been successfully placed."
    }, // 2 days ago
  ];
  
  const reports = [
    {
      text: "Earnings (Monthly)",
      icon: <CalendarIcon />,
      color: "#0061f2",
      value: 40000,
      footerText: "View Report",
      url: "#"
    }
  ];
  
  return (
    <main className="relative overflow-x-hidden h-full w-full bg-background dark:bg-background-dark transition-all">
      <header
        className="top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary py-10 h-64 z-0 w-full"
      />
      <article className="z-10 w-full overflow-x-hidden px-6 xl:px-[5vw] -mt-20 flex flex-col space-y-6 pb-2">
        <div className="relative flex flex-col 2xl+:flex-row 2xl+:space-x-6 max-2xl+:space-y-6 w-full">
          <Card
            className={cn(
              "p-12 w-full 2xl+:w-[33%] flex items-center",
              "max-xl:flex-col xl:flex-row 2xl+:flex-col",
              "max-xl:justify-normal xl:justify-between 2xl+:justify-normal",
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
                {progress.map( ( progress, index ) => (
                  <ProgressBar key={index} progress={progress} index={index} />
                ) )}
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
          {reports.map( ( report, index ) => <ReportCard key={index} {...report} />)}
        </div>
      </article>
    </main>
  );
}