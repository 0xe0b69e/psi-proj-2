import "@/app/globals.css";

import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { DarkModeProvider } from "@/providers/dark-mode";

export default function RootLayout ( { children } )
{
  return (
    <DarkModeProvider>
      <html lang="en">
      <body
        className={cn(
          inter.className,
          "antialiased overflow-x-hidden transition-all"
        )}
      >
      {children}
      </body>
      </html>
    </DarkModeProvider>
  );
}
