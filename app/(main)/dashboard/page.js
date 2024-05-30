"use client";

import { useEffect } from "react";
import { redirect, RedirectType } from "next/navigation";

export default function Page ()
{
  useEffect( () =>
  {
    redirect( "/dashboard/1", RedirectType.replace );
  }, [] );

  return (
    <>
    </>
  );
}