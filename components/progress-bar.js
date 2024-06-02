"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Intersecting } from "@/components/intersecting";

export default function ProgressBar ( { progress, color } )
{
  const [ isVisible, setIsVisible ] = useState( false );

  const percentage = isVisible ? progress.percentage : 0;

  return (
    <div className="w-full flex flex-col space-y-2">
      <div className="flex justify-between">
        <p>{progress.name}</p>
        <p>{percentage < 100 ? `${percentage}%` : "Complete!"}</p>
      </div>
      <div className="bg-gray-400 w-full h-5 rounded-md">
        <Intersecting
          onVisible={() => setIsVisible(true)}
          onHide={() => setIsVisible(false)}
        >
          <div
            className={cn(
              "h-full rounded-l-md transition-all duration-1000",
              progress.percentage === 100 && "rounded-r-md",
              progress.percentage === 99 && "rounded-r-sm"
            )}
            style={{ width: `${percentage}%`, background: color }}
          />
        </Intersecting>
      </div>
    </div>
  );
}