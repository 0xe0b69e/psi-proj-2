"use client";

import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { Intersecting } from "@/components/intersecting";
import { percentage as calcPercentage } from "@/lib/meth";

/**
 * @param progress {{percentage: number, color: string, name: string}}
 * @param index {number}
 * @returns {JSX.Element}
 */
export default function ProgressBar ( { progress, index } )
{
  const [ isVisible, setIsVisible ] = useState( false );
  const [ currentWidth, setCurrentWidth ] = useState( 0 );
  const progressBarRef = useRef( null );
  const progressBarContainerRef = useRef( null );
  let animationFrameId = null;

  const timeout = index * 100 ?? 0;

  const percentage = isVisible ? progress.percentage : 0;
  const animationPercentage = calcPercentage( currentWidth, progressBarContainerRef.current?.offsetWidth );

  useEffect( () =>
  {
    return () =>
    {
      if ( animationFrameId )
        cancelAnimationFrame( animationFrameId );
    };
  }, [ animationFrameId ] );

  const updateWidth = () =>
  {
    if ( progressBarRef.current )
    {
      setCurrentWidth( progressBarRef.current.offsetWidth );
      animationFrameId = requestAnimationFrame( updateWidth );
    }
  };

  return (
    <div className="w-full flex flex-col space-y-2">
      <div className="flex justify-between">
        <p>{progress.name}</p>
        <p>
          {
            animationPercentage < 100
              ? `${animationPercentage}%` :
              "Complete!"
          }
        </p>
      </div>
      <div
        className="bg-gray-200 dark:bg-gray-700/50 w-full h-5 rounded-md"
        ref={progressBarContainerRef}
      >
        <Intersecting
          onVisible={() => setTimeout( () =>
          {
            setIsVisible( true );
            updateWidth();
          }, timeout )}

          onHide={() => setTimeout( () =>
          {
            setIsVisible( false );
            if ( animationFrameId )
              cancelAnimationFrame( animationFrameId );
          }, timeout )}
        >
          <div
            ref={progressBarRef}
            className={cn(
              "h-full rounded-l-md transition-all duration-700",

              // `duration-0` is for instant rounding
              animationPercentage === 100 && "rounded-r-md duration-0",
              animationPercentage === 99 && "rounded-r-sm duration-0"
            )}
            style={{ width: `${percentage}%`, background: progress.color }}
          />
        </Intersecting>
      </div>
    </div>
  );
}