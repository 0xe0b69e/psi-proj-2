"use client";

import { DarkModeContext } from "@/contexts/dark-mode";
import { useEffect, useState } from "react";

export const DarkModeProvider = ({ children }) => {
  /*
    Ik that it throws
    ```
     ⨯ providers\dark-mode.js (7:48) @ localStorage
     ⨯ ReferenceError: localStorage is not defined
      at DarkModeProvider (./providers/dark-mode.js:14:89)
      digest: "2766037793"
     5 |
     6 | export const DarkModeProvider = ({ children }) => {
  >  7 |   const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("dark-mode") === "true");
       |                                                ^
     8 |
     9 |   const toggleDarkMode = () => {
    10 |     setIsDarkMode(prevMode => !prevMode);
    GET / 500 in 328ms
  ```
  but it works
   */
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect( () =>
  {
    const darkMode = localStorage.getItem("dark-mode") === "true";
    setIsDarkMode(darkMode);
  }, [] );

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
    localStorage.setItem("dark-mode", `${!isDarkMode}`);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};