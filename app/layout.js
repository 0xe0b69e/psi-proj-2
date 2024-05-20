import "@/app/globals.css";

import inter from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "")}>{children}</body>
    </html>
  );
}
