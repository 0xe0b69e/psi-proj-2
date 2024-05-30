"use client";

import { useEffect, useRef, useState } from "react";

export function Intersecting ( { children, onVisible = () => {}, onHide = () => {}, ...props } )
{
  const [ state, setState ] = useState( false );
  const ref = useRef( null );

  useEffect( () =>
  {
    const observer = new IntersectionObserver(
      ( [ entry ] ) =>
      {
        if ( entry.isIntersecting )
        {
          setState( true );
          onVisible();
        } else
        {
          setState( false );
          onHide();
        }
      },
      {
        root: null,
        rootMargin: "10px",
        threshold: 0.1,
      }
    );

    if ( ref.current )
      observer.observe( ref.current );

    return () =>
    {
      if ( ref.current )
        observer.unobserve( ref.current );
    };
  }, [onHide, onVisible] );

  return (
    <span ref={ref} {...props}>
      {children}
    </span>
  );
}