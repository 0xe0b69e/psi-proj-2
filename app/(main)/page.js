"use client";

import { cn } from "@/lib/utils";
import { ImageGrid } from "@/components/image-grid";
import { Direction } from "@/lib/enums";

export default function Page ()
{
  return (
    <main className="overflow-x-hidden h-full w-full bg-background dark:bg-background-dark transition-all">
      <header className="bg-gradient-to-r from-primary to-secondary py-10 mb-4 h-64 flex items-center justify-center">
        <div className="w-full text-center text-white text-2xl">
          <h1>Welcome to SB Admin Pro</h1>
          <p className="mb-0 text-white/50 text-sm">A professionally designed admin panel template built with
            Bootstrap 5</p>
        </div>
      </header>
      <article className="flex flex-col px-[5vw] w-full overflow-x-hidden">
        {/* One */}
        <div className="flex flex-col w-full max-md:items-center">
          <h2 className="text-xl">Dashboards</h2>
          <p className="text-slate-500 dark:text-slate-400">Three dashboard examples to get you started!</p>
          <span className="border-gray-300 border-t-[1px] my-3 w-full" />
          <ImageGrid fadeDirection={Direction.LEFT} colsClasses="xl:grid-cols-3 md:grid-cols-2 grid-cols-1" images={[
            {
              src: "https://via.placeholder.com/1920x1080.png?text=Placeholder",
              alt: "One",
              title: "One",
            },
            {
              src: "https://via.placeholder.com/1920x1080.png?text=Placeholder",
              alt: "Two",
              title: "Two",
            },
            {
              src: "https://via.placeholder.com/1920x1080.png?text=Placeholder",
              alt: "Three",
              title: "Three",
            },
          ]} />
        </div>
        {/* Two */}
        <div className="flex flex-col w-full max-md:items-center">
          <h2 className="text-xl">App Pages</h2>
          <p className="text-slate-500 dark:text-slate-400">App pages to cover common use pages to help build your
            app!</p>
          <span className="border-gray-300 border-t-[1px] my-3 w-full" />
          <ImageGrid colsClasses="xl:grid-cols-4 md:grid-cols-3 grid-cols-1" images={[
            "One", "Two", "Three", "Four",
            "Five", "Six", "Seven", "Eight",
            "Nine", "Ten", "Eleven", "Twelve",
            "Thirteen", "Fourteen", "Fifteen", "Sixteen",
            "Seventeen", "Eighteen", "Nineteen", "Twenty",
          ].map( ( value ) => ( {
            src: "https://via.placeholder.com/1920x1080.png?text=Placeholder",
            alt: value,
            title: value,
          } ) )} />
        </div>
      </article>
    </main>
  );
}