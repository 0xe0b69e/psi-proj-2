import Link from "next/link";

export const Footer = () => (
  <footer className="bottom-0 p-10 justify-between flex bg-background dark:bg-background-dark border-primary border-t-2">
    <p>Copyright © Someone Somewhere</p>
    <Link href="/tos">
      <p>ToS</p>
    </Link>
  </footer>
)