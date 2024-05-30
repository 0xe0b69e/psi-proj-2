"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Direction } from "@/lib/enums";

export function Fading ( { children, delay, direction } )
{
  const [ isInView, setIsInView ] = useState( false );
  const ref = useRef( null );

  useEffect( () =>
  {
    const observer = new IntersectionObserver(
      ( [ entry ] ) =>
        setTimeout( () => setIsInView( entry.isIntersecting ), entry.isIntersecting && (delay * 1000 ?? 0) ),
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );

    if ( ref.current )
      observer.observe( ref.current );

    return () =>
    {
      if ( ref.current )
        observer.unobserve( ref.current );
    };
  }, [delay] );

  const getClasses = (inView) => {
    switch (direction)
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
  }

  return (
    <span ref={ref} className={cn(
      "transition-all duration-500 ease-in-out",
      getClasses(isInView)
    )}>
      {children}
    </span>
  );
}