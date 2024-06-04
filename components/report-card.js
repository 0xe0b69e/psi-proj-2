"use client";

import { cloneElement, useState } from "react";
import { Intersecting } from "@/components/intersecting";
import { Card, CardFooter } from "@/components/card";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSpring, animated } from "react-spring";

/**
 * @param text {string}
 * @param icon {JSX.Element}
 * @param color {string}
 * @param value {number}
 * @param className {string | undefined}
 * @param footerText {string}
 * @param url {string}
 * @returns {JSX.Element}
 */
export default function ReportCard ({
  text,
  icon,
  color,
  value,
  className,
  footerText,
  url
}) {
  const [isVisible, setIsVisible] = useState(false);
  
  const spring = useSpring({
    from: { val: 0 },
    to: { val: isVisible ? value : 0 },
    config: { duration: 1500},
  });
  
  return (
    <Intersecting
      onVisible={() => setIsVisible(true)}
      onHide={() => setIsVisible(false)}
    >
      <Link href={url}>
        <Card
          className={cn("group w-full text-white flex flex-col space-y-4", className)}
          style={{ background: color }}
        >
          <div className="flex justify-between items-center p-3 pb-0">
            <div className="flex flex-col space-y-2">
              <p className="text-white/60">
                {text}
              </p>
              <animated.p className="text-2xl">
                {spring.val.to(val => `$${val.toLocaleString("en-US")}`)}
              </animated.p>
            </div>
            {cloneElement(icon, { className: "w-14 h-14 text-white/60" })}
          </div>
          
          <CardFooter
            className="justify-between px-5 bg-black/10 dark:bg-black/10 group-hover:underline"
          >
            <p className="text-sm">{footerText}</p>
            <ChevronRightIcon />
          </CardFooter>
        </Card>
      </Link>
    </Intersecting>
  );
}