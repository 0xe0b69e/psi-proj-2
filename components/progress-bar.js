"use client";

import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { Intersecting } from "@/components/intersecting";
import { percentage as calcPercentage } from "@/lib/meth";

export default function ProgressBar ( { progress, index } )
{
  const [ isVisible, setIsVisible ] = useState( false );
  const [ currentWidth, setCurrentWidth ] = useState( 0 );
  const progressBarRef = useRef( null );
  const progressBarContainerRef = useRef( null );
  let animationFrameId = null;

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
        className="bg-gray-400 w-full h-5 rounded-md"
        ref={progressBarContainerRef}
      >
        <Intersecting
          onVisible={() => setTimeout( () =>
          {
            setIsVisible( true );
            updateWidth();
          }, index * 100 ?? 0 )}

          onHide={() => setTimeout( () =>
          {
            setIsVisible( false );
            if ( animationFrameId )
              cancelAnimationFrame( animationFrameId );
          }, index * 100 ?? 0 )}
        >
          <div
            ref={progressBarRef}
            className={cn(
              "h-full rounded-l-md transition-all duration-700",
              progress.percentage === 100 && "rounded-r-md",
              progress.percentage === 99 && "rounded-r-sm"
            )}
            style={{ width: `${percentage}%`, background: progress.color }}
          />
        </Intersecting>
      </div>
    </div>
  );
}