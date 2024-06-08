"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PiTelegramLogo, PiXLogo } from "react-icons/pi";
import { GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";
import { delius } from "@/lib/fonts";
import { BsMusicNote } from "react-icons/bs";
import TailwindConfig from "@/tailwind.config";
import Image from "next/image";

export default function Page ()
{
  const introTimeouts = useMemo( () => [ 2000, 2000, 1100, 1100, 2200, 2000, 2000, 1100, 1100, 2000 ], [] );
  const chapterTimeouts = useMemo( () => [ 2000, 2000, 2000, 10700, 0 ], [] ); // TODO: Last index doesn't do shit
  
  const [ interacted, setInteracted ] = useState( false ); // Make sure I can play song
  const [ audio, setAudio ] = useState( null ); // Set song
  const [ introScaling, setIntroScaling ] = useState( 1 ); // Scale the page down
  const [ isReady, setReady ] = useState( false ); // Page is fully scaled down
  const [ chapter, setChapter ] = useState( 0 ); // Self-explanatory
  const [ initialAnimationComplete, setInitialAnimationComplete ] = useState( false ); // Avoid delaying on-hover animations
  const [ showPopup, setShowPopup ] = useState( false );
  const [ didEnd, setEnd ] = useState( false );
  
  useEffect( () =>
  {
    const audio = new Audio( "https://j3rzy.dev/files/AGST%20%20-%20Fights.mp3" );
    audio.volume = 1;
    
    audio.addEventListener( "play", () =>
    {
      if ( !interacted ) setShowPopup( true );
      setInteracted( true );
      setTimeout( () => setShowPopup( false ), 5000 );
    } );
    
    audio.addEventListener( "ended", () => setEnd( true ) );
    
    setAudio( audio );
  }, [ interacted ] );
  
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
      {/* End screen */}
      <div className={cn(
        "fixed w-screen h-screen top-0 left-0 z-20 flex items-center justify-center",
      )}>
        <div
          className={cn(
            "w-1/2 h-full left-0 top-0 fixed bg-foreground-dark ease-in-out",
            !didEnd && "-translate-x-full",
          )}
          style={{ transitionDuration: "2s", transitionDelay: "0s" }}
        />
        <div
          className={cn(
            "w-1/2 h-full right-0 top-0 fixed bg-foreground-dark ease-in-out",
            !didEnd && "translate-x-full",
          )}
          style={{ transitionDuration: "2s", transitionDelay: "0.5s" }}
        />
        <div className={cn(
          "text-white flex flex-col z-30 items-center justify-center space-y-3",
          "ease-in-out transition-all duration-1000",
          didEnd ? "-translate-y-32 opacity-100" : "opacity-0",
        )}>
          <Image
            src="https://avatars.githubusercontent.com/u/119805198?v=4"
            alt="Creator's avatar"
            width={200}
            height={200}
            className={cn(
              "rounded-full",
              "ease-in-out transition-all duration-1000",
              didEnd ? "opacity-100" : "opacity-0",
            )}
            style={{ transitionDelay: "1.5s" }}
          />
          <p
            className={cn(
              "text-2xl text-slate-500",
              "ease-in-out transition-all duration-1000",
              didEnd ? "opacity-100" : "opacity-0",
            )}
            style={{ transitionDelay: "2s" }}
          >
            @0xe0b69e
          </p>
          <Link
            href="https://j3rzy.dev/"
            className={cn(
              "flex flex-row text-sky-500 hover:underline items-center space-x-1",
              "ease-in-out transition-all duration-1000",
              didEnd ? "opacity-100" : "opacity-0",
            )}
            style={{ transitionDelay: "3s" }}
          >
            <GlobeIcon className="w-4 h-4" />
            <p>j3rzy.dev</p>
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
          if ( audio ) audio.play();
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
            case 4:
              return (
                <div className="fixed z-10 flex items-center justify-center h-screen w-screen top-0 left-0">
                  <p
                    className={cn(
                      "inline-block text-emerald-400 text-4xl font-mono",
                      "animate-scroll"
                    )}
                    style={{
                      textShadow: "0px 0px 5px rgba(0, 255, 0, 1)",
                    }}
                  >
                    fdsfkjlghdkfjghkdfjghdkfjghjkh<br />
                    fdsfkjlghdkfjghkdfjghdkfjghjkh<br />
                    fdsfkjlghdkfjghkdfjghdkfjghjkh<br />
                    fdsfkjlghdkfjghkdfjghdkfjghjkh<br />
                    fdsfkjlghdkfjghkdfjghdkfjghjkh<br />
                    fdsfkjlghdkfjghkdfjghdkfjghjkh<br />
                    fdsfkjlghdkfjghkdfjghdkfjghjkh<br />
                    fdsfkjlghdkfjghkdfjghdkfjghjkh<br />
                    fdsfkjlghdkfjghkdfjghdkfjghjkh<br />
                    fdsfkjlghdkfjghkdfjghdkfjghjkh<br />
                  </p>
                </div>
              );
            default:
              const firstPartOfText = [ "Using", "In", "With help from", "By" ];
              const secondPartOfText = [ "next.js", "JavaScript", "Github copilot", "0xe0b69e" ];
              
              return (
                <h1
                  className="text-4xl duration-500 ease-in-out"
                  style={{
                    fontSize: `${2 + chapter}rem`,
                    lineHeight: `${4 + chapter}rem`,
                    textShadow: `0px 0px 5px ${TailwindConfig.theme.extend.colors.primary.lighter}`,
                  }}
                >
                  {firstPartOfText[ chapter ]} <span className="font-mono">{secondPartOfText[ chapter ]}</span>
                </h1>
              );
          }
        } )()}
        {/* Social media >:3 */}
        <div
          className={cn(
            // Width: 10rem, Height: 9rem
            "fixed flex flex-col space-y-2 z-30 bottom-2 right-2 h-36 transition-all duration-1000 ease-in-out p-2",
            "w-full sm:w-40",
            !didEnd && "max-sm:left-2"
          )}
          style={didEnd ? (
            {
              // To the right, To the bottom
              transform: "translate(calc(-50vw + 53%), 0)", // Why 53%? Idk, it just works
              transitionDelay: "1.5s"
            }
          ) : ( {} )}
        >
          <Link
            target="_blank"
            href="https://x.com/0xe0b69e"
            className={cn(
              "text-white flex justify-between items-center bg-black p-2 space-x-4 rounded-md",
              "ease-in-out",
              didEnd ? "hover:scale-110" : "hover:-translate-x-4",
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
              "ease-in-out",
              didEnd ? "hover:scale-110" : "hover:-translate-x-4",
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
              "ease-in-out",
              didEnd ? "hover:scale-110" : "hover:-translate-x-4",
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