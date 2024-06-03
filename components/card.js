import { cn } from "@/lib/utils";
import { CircularButton } from "@/components/circular-button";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

export const Card = ( { children, className, ...props } ) => (
  <div className={cn( "bg-white dark:bg-gray-800 shadow-md rounded-md p-4", className )} {...props}>
    {children}
  </div>
);

export const CardHeader = ( { children, className } ) => (
  <div className={cn(
    "h-14 -m-5 mb-5 w-[calc(100%+2.5rem)]",
    "bg-gray-300/50 dark:bg-gray-900/25 border-gray-300 dark:border-gray-900/75",
    "rounded-t-md border-b-[1px]",
    "flex items-center",
    className
  )}>
    {children}
  </div>
)

export const CardFooter = ( { children, className } ) => (
  <div className={cn(
    "h-14 -m-5 w-[calc(100%+2.5rem)] bottom-0",
    "bg-gray-300/50 dark:bg-gray-900/25 border-gray-300 dark:border-gray-900/75",
    "rounded-b-md border-t-[1px]",
    "flex items-center",
    className
  )}>
    {children}
  </div>
)