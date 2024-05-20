"use client";

import { useEffect, useState } from "react";

export default function Navbar()
{
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() =>
  {
    const handleScroll = () =>
    {
      if (window.scrollY > 0)
      {
        setIsOnTop(false);
      }
      else
      {
        setIsOnTop(true);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () =>
    {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <nav
      className="lg:bg-transparent bg-slate-800 transition-colors fixed h-24 flex items-center justify-center w-full text-white z-50"
    >
      <div className="flex flex-row space-x-2">
        <a className="no-underline text-white" href="https://j3rzy.dev/">Funny Text</a>
      </div>
    </nav>
  )
}