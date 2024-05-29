import "@/app/globals.css";

import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased overflow-x-hidden")}>{children}</body>
    </html>
  );
}
