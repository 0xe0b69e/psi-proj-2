import { cn } from "@/lib/utils";

export function CircularButton ( { children, className, ...props } )
{
  return (
    <button
      className={cn(
        "w-11 h-11 rounded-full transition-all items-center justify-center inline-flex active:ring-4",
        "hover:bg-gray-300/75 hover:dark:bg-slate-800",
        "cursor-pointer duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}