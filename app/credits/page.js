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
                  <div className="text-white text-lg tracking-wide flex items-center justify-center">
                    <p
                      className="marquee inline-block text-yellow-200 text-4xl font-mono"
                      style={{
                        transform: "rotateX(20deg) translateY(25%)",
                        transformOrigin: "50% 100%",
                        perspective: "300px",
                        textShadow: "0px 0px 5px rgba(255, 255, 0, 1)",
                        textAlign: "justify"
                    }}
                    >
                      {/* Yes, this is AI generated */}
                      Turmoil has engulfed the Galactic Republic.<br />
                      The taxation of trade routes to outlying<br />
                      star systems is in dispute. This has<br />
                      created unrest and discontent across<br />
                      the galaxy, as many systems rely heavily<br />
                      on these routes for commerce and survival.<br />
                      <br />
                      Hoping to resolve the matter with a blockade<br />
                      of deadly battleships, the greedy Trade<br />
                      Federation has stopped all shipping to the<br />
                      small planet of Naboo. This action has caused<br />
                      widespread panic and suffering among the Naboo<br />
                      citizens, who are now facing shortages of<br />
                      essential supplies.<br />
                      <br />
                      While the Congress of the Republic endlessly<br />
                      debates this alarming chain of events, the<br />
                      Supreme Chancellor has secretly dispatched<br />
                      two Jedi Knights, the guardians of peace and<br />
                      justice in the galaxy, to settle the conflict.<br />
                      These Jedi Knights, known for their wisdom and<br />
                      combat prowess, are expected to negotiate a<br />
                      peaceful resolution and prevent further escalation.<br />
                      <br />
                      However, as the Jedi approach the blockade, they sense<br />
                      that the situation is far more complex than it appears.<br />
                      The Trade Federation&apos;s motives seem to be influenced<br />
                      by a darker force, one that seeks to exploit the<br />
                      turmoil for its gain. The Jedi must uncover<br />
                      this hidden threat and thwart its plans before it<br />
                      plunges the entire galaxy into chaos.<br />
                      <br />
                      Upon arriving on Naboo, the Jedi Knights meet with<br />
                      the planet&apos;s leaders, including the courageous<br />
                      Queen Amidala. Together, they devise a plan to evade<br />
                      the blockade and bring their plight to the attention<br />
                      of the Republic. Their journey is fraught with danger,<br />
                      as they face numerous obstacles and adversaries determined<br />
                      to maintain the blockade and subjugate Naboo.<br />
                      <br />
                      As the Jedi continue their mission, they discover that<br />
                      the Trade Federation&apos;s blockade is merely a symptom<br />
                      of a much larger conspiracy. A shadowy Sith Lord is orchestrating<br />
                      events from the shadows, manipulating both the Republic and the<br />
                      Federation to achieve his nefarious goals. The Jedi must act swiftly<br />
                      to expose this dark force and prevent it from seizing control of the galaxy.<br />
                      <br />
                      Meanwhile, back in the Republic, political intrigue and betrayal<br />
                      threaten to undermine the efforts to resolve the crisis.<br />
                      Senators with hidden agendas vie for power, and the Chancellor<br />
                      struggles to maintain order amidst the chaos. The fate of Naboo,<br />
                      and indeed the entire galaxy, hangs in the balance as the forces<br />
                      of good and evil clash in a battle for supremacy.<br />
                      <br />
                      The Jedi Knights, with their unwavering dedication to justice,<br />
                      become beacons of hope for the oppressed people of Naboo.<br />
                      Their bravery and determination inspire others to join the fight<br />
                      against tyranny, leading to a climactic showdown that will determine the<br />
                      future of the galaxy. In this epic struggle, the bonds of friendship and<br />
                      loyalty are tested, and the true strength of the Jedi is revealed.<br />
                      <br />
                      As the final battle approaches, the Jedi must confront the Sith<br />
                      Lord and his minions, using all their skills and knowledge to<br />
                      restore peace to the galaxy. Their actions will have far-reaching consequences,<br />
                      shaping the destiny of the Republic and setting the stage for future conflicts<br />
                      and adventures. In the end, the light of the Jedi will shine brightly, dispelling<br />
                      the darkness that threatens to engulf the galaxy and ensuring that justice prevails.
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