"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export default function Page ()
{
  const timeouts = useMemo( () => [ 2000, 2000, 1100, 1100, 2200, 2000, 2000, 1100, 1100, 2000 ], [] );
  
  const [ interacted, setInteracted ] = useState( false );
  const [ audio, setAudio ] = useState( null );
  const [ introScaling, setIntroScaling ] = useState( 1 );
  const [ isReady, setReady ] = useState( false );
  
  useEffect( () =>
  {
    const audio = new Audio( "https://j3rzy.dev/files/AGST%20%20-%20Fights.mp3" );
    audio.loop = true;
    audio.volume = 1;
    setAudio( audio );
  }, [] );
  
  useEffect( () =>
  {
    let intervalId;
    
    if ( interacted && audio )
    {
      audio.play();
      if ( introScaling > 0 ) intervalId = setInterval( () =>
      {
        setIntroScaling( prevScale => prevScale > 0 ?
          Number( ( prevScale - ( 1 / timeouts.length ) ).toFixed( 1 ) ) :
          0
        );
      }, timeouts[ Math.min( Math.round( ( 1 - introScaling ) * 10 ), timeouts.length - 1 ) ] );
      else
        setReady( true );
    }
    
    return () =>
    {
      if ( intervalId )
      {
        clearInterval( intervalId );
      }
    };
  }, [ interacted, audio, timeouts, introScaling ] );
  
  return (
    <main
      className="min-w-full min-h-full bg-foreground-dark text-primary-lighter p-10 flex items-center justify-center"
    >
      {/* To be able to play music and stuff */}
      <div
        className={cn(
          "fixed w-screen h-screen cursor-pointer flex items-center justify-center",
          "text-white bg-primary-lighter px-4 py-2 shadow-lg",
          "z-50 duration-75",
        )}
        style={{ scale: `${introScaling}` }}
        onClick={() => setInteracted( true )}
      >
        <p className="font-mono text-2xl cursor-pointer">
          Press to continue
        </p>
      </div>
      {/* Actual content */}
      <div className={cn(
        "transition-all duration-1000 ease-in-out",
        interacted ? "opacity-100" : "opacity-0",
      )}>
        <h1
          className={cn(
            "text-4xl transition-all duration-1000 ease-in-out",
            isReady ? "text-white" : "text-primary"
          )}
          style={{
            // translate( Offset X, Offset Y )
            // Offset X: Right
            // Offset Y: Down
            transform: `translate(0, 0)`
          }}
        >
          By <span className="font-mono">0xe0b69e</span>
        </h1>
      </div>
    </main>
  );
}