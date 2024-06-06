"use client";

import { Intersecting } from "@/components/intersecting";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import { log } from "next/dist/server/typescript/utils";

/**
 * @param data {{label: string, value: number}[]}
 * @returns {JSX.Element}
 */
export default function BarChart ( { data } )
{
  // A little "hacky" approach, but didn't have any better idea
  const ref = useRef( null );
  const [ width, setWidth ] = useState( 0 );
  
  const [ isVisible, setIsVisible ] = useState( false );
  
  data = data//.sort( ( a, b ) => a.value - b.value );
  const maxValue = Math.max( ...data.map( ( { value } ) => value ) );
  
  useEffect( () =>
  {
    // Timeout to make sure everything fully changed its width
    const resize = () => setTimeout( () => setWidth( ref.current ? ref.current.offsetWidth : 0 ), 200 );
    
    window.addEventListener( "resize", ( e ) => resize() );
    
    resize();
  }, [] );
  
  return (
    <Intersecting
      onVisible={() => setIsVisible( true )}
      onHide={() => setIsVisible( false )}
    >
      <div className="w-full h-full flex flex-col text-xs p-2">
        <div className="flex flex-row">
          <div className="flex flex-col space-y-8 text-black/50 dark:text-white/50 text-end relative">
            {Array.from( { length: 6 }, ( _, i ) => (
              <div key={i} className="relative">
                <p className="z-20 relative">{( ( maxValue / 5 ) * ( 5 - i ) ).toFixed( 0 )}</p>
                <span
                  className="absolute h-px z-10 border-t-[1px] border-black/15 border-dashed"
                  style={{
                    top: `50%`,
                    transform: "translate(0.75rem, -50%)",
                    width: width,
                  }}
                />
              </div>
            ) )}
          </div>
          <div className="flex flex-row pl-6 w-full h-full items-end justify-between py-[7px]" ref={ref}>
            {data.map( ( { value, label }, index ) => (
              <div
                key={index}
                className="w-10 bg-primary flex flex-col items-center justify-end z-20 transition-all duration-1000 ease-in-out"
                style={{
                  height: isVisible ? `${( value / maxValue ) * 100}%` : "0",
                  transitionDelay: `${index * 100}ms`,
                }}
                
                data-tooltip-id="my-tooltip"
                data-tooltip-html={`<strong>${label}</strong><br/>Revenue: $${value.toLocaleString()}`}
              >
                <p className="-mb-5">
                  {label}
                </p>
              </div>
            ) )}
          </div>
          <Tooltip
            id="my-tooltip"
            className="z-30"
          />
        </div>
      </div>
    </Intersecting>
  );
}
