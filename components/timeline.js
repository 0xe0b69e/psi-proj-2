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

  const isFirst = ( index ) => index === 0;
  const isLast = ( index ) => index === points.length - 1;

  return (
    <Intersecting
      onVisible={() => setIsVisible( true )}
      onHide={() => setIsVisible( false )}
    >
      <table>
        <tbody>
        {points.map( ( { color, name, date }, index ) => (
          <tr key={index} className="text-xs">
            <td className="p-4 pr-2 items-center">
              <p
                className={cn(
                  "text-end text-nowrap transition-all duration-1000 ease-in-out",
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                )}
                style={{ transitionDelay: `${( index + 1 ) * 0.1}s` }}
              >
                {shortRelativeTime( date )}
              </p>
            </td>
            <td className="px-2 h-full items-center relative">
              <div
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-1000 ease-in-out z-20 relative",
                  isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
                )}
                style={{ background: color, transitionDelay: `${( index + 1 ) * 0.05}s` }}
              />
              <div
                className="w-1 h-14 bg-gray-100 dark:bg-foreground-dark absolute z-10 rounded-md"
                style={{
                  top: `${isLast( index ) ? 10 : isFirst( index ) ? 90 : 50}%`,
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
              />
            </td>
            <td className="px-2">
              <p
                className={cn(
                  "transition-all duration-1000 ease-in-out",
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                )}
                style={{ transitionDelay: `${( index + 1 ) * 0.15}s` }}
              >
                {name}
              </p>
            </td>
          </tr>
        ) )}
        </tbody>
      </table>
    </Intersecting>
  );
}