"use client";

import { useMemo } from "react";

export default function UserButton() {
  const notifications = useMemo(() => [
    { id: 1, title: "New message from John Doe", date: new Date() },
  ], []);

  return (
    <>
    </>
  );
}