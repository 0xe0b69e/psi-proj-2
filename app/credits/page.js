"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PiTelegramLogo, PiXLogo } from "react-icons/pi";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { delius } from "@/lib/fonts";
import { BsMusicNote } from "react-icons/bs";

export default function Page ()
{
  const introTimeouts = useMemo( () => [ 2000, 2000, 1100, 1100, 2200, 2000, 2000, 1100, 1100, 2000 ], [] );
  const chapterTimeouts = useMemo( () => [ 2000, 2000, 2000, 10660, 0 ], [] ); // TODO: Last index doesn't do shit
  
  const [ interacted, setInteracted ] = useState( false ); // Make sure I can play song
  const [ audio, setAudio ] = useState( null ); // Set song
  const [ introScaling, setIntroScaling ] = useState( 1 ); // Scale the page down
  const [ isReady, setReady ] = useState( false ); // Page is fully scaled down
  const [ chapter, setChapter ] = useState( 0 ); // Self-explanatory
  const [ initialAnimationComplete, setInitialAnimationComplete ] = useState( false ); // Avoid delaying on-hover animations
  const [ showPopup, setShowPopup ] = useState( false );
  
  useEffect( () =>
  {
    const audio = new Audio( "https://j3rzy.dev/files/AGST%20%20-%20Fights.mp3" );
    audio.loop = true;
    audio.volume = 0.5;
    setAudio( audio );
  }, [] );
  
  useEffect( () =>
  {
    let intervalId;
    
    if ( interacted && audio )
    {
      if ( introScaling > 0 ) intervalId = setInterval( () =>
      {
        setIntroScaling( prevScale => prevScale > 0 ?
          Number( ( prevScale - ( 1 / introTimeouts.length ) ).toFixed( 1 ) ) :
          0
        );
      }, introTimeouts[ Math.min( Math.round( ( 1 - introScaling ) * 10 ), introTimeouts.length - 1 ) ] );
      else
        setTimeout( () => setReady( true ), 100 );
    }
    
    if ( isReady )
    {
      if ( chapter < chapterTimeouts.length - 1 ) intervalId = setInterval( () =>
      {
        setChapter( prevChapter => prevChapter + 1 );
      }, chapterTimeouts[ chapter ] );
    }
    
    return () =>
    {
      if ( intervalId )
        clearInterval( intervalId );
    };
  }, [ interacted, introTimeouts, introScaling, audio, isReady, chapter, chapterTimeouts ] );
  
  useEffect( () =>
  {
    let intervalId;
    
    if ( isReady ) intervalId = setTimeout( () =>
    {
      setInitialAnimationComplete( true );
    }, 3000 ); // Longest social media link transition delay
    
    return () =>
    {
      if ( intervalId )
        clearTimeout( intervalId );
    };
  }, [ isReady ] );
  
  return (
    <main
      className={cn(
        "min-w-full min-h-full bg-background-dark text-primary-lighter p-10 flex justify-center items-center overflow-hidden",
        delius.className
      )}
    >
      {/* "Currently Playing" pop-up */}
      <div
        className={cn(
          "z-50 fixed right-0 top-4 px-4 py-2 bg-foreground-dark text-white rounded-l-lg flex flex-row space-x-4 items-center",
          "w-72 duration-1000 ease-in-out cursor-pointer",
          showPopup ? "translate-x-0" : "translate-x-72"
        )}
        onClick={() => setShowPopup( false )}
      >
        <BsMusicNote className="w-10 h-10" />
        <div className="h-full flex flex-col space-y-1 items-start">
          <p className="text-xl">Currently playing</p>
          <Link
            target="_blank"
            href="https://open.spotify.com/track/1fhcnVjHnc2pY3scfsNT9p?si=afb785f2d62346b8"
            className="text-slate-400"
          >
            AGST - Fights
          </Link>
        </div>
      </div>
      {/* To be able to play music and stuff - "Dramatic intro" or smth */}
      {/* Inspired by https://www.youtube.com/watch?v=GjEImPidK4g's outro */}
      <div
        className={cn(
          "fixed w-screen h-screen flex items-center justify-center",
          "text-white bg-gradient-to-r from-primary to-secondary px-4 py-2 shadow-lg",
          "z-40 duration-75",
          introScaling < 1 && "rounded-lg",
          !interacted && "cursor-pointer",
          introScaling <= 0 && "rounded-full"
        )}
        style={{ scale: `${introScaling}` }}
        onClick={() =>
        {
          if ( audio ) audio.play().then( () =>
          {
            if ( !interacted ) setShowPopup( true );
            setInteracted( true );
            setTimeout( () => setShowPopup( false ), 5000 );
          } );
        }}
      >
        <p className={cn( "text-2xl select-none", !interacted && "cursor-pointer" )}>
          Press to continue
        </p>
      </div>
      {/* Actual content */}
      <div
        className={cn(
          "transition-all ease-in-out overflow-hidden",
          isReady ? "opacity-100" : "opacity-0",
        )}
        style={{ transitionDuration: "2s" }}
      >
        {/* Content!! */}
        {( () =>
        {
          switch ( chapter )
          {
            case 0:
              return (
                <h1 className="text-4xl animate-pulse">
                  By <span className="font-mono">0xe0b69e</span>
                </h1>
              );
            case 1:
              return (
                <h1 className="text-4xl">
                  In <span className="font-mono">JavaScript</span>
                </h1>
              );
            case 2:
              return (
                <h1 className="text-4xl">
                  For <span className="font-mono">not me</span>
                </h1>
              );
            case 3:
              return (
                <h1 className="text-4xl">
                  Using <span className="font-mono">next.js</span>
                </h1>
              );
            case 4:
              audio.volume = 1;
              return (
                <div className="flex items-center justify-center">
                  <div className="text-white text-lg font-bold tracking-wide uppercase flex items-center justify-center">
                    <p className="marquee inline-block font-mono">
                      Turmoil has engulfed the<br />
                      Galactic Republic. The taxation<br />
                      of trade routes to outlying star<br />
                      systems is in dispute.<br />
                      <br />
                      Hoping to resolve the matter<br />
                      with a blockade of deadly<br />
                      battleships, the greedy Trade<br />
                      Federation has stopped all<br />
                      shipping to the small planet<br />
                      of Naboo.<br />
                      <br />
                      While the Congress of the<br />
                      Republic endlessly debates<br />
                      this alarming chain of events,<br />
                      the Supreme Chancellor has<br />
                      secretly dispatched two Jedi<br />
                      Knights, the guardians of<br />
                      peace and justice in the<br />
                      galaxy, to settle the conflict....
                    </p>
                  </div>
                </div>
              );
          }
        } )()}
        {/* Social media >:3 */}
        <div className="fixed bottom-2 right-2 flex flex-col space-y-2">
          <Link
            target="_blank"
            href="https://x.com/0xe0b69e"
            className={cn(
              "text-white flex justify-between items-center bg-black p-2 space-x-4 rounded-md",
              "ease-in-out hover:-translate-x-4",
              isReady ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
              initialAnimationComplete ? "duration-300" : "duration-1000"
            )}
            style={initialAnimationComplete ? ( {} ) : ( { transitionDelay: "3s" } )}
          >
            <PiXLogo className="w-6 h-6" />
            <p>X (Twitter)</p>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/0xe0b69e"
            className={cn(
              "text-white flex justify-between items-center bg-[#010409] p-2 space-x-4 rounded-md",
              "ease-in-out hover:-translate-x-4",
              isReady ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
              initialAnimationComplete ? "duration-300" : "duration-1000"
            )}
            style={initialAnimationComplete ? ( {} ) : ( { transitionDelay: "2s" } )}
          >
            <GitHubLogoIcon className="w-6 h-6" />
            <p>Github</p>
          </Link>
          <Link
            target="_blank"
            href="https://t.me/xe0b69e"
            className={cn(
              "text-white flex justify-between items-center bg-[#25a3e1] p-2 space-x-4 rounded-md",
              "ease-in-out hover:-translate-x-4",
              isReady ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0",
              initialAnimationComplete ? "duration-300" : "duration-1000"
            )}
            style={initialAnimationComplete ? ( {} ) : ( { transitionDelay: "1s" } )}
          >
            <PiTelegramLogo className="w-6 h-6" />
            <p>Telegram</p>
          </Link>
        </div>
      </div>
    </main>
  );
}