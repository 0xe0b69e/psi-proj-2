import Link from "next/link";

export const Footer = () => (
  <footer className="bottom-0 p-5 px-8 justify-between flex bg-background dark:bg-background-dark border-primary border-t-2 items-center">
    <p>Copyright © Someone Somewhere</p>
    <div className="flex flex-col items-center text-sky-500">
      <Link href="/tos" className="hover:underline">
        <p>ToS</p>
      </Link>
      <Link href="/credits" className="hover:underline">
        <p>Credits</p>
      </Link>
    </div>
  </footer>
)