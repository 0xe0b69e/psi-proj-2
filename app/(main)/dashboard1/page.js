"use client";

import { Card, CardHeader } from "@/components/card";
import { ArchiveIcon, BookmarkIcon, DotsVerticalIcon, LayoutIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import BrowserStats from "@/public/browser-stats.svg";
import Processing from "@/public/processing.svg";
import Windows from "@/public/windows.svg";
import Image from "next/image";
import LineChart from "@/components/line-chart";
import { activity, lineChartData, people, projects } from "@/data/data";
import { useState } from "react";
import { CircularButton } from "@/components/circular-button";
import ProgressBar from "@/components/progress-bar";
import TeamSpirit from "@/public/team-spirit.svg"
import DataReport from "@/public/data-report.svg"
import Timeline from "@/components/timeline";

export default function Page ()
{
  const [ tab, setTab ] = useState( 0 );
  
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
        <div className="flex flex-col 2xl+:flex-row 2xl+:space-x-6 max-2xl+:space-y-6 w-full">
          <div className="w-full 2xl+:w-[67%] flex flex-col space-y-6">
            <Card className="w-full">
              <CardHeader className="items-end">
                <p>fsdfs</p>
                <p>fsdfs</p>
                <p>fsdfs</p>
              </CardHeader>
              <div className="w-full p-5">
                {( () =>
                {
                  switch ( tab )
                  {
                    case 0:
                      return <LineChart data={lineChartData} label="Earnings" />;
                    case 1:
                      return <></>;
                  }
                } )()}
              </div>
            </Card>
            
            <Card className="w-full flex flex-col px-16 py-10 items-center justify-center space-y-2">
              <Image src={DataReport} alt="data report" className="h-40" />
              <p className="text-lg font-semibold">New reports are here! Generate custom reports now!</p>
              <p className="text-slate-500 dark:text-slate-400 text-center">
                Our new report generation system is now online. You can start creating custom reporting for any documents available on your account.
              </p>
              <button className="bg-primary-lighter p-3 px-4 text-white rounded-md hover:bg-primary">
                Get Started
              </button>
            </Card>
            
            <div className="grid grid-cols-1 2xl+:grid-cols-2 gap-6">
              <Card className="w-full">
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
              <Card className="w-full">
                <p>fdsfs</p>
              </Card>
            </div>
          </div>
          <div className="w-full 2xl+:w-[33%] flex flex-col space-y-6">
            <Card className="w-full">
              <CardHeader className="px-5">
                <p className="text-lg text-primary-lighter">People</p>
              </CardHeader>
              <div className="w-full p-5 grid grid-cols-1 gap-5">
                {people.map( ( { name, position, avatar }, index ) => (
                  <div key={index} className="flex flex-row items-center space-x-4 w-full">
                    <Image
                      src={avatar}
                      alt={`${name}'s avatar`}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <Link href="#" className="hover:underline font-bold">
                        {name}
                      </Link>
                      <p className="text-slate-500 dark:text-slate-400">{position}</p>
                    </div>
                    <span className="flex-grow" />
                    <CircularButton onClick={() =>
                    {
                      // TODO
                    }}>
                      <DotsVerticalIcon />
                    </CircularButton>
                  </div>
                ) )}
              </div>
            </Card>
            
            <Card className="w-full">
              <CardHeader className="justify-between px-5">
                <p className="text-lg text-primary-lighter">Progress Tracker</p>
              </CardHeader>
              <div className="flex flex-col space-y-4 p-5">
                {projects.map( ( progress, index ) => (
                  <ProgressBar key={index} progress={progress} index={index} />
                ) )}
              </div>
            </Card>
          
            <Card className="w-full flex flex-col p-16 items-center justify-center space-y-2">
              <Image src={TeamSpirit} alt="team-spirit" className="max-w-[16.25rem]" />
              <p className="text-lg font-semibold">Team Access</p>
              <p className="text-slate-500 dark:text-slate-400 text-center">
                Upgrade your plan to get access to team collaboration tools.
              </p>
              <button className="bg-primary-lighter p-3 px-4 text-white rounded-md hover:bg-primary">
                Upgrade
              </button>
            </Card>
          </div>
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
