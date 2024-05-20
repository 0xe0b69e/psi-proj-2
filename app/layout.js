import "@/app/globals.css";

import inter from "@/lib/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
