"use client";

import { Intersecting } from "@/components/intersecting";
import { useState } from "react";

/**
 *
 * @param data {{label: string, value: number}[]}
 * @returns {JSX.Element}
 */
export default function BarChart ( { data } )
{
  const [ isVisible, setIsVisible ] = useState( false );
  
  data = data.sort( ( a, b ) => a.value - b.value );
  const values = data.map( ( item ) => item.value );
  if ( !values.includes( 0 ) ) values.push( 0 );
  const maxValue = Math.max( ...values );
  
  return (
    <Intersecting
      onVisible={() => setIsVisible( true )}
      onHide={() => setIsVisible( false )}
    >
      <div className="w-full h-full flex flex-col text-xs p-2">
        <div className="flex flex-row">
          <div className="flex flex-col space-y-8 text-black/50 dark:text-white/50 text-end">
            {Array.from( { length: 6 }, ( _, i ) => (
              <div key={i} className="relative">
                <p className="z-20 relative">{( ( maxValue / 5 ) * ( 5 - i ) ).toFixed( 0 )}</p>
                <span
                  className="absolute w-20 bg-black/10 dark:bg-white/10 h-px z-10"
                  style={{
                    top: `50%`,
                    transform: "translate(0.75rem, -50%)",
                    width: "840px",
                  }}
                />
              </div>
            ) )}
          </div>
          <div className="flex flex-row pl-6 w-full h-full items-end justify-between py-[8px]">
            {data.map( ( { value, label }, index ) => (
              <div
                key={index}
                className="w-10 bg-primary flex flex-col items-center justify-end z-20 transition-all duration-1000 ease-in-out"
                style={{
                  height: isVisible ? `${( value / maxValue ) * 100}%` : "0",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <p className="-mb-5">
                  {label}
                </p>
              </div>
            ) )}
          </div>
        </div>
      </div>
    </Intersecting>
  );
}