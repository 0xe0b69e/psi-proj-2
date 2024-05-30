"use client";

import { useSearchParams } from "next/navigation";
import Dashboard0 from "@/app/(main)/dashboard/_components/dashboard-0";

export default function Page ()
{
  const searchParams = useSearchParams();

  const type = Number( searchParams.get( "type" ) ?? 0 );

  return (
    <>
      {( () =>
      {
        switch ( type )
        {
          case 0:
            return <Dashboard0 />;
          default:
            return <Dashboard0 />;
        }
      } )()}
    </>
  );
}