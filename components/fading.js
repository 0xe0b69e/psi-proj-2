"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Direction } from "@/lib/enums";
import { Intersecting } from "@/components/intersecting";

export function Fading ( {
  children,
  delay,
  direction,
  onVisible = () => {},
  onHide = () => {}
} )
{
  const [ isInView, setIsInView ] = useState( false );

  const getClasses = ( inView ) =>
  {
    switch ( direction )
    {
      case Direction.UP:
        return inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16";
      case Direction.DOWN:
        return inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16";
      case Direction.LEFT:
        return inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16";
      case Direction.RIGHT:
        return inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16";
      default:
        return inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16";
    }
  };

  return (
    <Intersecting
      onVisible={() =>
      {
        onVisible();
        setTimeout( () => setIsInView( true ), delay * 1000 ?? 0 );
      }}

      onHide={() =>
      {
        onHide();
        setIsInView( false );
      }}

      className={cn(
        "transition-all duration-500 ease-in-out",
        getClasses( isInView )
      )}
    >
      {children}
    </Intersecting>
  );
}