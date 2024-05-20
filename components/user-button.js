"use client";

import { useMemo } from "react";

export default function UserButton() {
  const notifications = useMemo(() => [
    // Date from 2 hours ago
    { id: 1, title: "New message from John Doe", date: new Date() },
  ], []);

  return (
    <>
    </>
  );
}