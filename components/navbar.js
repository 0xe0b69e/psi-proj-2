"use client";

import { BellIcon, Cross1Icon, EnvelopeClosedIcon, HamburgerMenuIcon, MoonIcon, SunIcon, } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import UserAvatar from "@/components/user-avatar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useContext, useState } from "react";
import { DarkModeContext } from "@/contexts/dark-mode";

export default function Navbar ( { toggleSideNav } )
{
  const { isDarkMode, toggleDarkMode } = useContext( DarkModeContext );

  const [ isInputFocused, setIsInputFocused ] = useState( false );
  const [ isInputEmpty, setIsInputEmpty ] = useState( true );

  const onClear = function ( e )
  {
    setIsInputEmpty( true );
    document.getElementById( "search" ).value = "";
  };

  return (
    <nav className={cn(
      "fixed w-full flex justify-between px-4 items-center h-14 shadow-lg z-50",
      "bg-foreground dark:bg-foreground-dark",
    )}>
      <div className="flex flex-row h-full items-center space-x-2">
        <Icon
          className="max-lg:hidden"
          onClick={toggleSideNav}
        >
          <HamburgerMenuIcon />
        </Icon>
        <Link href="/" className="font-bold sm:w-[170px]">
          SB Admin Pro
        </Link>
        <div className={cn(
          "flex flex-row items-center justify-center h-[44px] w-[240px] rounded-lg px-4 transition-all max-lg:hidden",
          "bg-slate-100 dark:bg-slate-800",
          isInputFocused && "ring-funnyRingColor dark:ring-funnyRingColor-dark ring-4",
        )}>
          <input
            className="bg-transparent focus-visible:outline-none w-full h-full text-sm"
            id="search"
            placeholder="Search"
            onFocus={() => setIsInputFocused( true )}
            onBlur={() => setIsInputFocused( false )}
            onChange={( e ) => setIsInputEmpty( e.target.value === "" )}
          />
          {!isInputEmpty &&
            <Cross1Icon
              className="w-5 h-5 cursor-pointer"
              onClick={onClear}
            />
          }
          <FaMagnifyingGlass className="ml-4 w-5 h-5" />
        </div>
      </div>
      <div className="flex flex-row-reverse h-full items-center space-x-4">
        <Icon
          className="lg:hidden"
          onClick={toggleSideNav}
        >
          <HamburgerMenuIcon />
        </Icon>
        <UserAvatar className="ml-4" src="" alt="@me" />
        <Icon className="max-lg:hidden">
          <EnvelopeClosedIcon />
        </Icon>
        <Icon className="max-lg:hidden">
          <BellIcon />
        </Icon>
        <Icon onClick={toggleDarkMode} className="transition-all">
          {isDarkMode ? <MoonIcon className="text-sky-500" /> : <SunIcon className="text-yellow-500" />}
        </Icon>
      </div>
    </nav>
  );
}

function Icon ( { children, className, ...props } )
{
  return (
    <span
      className={cn(
        "w-11 h-11 rounded-full transition-all items-center justify-center inline-flex active:ring-4",
        "hover:bg-gray-300/75 hover:dark:bg-slate-800",
        "cursor-pointer duration-300",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
