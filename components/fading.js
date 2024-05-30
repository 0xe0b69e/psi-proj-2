import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Fading ( { children } )
{
  const [ isInView, setIsInView ] = useState( false );
  const ref = useRef( null );

  useEffect( () =>
  {
    const observer = new IntersectionObserver(
      ( [ entry ] ) => setIsInView( entry.isIntersecting ),
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
  }, [] );

  return (
    <span ref={ref} className={cn(
      "transition-all duration-1000",
      isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16"
    )}>
      {children}
    </span>
  );
}