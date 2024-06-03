"use client";

import { shortRelativeTime } from "@/lib/date";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Intersecting } from "@/components/intersecting";

/**
 * @param points {{date: Date, color: string, name: string}[]}
 * @returns {JSX.Element}
 */
export default function Timeline ( { points = [] } )
{
  const [ isVisible, setIsVisible ] = useState( false );

  return (
    <Intersecting
      onVisible={() => setIsVisible( true )}
      onHide={() => setIsVisible( false )}
    >
      <div className="flex flex-row w-full space-x-5">
        <div className="flex flex-col items-end space-y-8 w-12">
          {points.map( ( { date }, index ) => (
            <p
              key={index}
              className={cn(
                "text-xs text-slate-500 transition-all duration-1000 ease-in-out",
                isVisible ? "translate-x-0 opacity-100" : "translate-x-9 opacity-0"
              )}
              style={{ transitionDelay: `${( index + 1 ) * 0.15}s` }}
            >
              {shortRelativeTime( date )}
            </p>
          ) )}
        </div>
        <div
          className={cn(
            "flex flex-col w-1 bg-gray-100 dark:bg-slate-700/25 items-center pt-0.5",
            isVisible && "space-y-[2.39rem]"
          )}
        >
          {points.map( ( { color }, index ) => (
            <span
              key={index}
              className={cn(
                "rounded-full transition-all duration-1000 ease-in-out w-2.5 h-2.5",
                isVisible ? "opacity-100" : "opacity-0"
              )}
              style={{ background: color }}
            />
          ) )}
        </div>
        <div className="flex flex-col items-start space-y-8">
          {points.map( ( { name }, index ) => (
            <p
              key={index}
              className={cn(
                "text-xs text-slate-500 transition-all duration-1000 ease-in-out transform",
                isVisible ? "-translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              )}
              style={{ transitionDelay: `${index * 0.30}s` }}
            >
              {name}
            </p>
          ) )}
        </div>
      </div>
    </Intersecting>
  );
}