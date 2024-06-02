import { cn } from "@/lib/utils";

export const Card = ( { children, className, ...props } ) => (
  <div className={cn( "bg-white dark:bg-gray-800 shadow-md rounded-md p-4", className )} {...props}>
    {children}
  </div>
);